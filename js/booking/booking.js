/* ==========================================================================
   HOTELBOOKING - BOOKING PROCESS LOGIC (booking.js)
   Quy trình Đặt phòng 5 bước & Add-on Services, Áp mã giảm giá, Thanh toán QR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // BẮT BUỘC ĐĂNG NHẬP HOẶC ĐĂNG KÝ MỚI ĐƯỢC ĐẶT PHÒNG
  const currentUser = DB.getCurrentUser();
  if (!currentUser) {
    Toast.warning('Yêu cầu đăng nhập', 'Vui lòng đăng nhập hoặc đăng ký tài khoản để tiến hành đặt phòng.');
    setTimeout(() => {
      const currentUrl = window.location.href;
      window.location.href = getRootPath() + 'pages/auth/login.html?redirect=' + encodeURIComponent(currentUrl);
    }, 1200);
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get('hotelId') || 'htl_01';
  const roomId = urlParams.get('roomId') || 'room_01';
  const paramCheckIn = urlParams.get('checkIn');
  const paramCheckOut = urlParams.get('checkOut');

  const hotel = DB.getHotelById(hotelId);
  const room = DB.getRoomById(roomId);

  if (!hotel || !room) {
    Toast.error('Lỗi', 'Không tìm thấy thông tin phòng hoặc khách sạn để đặt.');
    setTimeout(() => {
      window.location.href = getRootPath() + 'pages/hotels/index.html';
    }, 1500);
    return;
  }

  const isFlashSale = urlParams.get('flashSale') === '1';
  const flashDiscount = parseInt(urlParams.get('discount') || '0', 10);
  const flashSalePrice = parseInt(urlParams.get('salePrice') || '0', 10);
  const flashOrigPrice = parseInt(urlParams.get('origPrice') || '0', 10);

  const effectiveOrigPrice = (isFlashSale && flashOrigPrice > 0) ? flashOrigPrice : room.price;

  const calculatedSalePrice = flashSalePrice > 0 
    ? flashSalePrice 
    : (flashDiscount > 0 ? Math.round(effectiveOrigPrice * (1 - flashDiscount / 100) / 1000) * 1000 : effectiveOrigPrice);

  // Booking State Object
  const state = {
    currentStep: 1,
    hotel,
    room,
    checkIn: paramCheckIn || getTomorrowDate(1),
    checkOut: paramCheckOut || getTomorrowDate(3),
    nights: 2,
    roomCount: 1,
    adults: room.capacityAdults || 2,
    children: 0,
    isFlashSale,
    flashDiscount: isFlashSale ? (flashDiscount || Math.round((1 - calculatedSalePrice / effectiveOrigPrice) * 100)) : 0,
    originalPricePerNight: effectiveOrigPrice,
    pricePerNight: isFlashSale ? calculatedSalePrice : effectiveOrigPrice,
    flashSaleSavings: 0,
    subtotal: 0,
    selectedServices: [],
    servicesTotal: 0,
    discountAmount: 0,
    appliedPromo: null,
    totalAmount: 0,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialRequests: '',
    paymentMethod: 'VietQR (Chuyển khoản)',
    createdBooking: null
  };

  if (currentUser) {
    state.customerName = currentUser.name || '';
    state.customerEmail = currentUser.email || '';
    state.customerPhone = currentUser.phone || '';
  }

  initBookingView(state);
  renderAddonServices(state);
  setupStepNavigation(state);
  setupPromoCode(state);
  setupPaymentMethods(state);
  setupFormAutoFill(state);
});

function getTomorrowDate(daysOffset = 1) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().split('T')[0];
}

function initBookingView(state) {
  const summaryHotelName = document.getElementById('summary-hotel-name');
  const summaryRoomName = document.getElementById('summary-room-name');
  const summaryRoomImg = document.getElementById('summary-room-img');
  const summaryHotelAddress = document.getElementById('summary-hotel-address');

  if (summaryHotelName) summaryHotelName.textContent = state.hotel.name;
  if (summaryRoomName) summaryRoomName.textContent = state.room.name;
  if (summaryRoomImg) summaryRoomImg.src = formatImgPath(state.room.image || state.hotel.image);
  if (summaryHotelAddress) summaryHotelAddress.textContent = `${state.hotel.address}, ${state.hotel.city}`;

  const checkInInput = document.getElementById('booking-checkin');
  const checkOutInput = document.getElementById('booking-checkout');
  const roomCountSelect = document.getElementById('booking-room-count');
  const adultsSelect = document.getElementById('booking-adults');
  const childrenSelect = document.getElementById('booking-children');

  if (checkInInput) {
    checkInInput.min = new Date().toISOString().split('T')[0];
    checkInInput.value = state.checkIn;
    checkInInput.addEventListener('change', () => {
      state.checkIn = checkInInput.value;
      checkOutInput.min = state.checkIn;
      if (new Date(state.checkOut) <= new Date(state.checkIn)) {
        state.checkOut = getNextDate(state.checkIn);
        checkOutInput.value = state.checkOut;
      }
      recalculatePrices(state);
    });
  }

  if (checkOutInput) {
    checkOutInput.min = state.checkIn;
    checkOutInput.value = state.checkOut;
    checkOutInput.addEventListener('change', () => {
      state.checkOut = checkOutInput.value;
      recalculatePrices(state);
    });
  }

  if (roomCountSelect) {
    roomCountSelect.addEventListener('change', (e) => {
      state.roomCount = Number(e.target.value);
      recalculatePrices(state);
    });
  }

  if (adultsSelect) {
    adultsSelect.addEventListener('change', (e) => {
      state.adults = Number(e.target.value);
      recalculatePrices(state);
    });
  }

  if (childrenSelect) {
    childrenSelect.addEventListener('change', (e) => {
      state.children = Number(e.target.value);
    });
  }

  // Hiển thị Flash Sale banner nếu đang áp dụng
  const fsBanner = document.getElementById('booking-flash-sale-banner');
  const fsBadgeWrap = document.getElementById('summary-flash-sale-badge-wrap');
  if (state.isFlashSale) {
    if (fsBanner) {
      fsBanner.style.display = 'block';
      fsBanner.innerHTML = `
        <div class="card p-3" style="background: linear-gradient(135deg, #07172C 0%, #0F2747 100%); border: 1.5px solid #F59E0B; border-radius: 12px; color: #fff; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; box-shadow: 0 4px 16px rgba(239, 68, 68, 0.2);">
          <div class="d-flex align-center gap-2">
            <span class="material-symbols-outlined" style="font-size: 24px; color: #F59E0B;">local_offer</span>
            <div>
              <div style="font-weight: 800; font-size: 0.95rem; color: #FDE047;">Đang áp dụng Ưu đãi Flash Sale Giờ Vàng (-${state.flashDiscount}%)</div>
              <div style="font-size: 0.8rem; color: #E2E8F0;">Bạn đang nhận mức giá độc quyền: <strong style="color: #FDE047;">${formatCurrency(state.pricePerNight)}</strong>/đêm (Giá gốc: <span style="text-decoration: line-through; opacity: 0.75;">${formatCurrency(state.originalPricePerNight)}</span>).</div>
            </div>
          </div>
          <span class="badge" style="background: #EF4444; color: #fff; font-weight: 800; font-size: 0.72rem; padding: 4px 10px; border-radius: 9999px;">TIẾT KIỆM ${formatCurrency(state.originalPricePerNight - state.pricePerNight)}/ĐÊM</span>
        </div>
      `;
    }
    if (fsBadgeWrap) {
      fsBadgeWrap.style.display = 'block';
      fsBadgeWrap.innerHTML = `
        <span class="badge" style="background: #EF4444; color: #fff; font-size: 0.68rem; padding: 2px 7px; border-radius: 4px; font-weight: 800; display: inline-flex; align-items: center;">
          GIẢM ${state.flashDiscount}%
        </span>
      `;
    }
    setTimeout(() => {
      if (window.Toast) {
        Toast.success('Flash Sale', `Bạn đang được áp dụng giá ưu đãi Flash Sale Giờ Vàng (-${state.flashDiscount}%)!`);
      }
    }, 300);
  }

  recalculatePrices(state);
}

function renderAddonServices(state) {
  const container = document.getElementById('booking-addons-container');
  if (!container) return;

  const addonServices = DB.getAddonServices();
  container.innerHTML = addonServices.map(srv => `
    <div class="addon-service-item" data-id="${srv.id}">
      <div class="d-flex align-center gap-3">
        <input type="checkbox" class="addon-service-checkbox" data-id="${srv.id}" style="width: 18px; height: 18px; cursor: pointer;">
        <div class="addon-service-icon">
          <span class="material-symbols-outlined">${srv.icon || 'add_circle'}</span>
        </div>
        <div>
          <div style="font-weight: 800; color: var(--dark); font-size: 0.95rem;">${srv.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${srv.description}</div>
        </div>
      </div>
      <div class="text-right">
        <div style="font-weight: 800; color: var(--primary); font-size: 1rem;">+${formatCurrency(srv.price)}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">${srv.perNight ? '/đêm' : (srv.perGuest ? '/khách' : '/lần')}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.addon-service-item').forEach(item => {
    const cb = item.querySelector('.addon-service-checkbox');
    item.addEventListener('click', (e) => {
      if (e.target !== cb) {
        cb.checked = !cb.checked;
      }
      item.classList.toggle('selected', cb.checked);
      updateSelectedAddons(state);
    });
  });
}

function updateSelectedAddons(state) {
  const checkboxes = document.querySelectorAll('.addon-service-checkbox:checked');
  const allServices = DB.getAddonServices();
  state.selectedServices = [];
  let srvTotal = 0;

  checkboxes.forEach(cb => {
    const srv = allServices.find(s => s.id === cb.dataset.id);
    if (srv) {
      let cost = srv.price;
      if (srv.perNight) cost *= state.nights;
      if (srv.perGuest) cost *= state.adults;
      srvTotal += cost;
      state.selectedServices.push({
        id: srv.id,
        name: srv.name,
        price: cost
      });
    }
  });

  state.servicesTotal = srvTotal;
  recalculatePrices(state);
}

function getNextDate(dateStr) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

function recalculatePrices(state) {
  state.nights = calculateNights(state.checkIn, state.checkOut);
  const originalSubtotal = state.nights * (state.originalPricePerNight || state.pricePerNight) * state.roomCount;
  state.subtotal = state.nights * state.pricePerNight * state.roomCount;
  const flashSaleSavings = Math.max(0, originalSubtotal - state.subtotal);
  state.flashSaleSavings = flashSaleSavings;

  // Tính lại các addons phụ thuộc vào số đêm
  let srvTotal = 0;
  const allServices = DB.getAddonServices();
  state.selectedServices.forEach(item => {
    const srv = allServices.find(s => s.id === item.id);
    if (srv) {
      let cost = srv.price;
      if (srv.perNight) cost *= state.nights;
      if (srv.perGuest) cost *= state.adults;
      srvTotal += cost;
      item.price = cost;
    }
  });
  state.servicesTotal = srvTotal;

  const baseTotal = state.subtotal + state.servicesTotal;

  if (state.appliedPromo) {
    const promo = state.appliedPromo;
    if (baseTotal >= (promo.minSpend || 0)) {
      if (promo.discountPercent > 0) {
        let discount = (baseTotal * promo.discountPercent) / 100;
        if (promo.discountMax && discount > promo.discountMax) discount = promo.discountMax;
        state.discountAmount = discount;
      } else if (promo.discountAmount > 0) {
        state.discountAmount = Math.min(baseTotal, promo.discountAmount);
      }
    } else {
      state.discountAmount = 0;
      Toast.warning('Voucher', `Mã giảm giá yêu cầu đơn tối thiểu ${formatCurrency(promo.minSpend)}.`);
    }
  } else {
    state.discountAmount = 0;
  }

  state.totalAmount = Math.max(0, baseTotal - state.discountAmount);

  const nightsLabel = document.getElementById('summary-nights-label');
  const subtotalLabel = document.getElementById('summary-subtotal');
  const flashSaleRow = document.getElementById('summary-flash-sale-row');
  const flashSaleLabel = document.getElementById('summary-flash-sale-amount');
  const servicesRow = document.getElementById('summary-services-row');
  const servicesLabel = document.getElementById('summary-services-amount');
  const discountRow = document.getElementById('summary-discount-row');
  const discountLabel = document.getElementById('summary-discount-amount');
  const totalLabel = document.getElementById('summary-total-amount');

  if (nightsLabel) nightsLabel.textContent = `${state.nights} đêm x ${state.roomCount} phòng:`;
  if (subtotalLabel) {
    if (state.isFlashSale && flashSaleSavings > 0) {
      subtotalLabel.innerHTML = `
        <span style="color: #DC2626; font-weight: 800;">${formatCurrency(state.subtotal)}</span> 
        <span style="font-size: 0.78rem; text-decoration: line-through; color: #94A3B8; margin-left: 4px;">${formatCurrency(originalSubtotal)}</span>
      `;
    } else {
      subtotalLabel.textContent = formatCurrency(state.subtotal);
    }
  }

  if (flashSaleRow && flashSaleLabel) {
    if (state.isFlashSale && flashSaleSavings > 0) {
      flashSaleRow.style.display = 'flex';
      flashSaleLabel.textContent = `-${formatCurrency(flashSaleSavings)}`;
    } else {
      flashSaleRow.style.display = 'none';
    }
  }
  
  if (servicesRow && servicesLabel) {
    if (state.servicesTotal > 0) {
      servicesRow.style.display = 'flex';
      servicesLabel.textContent = `+${formatCurrency(state.servicesTotal)}`;
    } else {
      servicesRow.style.display = 'none';
    }
  }

  if (discountRow && discountLabel) {
    if (state.discountAmount > 0) {
      discountRow.style.display = 'flex';
      discountLabel.textContent = `-${formatCurrency(state.discountAmount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (totalLabel) totalLabel.textContent = formatCurrency(state.totalAmount);
  updateAvailabilityAlert(state);
}

function updateAvailabilityAlert(state) {
  const alertBox = document.getElementById('booking-availability-alert');
  const btnNext = document.getElementById('btn-next-step-1');
  if (!alertBox) return;

  const avail = DB.checkRoomAvailability(state.room.id, state.checkIn, state.checkOut, state.roomCount);
  if (avail.isAvailable) {
    alertBox.innerHTML = `
      <div style="background: #ecfdf5; border: 1.5px solid #a7f3d0; color: #065f46; padding: 12px 18px; border-radius: 12px; font-size: 0.88rem; display: flex; align-items: center; gap: 10px; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.08);">
        <span class="material-symbols-outlined" style="color: #059669; font-size: 22px; flex-shrink: 0;">verified</span>
        <div>
          <span style="font-weight: 800; color: #047857;">Còn phòng sẵn sàng:</span> Hiện còn <strong>${avail.availableCount} phòng trống</strong> từ ngày <strong>${formatDate(state.checkIn)}</strong> đến <strong>${formatDate(state.checkOut)}</strong>.
        </div>
      </div>
    `;
    if (btnNext) {
      btnNext.disabled = false;
      btnNext.classList.remove('disabled');
      btnNext.innerHTML = `Tiếp tục: Thông tin khách hàng <span class="material-symbols-outlined icon-sm">arrow_forward</span>`;
    }
  } else {
    alertBox.innerHTML = `
      <div style="background: #fef2f2; border: 1.5px solid #fecaca; color: #991b1b; padding: 14px 18px; border-radius: 12px; font-size: 0.88rem; display: flex; align-items: flex-start; gap: 12px; box-shadow: 0 2px 10px rgba(239, 68, 68, 0.12);">
        <span class="material-symbols-outlined" style="color: #dc2626; font-size: 26px; flex-shrink: 0;">error</span>
        <div>
          <div style="font-weight: 800; font-size: 0.95rem; margin-bottom: 3px; color: #b91c1c;">⚠️ RẤT TIẾC, PHÒNG ĐÃ HẾT TRONG KHOẢNG NGÀY BẠN CHỌN!</div>
          <div style="line-height: 1.5;">Loại phòng này chỉ còn <strong>${avail.availableCount} phòng</strong> trống từ <strong>${formatDate(state.checkIn)}</strong> đến <strong>${formatDate(state.checkOut)}</strong> (bạn đang chọn ${state.roomCount} phòng). Vui lòng chọn ngày khác hoặc giảm số lượng phòng để tiếp tục.</div>
        </div>
      </div>
    `;
    if (btnNext) {
      btnNext.disabled = true;
      btnNext.classList.add('disabled');
      btnNext.innerHTML = `<span class="material-symbols-outlined icon-sm">highlight_off</span> Hết phòng trong khoảng ngày này`;
    }
  }
}

function setupPromoCode(state) {
  const promoInput = document.getElementById('input-promo-code');
  const btnApplyPromo = document.getElementById('btn-apply-promo');
  const promoMessage = document.getElementById('promo-message');

  if (btnApplyPromo && promoInput) {
    btnApplyPromo.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) {
        Toast.warning('Thông báo', 'Vui lòng nhập mã giảm giá.');
        return;
      }

      const promo = DB.getPromotionByCode(code);
      if (!promo) {
        Toast.error('Thất bại', 'Mã khuyến mãi không hợp lệ hoặc đã hết hạn.');
        if (promoMessage) {
          promoMessage.innerHTML = `<span class="text-danger d-flex align-center gap-1"><span class="material-symbols-outlined icon-sm">cancel</span> Mã không hợp lệ hoặc đã hết hạn</span>`;
        }
        return;
      }

      const baseTotal = state.subtotal + state.servicesTotal;
      if (baseTotal < (promo.minSpend || 0)) {
        Toast.warning('Chưa đủ điều kiện', `Đơn phòng tối thiểu ${formatCurrency(promo.minSpend)} để áp dụng mã này.`);
        return;
      }

      state.appliedPromo = promo;
      recalculatePrices(state);

      Toast.success('Thành công', `Đã áp dụng mã giảm giá ${promo.code}!`);
      if (promoMessage) {
        promoMessage.innerHTML = `<span class="text-success d-flex align-center gap-1"><span class="material-symbols-outlined icon-sm">check_circle</span> Đã áp dụng mã <strong>${promo.code}</strong> (${promo.title})</span>`;
      }
      promoInput.disabled = true;
      btnApplyPromo.textContent = 'Đã áp dụng';
      btnApplyPromo.disabled = true;
    });
  }
}

function setupPaymentMethods(state) {
  const paymentRadios = document.querySelectorAll('input[name="payment_method"]');
  const qrSection = document.getElementById('qr-payment-section');
  const qrAmount = document.getElementById('qr-amount-display');

  paymentRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.paymentMethod = e.target.value;
      if (qrSection) {
        if (e.target.value.includes('VietQR') || e.target.value.includes('MoMo')) {
          qrSection.style.display = 'block';
          if (qrAmount) qrAmount.textContent = formatCurrency(state.totalAmount);
        } else {
          qrSection.style.display = 'none';
        }
      }
    });
  });
}

function setupFormAutoFill(state) {
  const nameInput = document.getElementById('customer-name');
  const emailInput = document.getElementById('customer-email');
  const phoneInput = document.getElementById('customer-phone');
  const noteInput = document.getElementById('customer-note');

  if (nameInput) nameInput.value = state.customerName;
  if (emailInput) emailInput.value = state.customerEmail;
  if (phoneInput) phoneInput.value = state.customerPhone;

  if (nameInput) nameInput.addEventListener('input', (e) => state.customerName = e.target.value);
  if (emailInput) emailInput.addEventListener('input', (e) => state.customerEmail = e.target.value);
  if (phoneInput) phoneInput.addEventListener('input', (e) => state.customerPhone = e.target.value);
  if (noteInput) noteInput.addEventListener('input', (e) => state.specialRequests = e.target.value);
}

function setupStepNavigation(state) {
  const btnNextStep1 = document.getElementById('btn-next-step-1');
  const btnBackStep2 = document.getElementById('btn-back-step-2');
  const btnNextStep2 = document.getElementById('btn-next-step-2');
  const btnBackStep3 = document.getElementById('btn-back-step-3');
  const btnSubmitBooking = document.getElementById('btn-submit-booking') || document.getElementById('btn-confirm-booking');

  if (btnNextStep1) {
    btnNextStep1.addEventListener('click', () => {
      // Kiểm tra tình trạng phòng thực tế
      const avail = DB.checkRoomAvailability(state.room.id, state.checkIn, state.checkOut, state.roomCount);
      if (!avail.isAvailable) {
        Toast.error('Hết phòng', `Loại phòng này hiện chỉ còn ${avail.availableCount} phòng trống trong khoảng thời gian đã chọn.`);
        return;
      }
      goToStep(2);
    });
  }

  if (btnBackStep2) {
    btnBackStep2.addEventListener('click', () => {
      goToStep(1);
    });
  }

  if (btnNextStep2) {
    btnNextStep2.addEventListener('click', () => {
      const name = document.getElementById('customer-name')?.value.trim();
      const email = document.getElementById('customer-email')?.value.trim();
      const phone = document.getElementById('customer-phone')?.value.trim();

      if (!name || !email || !phone) {
        Toast.warning('Thiếu thông tin', 'Vui lòng điền họ tên, email và số điện thoại người đặt.');
        return;
      }

      state.customerName = name;
      state.customerEmail = email;
      state.customerPhone = phone;

      const qrAmount = document.getElementById('qr-amount-display');
      if (qrAmount) qrAmount.textContent = formatCurrency(state.totalAmount);

      goToStep(3);
    });
  }

  if (btnBackStep3) {
    btnBackStep3.addEventListener('click', () => {
      goToStep(2);
    });
  }

  if (btnSubmitBooking) {
    btnSubmitBooking.addEventListener('click', () => {
      processFinalBooking(state);
    });
  }
}

function goToStep(stepNum) {
  document.querySelectorAll('.step-item').forEach((el, idx) => {
    if (idx + 1 === stepNum) {
      el.classList.add('active');
      el.classList.remove('completed');
    } else if (idx + 1 < stepNum) {
      el.classList.remove('active');
      el.classList.add('completed');
    } else {
      el.classList.remove('active', 'completed');
    }
  });

  document.querySelectorAll('.booking-step-panel').forEach(panel => {
    panel.style.display = 'none';
  });

  const targetPanel = document.getElementById(`step-panel-${stepNum}`);
  if (targetPanel) {
    targetPanel.style.display = 'block';
  }

  window.scrollTo({ top: 120, behavior: 'smooth' });
}

function processFinalBooking(state) {
  const currentUser = DB.getCurrentUser();

  const newBooking = DB.createBooking({
    userId: currentUser ? currentUser.id : null,
    customerName: state.customerName,
    customerEmail: state.customerEmail,
    customerPhone: state.customerPhone,
    hotelId: state.hotel.id,
    hotelName: state.hotel.name,
    roomId: state.room.id,
    roomName: state.room.name,
    isFlashSale: !!state.isFlashSale,
    checkIn: state.checkIn,
    checkOut: state.checkOut,
    nights: state.nights,
    roomCount: state.roomCount,
    adults: state.adults,
    children: state.children,
    pricePerNight: state.pricePerNight,
    subtotal: state.subtotal,
    services: state.selectedServices,
    servicesTotal: state.servicesTotal,
    promoCode: state.appliedPromo ? state.appliedPromo.code : '',
    discountAmount: state.discountAmount,
    totalAmount: state.totalAmount,
    paymentMethod: state.paymentMethod,
    specialRequests: state.specialRequests
  });

  state.createdBooking = newBooking;
  renderBookingSuccess(state, newBooking);
}

function renderBookingSuccess(state, booking) {
  goToStep(4);

  const successCode = document.getElementById('success-booking-code');
  const successHotel = document.getElementById('success-hotel-name');
  const successRoom = document.getElementById('success-room-name');
  const successDates = document.getElementById('success-dates');
  const successTotal = document.getElementById('success-total-price');
  const successPayment = document.getElementById('success-payment-method');
  const btnViewHistory = document.getElementById('btn-success-view-history');
  const btnPrintInvoice = document.getElementById('btn-success-print-invoice');
  const root = getRootPath();

  if (successCode) successCode.textContent = booking.code;
  if (successHotel) successHotel.textContent = booking.hotelName;
  if (successRoom) successRoom.textContent = `${booking.roomName} (${booking.roomCount} phòng)`;
  if (successDates) successDates.textContent = `${formatDate(booking.checkIn)} → ${formatDate(booking.checkOut)} (${booking.nights} đêm)`;
  if (successTotal) successTotal.textContent = formatCurrency(booking.totalAmount);
  if (successPayment) successPayment.textContent = booking.paymentMethod;

  if (btnViewHistory) {
    btnViewHistory.href = `${root}pages/profile/index.html?tab=bookings`;
  }

  if (btnPrintInvoice) {
    btnPrintInvoice.addEventListener('click', () => {
      if (typeof printBookingTicket === 'function') {
        printBookingTicket(booking);
      } else {
        window.print();
      }
    });
  }

  Toast.success('Đặt phòng thành công', `Mã đơn hàng của bạn là ${booking.code}. Chúc bạn có kỳ nghỉ tuyệt vời!`, 5000);
}

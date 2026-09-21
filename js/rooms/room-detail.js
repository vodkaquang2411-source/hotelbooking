/* ==========================================================================
   HOTELBOOKING - ROOM DETAIL SCRIPT (room-detail.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const roomId = urlParams.get('id');
  const hotelId = urlParams.get('hotelId');
  const paramCheckIn = urlParams.get('checkIn');
  const paramCheckOut = urlParams.get('checkOut');
  const room = DB.getRoomById(roomId);
  const hotel = hotelId ? DB.getHotelById(hotelId) : (room ? DB.getHotelById(room.hotelId) : null);

  if (!room || !hotel) {
    Toast.error('Lỗi', 'Không tìm thấy thông tin loại phòng.');
    setTimeout(() => {
      window.location.href = getRootPath() + 'pages/hotels/index.html';
    }, 1500);
    return;
  }

  const isFlashSale = urlParams.get('flashSale') === '1';
  const flashDiscount = parseInt(urlParams.get('discount') || '40', 10);
  const flashSalePrice = parseInt(urlParams.get('salePrice'), 10) || Math.round(room.price * (1 - flashDiscount / 100) / 1000) * 1000;

  document.title = `${room.name} - ${hotel.name}`;

  renderRoomDetails(room, hotel, isFlashSale, flashDiscount, flashSalePrice);
  setupBookingWidget(room, hotel, paramCheckIn, paramCheckOut, isFlashSale, flashDiscount, flashSalePrice);
});

function renderRoomDetails(room, hotel, isFlashSale = false, flashDiscount = 0, flashSalePrice = 0) {
  const titleEl = document.getElementById('room-title');
  const hotelLinkEl = document.getElementById('room-hotel-link');
  const sizeEl = document.getElementById('room-size');
  const bedEl = document.getElementById('room-bed');
  const adultsEl = document.getElementById('room-adults');
  const childrenEl = document.getElementById('room-children');
  const viewEl = document.getElementById('room-view');
  const priceEl = document.getElementById('room-price');
  const descEl = document.getElementById('room-description');
  const amenitiesContainer = document.getElementById('room-amenities-container');
  const galleryContainer = document.getElementById('room-gallery-container');
  const root = getRootPath();

  if (titleEl) titleEl.textContent = room.name;
  if (hotelLinkEl) {
    hotelLinkEl.href = `${root}pages/hotels/detail.html?id=${hotel.id}`;
    hotelLinkEl.innerHTML = `<span class="material-symbols-outlined text-primary icon-sm">hotel</span> ${hotel.name} - ${hotel.city}`;
  }
  if (sizeEl) sizeEl.textContent = `${room.size} m²`;
  if (bedEl) bedEl.textContent = room.bed;
  if (adultsEl) adultsEl.textContent = `${room.capacityAdults} Người lớn`;
  if (childrenEl) childrenEl.textContent = `${room.capacityChildren || 0} Trẻ em`;
  if (viewEl) viewEl.textContent = room.view || 'Ban công thoáng mát';
  if (priceEl) {
    if (isFlashSale) {
      priceEl.innerHTML = `
        <div class="d-flex align-baseline gap-2 flex-wrap">
          <span style="color: #DC2626; font-size: 1.55rem; font-weight: 900;">${formatCurrency(flashSalePrice)}</span>
          <span style="font-size: 0.95rem; text-decoration: line-through; color: #94A3B8;">${formatCurrency(room.price)}</span>
          <span class="badge" style="background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%); color: #fff; font-size: 0.72rem; padding: 3px 9px; border-radius: 9999px; font-weight: 800; display: inline-flex; align-items: center; gap: 2px;">
            <span class="material-symbols-outlined" style="font-size: 12px;">bolt</span> FLASH SALE -${flashDiscount}%
          </span>
        </div>
      `;
    } else {
      priceEl.textContent = formatCurrency(room.price);
    }
  }
  if (descEl) descEl.textContent = room.description;

  if (galleryContainer) {
    const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image || hotel.image];
    galleryContainer.innerHTML = images.map((img, idx) => `
      <div style="height: 360px; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 16px; box-shadow: var(--shadow-md);">
        <img src="${formatImgPath(img)}" alt="${room.name} - ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    `).join('');
  }

  if (amenitiesContainer) {
    amenitiesContainer.innerHTML = (room.amenities || []).map(amenity => `
      <div class="d-flex align-center gap-2" style="padding: 12px 16px; background: var(--bg-card-alt); border-radius: var(--radius-md); font-size: 0.9rem; font-weight: 700; border: 1px solid var(--border-light);">
        <span class="material-symbols-outlined text-primary" style="font-size: 20px;">check_circle</span>
        <span>${amenity}</span>
      </div>
    `).join('');
  }
}

function setupBookingWidget(room, hotel, initCheckIn, initCheckOut, isFlashSale = false, flashDiscount = 0, flashSalePrice = 0) {
  const checkInInput = document.getElementById('widget-checkin');
  const checkOutInput = document.getElementById('widget-checkout');
  const nightsLabel = document.getElementById('widget-nights-count');
  const totalAmountLabel = document.getElementById('widget-total-amount');
  const btnBookNow = document.getElementById('btn-widget-book');
  const root = getRootPath();

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextDay = new Date(tomorrow);
  nextDay.setDate(nextDay.getDate() + 2);

  const formatDateValue = (d) => d.toISOString().split('T')[0];

  if (checkInInput) {
    checkInInput.min = formatDateValue(today);
    checkInInput.value = initCheckIn || formatDateValue(tomorrow);
  }
  if (checkOutInput) {
    checkOutInput.min = checkInInput ? checkInInput.value : formatDateValue(tomorrow);
    checkOutInput.value = initCheckOut || formatDateValue(nextDay);
  }

  function updateCalculation() {
    if (!checkInInput || !checkOutInput) return;
    const nights = calculateNights(checkInInput.value, checkOutInput.value);
    if (nightsLabel) nightsLabel.textContent = `${nights} đêm`;
    const pricePerNight = isFlashSale ? flashSalePrice : (room.price || 0);
    const total = nights * pricePerNight;
    if (totalAmountLabel) {
      if (isFlashSale) {
        totalAmountLabel.innerHTML = `
          <span style="color: #DC2626; font-weight: 900;">${formatCurrency(total)}</span>
          <span style="font-size: 0.8rem; color: #94A3B8; text-decoration: line-through; margin-left: 6px;">${formatCurrency(nights * room.price)}</span>
        `;
      } else {
        totalAmountLabel.textContent = formatCurrency(total);
      }
    }

    const avail = DB.checkRoomAvailability(room.id, checkInInput.value, checkOutInput.value, 1);
    if (!avail.isAvailable) {
      if (btnBookNow) {
        btnBookNow.classList.add('disabled');
        btnBookNow.disabled = true;
        btnBookNow.innerHTML = `<span class="material-symbols-outlined">highlight_off</span> Hết phòng ngày này`;
      }
    } else {
      if (btnBookNow) {
        btnBookNow.classList.remove('disabled');
        btnBookNow.disabled = false;
        btnBookNow.innerHTML = `<span class="material-symbols-outlined">lock</span> ${isFlashSale ? '⚡ Săn deal ngay' : 'Đặt phòng ngay'}`;
      }
    }
  }

  if (checkInInput) checkInInput.addEventListener('change', () => {
    checkOutInput.min = checkInInput.value;
    if (new Date(checkOutInput.value) <= new Date(checkInInput.value)) {
      const next = new Date(checkInInput.value);
      next.setDate(next.getDate() + 1);
      checkOutInput.value = formatDateValue(next);
    }
    updateCalculation();
  });

  if (checkOutInput) checkOutInput.addEventListener('change', updateCalculation);

  updateCalculation();

  if (btnBookNow) {
    btnBookNow.addEventListener('click', () => {
      const cIn = checkInInput ? checkInInput.value : '';
      const cOut = checkOutInput ? checkOutInput.value : '';
      const avail = DB.checkRoomAvailability(room.id, cIn, cOut, 1);
      if (!avail.isAvailable) {
        Toast.warning('Phòng này đã kín lịch trong khoảng ngày bạn chọn. Vui lòng chọn ngày khác!');
        return;
      }
      const flashParams = isFlashSale ? `&flashSale=1&discount=${flashDiscount}&salePrice=${flashSalePrice}` : '';
      window.location.href = `${root}pages/booking/index.html?hotelId=${hotel.id}&roomId=${room.id}&checkIn=${cIn}&checkOut=${cOut}${flashParams}`;
    });
  }
}

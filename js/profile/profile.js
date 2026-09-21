/* ==========================================================================
   HOTELBOOKING - USER PROFILE, FAVORITES & BOOKING HISTORY (profile.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (!Auth.requireAuth()) return;

  const currentUser = DB.getCurrentUser();
  const urlParams = new URLSearchParams(window.location.search);
  const activeTabParam = urlParams.get('tab') || 'profile';

  initProfileTabs(activeTabParam, currentUser);
  renderUserProfileInfo(currentUser);
  renderUserFavorites(currentUser);
  renderUserBookings(currentUser);
  renderUserReviews(currentUser);
  setupProfileForms(currentUser);
  setupReviewModal();
  setupCancelBookingModal();
});

function initProfileTabs(defaultTab, user) {
  const tabButtons = document.querySelectorAll('.profile-nav-btn');
  const tabPanes = document.querySelectorAll('.profile-tab-pane');

  function switchTab(tabId) {
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabPanes.forEach(pane => {
      pane.style.display = pane.id === `tab-${tabId}` ? 'block' : 'none';
    });

    if (tabId === 'favorites') {
      renderUserFavorites(DB.getCurrentUser());
    } else if (tabId === 'bookings') {
      renderUserBookings(DB.getCurrentUser());
    } else if (tabId === 'reviews') {
      renderUserReviews(DB.getCurrentUser());
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      switchTab(tabId);
      window.history.replaceState(null, null, `?tab=${tabId}`);
    });
  });

  switchTab(defaultTab);
}

function renderUserProfileInfo(user) {
  const nameDisplay = document.getElementById('profile-display-name');
  const emailDisplay = document.getElementById('profile-display-email');
  const avatarContainer = document.getElementById('profile-avatar-container');
  const bookingCountDisplay = document.getElementById('profile-display-booking-count');

  if (nameDisplay) nameDisplay.textContent = user.name;
  if (emailDisplay) emailDisplay.textContent = user.email;
  
  if (avatarContainer) {
    avatarContainer.innerHTML = typeof getInitialsAvatar === 'function'
      ? getInitialsAvatar(user.name, 'avatar-lg')
      : `<div class="user-avatar" style="width: 72px; height: 72px; font-size: 1.8rem; background: var(--primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">${(user.name || 'U')[0]}</div>`;
  }

  if (bookingCountDisplay) bookingCountDisplay.textContent = `${user.bookingCount || 0} lượt đặt phòng`;

  const inputName = document.getElementById('input-profile-name');
  const inputEmail = document.getElementById('input-profile-email');
  const inputPhone = document.getElementById('input-profile-phone');
  const inputAddress = document.getElementById('input-profile-address');

  if (inputName) inputName.value = user.name || '';
  if (inputEmail) inputEmail.value = user.email || '';
  if (inputPhone) inputPhone.value = user.phone || '';
  if (inputAddress) inputAddress.value = user.address || '';
}

function renderUserFavorites(user) {
  const grid = document.getElementById('user-favorites-grid');
  if (!grid) return;

  const favIds = DB.getFavorites(user.id);
  const hotels = favIds.map(id => DB.getHotelById(id)).filter(Boolean);

  if (hotels.length === 0) {
    grid.innerHTML = `
      <div class="card text-center p-5" style="grid-column: 1 / -1; padding: 50px 20px;">
        <span class="material-symbols-outlined icon-xl text-danger" style="margin-bottom: 14px;">favorite_border</span>
        <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--dark); margin-bottom: 6px;">Chưa có khách sạn yêu thích nào</h4>
        <p class="text-muted" style="margin-bottom: 20px;">Nhấn vào biểu tượng trái tim ở các khách sạn để lưu lại danh sách nghỉ dưỡng mơ ước của bạn!</p>
        <a href="${getRootPath()}pages/hotels/index.html" class="btn btn-primary">Khám phá khách sạn ngay</a>
      </div>
    `;
    return;
  }

  const root = getRootPath();
  grid.innerHTML = hotels.map(h => `
    <div class="card card-hover hotel-card" style="position: relative;">
      <button class="btn-favorite-heart active" data-id="${h.id}" title="Xóa khỏi yêu thích">
        <span class="material-symbols-outlined">favorite</span>
      </button>
      <div class="hotel-card-img-wrapper" style="height: 180px;">
        <img src="${formatImgPath(h.image)}" alt="${h.name}" class="hotel-card-img">
        <div class="hotel-card-badges">
          <span class="badge badge-dark">${h.city}</span>
        </div>
        <div class="hotel-card-rating-badge">
          <span class="material-symbols-outlined icon-sm icon-fill">star</span> ${h.rating}
        </div>
      </div>
      <div class="hotel-card-body" style="padding: 18px;">
        <h3 class="hotel-card-title" style="font-size: 1.05rem;"><a href="${root}pages/hotels/detail.html?id=${h.id}">${h.name}</a></h3>
        <div class="d-flex justify-between align-center" style="margin-top: 14px; border-top: 1px solid var(--border-light); padding-top: 12px;">
          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted);">Giá chỉ từ</div>
            <div style="font-weight: 800; color: var(--primary); font-size: 1.1rem;">${formatCurrency(h.priceMin)}</div>
          </div>
          <a href="${root}pages/hotels/detail.html?id=${h.id}" class="btn btn-primary btn-sm">Xem phòng</a>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.btn-favorite-heart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const hotelId = btn.dataset.id;
      DB.toggleFavorite(user.id, hotelId);
      Toast.info('Yêu thích', 'Đã xóa khách sạn khỏi danh sách yêu thích.');
      renderUserFavorites(user);
    });
  });
}

function renderUserBookings(user) {
  const bookingsContainer = document.getElementById('user-bookings-list');
  if (!bookingsContainer) return;

  const bookings = DB.getBookingsByUserId(user.id);

  if (bookings.length === 0) {
    bookingsContainer.innerHTML = `
      <div class="card text-center p-5" style="padding: 50px 20px;">
        <span class="material-symbols-outlined icon-xl text-muted" style="margin-bottom: 14px;">hotel</span>
        <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--dark); margin-bottom: 6px;">Chưa có đơn đặt phòng nào</h4>
        <p class="text-muted" style="margin-bottom: 20px;">Hãy khám phá các khách sạn & resort đẳng cấp và đặt phòng ngay hôm nay!</p>
        <a href="${getRootPath()}pages/hotels/index.html" class="btn btn-primary">Tìm khách sạn ngay</a>
      </div>
    `;
    return;
  }

  bookingsContainer.innerHTML = bookings.map(b => {
    const badge = getBookingStatusBadge(b.status);
    const canReview = (b.status === 'Đã trả phòng' || b.status === 'completed') && !b.isReviewed;
    const canCancel = b.status === 'Chờ xác nhận' || b.status === 'Đã xác nhận';

    return `
      <div class="card p-4" style="padding: 24px; margin-bottom: 20px; border-left: 4px solid var(--primary);">
        <div class="d-flex justify-between align-center flex-wrap gap-2" style="margin-bottom: 16px; border-bottom: 1px solid var(--border-light); padding-bottom: 12px;">
          <div>
            <span style="font-size: 0.8125rem; color: var(--text-muted);">Mã đơn đặt:</span>
            <strong style="color: var(--primary); font-size: 1.1rem; margin-left: 6px;">${b.code}</strong>
            <span style="font-size: 0.8125rem; color: var(--text-muted); margin-left: 12px;">• Đặt lúc: ${formatDateTime(b.createdAt)}</span>
          </div>
          <span class="status-badge ${badge.className}">${badge.label}</span>
        </div>

        <div class="d-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div>
            <div style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 4px;">Khách sạn & Phòng</div>
            <div style="font-weight: 800; color: var(--dark);">${b.hotelName}</div>
            <div style="font-size: 0.875rem; color: var(--text-main); font-weight: 600;">${b.roomName} (${b.roomCount} phòng)</div>
          </div>
          <div>
            <div style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 4px;">Thời gian lưu trú</div>
            <div style="font-weight: 700; color: var(--dark); display: flex; align-items: center; gap: 4px;">
              <span class="material-symbols-outlined text-primary icon-sm">event_available</span> ${formatDate(b.checkIn)} → ${formatDate(b.checkOut)}
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">${b.nights} đêm • ${b.adults} người lớn</div>
          </div>
          <div>
            <div style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 4px;">Tổng thanh toán</div>
            <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">${formatCurrency(b.totalAmount)}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${b.paymentMethod}</div>
          </div>
        </div>

        <div class="d-flex justify-end gap-2 flex-wrap" style="border-top: 1px dashed var(--border-color); padding-top: 14px;">
          ${canCancel ? `
            <button class="btn btn-outline-danger btn-sm btn-open-cancel" data-id="${b.id}" data-code="${b.code}">
              <span class="material-symbols-outlined icon-sm">cancel</span> Hủy phòng
            </button>
          ` : ''}

          ${canReview ? `
            <button class="btn btn-accent btn-sm btn-open-review" data-booking-id="${b.id}" data-hotel-id="${b.hotelId}" data-hotel-name="${b.hotelName}">
              <span class="material-symbols-outlined icon-sm icon-fill">grade</span> Viết đánh giá
            </button>
          ` : ''}

          ${b.isReviewed ? `
            <span class="badge badge-success" style="align-self: center;"><span class="material-symbols-outlined icon-sm">check_circle</span> Đã đánh giá</span>
          ` : ''}

          <button class="btn btn-outline btn-sm btn-view-invoice" data-id="${b.id}">
            <span class="material-symbols-outlined icon-sm">receipt_long</span> Xem chi tiết
          </button>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.btn-view-invoice').forEach(btn => {
    btn.addEventListener('click', () => {
      const b = DB.getBookingById(btn.dataset.id);
      if (b) showInvoiceModal(b);
    });
  });
}

function renderUserReviews(user) {
  const reviewsContainer = document.getElementById('user-reviews-list');
  if (!reviewsContainer) return;

  const reviews = DB.getReviews(r => r.userId === user.id);

  if (reviews.length === 0) {
    reviewsContainer.innerHTML = `
      <div class="card text-center p-5" style="padding: 50px 20px;">
        <span class="material-symbols-outlined icon-xl text-muted" style="margin-bottom: 14px;">rate_review</span>
        <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--dark); margin-bottom: 6px;">Bạn chưa có đánh giá nào</h4>
        <p class="text-muted">Sau khi hoàn thành kỳ nghỉ, bạn có thể gửi đánh giá và nhận xét chân thực tại đây.</p>
      </div>
    `;
    return;
  }

  reviewsContainer.innerHTML = reviews.map(r => {
    const starIcons = Array(r.rating).fill('<span class="material-symbols-outlined text-accent icon-fill icon-sm">star</span>').join('');
    const photosHtml = (r.images && r.images.length)
      ? `<div class="review-photos-grid">${r.images.map(img => `<img src="${img}" class="review-photo-thumb" alt="Review photo">`).join('')}</div>`
      : '';

    return `
      <div class="card p-4" style="padding: 22px; margin-bottom: 18px;">
        <div class="d-flex justify-between align-center" style="margin-bottom: 12px;">
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--dark); margin-bottom: 4px;">${r.hotelName}</h4>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${formatDate(r.createdAt)} • <span class="badge-verified-stay"><span class="material-symbols-outlined icon-sm">verified</span> Đã lưu trú</span></div>
          </div>
          <div class="d-flex align-center gap-1">${starIcons}</div>
        </div>
        <p style="font-size: 0.9375rem; color: var(--text-main); line-height: 1.6;">"${r.comment}"</p>
        ${photosHtml}
      </div>
    `;
  }).join('');
}

function setupProfileForms(user) {
  const formProfile = document.getElementById('form-update-profile');
  const formPassword = document.getElementById('form-change-password');

  if (formProfile) {
    formProfile.addEventListener('submit', (e) => {
      e.preventDefault();
      const updatedName = document.getElementById('input-profile-name').value.trim();
      const updatedPhone = document.getElementById('input-profile-phone').value.trim();
      const updatedAddress = document.getElementById('input-profile-address').value.trim();

      if (!updatedName) {
        Toast.warning('Thiếu họ tên', 'Vui lòng nhập họ và tên của bạn.');
        return;
      }

      DB.updateUser(user.id, {
        name: updatedName,
        phone: updatedPhone,
        address: updatedAddress
      });

      const updatedUser = DB.getUserById(user.id);
      DB.setCurrentUser(updatedUser);

      renderUserProfileInfo(updatedUser);
      Auth.initNavbar();

      Toast.success('Cập nhật thành công', 'Thông tin cá nhân của bạn đã được lưu lại!');
    });
  }

  if (formPassword) {
    formPassword.addEventListener('submit', (e) => {
      e.preventDefault();
      const oldPass = document.getElementById('input-old-password').value;
      const newPass = document.getElementById('input-new-password').value;
      const confirmPass = document.getElementById('input-confirm-password').value;

      if (user.password !== oldPass) {
        Toast.error('Sai mật khẩu', 'Mật khẩu hiện tại không chính xác.');
        return;
      }

      if (newPass.length < 6) {
        Toast.warning('Mật khẩu quá ngắn', 'Mật khẩu mới phải có tối thiểu 6 ký tự.');
        return;
      }

      if (newPass !== confirmPass) {
        Toast.warning('Không trùng khớp', 'Xác nhận mật khẩu mới không khớp.');
        return;
      }

      DB.updateUser(user.id, { password: newPass });
      Toast.success('Thành công', 'Mật khẩu của bạn đã được đổi thành công!');
      formPassword.reset();
    });
  }
}

function setupReviewModal() {
  const modal = document.getElementById('modal-write-review');
  const closeBtns = document.querySelectorAll('.modal-close, .btn-modal-dismiss, #btn-close-review-modal-footer');
  const form = document.getElementById('form-submit-review');
  let currentReviewBookingId = null;
  let currentReviewHotelId = null;
  let currentReviewHotelName = '';
  let selectedStar = 5;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-open-review');
    if (btn) {
      currentReviewBookingId = btn.dataset.bookingId;
      currentReviewHotelId = btn.dataset.hotelId;
      currentReviewHotelName = btn.dataset.hotelName;

      const label = document.getElementById('review-hotel-name-label');
      if (label) label.textContent = currentReviewHotelName;
      if (modal) modal.classList.add('active');
    }
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
    });
  });

  const starElements = document.querySelectorAll('#interactive-stars .material-symbols-outlined');
  starElements.forEach(star => {
    star.addEventListener('click', () => {
      selectedStar = Number(star.dataset.star);
      starElements.forEach(s => {
        const sVal = Number(s.dataset.star);
        s.classList.toggle('selected', sVal <= selectedStar);
      });
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const comment = document.getElementById('input-review-comment').value.trim();
      const user = DB.getCurrentUser();

      DB.addReview({
        hotelId: currentReviewHotelId,
        hotelName: currentReviewHotelName,
        bookingId: currentReviewBookingId,
        userId: user.id,
        userName: user.name,
        rating: selectedStar,
        comment: comment,
        isVerifiedStay: true
      });

      DB.updateBooking(currentReviewBookingId, { isReviewed: true });

      Toast.success('Cảm ơn bạn', 'Đánh giá của bạn đã được ghi nhận thành công!');
      if (modal) modal.classList.remove('active');
      renderUserBookings(user);
      renderUserReviews(user);
    });
  }
}

function setupCancelBookingModal() {
  const modal = document.getElementById('modal-cancel-booking');
  const form = document.getElementById('form-submit-cancel');
  let cancelBookingId = null;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-open-cancel');
    if (btn) {
      cancelBookingId = btn.dataset.id;
      const codeLabel = document.getElementById('cancel-booking-code-label');
      if (codeLabel) codeLabel.textContent = btn.dataset.code;
      if (modal) modal.classList.add('active');
    }

    // Fix click on any modal close or "Không" button inside cancel modal
    if (e.target.closest('#modal-cancel-booking .modal-close') || e.target.closest('#btn-cancel-keep-booking') || e.target.closest('#btn-close-cancel-modal')) {
      if (modal) modal.classList.remove('active');
    }

    // Click on reason chip
    const chip = e.target.closest('.cancel-reason-chip');
    if (chip) {
      const textarea = document.getElementById('input-cancel-reason');
      if (textarea) textarea.value = chip.dataset.reason;
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const reason = document.getElementById('input-cancel-reason').value.trim() || 'Thay đổi lịch trình';
      DB.cancelBooking(cancelBookingId, reason);

      Toast.info('Đã hủy', 'Đơn đặt phòng đã được hủy theo yêu cầu của bạn.');
      if (modal) modal.classList.remove('active');
      const user = DB.getCurrentUser();
      renderUserBookings(user);
    });
  }
}


function showInvoiceModal(booking) {
  let modal = document.getElementById('modal-booking-invoice');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-booking-invoice';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const badge = getBookingStatusBadge(booking.status);

  modal.innerHTML = `
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-title"><span class="material-symbols-outlined text-primary">receipt_long</span> Hóa Đơn Chi Tiết #${booking.code}</div>
        <button class="modal-close" onclick="document.getElementById('modal-booking-invoice').classList.remove('active')">&times;</button>
      </div>
      <div class="modal-body" id="invoice-printable-area">
        <div class="d-flex justify-between align-center" style="margin-bottom: 20px; border-bottom: 2px solid var(--border-color); padding-bottom: 14px;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">HotelBooking Platform</h3>
            <p style="font-size: 0.8125rem; color: var(--text-muted);">Hotline hỗ trợ: 1900 6868 • support@hotelbooking.vn</p>
          </div>
          <span class="status-badge ${badge.className}">${badge.label}</span>
        </div>

        <div class="d-grid" style="grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div>
            <div style="font-size: 0.8125rem; color: var(--text-muted); text-transform: uppercase; font-weight: 800;">Khách hàng</div>
            <div style="font-weight: 800; color: var(--dark); font-size: 1rem;">${booking.customerName}</div>
            <div style="font-size: 0.875rem; color: var(--text-muted);">${booking.customerPhone} • ${booking.customerEmail}</div>
          </div>
          <div>
            <div style="font-size: 0.8125rem; color: var(--text-muted); text-transform: uppercase; font-weight: 800;">Thông tin đặt phòng</div>
            <div style="font-size: 0.875rem; color: var(--text-main);">Ngày đặt: ${formatDateTime(booking.createdAt)}</div>
            <div style="font-size: 0.875rem; color: var(--text-main);">Phương thức: <strong>${booking.paymentMethod}</strong></div>
          </div>
        </div>

        <div style="background: var(--bg-card-alt); padding: 18px; border-radius: var(--radius-md); margin-bottom: 20px; border: 1px solid var(--border-light);">
          <h4 style="font-size: 1rem; font-weight: 800; color: var(--dark); margin-bottom: 6px;">${booking.hotelName}</h4>
          <div style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 8px;">Loại phòng: <strong>${booking.roomName}</strong> (${booking.roomCount} phòng)</div>
          <div style="font-size: 0.875rem; color: var(--text-muted);">Nhận phòng: <strong>${formatDate(booking.checkIn)}</strong> | Trả phòng: <strong>${formatDate(booking.checkOut)}</strong> (${booking.nights} đêm)</div>
          ${booking.specialRequests ? `<div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 6px;"><em>Yêu cầu: ${booking.specialRequests}</em></div>` : ''}
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
          <div class="d-flex justify-between" style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 6px;">
            <span>Tiền phòng (${booking.nights} đêm x ${booking.roomCount} phòng):</span>
            <span>${formatCurrency(booking.subtotal || booking.totalAmount)}</span>
          </div>
          ${booking.servicesTotal > 0 ? `
            <div class="d-flex justify-between" style="font-size: 0.9rem; color: var(--primary); margin-bottom: 6px;">
              <span>Dịch vụ cộng thêm:</span>
              <span>+${formatCurrency(booking.servicesTotal)}</span>
            </div>
          ` : ''}
          ${booking.discountAmount > 0 ? `
            <div class="d-flex justify-between" style="font-size: 0.9rem; color: var(--danger); margin-bottom: 6px;">
              <span>Mã giảm giá (${booking.promoCode}):</span>
              <span>-${formatCurrency(booking.discountAmount)}</span>
            </div>
          ` : ''}
          <div class="d-flex justify-between" style="font-size: 1.3rem; font-weight: 800; color: var(--primary); margin-top: 10px; border-top: 1px dashed var(--border-color); padding-top: 10px;">
            <span>Tổng thanh toán:</span>
            <span>${formatCurrency(booking.totalAmount)}</span>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="printBookingTicket(DB.getBookingById('${booking.id}'))"><span class="material-symbols-outlined icon-sm">print</span> In vé đặt phòng</button>
        <button class="btn btn-primary" onclick="document.getElementById('modal-booking-invoice').classList.remove('active')">Đóng</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

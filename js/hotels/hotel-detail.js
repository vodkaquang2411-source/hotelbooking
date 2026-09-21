/* ==========================================================================
   HOTELBOOKING - HOTEL DETAIL SCRIPT (hotel-detail.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get('id') || 'htl_01';
  let checkIn = urlParams.get('checkIn') || '';
  let checkOut = urlParams.get('checkOut') || '';

  const hotel = DB.getHotelById(hotelId);
  if (!hotel) {
    Toast.error('Lỗi', 'Không tìm thấy thông tin khách sạn này.');
    setTimeout(() => {
      window.location.href = getRootPath() + 'pages/hotels/index.html';
    }, 1500);
    return;
  }

  // 1. Ghi nhận lịch sử đã xem
  DB.addRecentlyViewed(hotel.id);

  document.title = `${hotel.name} - HotelBooking`;

  // 2. Setup dates
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const dayAfter = new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0];

  const checkInEl = document.getElementById('detail-checkin');
  const checkOutEl = document.getElementById('detail-checkout');
  const btnCheckAvail = document.getElementById('btn-detail-check-avail');

  if (checkInEl) {
    checkInEl.min = today;
    checkInEl.value = checkIn || tomorrow;
    checkIn = checkInEl.value;
  }
  if (checkOutEl) {
    checkOutEl.min = tomorrow;
    checkOutEl.value = checkOut || dayAfter;
    checkOut = checkOutEl.value;
  }

  if (checkInEl && checkOutEl) {
    checkInEl.addEventListener('change', () => {
      checkOutEl.min = checkInEl.value;
      if (checkOutEl.value && checkOutEl.value <= checkInEl.value) {
        checkOutEl.value = new Date(new Date(checkInEl.value).getTime() + 86400000).toISOString().split('T')[0];
      }
      checkIn = checkInEl.value;
      checkOut = checkOutEl.value;
      renderHotelRooms(hotel, checkIn, checkOut);
    });

    checkOutEl.addEventListener('change', () => {
      checkIn = checkInEl.value;
      checkOut = checkOutEl.value;
      renderHotelRooms(hotel, checkIn, checkOut);
    });

    if (btnCheckAvail) {
      btnCheckAvail.addEventListener('click', () => {
        checkIn = checkInEl.value;
        checkOut = checkOutEl.value;
        renderHotelRooms(hotel, checkIn, checkOut);
        Toast.info('Kiểm tra phòng', `Đã cập nhật tình trạng phòng từ ${formatDate(checkIn)} đến ${formatDate(checkOut)}`);
      });
    }
  }

  // 3. Render all sections
  renderHotelHeader(hotel);
  setupFavoriteButton(hotel);
  renderHotelGallery(hotel);
  renderHotelOverview(hotel);
  renderHotelAmenities(hotel);
  renderHotelRooms(hotel, checkIn, checkOut);
  renderHotelNearbyPlaces(hotel);
  renderHotelPolicies(hotel);
  renderHotelReviews(hotel);
  renderReviewSubmissionBox(hotel);
});

function renderHotelHeader(hotel) {
  const titleEl = document.getElementById('hotel-title');
  const starsEl = document.getElementById('hotel-stars');
  const addressTextEl = document.getElementById('hotel-address-text');
  const ratingEl = document.getElementById('hotel-rating-score');
  const reviewCountEl = document.getElementById('hotel-review-count');
  const breadcrumbNameEl = document.getElementById('breadcrumb-hotel-name');
  const categoryBadgeEl = document.getElementById('hotel-badge-category');
  const sidebarPriceEl = document.getElementById('sidebar-starting-price');

  if (titleEl) titleEl.textContent = hotel.name;
  if (breadcrumbNameEl) breadcrumbNameEl.textContent = hotel.name;
  if (addressTextEl) addressTextEl.textContent = `${hotel.address}, ${hotel.city}`;
  if (ratingEl) ratingEl.textContent = hotel.rating || '4.9';
  if (reviewCountEl) reviewCountEl.textContent = `(${hotel.reviewCount || 0} đánh giá)`;
  if (categoryBadgeEl) categoryBadgeEl.textContent = hotel.categoryLabel || hotel.type || 'Nghỉ dưỡng cao cấp';

  const urlParams = new URLSearchParams(window.location.search);
  const isFlashSale = urlParams.get('flashSale') === '1';
  const flashDiscount = urlParams.get('discount') || '40';
  const flashSalePrice = parseInt(urlParams.get('salePrice'), 10);

  if (isFlashSale && flashSalePrice) {
    if (sidebarPriceEl) {
      sidebarPriceEl.innerHTML = `
        <span style="font-size: 1.65rem; font-weight: 900; color: #DC2626;">${formatCurrency(flashSalePrice)}</span>
        <span style="font-size: 0.85rem; text-decoration: line-through; color: #94A3B8; margin-left: 6px;">${formatCurrency(hotel.priceMin || hotel.pricePerNight || 2500000)}</span>
      `;
    }

    // Insert Flash Sale Banner above Gallery
    const galleryGrid = document.getElementById('hotel-gallery-grid');
    if (galleryGrid && !document.getElementById('flash-sale-detail-banner')) {
      const banner = document.createElement('div');
      banner.id = 'flash-sale-detail-banner';
      banner.style.cssText = 'background: linear-gradient(135deg, #07172C 0%, #0F2747 100%); border: 1.5px solid #F59E0B; border-radius: 16px; padding: 16px 22px; margin-bottom: 22px; color: #fff; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; box-shadow: 0 8px 24px rgba(239, 68, 68, 0.25);';
      banner.innerHTML = `
        <div class="d-flex align-center gap-3">
          <div style="width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%); display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 0 14px rgba(239, 68, 68, 0.4); flex-shrink: 0;">
            <span class="material-symbols-outlined" style="font-size: 22px;">local_offer</span>
          </div>
          <div>
            <div style="font-weight: 850; font-size: 1.05rem; color: #FDE047; display: flex; align-items: center; gap: 8px;">
              Khách sạn đang mở bán Flash Sale Giờ Vàng (-${flashDiscount}%)
              <span style="font-size: 0.7rem; background: #EF4444; color: #fff; padding: 2px 7px; border-radius: 9999px; font-weight: 800;">ĐANG DIỄN RA</span>
            </div>
            <div style="font-size: 0.86rem; color: #E2E8F0; margin-top: 2px;">Giá độc quyền chỉ từ <strong style="color: #FDE047; font-size: 1.05rem;">${formatCurrency(flashSalePrice)}</strong>/đêm (Giá gốc: <span style="text-decoration: line-through; opacity: 0.8;">${formatCurrency(hotel.priceMin || 2500000)}</span>). Số lượng phòng có hạn!</div>
          </div>
        </div>
        <a href="#section-rooms" class="btn btn-primary btn-sm" style="padding: 10px 22px; border-radius: 9999px; font-weight: 800; background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%); box-shadow: 0 4px 14px rgba(239, 68, 68, 0.4); display: inline-flex; align-items: center; gap: 6px;">
          Săn phòng ngay <span class="material-symbols-outlined icon-sm">arrow_forward</span>
        </a>
      `;
      galleryGrid.parentNode.insertBefore(banner, galleryGrid);
    }
  } else {
    if (sidebarPriceEl) sidebarPriceEl.textContent = formatCurrency(hotel.priceMin || hotel.pricePerNight || 1500000);
  }

  if (starsEl) {
    starsEl.innerHTML = Array(hotel.stars || 5).fill('<span class="material-symbols-outlined text-accent icon-fill icon-sm" style="font-size: 19px;">star</span>').join('');
  }
}

function setupFavoriteButton(hotel) {
  const btnFav = document.getElementById('btn-detail-favorite');
  const btnLabel = document.getElementById('btn-detail-favorite-label');
  if (!btnFav) return;

  const curUser = DB.getCurrentUser();
  const curUserId = curUser ? curUser.id : null;
  let isFav = DB.isFavorite(curUserId, hotel.id);

  function updateBtnUI(fav) {
    if (fav) {
      btnFav.classList.add('active');
      btnFav.style.background = '#ffe4e6';
      btnFav.style.borderColor = '#f43f5e';
      btnFav.style.color = '#e11d48';
      if (btnLabel) btnLabel.textContent = 'Đã yêu thích';
    } else {
      btnFav.classList.remove('active');
      btnFav.style.background = '';
      btnFav.style.borderColor = '';
      btnFav.style.color = '';
      if (btnLabel) btnLabel.textContent = 'Yêu thích';
    }
  }

  updateBtnUI(isFav);

  btnFav.addEventListener('click', () => {
    isFav = DB.toggleFavorite(curUserId, hotel.id);
    updateBtnUI(isFav);
    if (isFav) {
      Toast.success('Yêu thích', `Đã thêm "${hotel.name}" vào danh sách yêu thích!`);
    } else {
      Toast.info('Yêu thích', `Đã xóa khỏi danh sách yêu thích.`);
    }
  });
}

function renderHotelGallery(hotel) {
  const galleryGrid = document.getElementById('hotel-gallery-grid');
  if (!galleryGrid) return;

  let rawImages = hotel.gallery && hotel.gallery.length > 0 ? hotel.gallery : [hotel.image];
  // Ensure we have at least 5 images for the luxurious Bento grid
  let bentoImages = [...rawImages];
  while (bentoImages.length < 5) {
    bentoImages.push(rawImages[bentoImages.length % rawImages.length]);
  }

  const mainImg = bentoImages[0];
  const sideImages = bentoImages.slice(1, 5);

  galleryGrid.innerHTML = `
    <div class="bento-item bento-item-main" data-idx="0">
      <img src="${formatImgPath(mainImg)}" alt="${hotel.name} - Ảnh chính">
    </div>
    ${sideImages.map((img, idx) => `
      <div class="bento-item" data-idx="${idx + 1}">
        <img src="${formatImgPath(img)}" alt="${hotel.name} - Ảnh ${idx + 2}">
      </div>
    `).join('')}
    <button class="btn-open-all-photos" id="btn-open-gallery">
      <span class="material-symbols-outlined icon-sm">photo_library</span>
      <span>Xem tất cả ảnh (${rawImages.length})</span>
    </button>
  `;

  // Setup Lightbox functionality
  setupGalleryLightbox(rawImages);
}

function setupGalleryLightbox(images) {
  const modal = document.getElementById('gallery-lightbox-modal');
  const mainImgEl = document.getElementById('lightbox-main-img');
  const thumbsEl = document.getElementById('lightbox-thumbs');
  const btnClose = document.getElementById('btn-close-lightbox');
  const btnOpen = document.getElementById('btn-open-gallery');
  const bentoItems = document.querySelectorAll('.bento-item');

  if (!modal || !mainImgEl || !thumbsEl) return;

  let currentIdx = 0;

  function showPhoto(idx) {
    currentIdx = (idx + images.length) % images.length;
    mainImgEl.src = formatImgPath(images[currentIdx]);
    
    // Highlight thumbnail
    const allThumbs = thumbsEl.querySelectorAll('img');
    allThumbs.forEach((t, i) => {
      t.style.border = i === currentIdx ? '2px solid var(--accent)' : '2px solid transparent';
      t.style.opacity = i === currentIdx ? '1' : '0.6';
    });
  }

  function openModal(initialIdx = 0) {
    modal.style.display = 'flex';
    thumbsEl.innerHTML = images.map((img, i) => `
      <img src="${formatImgPath(img)}" alt="Thumb ${i + 1}" style="width: 58px; height: 42px; object-fit: cover; border-radius: 6px; cursor: pointer; transition: all 0.2s;" data-idx="${i}">
    `).join('');

    thumbsEl.querySelectorAll('img').forEach(thumb => {
      thumb.addEventListener('click', () => {
        showPhoto(Number(thumb.dataset.idx));
      });
    });

    showPhoto(initialIdx);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (btnOpen) {
    btnOpen.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(0);
    });
  }

  bentoItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = Number(item.dataset.idx || 0);
      openModal(idx);
    });
  });

  if (btnClose) {
    btnClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showPhoto(currentIdx + 1);
      if (e.key === 'ArrowLeft') showPhoto(currentIdx - 1);
    }
  });
}

function renderHotelOverview(hotel) {
  const descEl = document.getElementById('hotel-description');
  if (descEl) descEl.textContent = hotel.description || 'Khu nghỉ dưỡng sang trọng bậc nhất với không gian xanh thoáng mát, dịch vụ tận tâm và trang thiết bị hiện đại tiêu chuẩn quốc tế.';
}

function renderHotelAmenities(hotel) {
  const amenitiesList = document.getElementById('hotel-amenities-list');
  if (!amenitiesList) return;

  const iconsMap = {
    'hồ bơi': 'pool',
    'buffet': 'restaurant',
    'ẩm thực': 'restaurant',
    'spa': 'spa',
    'gym': 'fitness_center',
    'thể thao': 'fitness_center',
    'wifi': 'wifi',
    'sân bay': 'flight_takeoff',
    'đưa đón': 'directions_car',
    'bar': 'local_bar',
    'biển': 'beach_access',
    'golf': 'sports_golf',
    'pháp': 'account_balance',
    'lò sưởi': 'fireplace',
    'mây': 'cloud',
    'xe': 'directions_car',
    'yoga': 'self_improvement',
    'trẻ em': 'child_care',
    'vườn': 'park'
  };

  const amenities = hotel.amenities && hotel.amenities.length > 0
    ? hotel.amenities
    : ['Hồ bơi vô cực ngoài trời', 'Bữa sáng buffet thượng hạng', 'Wifi 5G toàn khuôn viên', 'Trung tâm Spa & Trị liệu', 'Phòng Gym & Yoga', 'Hỗ trợ đưa đón sân bay'];

  amenitiesList.innerHTML = amenities.map(amenity => {
    let icon = 'check_circle';
    const lower = amenity.toLowerCase();
    for (const [key, val] of Object.entries(iconsMap)) {
      if (lower.includes(key)) {
        icon = val;
        break;
      }
    }
    return `
      <div class="detail-amenity-chip">
        <span class="material-symbols-outlined">${icon}</span>
        <span>${amenity}</span>
      </div>
    `;
  }).join('');
}

function renderHotelRooms(hotel, checkIn, checkOut) {
  const roomsContainer = document.getElementById('hotel-rooms-container');
  if (!roomsContainer) return;

  const rooms = DB.getRoomsByHotelId(hotel.id);
  const root = getRootPath();

  if (rooms.length === 0) {
    roomsContainer.innerHTML = `
      <div class="text-center" style="padding: 32px 20px; background: #F8FAFC; border-radius: 12px; border: 1px dashed #CBD5E1;">
        <span class="material-symbols-outlined text-muted" style="font-size: 36px; margin-bottom: 6px;">meeting_room</span>
        <p class="text-muted" style="margin: 0; font-size: 0.9rem;">Hiện tại khách sạn chưa cập nhật loại phòng khả dụng.</p>
      </div>
    `;
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const isFlashSale = urlParams.get('flashSale') === '1';
  const flashDiscount = parseInt(urlParams.get('discount') || '40', 10);

  roomsContainer.innerHTML = rooms.map(room => {
    const amenitiesBadges = (room.amenities || []).slice(0, 3).map(a => `
      <span class="amenity-chip" style="font-size: 0.72rem; padding: 2px 8px; border-radius: 6px; background: #F8FAFC; border: 1px solid #E2E8F0;">
        <span class="material-symbols-outlined text-primary" style="font-size: 13px;">check_circle</span> ${a}
      </span>
    `).join('');

    const availData = DB.checkRoomAvailability(room.id, checkIn, checkOut, 1);
    const isAvailable = availData.isAvailable && room.status !== 'inactive' && room.status !== 'maintenance';

    const availLabel = (checkIn && checkOut)
      ? (isAvailable 
          ? `<span class="availability-tag available" style="font-size: 0.75rem; padding: 3px 10px;"><span class="material-symbols-outlined" style="font-size: 14px;">check_circle</span> Còn ${availData.availableCount} phòng trống</span>`
          : `<span class="availability-tag soldout" style="font-size: 0.75rem; padding: 3px 10px;"><span class="material-symbols-outlined" style="font-size: 14px;">highlight_off</span> Hết phòng ngày này</span>`)
      : `<span class="availability-tag available" style="font-size: 0.75rem; padding: 3px 10px;"><span class="material-symbols-outlined" style="font-size: 14px;">check_circle</span> Còn phòng sẵn sàng</span>`;

    // Tính giá sale nếu đang trong phiên Flash Sale
    const roomSalePrice = isFlashSale 
      ? Math.round(room.price * (1 - flashDiscount / 100) / 1000) * 1000 
      : room.price;

    const flashSaleParams = isFlashSale 
      ? `&flashSale=1&discount=${flashDiscount}&salePrice=${roomSalePrice}` 
      : '';

    const priceBoxHtml = isFlashSale ? `
      <div class="room-price-header">
        <div class="d-flex align-center justify-end gap-1" style="margin-bottom: 3px;">
          <span class="badge" style="background: #EF4444; color: #fff; font-size: 0.62rem; padding: 1px 5px; border-radius: 4px; font-weight: 800; line-height: 1.2; flex-shrink: 0;">GIẢM ${flashDiscount}%</span>
          <span class="room-price-label" style="font-size: 0.7rem; color: #DC2626; font-weight: 700;">Giá Flash Sale:</span>
        </div>
        <div class="d-flex align-baseline justify-end gap-2 flex-wrap">
          <div class="room-price-total" style="color: #DC2626; font-weight: 900; font-size: 1.3rem;">${formatCurrency(roomSalePrice)}</div>
          <div style="font-size: 0.78rem; text-decoration: line-through; color: #94A3B8;">${formatCurrency(room.price)}</div>
        </div>
        <div class="room-price-tax-note">Đã gồm thuế & phí</div>
      </div>
    ` : `
      <div class="room-price-header">
        <div class="room-price-label">Giá mỗi đêm từ</div>
        <div class="room-price-total">${formatCurrency(room.price)}</div>
        <div class="room-price-tax-note">Đã gồm thuế & phí</div>
      </div>
    `;

    return `
      <div class="hotel-room-card" style="${isFlashSale ? 'border: 1.5px solid rgba(239, 68, 68, 0.4); box-shadow: 0 4px 18px rgba(239, 68, 68, 0.08);' : ''}">
        <div class="hotel-room-card-media">
          <img src="${formatImgPath(room.image || hotel.image)}" alt="${room.name}" loading="lazy">
          <span class="badge badge-dark" style="position: absolute; top: 8px; left: 8px; font-size: 0.72rem; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(4px);">${room.type || 'Phòng cao cấp'}</span>
          ${isFlashSale ? `<span class="badge" style="position: absolute; top: 8px; right: 8px; font-size: 0.68rem; padding: 2px 7px; background: #EF4444; color: #fff; font-weight: 800; border-radius: 4px; box-shadow: 0 2px 6px rgba(239,68,68,0.35); z-index: 2;">Flash Sale</span>` : ''}
        </div>
        
        <div class="hotel-room-card-content">
          <div>
            <h3 class="hotel-room-card-title">${room.name}</h3>
            <div class="hotel-room-specs-row">
              <div class="hotel-room-spec"><span class="material-symbols-outlined">group</span> ${room.capacityAdults} Người lớn, ${room.capacityChildren || 0} Trẻ em</div>
              <div class="hotel-room-spec"><span class="material-symbols-outlined">crop_free</span> Diện tích: ${room.size} m²</div>
              <div class="hotel-room-spec"><span class="material-symbols-outlined">bed</span> ${room.bed}</div>
              <div class="hotel-room-spec"><span class="material-symbols-outlined">landscape</span> ${room.view || 'Ban công thoáng mát'}</div>
            </div>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 8px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${room.description || 'Không gian nghỉ dưỡng tiện nghi, ấm cúng và đầy đủ tiện ích chuẩn 5 sao.'}
            </p>
          </div>
          <div class="d-flex flex-wrap gap-1" style="margin-top: 4px;">
            ${amenitiesBadges}
          </div>
        </div>

        <div class="hotel-room-card-action">
          ${priceBoxHtml}

          <div style="margin: 6px 0; width: 100%;">
            ${availLabel}
          </div>

          <div class="room-action-buttons">
            <a href="${root}pages/rooms/detail.html?id=${room.id}&hotelId=${hotel.id}${checkIn ? `&checkIn=${checkIn}` : ''}${checkOut ? `&checkOut=${checkOut}` : ''}${flashSaleParams}" class="btn btn-outline btn-sm" style="flex: 1; padding: 7px 6px; font-size: 0.8rem; border-radius: 8px; justify-content: center;">
              Chi tiết
            </a>
            ${isAvailable ? `
              <a href="${root}pages/booking/index.html?hotelId=${hotel.id}&roomId=${room.id}${checkIn ? `&checkIn=${checkIn}` : ''}${checkOut ? `&checkOut=${checkOut}` : ''}${flashSaleParams}" class="btn btn-primary btn-sm" style="flex: 1.3; padding: 7px 8px; font-size: 0.8rem; font-weight: 700; border-radius: 8px; justify-content: center; ${isFlashSale ? 'background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%); border: none; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);' : ''}">
                ${isFlashSale ? 'Săn deal ngay' : 'Đặt ngay'}
              </a>
            ` : `
              <button class="btn btn-primary btn-sm disabled" style="flex: 1.3; padding: 7px 8px; font-size: 0.8rem; border-radius: 8px; justify-content: center;" disabled title="Hết phòng trong thời gian bạn chọn">Hết phòng</button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderHotelNearbyPlaces(hotel) {
  const container = document.getElementById('hotel-nearby-places-list');
  if (!container) return;

  const places = hotel.nearbyPlaces || [
    { name: "Sân bay Quốc tế", distance: "5.2 km", icon: "flight" },
    { name: "Bãi biển trung tâm", distance: "350 m", icon: "beach_access" },
    { name: "Chợ đêm ẩm thực", distance: "1.1 km", icon: "storefront" },
    { name: "Bảo tàng văn hóa", distance: "2.4 km", icon: "museum" }
  ];

  container.innerHTML = places.map(p => `
    <div class="d-flex justify-between align-center" style="padding: 6px 0; border-bottom: 1px dashed #E2E8F0; font-size: 0.82rem;">
      <div class="d-flex align-center gap-2" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        <span class="material-symbols-outlined text-primary" style="font-size: 16px; flex-shrink: 0;">${p.icon || 'place'}</span>
        <span style="color: #334155; font-weight: 600;" title="${p.name}">${p.name}</span>
      </div>
      <span class="badge badge-light" style="font-size: 0.72rem; flex-shrink: 0; background: #F1F5F9; color: #475569; font-weight: 700; padding: 2px 7px;">${p.distance}</span>
    </div>
  `).join('');
}

function renderHotelPolicies(hotel) {
  const policies = hotel.policies || {};
  const el = document.getElementById('hotel-policies');
  if (!el) return;

  el.innerHTML = `
    <div class="hotel-policies-clean-grid">
      <div class="policy-clean-card">
        <h4 class="policy-clean-title">Thời gian nhận & trả phòng</h4>
        <div class="policy-clean-schedule">
          <div class="schedule-pill">Nhận phòng: <strong>Từ ${policies.checkIn || '14:00'}</strong></div>
          <div class="schedule-pill">Trả phòng: <strong>Trước ${policies.checkOut || '12:00'}</strong></div>
        </div>
        <p class="policy-clean-desc">Hỗ trợ nhận phòng sớm hoặc trả phòng trễ tùy thuộc vào tình trạng phòng sẵn có của khách sạn.</p>
      </div>

      <div class="policy-clean-card">
        <h4 class="policy-clean-title">Chính sách hủy đặt phòng</h4>
        <div class="policy-clean-highlight text-success">
          ${policies.cancellation || 'Miễn phí hủy trước 48 giờ nhận phòng'}
        </div>
        <p class="policy-clean-desc">Hoàn tiền 100% khi yêu cầu hủy phòng được gửi trước thời hạn quy định.</p>
      </div>

      <div class="policy-clean-card">
        <h4 class="policy-clean-title">Trẻ em & Giường phụ</h4>
        <div class="policy-clean-highlight text-primary">
          ${policies.children || 'Miễn phí cho trẻ em dưới 6 tuổi'}
        </div>
        <p class="policy-clean-desc">Trẻ dưới 6 tuổi được lưu trú miễn phí khi ngủ chung giường có sẵn với phụ huynh.</p>
      </div>

      <div class="policy-clean-card">
        <h4 class="policy-clean-title">Quy định chung</h4>
        <div class="policy-clean-highlight" style="color: #475569;">
          ${policies.pets || 'Không cho phép mang thú cưng'}
        </div>
        <p class="policy-clean-desc">Không hút thuốc lá trong phòng. Vui lòng giữ trật tự và không gây tiếng ồn sau 22:00.</p>
      </div>
    </div>
  `;
}

function renderHotelReviews(hotel) {
  const reviewsContainer = document.getElementById('hotel-reviews-list');
  if (!reviewsContainer) return;

  const reviews = DB.getReviewsByHotelId(hotel.id);
  const curUser = DB.getCurrentUser();

  if (reviews.length === 0) {
    reviewsContainer.innerHTML = `
      <div class="text-center" style="padding: 40px 20px; background: var(--bg-card-alt); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <span class="material-symbols-outlined icon-xl text-muted" style="margin-bottom: 10px; font-size: 40px;">chat</span>
        <p class="text-muted" style="margin: 0; font-size: 0.95rem;">Chưa có đánh giá nào cho khách sạn này. Hãy là người đầu tiên trải nghiệm và chia sẻ nhận xét!</p>
      </div>
    `;
    return;
  }

  reviewsContainer.innerHTML = reviews.map(rev => {
    const starCount = Math.min(5, Math.max(1, Math.round(Number(rev.rating) || 5)));
    const starIcons = Array(starCount).fill('<span class="material-symbols-outlined text-accent icon-fill icon-sm">star</span>').join('');
    
    const avatarHtml = typeof getInitialsAvatar === 'function'
      ? getInitialsAvatar(rev.userName, '', 'width: 44px; height: 44px; font-size: 1.1rem; flex-shrink: 0;')
      : `<div class="user-avatar" style="width: 44px; height: 44px; background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; border-radius: 50%; flex-shrink: 0;">${(rev.userName || 'U')[0]}</div>`;

    const photosHtml = (rev.images && rev.images.length)
      ? `<div class="review-photos-grid" style="margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap;">${rev.images.map(img => `<img src="${img}" class="review-photo-thumb" alt="Review photo" style="width: 76px; height: 76px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border-light); cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" onclick="window.open('${img}', '_blank')">`).join('')}</div>`
      : '';

    const reviewDate = rev.date || rev.createdAt || '2026-08-20';

    const canDelete = curUser && (curUser.id === rev.userId || curUser.role === 'ADMIN' || curUser.role === 'STAFF');
    const canReply = curUser && (curUser.role === 'ADMIN' || curUser.role === 'STAFF');

    const replyHtml = rev.reply ? `
      <div class="hotel-review-reply" style="margin-top: 14px; background: var(--primary-soft); border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: var(--radius-md);">
        <div class="d-flex justify-between align-center" style="margin-bottom: 4px;">
          <div class="d-flex align-center gap-2" style="font-weight: 800; color: var(--primary); font-size: 0.86rem;">
            <span class="material-symbols-outlined icon-sm" style="font-size: 17px;">support_agent</span>
            <span>${rev.reply.responderName || 'Ban Quản Lý Khách Sạn'}</span>
            <span style="font-size: 0.74rem; color: var(--text-muted); font-weight: normal;">• ${formatDate(rev.reply.createdAt)}</span>
          </div>
          ${canReply ? `
            <button class="btn btn-sm btn-outline-danger btn-delete-reply" data-id="${rev.id}" style="padding: 2px 6px; font-size: 0.7rem;" title="Xóa phản hồi này">Xóa</button>
          ` : ''}
        </div>
        <p style="font-size: 0.875rem; color: var(--text-main); margin: 0; line-height: 1.55;">${rev.reply.comment}</p>
      </div>
    ` : '';

    return `
      <div class="card p-4" style="padding: 22px; margin-bottom: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-light);" id="review-card-${rev.id}">
        <div class="d-flex justify-between align-center" style="margin-bottom: 12px;">
          <div class="d-flex align-center gap-3">
            ${avatarHtml}
            <div>
              <div class="d-flex align-center gap-2">
                <span style="font-weight: 800; color: var(--dark); font-size: 0.95rem;">${rev.userName}</span>
                <span class="badge-verified-stay" style="display: inline-flex; align-items: center; gap: 3px; font-size: 0.72rem; color: #047857; background: #ecfdf5; padding: 2px 8px; border-radius: 12px; font-weight: 700;">
                  <span class="material-symbols-outlined icon-sm" style="font-size: 14px;">verified</span> Khách đã lưu trú
                </span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${formatDate(reviewDate)} • <span class="text-success font-semibold">Đánh giá thực tế</span></div>
            </div>
          </div>
          <div class="d-flex align-center gap-1">${starIcons}</div>
        </div>
        <p style="font-size: 0.9375rem; color: var(--text-main); line-height: 1.6; margin: 0;">"${rev.comment}"</p>
        ${photosHtml}
        ${replyHtml}

        <!-- Actions: Xóa đánh giá & Phản hồi -->
        ${(canDelete || canReply) ? `
          <div class="d-flex justify-end gap-2 align-center" style="margin-top: 14px; border-top: 1px dashed var(--border-light); padding-top: 10px;">
            ${canReply ? `
              <button class="btn btn-sm btn-outline-primary btn-open-reply-box" data-id="${rev.id}" style="padding: 4px 10px; font-size: 0.78rem; display: inline-flex; align-items: center; gap: 4px;">
                <span class="material-symbols-outlined icon-sm" style="font-size: 16px;">reply</span> ${rev.reply ? 'Sửa phản hồi' : 'Phản hồi khách'}
              </button>
            ` : ''}
            ${canDelete ? `
              <button class="btn btn-sm btn-outline-danger btn-delete-user-review" data-id="${rev.id}" style="padding: 4px 10px; font-size: 0.78rem; display: inline-flex; align-items: center; gap: 4px;">
                <span class="material-symbols-outlined icon-sm" style="font-size: 16px;">delete</span> Xóa đánh giá
              </button>
            ` : ''}
          </div>
        ` : ''}

        <!-- Inline Reply Form Box for Admin/Staff -->
        <div id="reply-box-${rev.id}" style="display: none; margin-top: 12px; background: #ffffff; border: 1.5px dashed var(--primary); border-radius: var(--radius-md); padding: 14px;">
          <label style="font-size: 0.82rem; font-weight: 700; color: var(--primary); display: block; margin-bottom: 6px;">
            <span class="material-symbols-outlined icon-sm" style="vertical-align: middle;">support_agent</span> Phản hồi cho đánh giá của ${rev.userName}:
          </label>
          <textarea id="reply-text-${rev.id}" class="form-control" rows="2" placeholder="Nhập nội dung phản hồi chính thức từ khách sạn...">${rev.reply ? rev.reply.comment : ''}</textarea>
          <div class="d-flex justify-end gap-2" style="margin-top: 8px;">
            <button class="btn btn-sm btn-outline btn-cancel-reply" data-id="${rev.id}">Hủy</button>
            <button class="btn btn-sm btn-primary btn-submit-reply" data-id="${rev.id}">Gửi phản hồi</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 1. Gắn sự kiện Xóa đánh giá
  reviewsContainer.querySelectorAll('.btn-delete-user-review').forEach(btn => {
    btn.addEventListener('click', () => {
      const revId = btn.dataset.id;
      if (confirm('Bạn có chắc chắn muốn xóa bài đánh giá này không?')) {
        DB.deleteReview(revId);
        Toast.success('Đã xóa', 'Đánh giá đã được xóa thành công khỏi hệ thống.');
        renderHotelReviews(hotel);
        // Cập nhật lại điểm đánh giá trên header
        const updatedHotel = DB.getHotelById(hotel.id);
        if (updatedHotel) {
          const scoreEl = document.getElementById('hotel-rating-score');
          const countEl = document.getElementById('hotel-review-count');
          if (scoreEl) scoreEl.textContent = updatedHotel.rating;
          if (countEl) countEl.textContent = `(${updatedHotel.reviewCount} đánh giá)`;
        }
      }
    });
  });

  // 2. Gắn sự kiện Mở form Phản hồi (Admin/Staff)
  reviewsContainer.querySelectorAll('.btn-open-reply-box').forEach(btn => {
    btn.addEventListener('click', () => {
      const revId = btn.dataset.id;
      const box = document.getElementById(`reply-box-${revId}`);
      if (box) {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
      }
    });
  });

  // 3. Gắn sự kiện Hủy phản hồi
  reviewsContainer.querySelectorAll('.btn-cancel-reply').forEach(btn => {
    btn.addEventListener('click', () => {
      const revId = btn.dataset.id;
      const box = document.getElementById(`reply-box-${revId}`);
      if (box) box.style.display = 'none';
    });
  });

  // 4. Gắn sự kiện Gửi phản hồi
  reviewsContainer.querySelectorAll('.btn-submit-reply').forEach(btn => {
    btn.addEventListener('click', () => {
      const revId = btn.dataset.id;
      const textEl = document.getElementById(`reply-text-${revId}`);
      const text = textEl ? textEl.value.trim() : '';
      if (!text) {
        Toast.warning('Thiếu nội dung', 'Vui lòng nhập nội dung phản hồi.');
        return;
      }
      DB.replyReview(revId, {
        comment: text,
        responderName: curUser ? `${curUser.name} (${curUser.role === 'ADMIN' ? 'Admin' : 'Lễ tân'})` : 'Ban Quản Lý Khách Sạn'
      });
      Toast.success('Thành công', 'Đã lưu phản hồi cho đánh giá của khách hàng.');
      renderHotelReviews(hotel);
    });
  });

  // 5. Gắn sự kiện Xóa phản hồi
  reviewsContainer.querySelectorAll('.btn-delete-reply').forEach(btn => {
    btn.addEventListener('click', () => {
      const revId = btn.dataset.id;
      if (confirm('Bạn có chắc muốn xóa phản hồi này không?')) {
        DB.deleteReviewReply(revId);
        Toast.info('Thông báo', 'Đã xóa phản hồi của khách sạn.');
        renderHotelReviews(hotel);
      }
    });
  });
}

function renderReviewSubmissionBox(hotel) {
  const box = document.getElementById('review-write-box');
  if (!box) return;

  const curUser = DB.getCurrentUser();
  if (!curUser) {
    box.innerHTML = `
      <div class="card p-4 text-center" style="background: var(--bg-card-alt); border: 2px dashed var(--border-color); border-radius: var(--radius-lg); padding: 24px;">
        <span class="material-symbols-outlined text-primary" style="font-size: 36px; margin-bottom: 6px;">rate_review</span>
        <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--dark); margin-bottom: 6px;">Chia sẻ cảm nhận & Hình ảnh thực tế</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 16px;">
          Đăng nhập vào tài khoản để viết đánh giá, chấm điểm và tải lên những bức ảnh đẹp về kỳ nghỉ của bạn.
        </p>
        <a href="${getRootPath()}pages/auth/login.html?redirect=${encodeURIComponent(window.location.href)}" class="btn btn-primary">
          <span class="material-symbols-outlined icon-sm">login</span> Đăng nhập để viết đánh giá
        </a>
      </div>
    `;
    return;
  }

  const userAvatarHtml = typeof getInitialsAvatar === 'function'
    ? getInitialsAvatar(curUser.name, '', 'width: 44px; height: 44px; font-size: 1.1rem; flex-shrink: 0;')
    : `<div class="user-avatar" style="width: 44px; height: 44px; background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; border-radius: 50%; flex-shrink: 0;">${(curUser.name || 'U')[0]}</div>`;

  box.innerHTML = `
    <div class="card p-4" style="padding: 24px; border: 1.5px solid var(--border-color); background: #ffffff; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
      <div class="d-flex align-center gap-3" style="margin-bottom: 18px;">
        ${userAvatarHtml}
        <div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--dark); margin: 0;">Viết Đánh Giá Của Bạn</h3>
          <div style="font-size: 0.8rem; color: var(--text-muted);">Đăng dưới tên: <strong style="color: var(--primary);">${curUser.name}</strong></div>
        </div>
      </div>

      <form id="form-submit-review">
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label font-bold">Chấm điểm chất lượng:</label>
          <div class="d-flex gap-2 align-center" id="star-rating-select">
            ${[1, 2, 3, 4, 5].map(s => `
              <span class="material-symbols-outlined star-picker-icon" data-val="${s}" style="font-size: 32px; cursor: pointer; color: ${s <= 5 ? '#f59e0b' : '#cbd5e1'}; font-variation-settings: 'FILL' 1; transition: transform 0.2s;">star</span>
            `).join('')}
            <span id="star-rating-label" style="font-size: 0.9rem; font-weight: 800; color: var(--primary); margin-left: 8px;">5/5 Tuyệt vời</span>
            <input type="hidden" id="review-score-input" value="5">
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label font-bold">Nội dung nhận xét:</label>
          <textarea id="review-comment-input" class="form-control" rows="3" placeholder="Chia sẻ trải nghiệm chân thực của bạn về phòng ốc, thái độ nhân viên, bữa sáng buffet, view cảnh quan..." required></textarea>
        </div>

        <div class="form-group" style="margin-bottom: 18px;">
          <label class="form-label font-bold">Đính kèm hình ảnh thực tế (tùy chọn):</label>
          <div class="d-flex align-center gap-3 flex-wrap">
            <label class="btn btn-outline btn-sm" style="cursor: pointer; padding: 8px 14px; margin: 0;">
              <span class="material-symbols-outlined icon-sm">add_photo_alternate</span> Chọn ảnh từ thiết bị
              <input type="file" id="review-photos-input" accept="image/*" multiple style="display: none;">
            </label>
            <span style="font-size: 0.78rem; color: var(--text-muted);">Hỗ trợ file JPG, PNG (có thể chọn nhiều ảnh)</span>
          </div>
          <div id="review-photos-preview" style="display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap;"></div>
        </div>

        <button type="submit" class="btn btn-primary btn-lg" style="padding: 10px 24px;">
          <span class="material-symbols-outlined icon-sm">send</span> Gửi Đánh Giá Ngay
        </button>
      </form>
    </div>
  `;

  // Gắn sự kiện chọn sao
  let selectedStars = 5;
  const ratingLabels = {
    1: '1/5 Rất thất vọng',
    2: '2/5 Tạm chấp nhận',
    3: '3/5 Khá ổn',
    4: '4/5 Hài lòng & Tốt',
    5: '5/5 Tuyệt vời hoàn hảo'
  };

  const starIcons = box.querySelectorAll('.star-picker-icon');
  const ratingLabelEl = document.getElementById('star-rating-label');

  starIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      selectedStars = Number(icon.dataset.val);
      document.getElementById('review-score-input').value = selectedStars;
      if (ratingLabelEl) ratingLabelEl.textContent = ratingLabels[selectedStars] || `${selectedStars}/5`;
      starIcons.forEach(s => {
        const val = Number(s.dataset.val);
        s.style.color = val <= selectedStars ? '#f59e0b' : '#cbd5e1';
      });
    });
  });

  // Preview ảnh tải lên kèm nút Xóa ảnh
  const photosInput = document.getElementById('review-photos-input');
  const previewBox = document.getElementById('review-photos-preview');
  let uploadedPhotoUrls = [];

  if (photosInput && previewBox) {
    photosInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (re) => {
          const photoUrl = re.target.result;
          uploadedPhotoUrls.push(photoUrl);

          const wrapper = document.createElement('div');
          wrapper.style.position = 'relative';
          wrapper.style.display = 'inline-block';

          const img = document.createElement('img');
          img.src = photoUrl;
          img.style.width = '72px';
          img.style.height = '72px';
          img.style.borderRadius = '8px';
          img.style.objectFit = 'cover';
          img.style.border = '1px solid var(--border-light)';
          wrapper.appendChild(img);

          const btnRemove = document.createElement('button');
          btnRemove.innerHTML = '×';
          btnRemove.style.position = 'absolute';
          btnRemove.style.top = '-6px';
          btnRemove.style.right = '-6px';
          btnRemove.style.background = '#ef4444';
          btnRemove.style.color = '#ffffff';
          btnRemove.style.border = 'none';
          btnRemove.style.borderRadius = '50%';
          btnRemove.style.width = '20px';
          btnRemove.style.height = '20px';
          btnRemove.style.cursor = 'pointer';
          btnRemove.style.fontSize = '14px';
          btnRemove.style.lineHeight = '1';
          btnRemove.title = 'Xóa ảnh này';
          btnRemove.onclick = () => {
            uploadedPhotoUrls = uploadedPhotoUrls.filter(u => u !== photoUrl);
            wrapper.remove();
          };
          wrapper.appendChild(btnRemove);

          previewBox.appendChild(wrapper);
        };
        reader.readAsDataURL(file);
      });
    });
  }

  // Gửi đánh giá
  const form = document.getElementById('form-submit-review');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const comment = document.getElementById('review-comment-input').value.trim();
      if (!comment) {
        Toast.warning('Thiếu nội dung', 'Vui lòng nhập nhận xét của bạn.');
        return;
      }

      DB.addReview({
        hotelId: hotel.id,
        hotelName: hotel.name,
        userId: curUser.id,
        userName: curUser.name,
        userAvatar: curUser.avatar,
        rating: selectedStars,
        comment: comment,
        isVerifiedStay: true,
        images: uploadedPhotoUrls,
        date: new Date().toISOString().split('T')[0]
      });

      Toast.success('Cảm ơn bạn', 'Đánh giá kèm hình ảnh của bạn đã được đăng thành công!');
      renderHotelReviews(hotel);
      renderReviewSubmissionBox(hotel);

      // Cập nhật lại điểm đánh giá trên header
      const updatedHotel = DB.getHotelById(hotel.id);
      if (updatedHotel) {
        const scoreEl = document.getElementById('hotel-rating-score');
        const countEl = document.getElementById('hotel-review-count');
        if (scoreEl) scoreEl.textContent = updatedHotel.rating;
        if (countEl) countEl.textContent = `(${updatedHotel.reviewCount} đánh giá)`;
      }
    });
  }
}

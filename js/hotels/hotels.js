/* ==========================================================================
   HOTELBOOKING - HOTELS LIST & ADVANCED SEARCH FILTER ENGINE (hotels.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const hotelsGrid = document.getElementById('hotels-grid');
  const hotelCountEl = document.getElementById('hotel-count-label');
  const searchInput = document.getElementById('filter-search');
  const checkInInput = document.getElementById('filter-checkin');
  const checkOutInput = document.getElementById('filter-checkout');
  const citySelect = document.getElementById('filter-city');
  const priceSlider = document.getElementById('filter-price-slider');
  const priceDisplay = document.getElementById('filter-price-display');
  const sortSelect = document.getElementById('filter-sort');
  const btnReset = document.getElementById('btn-reset-filters');
  const starCheckboxes = document.querySelectorAll('.filter-star-check');
  const typeCheckboxes = document.querySelectorAll('.filter-type-check');
  const amenityCheckboxes = document.querySelectorAll('.filter-amenity-check');
  const categoryPillsContainer = document.getElementById('category-pills-container');

  let activeCategory = 'all';

  // Lấy params từ URL nếu có
  const urlParams = new URLSearchParams(window.location.search);
  const paramCity = urlParams.get('city') || '';
  const paramKeyword = urlParams.get('keyword') || '';
  const paramCheckIn = urlParams.get('checkIn') || '';
  const paramCheckOut = urlParams.get('checkOut') || '';
  const paramGuests = urlParams.get('guests') || '';
  const paramCategory = urlParams.get('category') || 'all';
  const guestsCount = Number(paramGuests) || 0;

  if (paramCategory && paramCategory !== 'all') {
    activeCategory = paramCategory;
  }

  // Khởi tạo thành phố từ paramCity hoặc từ keyword nếu keyword là tên thành phố
  if (paramCity && citySelect) {
    citySelect.value = paramCity;
    if (!citySelect.value) {
      Array.from(citySelect.options).forEach(opt => {
        if (opt.value && (opt.value.toLowerCase().includes(paramCity.toLowerCase()) || paramCity.toLowerCase().includes(opt.value.toLowerCase()))) {
          citySelect.value = opt.value;
        }
      });
    }
  }

  if (paramKeyword && searchInput) {
    searchInput.value = paramKeyword;
    // Nếu keyword khớp với 1 thành phố và chưa chọn citySelect thì tự gán
    if (citySelect && !citySelect.value) {
      const normKw = typeof removeVietnameseTones === 'function' ? removeVietnameseTones(paramKeyword) : paramKeyword.toLowerCase();
      Array.from(citySelect.options).forEach(opt => {
        if (opt.value) {
          const normOpt = typeof removeVietnameseTones === 'function' ? removeVietnameseTones(opt.value) : opt.value.toLowerCase();
          if (normKw === normOpt || normKw.includes(normOpt) || normOpt.includes(normKw)) {
            citySelect.value = opt.value;
          }
        }
      });
    }
  }

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  if (checkInInput) {
    checkInInput.min = today;
    if (paramCheckIn) checkInInput.value = paramCheckIn;
    checkInInput.addEventListener('change', () => {
      if (checkOutInput) {
        checkOutInput.min = checkInInput.value;
        if (checkOutInput.value && checkOutInput.value <= checkInInput.value) {
          const nextDay = new Date(new Date(checkInInput.value).getTime() + 86400000).toISOString().split('T')[0];
          checkOutInput.value = nextDay;
        }
      }
      applyFilters();
    });
  }

  if (checkOutInput) {
    checkOutInput.min = tomorrow;
    if (paramCheckOut) checkOutInput.value = paramCheckOut;
    checkOutInput.addEventListener('change', applyFilters);
  }

  // Khởi tạo Category Pills
  renderCategoryPills();

  // Khởi tạo hiển thị giá slider
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      priceDisplay.textContent = val >= 10000000 ? 'Tất cả mức giá' : `Dưới ${formatCurrency(val)}`;
      applyFilters();
    });
  }

  // Gắn sự kiện lọc
  if (searchInput) searchInput.addEventListener('input', debounce(applyFilters, 250));
  if (citySelect) citySelect.addEventListener('change', applyFilters);
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);

  starCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
  typeCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
  amenityCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (checkInInput) checkInInput.value = '';
      if (checkOutInput) checkOutInput.value = '';
      if (citySelect) citySelect.value = '';
      if (priceSlider) {
        priceSlider.value = 10000000;
        priceDisplay.textContent = 'Tất cả mức giá';
      }
      if (sortSelect) sortSelect.value = 'recommended';
      activeCategory = 'all';
      renderCategoryPills();
      starCheckboxes.forEach(cb => cb.checked = false);
      typeCheckboxes.forEach(cb => cb.checked = false);
      amenityCheckboxes.forEach(cb => cb.checked = false);
      applyFilters();
      Toast.info('Bộ lọc', 'Đã đặt lại tất cả tiêu chí tìm kiếm.');
    });
  }

  function renderCategoryPills() {
    if (!categoryPillsContainer) return;
    const categories = DB.getCategories();
    const fallbackImgs = {
      all: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      hotel: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
      resort: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      villa: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
      homestay: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80',
      apartment: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
      beach_resort: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80'
    };

    categoryPillsContainer.innerHTML = categories.map(cat => {
      const bgImg = cat.image || fallbackImgs[cat.id] || fallbackImgs.all;
      const isActive = activeCategory === cat.id;
      return `
        <button class="category-pill ${isActive ? 'active' : ''}" data-cat="${cat.id}" style="background-image: url('${bgImg}');">
          <span class="category-pill-overlay"></span>
          <span class="category-pill-name">${cat.name}</span>
        </button>
      `;
    }).join('');

    categoryPillsContainer.querySelectorAll('.category-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        categoryPillsContainer.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilters();
      });
    });
  }

  // Thực hiện áp dụng bộ lọc lần đầu
  applyFilters();

  function applyFilters() {
    let hotels = DB.getHotels(h => h.status !== 'inactive');

    // 0. Lọc theo Danh mục nghỉ dưỡng (Category Pills)
    if (activeCategory && activeCategory !== 'all') {
      hotels = hotels.filter(h => {
        if (h.category === activeCategory) return true;
        const typeStr = (h.type || '').toLowerCase();
        if (activeCategory === 'hotel' && (typeStr.includes('hotel') || typeStr.includes('khách sạn'))) return true;
        if (activeCategory === 'resort' && (typeStr.includes('resort') || h.category === 'beach_resort')) return true;
        if (activeCategory === 'beach_resort' && (typeStr.includes('beach') || typeStr.includes('biển') || (h.amenities || []).some(a => a.toLowerCase().includes('biển')))) return true;
        if (activeCategory === 'villa' && (typeStr.includes('villa') || typeStr.includes('biệt thự'))) return true;
        if (activeCategory === 'homestay' && (typeStr.includes('homestay') || typeStr.includes('lodge'))) return true;
        if (activeCategory === 'apartment' && (typeStr.includes('căn hộ') || typeStr.includes('apartment') || typeStr.includes('condo'))) return true;
        return false;
      });
    }

    // 1. Lọc theo Từ khóa tìm kiếm (Smart Vietnamese & Accent-Insensitive Search)
    const rawKeyword = searchInput ? searchInput.value.trim() : '';
    if (rawKeyword) {
      const normKeyword = typeof removeVietnameseTones === 'function' ? removeVietnameseTones(rawKeyword) : rawKeyword.toLowerCase();
      // Bỏ qua các stop words thông dụng khi tìm kiếm
      const stopWords = ['tai', 'o', 'khu', 'vuc', 'thanh', 'pho', 'tp', 'tinh', 'viet', 'nam'];
      const searchWords = normKeyword.split(/\s+/).filter(w => w.length > 0 && !stopWords.includes(w));

      hotels = hotels.filter(h => {
        const fullTextRaw = `${h.name} ${h.address} ${h.city} ${h.type || ''} ${h.category || ''} ${h.description || ''} ${(h.amenities || []).join(' ')}`.toLowerCase();
        const normFullText = typeof removeVietnameseTones === 'function' ? removeVietnameseTones(fullTextRaw) : fullTextRaw;

        // Khớp trực tiếp cả cụm từ
        if (fullTextRaw.includes(rawKeyword.toLowerCase()) || normFullText.includes(normKeyword)) {
          return true;
        }

        // Khớp từng từ khóa quan trọng
        if (searchWords.length > 0) {
          return searchWords.every(w => normFullText.includes(w));
        }
        return true;
      });
    }

    // 2. Lọc theo Thành phố (City Dropdown)
    const selectedCity = citySelect ? citySelect.value.trim() : '';
    if (selectedCity) {
      const normSelectedCity = typeof removeVietnameseTones === 'function' ? removeVietnameseTones(selectedCity) : selectedCity.toLowerCase();
      hotels = hotels.filter(h => {
        const normHotelCity = typeof removeVietnameseTones === 'function' ? removeVietnameseTones(h.city || '') : (h.city || '').toLowerCase();
        const normHotelAddr = typeof removeVietnameseTones === 'function' ? removeVietnameseTones(h.address || '') : (h.address || '').toLowerCase();

        if (normSelectedCity === 'quang ninh' || normSelectedCity === 'ha long') {
          return normHotelCity.includes('quang ninh') || normHotelCity.includes('ha long') || normHotelAddr.includes('quang ninh') || normHotelAddr.includes('ha long');
        }
        return normHotelCity.includes(normSelectedCity) || normHotelAddr.includes(normSelectedCity);
      });
    }

    // 2.5. Lọc theo Số khách (Guests Filter)
    if (guestsCount > 1) {
      const allRooms = DB.getRooms ? DB.getRooms() : [];
      hotels = hotels.filter(h => {
        const hotelRooms = allRooms.filter(r => r.hotelId === h.id);
        if (!hotelRooms.length) return true; // Nếu chưa tải phòng thì giữ nguyên
        return hotelRooms.some(r => (Number(r.capacityAdults) || 2) >= (guestsCount >= 4 ? 2 : guestsCount));
      });
    }

    // 3. Lọc theo Mức giá tối đa (Price Slider)
    const maxPrice = priceSlider ? Number(priceSlider.value) : 10000000;
    if (maxPrice < 10000000) {
      hotels = hotels.filter(h => h.priceMin <= maxPrice);
    }

    // 4. Lọc theo Số sao (Star Rating)
    const selectedStars = Array.from(starCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => Number(cb.value));
    if (selectedStars.length > 0) {
      hotels = hotels.filter(h => selectedStars.includes(h.stars));
    }

    // 5. Lọc theo Loại hình lưu trú (Property Type Smart Matching)
    const selectedTypes = Array.from(typeCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());
    
    if (selectedTypes.length > 0) {
      hotels = hotels.filter(h => {
        const t = (h.type || '').toLowerCase();
        const c = (h.category || '').toLowerCase();
        return selectedTypes.some(typeKey => {
          if (typeKey === 'hotel') return t.includes('hotel') || t.includes('khách sạn') || c === 'hotel';
          if (typeKey === 'resort') return t.includes('resort') || c === 'resort' || c === 'beach_resort';
          if (typeKey === 'villa') return t.includes('villa') || t.includes('biệt thự') || c === 'villa';
          if (typeKey === 'homestay') return t.includes('homestay') || t.includes('lodge') || c === 'homestay';
          if (typeKey === 'apartment') return t.includes('căn hộ') || t.includes('apartment') || c === 'apartment';
          return t.includes(typeKey);
        });
      });
    }

    // 6. Lọc theo Tiện nghi (Smart Amenities Matching)
    const selectedAmenities = Array.from(amenityCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());

    if (selectedAmenities.length > 0) {
      hotels = hotels.filter(h => {
        const amList = (h.amenities || []).map(a => a.toLowerCase());
        const amStr = amList.join(' ');
        return selectedAmenities.every(amenityKey => {
          if (amenityKey === 'pool') return amStr.includes('hồ bơi') || amStr.includes('bể bơi') || amStr.includes('pool');
          if (amenityKey === 'breakfast') return amStr.includes('bữa sáng') || amStr.includes('buffet') || amStr.includes('ăn sáng');
          if (amenityKey === 'beach') return amStr.includes('biển') || amStr.includes('bãi tắm') || amStr.includes('bãi cát');
          if (amenityKey === 'spa') return amStr.includes('spa') || amStr.includes('massage') || amStr.includes('onsen') || amStr.includes('khoáng nóng') || amStr.includes('xông hơi');
          if (amenityKey === 'shuttle') return amStr.includes('đưa đón') || amStr.includes('sân bay') || amStr.includes('limousine') || amStr.includes('xe điện');
          if (amenityKey === 'bbq') return amStr.includes('bbq') || amStr.includes('nướng');
          return amStr.includes(amenityKey);
        });
      });
    }

    // 7. Sắp xếp kết quả
    const sortBy = sortSelect ? sortSelect.value : 'recommended';
    if (sortBy === 'price_asc') {
      hotels.sort((a, b) => a.priceMin - b.priceMin);
    } else if (sortBy === 'price_desc') {
      hotels.sort((a, b) => b.priceMin - a.priceMin);
    } else if (sortBy === 'rating_desc') {
      hotels.sort((a, b) => b.rating - a.rating || (b.reviewCount || 0) - (a.reviewCount || 0));
    }

    renderHotelsList(hotels);
  }

  function renderHotelsList(hotels) {
    if (!hotelsGrid) return;

    if (hotelCountEl) {
      hotelCountEl.innerHTML = `<span class="material-symbols-outlined icon-sm text-primary" style="vertical-align: -2px;">verified</span> Tìm thấy <strong>${hotels.length}</strong> khách sạn & resort 5★ phù hợp`;
    }

    if (hotels.length === 0) {
      hotelsGrid.innerHTML = `
        <div class="empty-state text-center" style="grid-column: 1 / -1; padding: 60px 20px; background: #ffffff; border-radius: 20px; border: 1.5px dashed var(--border-color); box-shadow: 0 4px 20px rgba(15, 39, 71, 0.04);">
          <div style="font-size: 3.5rem; color: #C9A227; margin-bottom: 14px;">
            <span class="material-symbols-outlined icon-xl">travel_explore</span>
          </div>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--dark); margin-bottom: 8px;">Không tìm thấy khách sạn phù hợp với tiêu chí</h3>
          <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 24px; line-height: 1.6;">Hãy thử kéo tăng mức giá, bỏ bớt một vài tiện nghi lọc hoặc xóa bớt từ khóa tìm kiếm để khám phá thêm nhiều khách sạn đẳng cấp khác nhé.</p>
          <button class="btn btn-primary" onclick="document.getElementById('btn-reset-filters').click()" style="padding: 10px 24px; border-radius: 9999px; font-weight: 700;">
            <span class="material-symbols-outlined icon-sm">restart_alt</span> Đặt lại tất cả bộ lọc
          </button>
        </div>
      `;
      return;
    }

    const root = getRootPath();
    const curUser = DB.getCurrentUser();
    const curUserId = curUser ? curUser.id : null;
    const checkIn = checkInInput ? checkInInput.value : '';
    const checkOut = checkOutInput ? checkOutInput.value : '';

    hotelsGrid.innerHTML = hotels.map(hotel => {
      const isFav = DB.isFavorite(curUserId, hotel.id);
      const starIcons = Array(hotel.stars || 5).fill('<span class="material-symbols-outlined icon-sm icon-fill" style="color: #C9A227; font-size: 16px;">star</span>').join('');
      
      const amenityPills = (hotel.amenities || ['Hồ bơi vô cực', 'Bữa sáng 5★', 'Spa cao cấp']).slice(0, 3).map(a => `
        <span class="amenity-chip"><span class="material-symbols-outlined" style="font-size: 13px;">check_circle</span> ${a}</span>
      `).join('');

      let availabilityBadge = '';
      if (checkIn && checkOut) {
        const isAvail = DB.checkHotelAvailability(hotel.id, checkIn, checkOut);
        availabilityBadge = isAvail
          ? `<span class="availability-tag available" style="margin-bottom: 8px;"><span class="material-symbols-outlined icon-sm">check_circle</span> Còn phòng</span>`
          : `<span class="availability-tag soldout" style="margin-bottom: 8px;"><span class="material-symbols-outlined icon-sm">highlight_off</span> Hết phòng khoảng này</span>`;
      }

      return `
        <div class="card card-hover hotel-card">
          <button class="btn-favorite-heart ${isFav ? 'active' : ''}" data-id="${hotel.id}" title="${isFav ? 'Đã yêu thích' : 'Thêm vào yêu thích'}">
            <span class="material-symbols-outlined">favorite</span>
          </button>
          <div class="hotel-card-img-wrapper">
            <img src="${formatImgPath(hotel.image)}" alt="${hotel.name}" class="hotel-card-img" loading="lazy" decoding="async">
            <div class="hotel-card-badges">
              ${hotel.featured ? `<span class="badge badge-accent badge-pulse"><span class="material-symbols-outlined icon-sm">local_fire_department</span> Nổi bật</span>` : '<span class="badge badge-accent"><span class="material-symbols-outlined icon-sm">star</span> 5 Sao</span>'}
              <span class="badge badge-dark">${hotel.city}</span>
            </div>
            <div class="hotel-card-rating-badge">
              <span class="material-symbols-outlined icon-fill">star</span> ${hotel.rating} <span>(${hotel.reviewCount || 128} đánh giá)</span>
            </div>
          </div>
          <div class="hotel-card-body">
            <div class="hotel-card-location">
              <span class="material-symbols-outlined">location_on</span> ${hotel.city} • ${hotel.address}
            </div>
            <h3 class="hotel-card-title">
              <a href="${root}pages/hotels/detail.html?id=${hotel.id}${checkIn ? `&checkIn=${checkIn}` : ''}${checkOut ? `&checkOut=${checkOut}` : ''}${guestsCount ? `&guests=${guestsCount}` : ''}">${hotel.name}</a>
            </h3>
            <div class="d-flex align-center gap-1" style="margin-bottom: 8px;">
              ${starIcons}
            </div>
            ${availabilityBadge}
            <p style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">
              ${truncateText(hotel.description, 85)}
            </p>
            <div class="hotel-card-amenities">
              ${amenityPills}
            </div>
            <div class="hotel-card-footer">
              <div style="min-width: 0;">
                <div class="hotel-card-price-label">Giá ưu đãi từ</div>
                <div class="hotel-card-price">${formatCurrency(hotel.priceMin)} <span>/đêm</span></div>
              </div>
              <a href="${root}pages/hotels/detail.html?id=${hotel.id}${checkIn ? `&checkIn=${checkIn}` : ''}${checkOut ? `&checkOut=${checkOut}` : ''}${guestsCount ? `&guests=${guestsCount}` : ''}" class="btn btn-primary btn-sm" style="padding: 8px 18px; border-radius: 9999px; font-weight: 700; white-space: nowrap; flex-shrink: 0;">
                Chi tiết <span class="material-symbols-outlined icon-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Gắn sự kiện nút yêu thích
    hotelsGrid.querySelectorAll('.btn-favorite-heart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const hotelId = btn.dataset.id;
        const isFav = DB.toggleFavorite(curUserId, hotelId);
        btn.classList.toggle('active', isFav);
        btn.setAttribute('title', isFav ? 'Đã yêu thích' : 'Thêm vào yêu thích');
        if (isFav) {
          Toast.success('Đã lưu yêu thích', 'Đã thêm khách sạn vào danh sách yêu thích của bạn!');
        } else {
          Toast.info('Đã bỏ yêu thích', 'Đã xóa khách sạn khỏi danh sách yêu thích.');
        }
      });
    });
  }

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
});

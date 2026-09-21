/**
 * FLASH SALE GIỜ VÀNG - REAL-TIME DYNAMIC ENGINE
 * Đồng bộ khung giờ và đếm ngược theo thời gian thực (Real-time Live Sync)
 */

const FlashSale = (function() {
  // Cấu hình 4 khung giờ trong ngày (Thời gian thực)
  const slotConfigs = [
    { id: 'slot-1', startHour: 0, endHour: 6, time: '00:00 - 06:00', label: '00:00', tag: 'Đêm muộn & Săn sớm' },
    { id: 'slot-2', startHour: 6, endHour: 12, time: '06:00 - 12:00', label: '06:00', tag: 'Ưu đãi Buổi sáng' },
    { id: 'slot-3', startHour: 12, endHour: 18, time: '12:00 - 18:00', label: '12:00', tag: 'Deal Hot Buổi chiều' },
    { id: 'slot-4', startHour: 18, endHour: 24, time: '18:00 - 24:00', label: '18:00', tag: 'Giờ Vàng Buổi tối' }
  ];

  // Dữ liệu deal cho từng khung giờ (Mỗi khung đúng 3 deal tiêu chuẩn)
  const dealsData = {
    'slot-4': [ // Giờ Vàng Buổi tối (18:00 - 24:00)
      {
        id: 'htl_dn_01',
        name: 'Khách sạn Mường Thanh Luxury Đà Nẵng',
        city: 'Đà Nẵng',
        image: 'img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(1).jpg',
        discount: 40,
        originalPrice: 2800000,
        salePrice: 1680000,
        soldPercent: 88,
        remainingRooms: 2,
        viewers: 45,
        isHot: true,
        tag: 'Gần biển Mỹ Khê'
      },
      {
        id: 'htl_hl_02',
        name: 'Wyndham Garden Legend Hạ Long',
        city: 'Hạ Long',
        image: 'img/Hạ Long/Wyndham Garden Legend Hạ Long(1).jpg',
        discount: 35,
        originalPrice: 3200000,
        salePrice: 2080000,
        soldPercent: 76,
        remainingRooms: 3,
        viewers: 32,
        isHot: false,
        tag: 'View Vịnh trọn vẹn'
      },
      {
        id: 'htl_dl_01',
        name: 'Adadilia Villa View Hotel Đà Lạt',
        city: 'Đà Lạt',
        image: 'img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(1).jpg',
        discount: 45,
        originalPrice: 2400000,
        salePrice: 1320000,
        soldPercent: 92,
        remainingRooms: 1,
        viewers: 58,
        isHot: true,
        tag: 'Sắp cháy phòng'
      }
    ],
    'slot-3': [ // Deal Hot Buổi chiều (12:00 - 18:00)
      {
        id: 'htl_nt_01',
        name: 'InterContinental Nha Trang Bay',
        city: 'Nha Trang',
        image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80',
        discount: 30,
        originalPrice: 11000000,
        salePrice: 7700000,
        soldPercent: 80,
        remainingRooms: 2,
        viewers: 28,
        isHot: false,
        tag: 'Biển Trần Phú đẹp nhất'
      },
      {
        id: 'htl_pq_01',
        name: 'Vinpearl Resort & Spa Phú Quốc',
        city: 'Phú Quốc',
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
        discount: 38,
        originalPrice: 7500000,
        salePrice: 4650000,
        soldPercent: 70,
        remainingRooms: 3,
        viewers: 34,
        isHot: false,
        tag: 'Bãi Dài cát trắng'
      },
      {
        id: 'htl_dn_02',
        name: 'Khách sạn Royal Beach Đà Nẵng',
        city: 'Đà Nẵng',
        image: 'img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(1).jpg',
        discount: 35,
        originalPrice: 6500000,
        salePrice: 4225000,
        soldPercent: 78,
        remainingRooms: 2,
        viewers: 36,
        isHot: true,
        tag: 'Hồ bơi vô cực ven biển'
      }
    ],
    'slot-2': [ // Ưu đãi Buổi sáng (06:00 - 12:00)
      {
        id: 'htl_qn_02',
        name: 'Yoko Onsen Quang Hanh Resort',
        city: 'Quảng Ninh',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        discount: 35,
        originalPrice: 5800000,
        salePrice: 3770000,
        soldPercent: 75,
        remainingRooms: 3,
        viewers: 29,
        isHot: true,
        tag: 'Khoáng nóng Nhật Bản'
      },
      {
        id: 'htl_qn_01',
        name: 'FLC Grand Hotel Hạ Long',
        city: 'Quảng Ninh',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
        discount: 40,
        originalPrice: 2800000,
        salePrice: 1680000,
        soldPercent: 68,
        remainingRooms: 4,
        viewers: 21,
        isHot: false,
        tag: 'View trọn Vịnh di sản'
      },
      {
        id: 'htl_hn_01',
        name: 'Le Grand Hanoi Hotel - The Oriental',
        city: 'Hà Nội',
        image: 'img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(1).jpg',
        discount: 35,
        originalPrice: 1900000,
        salePrice: 1235000,
        soldPercent: 82,
        remainingRooms: 3,
        viewers: 25,
        isHot: false,
        tag: 'Phố Cổ Hoàn Kiếm'
      }
    ],
    'slot-1': [ // Đêm muộn & Săn sớm (00:00 - 06:00)
      {
        id: 'htl_vt_01',
        name: 'CSJ Luxury Hotel Vũng Tàu',
        city: 'Vũng Tàu',
        image: 'img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(1).jpg',
        discount: 45,
        originalPrice: 1800000,
        salePrice: 990000,
        soldPercent: 60,
        remainingRooms: 4,
        viewers: 17,
        isHot: true,
        tag: 'Sát Bãi Sau biển xanh'
      },
      {
        id: 'htl_hg_02',
        name: 'Lotus Premium Lodge Hà Giang',
        city: 'Hà Giang',
        image: 'img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(1).jpg',
        discount: 50,
        originalPrice: 1500000,
        salePrice: 750000,
        soldPercent: 65,
        remainingRooms: 3,
        viewers: 14,
        isHot: false,
        tag: 'Cao nguyên đá Đồng Văn'
      },
      {
        id: 'htl_hp_01',
        name: 'Meliá Vinpearl Hải Phòng Rivera',
        city: 'Hải Phòng',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        discount: 50,
        originalPrice: 2500000,
        salePrice: 1250000,
        soldPercent: 85,
        remainingRooms: 2,
        viewers: 39,
        isHot: true,
        tag: '5 Sao Đẳng Cấp Đất Cảng'
      }
    ]
  };

  let activeRealSlotId = 'slot-4';
  let selectedSlotId = 'slot-4';
  let countdownTimer = null;

  // Xác định khung giờ hiện tại theo giờ thực
  function getRealTimeSlot() {
    const hour = new Date().getHours();
    for (const slot of slotConfigs) {
      if (hour >= slot.startHour && hour < slot.endHour) {
        return slot;
      }
    }
    return slotConfigs[3]; // Fallback
  }

  function init() {
    const currentRealSlot = getRealTimeSlot();
    activeRealSlotId = currentRealSlot.id;
    selectedSlotId = activeRealSlotId;

    renderTimeSlots();
    renderDeals();
    startRealtimeCountdown();
  }

  function renderTimeSlots() {
    const container = document.getElementById('flash-slots-nav');
    if (!container) return;

    const curReal = getRealTimeSlot();

    container.innerHTML = slotConfigs.map(slot => {
      const isRealCurrent = slot.id === curReal.id;
      const isSelected = slot.id === selectedSlotId;
      const currentHour = new Date().getHours();
      
      let statusText = 'Đang diễn ra';
      let statusClass = 'active';

      if (isRealCurrent) {
        statusText = 'Đang diễn ra';
        statusClass = 'active';
      } else if (slot.startHour > currentHour) {
        statusText = 'Sắp diễn ra';
        statusClass = 'upcoming';
      } else {
        statusText = 'Đã kết thúc';
        statusClass = 'ended';
      }

      return `
        <div class="flash-slot-item ${isSelected ? 'active' : ''} ${statusClass}" data-slot="${slot.id}">
          <div class="flash-slot-time">${slot.time}</div>
          <div class="flash-slot-status">${statusText}</div>
        </div>
      `;
    }).join('');

    // Sự kiện click chuyển đổi xem deal các khung giờ
    container.querySelectorAll('.flash-slot-item').forEach(item => {
      item.addEventListener('click', () => {
        const slotId = item.getAttribute('data-slot');
        if (slotId) {
          selectedSlotId = slotId;
          renderTimeSlots();
          renderDeals();
        }
      });
    });
  }

  function renderDeals() {
    const grid = document.getElementById('flash-deals-grid');
    if (!grid) return;

    const deals = dealsData[selectedSlotId] || [];
    const curReal = getRealTimeSlot();
    const isCurrentActive = selectedSlotId === curReal.id;
    const isFuture = slotConfigs.find(s => s.id === selectedSlotId)?.startHour > new Date().getHours();

    grid.innerHTML = deals.map(d => {
      const formatCurrency = (val) => new Intl.NumberFormat('vi-VN').format(val) + 'đ';
      const detailUrl = `pages/hotels/detail.html?id=${d.id}&flashSale=1&discount=${d.discount}&salePrice=${d.salePrice}`;

      const actionBtn = isCurrentActive
        ? `<a href="${detailUrl}" class="btn btn-primary btn-sm" style="font-weight: 800; padding: 8px 20px; border-radius: 9999px; box-shadow: 0 4px 12px rgba(239,68,68,0.35);">Săn ngay</a>`
        : `<button class="flash-reminder-btn" onclick="FlashSale.setReminder('${d.name}', '${slotConfigs.find(s => s.id === selectedSlotId)?.time || ''}')">
            <span class="material-symbols-outlined icon-sm">notifications_active</span> ${isFuture ? 'Nhắc tôi khi mở' : 'Xem chi tiết'}
           </button>`;

      return `
        <div class="flash-deal-card card-hover">
          <div class="flash-deal-img-box">
            <img loading="lazy" decoding="async" src="${d.image}" alt="${d.name}">
            <span class="flash-deal-discount-badge">GIẢM ${d.discount}%</span>
            ${d.isHot ? `<span class="flash-stock-alert"><span class="material-symbols-outlined" style="font-size: 13px; color: #ef4444;">local_fire_department</span> ${d.remainingRooms === 1 ? 'Chỉ còn 1 phòng!' : 'Sắp cháy phòng'}</span>` : ''}
          </div>
          
          <div style="padding: 20px; color: var(--dark); display: flex; flex-direction: column; flex: 1;">
            <div class="d-flex justify-between align-center" style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 2px;">
              <span class="d-flex align-center gap-1"><span class="material-symbols-outlined icon-sm text-primary" style="font-size: 15px;">location_on</span> ${d.city}</span>
              <span style="font-size: 0.75rem; color: #0284c7; font-weight: 700; background: #e0f2fe; padding: 2px 8px; border-radius: 6px;">${d.tag}</span>
            </div>

            <h4 style="font-size: 1.05rem; font-weight: 800; margin: 6px 0 10px; line-height: 1.35; min-height: 42px;">
              <a href="${detailUrl}" style="color: inherit; text-decoration: none;">${d.name}</a>
            </h4>

            ${isCurrentActive ? `
              <div class="flash-progress-wrap">
                <div class="d-flex justify-between align-center" style="font-size: 0.78rem; font-weight: 800; color: #DC2626; margin-bottom: 5px;">
                  <span class="d-flex align-center gap-1"><span class="material-symbols-outlined" style="font-size: 15px; color: #EA580C;">local_fire_department</span> Đã bán ${d.soldPercent}%</span>
                  <span style="color: #991B1B; font-weight: 700; font-size: 0.75rem; background: #FEF2F2; padding: 2px 8px; border-radius: 6px; border: 1px solid #FEE2E2;">Còn ${d.remainingRooms} phòng</span>
                </div>
                <div class="flash-progress-bar">
                  <div class="flash-progress-fill" style="width: ${d.soldPercent}%;"></div>
                </div>
                <div class="flash-viewer-count" style="margin-top: 6px; font-size: 0.76rem; color: #64748B; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                  <span class="material-symbols-outlined icon-sm" style="font-size: 15px; color: #0284C7;">visibility</span> <span><strong style="color: #DC2626;">${d.viewers} người</strong> đang cùng xem deal này</span>
                </div>
              </div>
            ` : `
              <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 10px; padding: 8px 12px; margin: 8px 0 12px; font-size: 0.8rem; color: #475569;">
                <span class="d-flex align-center gap-1 font-semibold text-primary"><span class="material-symbols-outlined icon-sm">schedule</span> Khung giờ ${slotConfigs.find(s => s.id === selectedSlotId)?.time || ''}</span>
              </div>
            `}

            <div class="d-flex justify-between align-end" style="margin-top: auto; border-top: 1px solid var(--border-light); padding-top: 12px;">
              <div>
                <div style="font-size: 0.78rem; text-decoration: line-through; color: #94a3b8;">${formatCurrency(d.originalPrice)}</div>
                <div style="font-size: 1.25rem; font-weight: 900; color: var(--danger); line-height: 1.1;">
                  ${formatCurrency(d.salePrice)} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">/đêm</span>
                </div>
              </div>
              ${actionBtn}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Đếm ngược thời gian thực đến hết khung giờ hiện tại
  function startRealtimeCountdown() {
    function update() {
      const now = new Date();
      const currentRealSlot = getRealTimeSlot();

      // Nếu chuyển sang khung giờ thực tế mới, tự động cập nhật lại slots
      if (currentRealSlot.id !== activeRealSlotId) {
        activeRealSlotId = currentRealSlot.id;
        selectedSlotId = activeRealSlotId;
        renderTimeSlots();
        renderDeals();
      }

      // Đích đến: giờ kết thúc của khung giờ hiện tại
      let target = new Date();
      if (currentRealSlot.endHour === 24) {
        target.setHours(23, 59, 59, 999);
      } else {
        target.setHours(currentRealSlot.endHour, 0, 0, 0);
      }

      const diff = Math.max(0, Math.floor((target - now) / 1000));
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      const pad = (n) => String(n).padStart(2, '0');

      const hEl = document.getElementById('flash-hours');
      const mEl = document.getElementById('flash-minutes');
      const sEl = document.getElementById('flash-seconds');

      if (hEl) hEl.textContent = pad(hours);
      if (mEl) mEl.textContent = pad(minutes);
      if (sEl) sEl.textContent = pad(seconds);
    }

    update();
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(update, 1000);
  }

  function claimVoucher(code, desc) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    if (window.Toast) {
      Toast.success('Đã lưu mã Flash Sale!', `Mã voucher <strong>${code}</strong> (${desc}) đã được lưu vào ví của bạn.`);
    } else {
      alert(`Đã lưu mã voucher ${code}!`);
    }
  }

  function setReminder(hotelName, slotTime) {
    if (window.Toast) {
      Toast.info('Đã bật nhắc nhở!', `Hệ thống sẽ gửi thông báo trước khi khung giờ <strong>${slotTime}</strong> mở bán deal <strong>${hotelName}</strong>.`);
    } else {
      alert(`Đã bật nhắc nhở cho khung giờ ${slotTime}!`);
    }
  }

  return {
    init,
    claimVoucher,
    setReminder
  };
})();

// Khởi chạy khi DOM load
document.addEventListener('DOMContentLoaded', () => {
  FlashSale.init();
});

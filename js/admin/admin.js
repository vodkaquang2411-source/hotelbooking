/* ==========================================================================
   HOTELBOOKING - ADMIN PORTAL CONTROLLER (admin.js)
   Quản trị toàn diện: Dashboard, Chart.js, và Toàn bộ 6 Module CRUD
   ========================================================================== */

let revenueChartInstance = null;
let bookingStatusChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  if (!Auth.requireStaffOrAdmin()) return;

  renderAdminUserCard();
  initAdminNavigation();
  renderDashboardOverview();
  renderHotelsManagement();
  renderRoomsManagement();
  renderUsersManagement();
  renderBookingsManagement();
  renderReviewsManagement();
  renderPromotionsManagement();
  renderArticlesManagement();
  renderRevenueAnalytics();
  setupAdminModals();
});

function renderAdminUserCard() {
  const container = document.getElementById('admin-user-card-container');
  if (!container) return;

  const curUser = DB.getCurrentUser();
  if (!curUser) return;

  const roleLabels = {
    'SUPER_ADMIN': '👑 Tổng Quản Trị',
    'ADMIN': '💼 Quản Trị Viên',
    'STAFF': '👔 Nhân Viên Tiếp Tân'
  };

  const avatarHtml = typeof getInitialsAvatar === 'function'
    ? getInitialsAvatar(curUser.name, '', 'width: 38px; height: 38px; font-size: 0.9rem;')
    : `<div class="user-avatar" style="width: 38px; height: 38px; background: var(--primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">${(curUser.name || 'A')[0]}</div>`;

  container.innerHTML = `
    ${avatarHtml}
    <div style="flex: 1; min-width: 0;">
      <div style="font-weight: 800; color: #ffffff; font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${curUser.name}</div>
      <div style="font-size: 0.72rem; color: #38bdf8; font-weight: 700;">${roleLabels[curUser.role] || 'Quản trị viên'}</div>
    </div>
    <a href="../../index.html" title="Về trang chủ" style="color: #94a3b8;">
      <span class="material-symbols-outlined icon-sm">home</span>
    </a>
  `;
}

// ==========================================================================
// 1. ADMIN NAVIGATION & TAB SWITCHING
// ==========================================================================
function initAdminNavigation() {
  const navItems = document.querySelectorAll('.admin-nav-item');
  const sections = document.querySelectorAll('.admin-tab-section');
  const topbarTitle = document.getElementById('admin-topbar-title');

  const titleMap = {
    'dashboard': 'Tổng Quan Hệ Thống',
    'hotels': 'Quản Lý Khách Sạn (CRUD)',
    'rooms': 'Quản Lý Loại Phòng (CRUD)',
    'users': 'Quản Lý Khách Hàng (CRUD)',
    'bookings': 'Quản Lý Đơn Đặt Phòng (CRUD)',
    'reviews': 'Quản Lý Đánh Giá Khách Hàng',
    'promotions': 'Quản Lý Mã Khuyến Mãi (Vouchers)',
    'articles': 'Quản Lý Bài Viết & Cẩm Nang (CRUD)',
    'analytics': 'Báo Cáo Thống Kê Doanh Thu'
  };

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.dataset.tab;
      if (!tab) return;
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      sections.forEach(sec => {
        sec.style.display = sec.id === `section-${tab}` ? 'block' : 'none';
      });

      if (topbarTitle) topbarTitle.textContent = titleMap[tab] || 'Admin Dashboard';

      if (tab === 'dashboard') renderDashboardOverview();
      if (tab === 'articles') renderArticlesManagement();
      if (tab === 'analytics') renderRevenueAnalytics();
    });
  });

  const sidebarToggle = document.getElementById('btn-admin-sidebar-toggle');
  const sidebar = document.getElementById('admin-sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

// ==========================================================================
// 2. DASHBOARD OVERVIEW & CHARTS
// ==========================================================================
function renderDashboardOverview() {
  const stats = DB.getDashboardStats();

  const kpiHotels = document.getElementById('kpi-total-hotels');
  const kpiRooms = document.getElementById('kpi-total-rooms');
  const kpiUsers = document.getElementById('kpi-total-users');
  const kpiBookings = document.getElementById('kpi-total-bookings');
  const kpiRevenue = document.getElementById('kpi-total-revenue');
  const kpiReviews = document.getElementById('kpi-total-reviews');
  const kpiArticles = document.getElementById('kpi-total-articles');

  if (kpiHotels) kpiHotels.textContent = stats.totalHotels;
  if (kpiRooms) kpiRooms.textContent = stats.totalRooms;
  if (kpiUsers) kpiUsers.textContent = stats.totalUsers;
  if (kpiBookings) kpiBookings.textContent = stats.totalBookings;
  if (kpiRevenue) kpiRevenue.textContent = formatCurrency(stats.totalRevenue);
  if (kpiReviews) kpiReviews.textContent = stats.totalReviews;
  if (kpiArticles) kpiArticles.textContent = stats.totalArticles || 0;

  initDashboardCharts();
  renderDashboardRecentBookings();
}

function initDashboardCharts() {
  if (typeof Chart === 'undefined') return;

  const ctxRevenue = document.getElementById('chart-revenue-monthly');
  if (ctxRevenue) {
    if (revenueChartInstance) revenueChartInstance.destroy();
    
    revenueChartInstance = new Chart(ctxRevenue, {
      type: 'bar',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        datasets: [{
          label: 'Doanh thu (Triệu VNĐ)',
          data: [45, 52, 68, 74, 90, 115, 140, 125, 85, 70, 60, 95],
          backgroundColor: 'rgba(30, 64, 175, 0.85)',
          borderRadius: 8,
          hoverBackgroundColor: 'rgba(59, 130, 246, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (val) => `${val} tr`
            }
          }
        }
      }
    });
  }

  const ctxStatus = document.getElementById('chart-booking-status');
  if (ctxStatus) {
    if (bookingStatusChartInstance) bookingStatusChartInstance.destroy();

    const bookings = DB.getBookings();
    const statusCounts = {
      'Chờ xác nhận': 0,
      'Đã xác nhận': 0,
      'Đã nhận phòng': 0,
      'Đã trả phòng': 0,
      'Đã hủy': 0
    };

    bookings.forEach(b => {
      if (statusCounts[b.status] !== undefined) {
        statusCounts[b.status]++;
      }
    });

    bookingStatusChartInstance = new Chart(ctxStatus, {
      type: 'doughnut',
      data: {
        labels: Object.keys(statusCounts),
        datasets: [{
          data: Object.values(statusCounts).map(v => v === 0 ? 1 : v),
          backgroundColor: [
            '#f59e0b',
            '#3b82f6',
            '#8b5cf6',
            '#10b981',
            '#ef4444'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
}

function renderDashboardRecentBookings() {
  const tbody = document.getElementById('tbody-recent-bookings');
  if (!tbody) return;

  const bookings = DB.getBookings().slice(0, 5);

  tbody.innerHTML = bookings.map(b => {
    const badge = getBookingStatusBadge(b.status);
    return `
      <tr>
        <td><strong class="text-primary">${b.code}</strong></td>
        <td>${b.customerName}</td>
        <td>${b.hotelName}</td>
        <td>${formatDate(b.checkIn)} → ${formatDate(b.checkOut)}</td>
        <td><strong class="text-dark">${formatCurrency(b.totalAmount)}</strong></td>
        <td><span class="status-badge ${badge.className}">${badge.label}</span></td>
      </tr>
    `;
  }).join('');
}

// ==========================================================================
// 3. HOTEL CRUD MODULE
// ==========================================================================
function renderHotelsManagement() {
  const tbody = document.getElementById('tbody-admin-hotels');
  const searchInput = document.getElementById('search-admin-hotels');
  if (!tbody) return;

  function loadTable() {
    let hotels = DB.getHotels();
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (query) {
      hotels = hotels.filter(h => h.name.toLowerCase().includes(query) || h.city.toLowerCase().includes(query));
    }

    tbody.innerHTML = hotels.map(h => `
      <tr>
        <td>
          <img src="${formatImgPath(h.image)}" alt="${h.name}" class="table-img">
        </td>
        <td>
          <div style="font-weight: 800; color: var(--dark);">${h.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${h.address}</div>
        </td>
        <td><strong>${h.city}</strong></td>
        <td>${Array(h.stars).fill('<span class="material-symbols-outlined text-accent icon-fill icon-sm">star</span>').join('')}</td>
        <td><strong class="text-primary">${formatCurrency(h.priceMin)}</strong></td>
        <td><span class="badge ${h.status === 'active' ? 'badge-success' : 'badge-danger'}">${h.status === 'active' ? 'Hoạt động' : 'Tạm dừng'}</span></td>
        <td>
          <div class="table-actions">
            <button class="table-action-btn btn-edit-hotel" data-id="${h.id}" title="Sửa thông tin"><span class="material-symbols-outlined icon-sm">edit</span></button>
            <button class="table-action-btn btn-delete btn-delete-hotel" data-id="${h.id}" data-name="${h.name}" title="Xóa khách sạn"><span class="material-symbols-outlined icon-sm">delete</span></button>
          </div>
        </td>
      </tr>
    `).join('');

    document.querySelectorAll('.btn-edit-hotel').forEach(btn => {
      btn.addEventListener('click', () => openEditHotelModal(btn.dataset.id));
    });

    document.querySelectorAll('.btn-delete-hotel').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm(`Bạn có chắc chắn muốn xóa khách sạn "${btn.dataset.name}" và toàn bộ phòng thuộc khách sạn này?`)) {
          DB.deleteHotel(btn.dataset.id);
          Toast.success('Thành công', 'Đã xóa khách sạn khỏi hệ thống.');
          loadTable();
          renderDashboardOverview();
        }
      });
    });
  }

  if (searchInput) searchInput.addEventListener('input', loadTable);
  loadTable();
}

function openEditHotelModal(hotelId = null) {
  const modal = document.getElementById('modal-hotel-form');
  const titleEl = document.getElementById('modal-hotel-form-title');
  const form = document.getElementById('form-hotel-crud');

  if (hotelId) {
    const h = DB.getHotelById(hotelId);
    if (!h) return;
    titleEl.innerHTML = '<span class="material-symbols-outlined text-primary">edit</span> Sửa Thông Tin Khách Sạn';
    document.getElementById('crud-hotel-id').value = h.id;
    document.getElementById('crud-hotel-name').value = h.name;
    document.getElementById('crud-hotel-city').value = h.city;
    document.getElementById('crud-hotel-address').value = h.address;
    document.getElementById('crud-hotel-stars').value = h.stars;
    const catInput = document.getElementById('crud-hotel-category');
    if (catInput) catInput.value = h.category || 'hotel';
    document.getElementById('crud-hotel-price').value = h.priceMin;
    document.getElementById('crud-hotel-type').value = h.type || 'Khách sạn 5 sao';
    document.getElementById('crud-hotel-image').value = h.image;
    document.getElementById('crud-hotel-amenities').value = (h.amenities || []).join(', ');
    document.getElementById('crud-hotel-desc').value = h.description || '';
  } else {
    titleEl.innerHTML = '<span class="material-symbols-outlined text-primary">add_business</span> Thêm Khách Sạn Mới';
    form.reset();
    document.getElementById('crud-hotel-id').value = '';
    const catInput = document.getElementById('crud-hotel-category');
    if (catInput) catInput.value = 'hotel';
  }

  modal.classList.add('active');
}

// ==========================================================================
// 4. ROOM CRUD MODULE
// ==========================================================================
function renderRoomsManagement() {
  const tbody = document.getElementById('tbody-admin-rooms');
  const hotelFilter = document.getElementById('filter-admin-rooms-hotel');
  if (!tbody) return;

  const hotels = DB.getHotels();
  if (hotelFilter) {
    hotelFilter.innerHTML = `<option value="">-- Tất cả khách sạn --</option>` + hotels.map(h => `<option value="${h.id}">${h.name}</option>`).join('');
    hotelFilter.addEventListener('change', loadTable);
  }

  function loadTable() {
    let rooms = DB.getRooms();
    const selectedHtl = hotelFilter ? hotelFilter.value : '';
    if (selectedHtl) {
      rooms = rooms.filter(r => r.hotelId === selectedHtl);
    }

    tbody.innerHTML = rooms.map(r => {
      const htl = DB.getHotelById(r.hotelId);
      const htlName = htl ? htl.name : 'Chưa gán';
      const totalQty = r.quantity || r.totalRooms || 6;
      const availableNum = (r.availableCount !== undefined) 
        ? r.availableCount 
        : (r.availableRooms !== undefined ? r.availableRooms : Math.max(1, totalQty - 2));

      return `
        <tr>
          <td><img src="${formatImgPath(r.image || 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=400&q=80')}" class="table-img" alt="${r.name}"></td>
          <td>
            <div style="font-weight: 800; color: var(--dark);">${r.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
              <span class="material-symbols-outlined icon-sm">hotel</span> ${htlName}
            </div>
          </td>
          <td><span class="badge badge-primary">${r.type}</span></td>
          <td><strong class="text-primary">${formatCurrency(r.price)}</strong></td>
          <td>${r.capacityAdults} Lớn, ${r.capacityChildren || 0} Nhỏ</td>
          <td>
            <div class="d-flex align-center gap-1" style="white-space: nowrap;">
              <input type="number" min="0" max="${totalQty}" value="${availableNum}" 
                     class="form-control form-control-sm input-quick-available" data-id="${r.id}" 
                     style="width: 62px; text-align: center; font-weight: 800; color: #0F2747; padding: 4px 6px; border-radius: 8px; border: 1.5px solid #cbd5e1; background: #ffffff;" 
                     title="Bấm vào để điều chỉnh nhanh số phòng trống">
              <span style="font-size: 0.8rem; color: #64748b; font-weight: 600;">/ ${totalQty}</span>
            </div>
          </td>
          <td>
            <select class="form-select form-select-sm select-room-status" data-id="${r.id}" style="padding: 6px 10px; font-size: 0.8125rem;">
              <option value="available" ${r.status === 'available' ? 'selected' : ''}>Trống (Sẵn sàng)</option>
              <option value="booked" ${r.status === 'booked' ? 'selected' : ''}>Đã đặt hết</option>
              <option value="maintenance" ${r.status === 'maintenance' ? 'selected' : ''}>Bảo trì</option>
            </select>
          </td>
          <td>
            <div class="table-actions">
              <button class="table-action-btn btn-edit-room" data-id="${r.id}" title="Sửa chi tiết"><span class="material-symbols-outlined icon-sm">edit</span></button>
              <button class="table-action-btn btn-delete btn-delete-room" data-id="${r.id}" data-name="${r.name}" title="Xóa"><span class="material-symbols-outlined icon-sm">delete</span></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Quick adjust available room count directly from table
    document.querySelectorAll('.input-quick-available').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const newCount = Math.max(0, parseInt(e.target.value, 10) || 0);
        const roomId = inp.dataset.id;
        const room = DB.getRoomById(roomId);
        const totalQty = room ? (room.quantity || 1) : 999;
        
        const finalCount = Math.min(newCount, totalQty);
        inp.value = finalCount;
        
        const newStatus = finalCount === 0 ? 'booked' : (room && room.status === 'booked' ? 'available' : (room ? room.status : 'available'));
        
        DB.updateRoom(roomId, { 
          availableCount: finalCount,
          status: newStatus
        });
        
        const statusSelect = inp.closest('tr')?.querySelector('.select-room-status');
        if (statusSelect) statusSelect.value = newStatus;
        
        Toast.success('Cập nhật phòng trống', `Đã điều chỉnh: ${finalCount}/${totalQty} phòng khả dụng.`);
        renderDashboardOverview();
      });
    });

    document.querySelectorAll('.select-room-status').forEach(sel => {
      sel.addEventListener('change', (e) => {
        DB.updateRoom(sel.dataset.id, { status: e.target.value });
        Toast.success('Cập nhật', 'Đã thay đổi trạng thái phòng thành công!');
      });
    });

    document.querySelectorAll('.btn-edit-room').forEach(btn => {
      btn.addEventListener('click', () => openEditRoomModal(btn.dataset.id));
    });

    document.querySelectorAll('.btn-delete-room').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm(`Bạn có chắc muốn xóa phòng "${btn.dataset.name}"?`)) {
          DB.deleteRoom(btn.dataset.id);
          Toast.success('Thành công', 'Đã xóa phòng khỏi hệ thống.');
          loadTable();
        }
      });
    });
  }

  loadTable();
}

function openEditRoomModal(roomId = null) {
  const modal = document.getElementById('modal-room-form');
  const titleEl = document.getElementById('modal-room-form-title');
  const form = document.getElementById('form-room-crud');
  const hotelSelect = document.getElementById('crud-room-hotel-id');

  if (hotelSelect) {
    hotelSelect.innerHTML = DB.getHotels().map(h => `<option value="${h.id}">${h.name} (${h.city})</option>`).join('');
  }

  if (roomId) {
    const r = DB.getRoomById(roomId);
    if (!r) return;
    titleEl.innerHTML = '<span class="material-symbols-outlined text-primary">edit</span> Sửa Thông Tin Phòng';
    document.getElementById('crud-room-id').value = r.id;
    if (hotelSelect) hotelSelect.value = r.hotelId;
    document.getElementById('crud-room-name').value = r.name;
    document.getElementById('crud-room-type').value = r.type;
    document.getElementById('crud-room-price').value = r.price;
    document.getElementById('crud-room-adults').value = r.capacityAdults;
    document.getElementById('crud-room-children').value = r.capacityChildren || 0;
    document.getElementById('crud-room-size').value = r.size;
    document.getElementById('crud-room-bed').value = r.bed;
    document.getElementById('crud-room-quantity').value = r.quantity || 1;
    const availInput = document.getElementById('crud-room-available-count');
    if (availInput) availInput.value = (r.availableCount !== undefined) ? r.availableCount : (r.quantity || 1);
    document.getElementById('crud-room-image').value = r.image || '';
    document.getElementById('crud-room-amenities').value = (r.amenities || []).join(', ');
    document.getElementById('crud-room-desc').value = r.description || '';
  } else {
    titleEl.innerHTML = '<span class="material-symbols-outlined text-primary">add_circle</span> Thêm Loại Phòng Mới';
    form.reset();
    document.getElementById('crud-room-id').value = '';
    const availInput = document.getElementById('crud-room-available-count');
    if (availInput) availInput.value = 5;
  }

  modal.classList.add('active');
}

// ==========================================================================
// 5. USER CRUD MODULE
// ==========================================================================
function renderUsersManagement() {
  const tbody = document.getElementById('tbody-admin-users');
  const searchInput = document.getElementById('search-admin-users');
  if (!tbody) return;

  function loadTable() {
    let users = DB.getUsers();
    const curUser = DB.getCurrentUser();
    const isAdmin = curUser && (curUser.role === 'ADMIN' || curUser.role === 'SUPER_ADMIN');

    const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (q) {
      users = users.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || (u.phone && u.phone.includes(q)));
    }

    tbody.innerHTML = users.map(u => {
      const uAvatarHtml = typeof getInitialsAvatar === 'function'
        ? getInitialsAvatar(u.name, '', 'width: 38px; height: 38px; font-size: 0.95rem; flex-shrink: 0;')
        : `<div class="user-avatar" style="width: 38px; height: 38px; background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; border-radius: 50%;">${(u.name || 'U')[0]}</div>`;
      
      const isTargetAdmin = u.role === 'ADMIN' || u.role === 'SUPER_ADMIN';

      // 1. Cột Vai trò & Cấp quyền: Chỉ ADMIN mới có quyền chọn đổi sang STAFF hoặc ngược lại
      let roleHtml = '';
      if (isTargetAdmin) {
        roleHtml = `<span class="badge badge-purple" style="font-weight: 800; display: inline-flex; align-items: center; gap: 4px;"><span class="material-symbols-outlined icon-sm" style="font-size: 14px;">shield_person</span> Quản Trị Viên</span>`;
      } else if (isAdmin) {
        roleHtml = `
          <select class="form-select form-select-sm select-user-role" data-id="${u.id}" data-name="${u.name}" style="padding: 4px 8px; font-size: 0.8rem; font-weight: 700; border-radius: 6px; cursor: pointer; ${u.role === 'STAFF' ? 'background: #eff6ff; color: #1e40af; border: 1.5px solid #60a5fa;' : 'background: #f8fafc; color: #334155; border: 1px solid #cbd5e1;'}">
            <option value="CUSTOMER" ${u.role === 'CUSTOMER' ? 'selected' : ''}>👤 Khách hàng</option>
            <option value="STAFF" ${u.role === 'STAFF' ? 'selected' : ''}>👔 Nhân viên (Staff)</option>
          </select>
        `;
      } else {
        // Staff chỉ xem vai trò (Read-only, không thể cấp quyền)
        roleHtml = `
          <span class="badge ${u.role === 'STAFF' ? 'badge-primary' : 'badge-outline'}" style="font-size: 0.8rem; font-weight: 700;">
            ${u.role === 'STAFF' ? '👔 Nhân viên (Staff)' : '👤 Khách hàng'}
          </span>
        `;
      }

      // 2. Cột Thao tác: Chỉ ADMIN mới có quyền khóa/mở hoặc xóa tài khoản
      let actionHtml = '';
      if (isTargetAdmin) {
        actionHtml = `<span class="text-muted" style="font-size: 0.78rem; font-weight: 600;">Root Admin</span>`;
      } else if (isAdmin) {
        actionHtml = `
          <div class="table-actions">
            <button class="table-action-btn btn-toggle-user" data-id="${u.id}" title="${u.status === 'active' ? 'Khóa tài khoản' : 'Mở khóa'}">
              <span class="material-symbols-outlined icon-sm ${u.status === 'active' ? 'text-warning' : 'text-success'}">${u.status === 'active' ? 'lock' : 'lock_open'}</span>
            </button>
            <button class="table-action-btn btn-delete btn-delete-user" data-id="${u.id}" data-name="${u.name}" title="Xóa tài khoản"><span class="material-symbols-outlined icon-sm">delete</span></button>
          </div>
        `;
      } else {
        actionHtml = `<span class="text-muted" style="font-size: 0.75rem; font-style: italic;">Chỉ xem</span>`;
      }

      return `
        <tr>
          <td>
            <div class="d-flex align-center gap-3">
              ${uAvatarHtml}
              <div>
                <div style="font-weight: 800; color: var(--dark);">${u.name}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">${u.email}</div>
              </div>
            </div>
          </td>
          <td>${u.phone || 'Chưa có'}</td>
          <td>${roleHtml}</td>
          <td><strong>${u.bookingCount || 0}</strong> lần</td>
          <td>${formatDate(u.createdAt)}</td>
          <td><span class="badge ${u.status === 'active' ? 'badge-success' : 'badge-danger'}">${u.status === 'active' ? 'Hoạt động' : 'Đã khóa'}</span></td>
          <td>${actionHtml}</td>
        </tr>
      `;
    }).join('');

    // Sự kiện Cấp quyền tài khoản (Chỉ Admin)
    document.querySelectorAll('.select-user-role').forEach(sel => {
      sel.addEventListener('change', () => {
        if (!isAdmin) {
          Toast.error('Không đủ quyền hạn', 'Chỉ Quản trị viên (ADMIN) mới có quyền cấp quyền Staff.');
          loadTable();
          return;
        }
        const userId = sel.dataset.id;
        const userName = sel.dataset.name;
        const newRole = sel.value;
        const roleName = newRole === 'STAFF' ? '👔 Nhân viên (STAFF)' : '👤 Khách hàng (CUSTOMER)';

        if (confirm(`Xác nhận phân quyền: Bạn có chắc chắn muốn cấp quyền cho tài khoản "${userName}" thành [${roleName}] không?`)) {
          DB.updateUser(userId, { role: newRole });
          Toast.success('Cấp quyền thành công', `Đã chuyển đổi vai trò của "${userName}" thành [${roleName}]!`);
          loadTable();
          renderDashboardOverview();
        } else {
          loadTable();
        }
      });
    });

    // Sự kiện Khóa / Mở khóa tài khoản (Chỉ Admin)
    document.querySelectorAll('.btn-toggle-user').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!isAdmin) {
          Toast.error('Từ chối truy cập', 'Chỉ Quản trị viên (ADMIN) mới có quyền khóa/mở khóa tài khoản.');
          return;
        }
        DB.toggleUserStatus(btn.dataset.id);
        Toast.info('Tài khoản', 'Đã cập nhật trạng thái tài khoản người dùng.');
        loadTable();
      });
    });

    // Sự kiện Xóa tài khoản (Chỉ Admin)
    document.querySelectorAll('.btn-delete-user').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!isAdmin) {
          Toast.error('Từ chối truy cập', 'Chỉ Quản trị viên (ADMIN) mới có quyền xóa tài khoản.');
          return;
        }
        if (confirm(`Bạn có chắc chắn muốn xóa người dùng "${btn.dataset.name}"?`)) {
          DB.deleteUser(btn.dataset.id);
          Toast.success('Thành công', 'Đã xóa người dùng khỏi hệ thống.');
          loadTable();
          renderDashboardOverview();
        }
      });
    });
  }

  if (searchInput) searchInput.addEventListener('input', loadTable);
  loadTable();
}

// ==========================================================================
// 6. BOOKINGS CRUD MODULE
// ==========================================================================
function renderBookingsManagement() {
  const tbody = document.getElementById('tbody-admin-bookings');
  const statusFilter = document.getElementById('filter-admin-bookings-status');
  if (!tbody) return;

  function loadTable() {
    let bookings = DB.getBookings();
    const filterVal = statusFilter ? statusFilter.value : '';
    if (filterVal) {
      bookings = bookings.filter(b => b.status === filterVal);
    }

    tbody.innerHTML = bookings.map(b => {
      const badge = getBookingStatusBadge(b.status);
      return `
        <tr>
          <td><strong class="text-primary">${b.code}</strong></td>
          <td>
            <div style="font-weight: 800; color: var(--dark);">${b.customerName}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${b.customerPhone}</div>
          </td>
          <td>
            <div style="font-weight: 700; color: var(--dark);">${b.hotelName}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${b.roomName}</div>
          </td>
          <td>${formatDate(b.checkIn)} → ${formatDate(b.checkOut)}</td>
          <td><strong class="text-primary font-bold">${formatCurrency(b.totalAmount)}</strong></td>
          <td>
            <select class="form-select form-select-sm select-booking-status" data-id="${b.id}" style="padding: 6px 10px; font-size: 0.8125rem;">
              <option value="Chờ xác nhận" ${b.status === 'Chờ xác nhận' ? 'selected' : ''}>Chờ xác nhận</option>
              <option value="Đã xác nhận" ${b.status === 'Đã xác nhận' ? 'selected' : ''}>Đã xác nhận</option>
              <option value="Đã nhận phòng" ${b.status === 'Đã nhận phòng' ? 'selected' : ''}>Đã nhận phòng</option>
              <option value="Đã trả phòng" ${b.status === 'Đã trả phòng' ? 'selected' : ''}>Đã trả phòng</option>
              <option value="Đã hủy" ${b.status === 'Đã hủy' ? 'selected' : ''}>Đã hủy</option>
            </select>
          </td>
          <td>
            <div class="table-actions">
              <button class="table-action-btn btn-view-booking-invoice" data-id="${b.id}" title="Xem & In hóa đơn"><span class="material-symbols-outlined icon-sm">receipt_long</span></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.select-booking-status').forEach(sel => {
      sel.addEventListener('change', (e) => {
        DB.updateBookingStatus(sel.dataset.id, e.target.value);
        Toast.success('Cập nhật', `Đã chuyển trạng thái đơn hàng thành "${e.target.value}".`);
        renderDashboardOverview();
      });
    });

    document.querySelectorAll('.btn-view-booking-invoice').forEach(btn => {
      btn.addEventListener('click', () => {
        const b = DB.getBookingById(btn.dataset.id);
        if (b) showInvoiceModal(b);
      });
    });
  }

  if (statusFilter) statusFilter.addEventListener('change', loadTable);
  loadTable();
}

// ==========================================================================
// 7. REVIEWS CRUD MODULE
// ==========================================================================
function renderReviewsManagement() {
  const tbody = document.getElementById('tbody-admin-reviews');
  if (!tbody) return;

  function loadTable() {
    const reviews = DB.getReviews();
    const curUser = DB.getCurrentUser();

    tbody.innerHTML = reviews.map(r => {
      const htl = DB.getHotelById(r.hotelId);
      const htlName = r.hotelName || (htl ? htl.name : 'Khách sạn');
      const starCount = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5)));
      const starIcons = Array(starCount).fill('<span class="material-symbols-outlined text-accent icon-fill icon-sm">star</span>').join('');

      const photosBadge = (r.images && r.images.length)
        ? `<div style="margin-top: 4px;"><span class="badge badge-primary" style="font-size: 0.72rem;">📷 ${r.images.length} ảnh thực tế</span></div>`
        : '';

      const replyBadge = r.reply
        ? `<div style="margin-top: 6px; padding: 4px 8px; background: var(--primary-soft); border-radius: 4px; font-size: 0.75rem; color: var(--primary); border-left: 2px solid var(--primary);">
            <strong>Đã phản hồi:</strong> "${truncateText(r.reply.comment, 40)}"
           </div>`
        : '';

      return `
        <tr>
          <td>
            <div style="font-weight: 800; color: var(--dark);">${htlName}</div>
            ${photosBadge}
          </td>
          <td>
            <div style="font-weight: 700;">${r.userName}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${formatDate(r.date || r.createdAt)}</div>
          </td>
          <td>${starIcons}</td>
          <td>
            <div style="font-size: 0.875rem; max-width: 320px;">"${truncateText(r.comment, 75)}"</div>
            ${replyBadge}
          </td>
          <td><span class="badge ${r.status === 'visible' ? 'badge-success' : 'badge-warning'}">${r.status === 'visible' ? 'Hiển thị' : 'Đã ẩn'}</span></td>
          <td>
            <div class="table-actions">
              <button class="table-action-btn btn-reply-admin-review" data-id="${r.id}" data-name="${r.userName}" data-reply="${encodeURIComponent(r.reply ? r.reply.comment : '')}" title="Phản hồi đánh giá">
                <span class="material-symbols-outlined icon-sm text-primary">reply</span>
              </button>
              <button class="table-action-btn btn-toggle-review" data-id="${r.id}" title="${r.status === 'visible' ? 'Ẩn đánh giá' : 'Hiện đánh giá'}">
                <span class="material-symbols-outlined icon-sm ${r.status === 'visible' ? 'text-warning' : 'text-success'}">${r.status === 'visible' ? 'visibility_off' : 'visibility'}</span>
              </button>
              <button class="table-action-btn btn-delete btn-delete-review" data-id="${r.id}" title="Xóa đánh giá"><span class="material-symbols-outlined icon-sm">delete</span></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.btn-reply-admin-review').forEach(btn => {
      btn.addEventListener('click', () => {
        const revId = btn.dataset.id;
        const userName = btn.dataset.name;
        const currentReply = decodeURIComponent(btn.dataset.reply || '');
        const newReply = prompt(`Nhập nội dung phản hồi chính thức cho khách hàng "${userName}":`, currentReply);
        if (newReply !== null && newReply.trim()) {
          DB.replyReview(revId, {
            comment: newReply.trim(),
            responderName: curUser ? `${curUser.name} (Admin)` : 'Ban Quản Lý Khách Sạn'
          });
          Toast.success('Thành công', 'Đã lưu phản hồi của khách sạn.');
          loadTable();
        }
      });
    });

    document.querySelectorAll('.btn-toggle-review').forEach(btn => {
      btn.addEventListener('click', () => {
        DB.toggleReviewVisibility(btn.dataset.id);
        Toast.info('Đánh giá', 'Đã thay đổi trạng thái hiển thị đánh giá.');
        loadTable();
      });
    });

    document.querySelectorAll('.btn-delete-review').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa đánh giá này?')) {
          DB.deleteReview(btn.dataset.id);
          Toast.success('Thành công', 'Đã xóa đánh giá khỏi hệ thống.');
          loadTable();
        }
      });
    });
  }

  loadTable();
}

// ==========================================================================
// 8. PROMOTIONS CRUD MODULE
// ==========================================================================
function renderPromotionsManagement() {
  const tbody = document.getElementById('tbody-admin-promotions');
  if (!tbody) return;

  function loadTable() {
    const promos = DB.getPromotions();

    tbody.innerHTML = promos.map(p => `
      <tr>
        <td><strong class="text-primary font-bold" style="letter-spacing: 1px;">${p.code}</strong></td>
        <td>
          <div style="font-weight: 700;">${p.title}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${p.description || ''}</div>
        </td>
        <td><strong class="text-danger">${p.discountPercent > 0 ? `Giảm ${p.discountPercent}%` : `-${formatCurrency(p.discountAmount)}`}</strong></td>
        <td>${formatDate(p.startDate)} → ${formatDate(p.endDate)}</td>
        <td><strong>${p.usageCount || 0} / ${p.usageLimit || '∞'}</strong></td>
        <td><span class="badge ${p.status === 'active' ? 'badge-success' : 'badge-danger'}">${p.status === 'active' ? 'Kích hoạt' : 'Tạm dừng'}</span></td>
        <td>
          <div class="table-actions">
            <button class="table-action-btn btn-toggle-promo" data-id="${p.id}" title="${p.status === 'active' ? 'Tạm dừng' : 'Kích hoạt'}">
              <span class="material-symbols-outlined icon-sm ${p.status === 'active' ? 'text-warning' : 'text-success'}">${p.status === 'active' ? 'pause' : 'play_arrow'}</span>
            </button>
            <button class="table-action-btn btn-edit-promo" data-id="${p.id}" title="Sửa"><span class="material-symbols-outlined icon-sm">edit</span></button>
            <button class="table-action-btn btn-delete btn-delete-promo" data-id="${p.id}" data-code="${p.code}" title="Xóa"><span class="material-symbols-outlined icon-sm">delete</span></button>
          </div>
        </td>
      </tr>
    `).join('');

    document.querySelectorAll('.btn-toggle-promo').forEach(btn => {
      btn.addEventListener('click', () => {
        DB.togglePromotion(btn.dataset.id);
        Toast.info('Voucher', 'Đã cập nhật trạng thái mã khuyến mãi.');
        loadTable();
      });
    });

    document.querySelectorAll('.btn-edit-promo').forEach(btn => {
      btn.addEventListener('click', () => openEditPromoModal(btn.dataset.id));
    });

    document.querySelectorAll('.btn-delete-promo').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm(`Bạn có chắc muốn xóa mã khuyến mãi "${btn.dataset.code}"?`)) {
          DB.deletePromotion(btn.dataset.id);
          Toast.success('Thành công', 'Đã xóa mã khuyến mãi.');
          loadTable();
        }
      });
    });
  }

  loadTable();
}

function openEditPromoModal(promoId = null) {
  const modal = document.getElementById('modal-promo-form');
  const titleEl = document.getElementById('modal-promo-form-title');
  const form = document.getElementById('form-promo-crud');

  if (promoId) {
    const p = DB.getPromotions().find(x => x.id === promoId);
    if (!p) return;
    titleEl.innerHTML = '<span class="material-symbols-outlined text-primary">edit</span> Sửa Mã Khuyến Mãi';
    document.getElementById('crud-promo-id').value = p.id;
    document.getElementById('crud-promo-code').value = p.code;
    document.getElementById('crud-promo-title').value = p.title;
    document.getElementById('crud-promo-percent').value = p.discountPercent || 0;
    document.getElementById('crud-promo-amount').value = p.discountAmount || 0;
    document.getElementById('crud-promo-max').value = p.discountMax || 0;
    document.getElementById('crud-promo-min-spend').value = p.minSpend || 0;
    document.getElementById('crud-promo-start').value = p.startDate;
    document.getElementById('crud-promo-end').value = p.endDate;
    document.getElementById('crud-promo-limit').value = p.usageLimit || 500;
  } else {
    titleEl.innerHTML = '<span class="material-symbols-outlined text-primary">add_circle</span> Thêm Mã Khuyến Mãi Mới';
    form.reset();
    document.getElementById('crud-promo-id').value = '';
    document.getElementById('crud-promo-start').value = new Date().toISOString().split('T')[0];
  }

  modal.classList.add('active');
}


// ==========================================================================
// 9. ARTICLE / NEWS CRUD MODULE
// ==========================================================================
function renderArticlesManagement() {
  const tbody = document.getElementById('tbody-admin-articles');
  const searchInput = document.getElementById('admin-search-articles');
  const statusFilter = document.getElementById('admin-filter-article-status');
  if (!tbody) return;

  function loadTable() {
    let articles = DB.getArticles();
    const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const status = statusFilter ? statusFilter.value : 'all';

    if (q) {
      articles = articles.filter(a =>
        (a.title || '').toLowerCase().includes(q) ||
        (a.category || '').toLowerCase().includes(q) ||
        (a.author || '').toLowerCase().includes(q)
      );
    }
    if (status !== 'all') {
      articles = articles.filter(a => a.status === status);
    }

    if (!articles.length) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:36px;color:var(--text-muted);">Chưa có bài viết nào phù hợp.</td></tr>`;
      return;
    }

    tbody.innerHTML = articles.map(a => `
      <tr>
        <td>
          <img src="${a.image || 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=200&q=80'}" alt="${a.title}" class="table-img" style="width:56px;height:42px;object-fit:cover;border-radius:6px;">
        </td>
        <td>
          <div style="font-weight: 800; color: var(--dark); font-size: 0.92rem;">${a.title}</div>
          <div style="font-size: 0.77rem; color: var(--text-muted); margin-top: 2px;">
            ${a.featured ? '<span class="badge badge-accent" style="padding: 2px 6px; font-size: 0.7rem; margin-right: 4px;">⭐ Nổi bật</span>' : ''}
            Slug: <code>${a.slug || a.id}</code>
          </div>
        </td>
        <td>
          <span class="badge badge-primary">${a.category}</span>
        </td>
        <td>${formatDate(a.createdAt)}</td>
        <td><strong class="text-primary">${(a.views || 0).toLocaleString('vi-VN')}</strong></td>
        <td>
          <span class="badge ${a.status === 'published' ? 'badge-success' : 'badge-warning'}">
            ${a.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
          </span>
        </td>
        <td>
          <div class="table-actions">
            <a href="../news/detail.html?id=${a.id}" target="_blank" class="table-action-btn" title="Xem trước"><span class="material-symbols-outlined icon-sm">visibility</span></a>
            <button class="table-action-btn btn-edit-article" data-id="${a.id}" title="Chỉnh sửa"><span class="material-symbols-outlined icon-sm">edit</span></button>
            <button class="table-action-btn btn-delete btn-delete-article" data-id="${a.id}" data-title="${a.title}" title="Xóa"><span class="material-symbols-outlined icon-sm">delete</span></button>
          </div>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.btn-edit-article').forEach(btn => {
      btn.addEventListener('click', () => openEditArticleModal(btn.dataset.id));
    });

    tbody.querySelectorAll('.btn-delete-article').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm(`Bạn có chắc chắn muốn xóa bài viết "${btn.dataset.title}"?`)) {
          DB.deleteArticle(btn.dataset.id);
          Toast.success('Thành công', 'Đã xóa bài viết khỏi hệ thống.');
          loadTable();
          renderDashboardOverview();
        }
      });
    });
  }

  if (searchInput) searchInput.addEventListener('input', loadTable);
  if (statusFilter) statusFilter.addEventListener('change', loadTable);

  loadTable();
}

function openEditArticleModal(id = null) {
  const modal = document.getElementById('modal-article-form');
  const modalTitle = document.getElementById('modal-article-form-title');
  if (!modal) return;

  const idInput = document.getElementById('crud-article-id');
  const titleInput = document.getElementById('crud-article-title');
  const categoryInput = document.getElementById('crud-article-category');
  const colorInput = document.getElementById('crud-article-color');
  const imageInput = document.getElementById('crud-article-image');
  const excerptInput = document.getElementById('crud-article-excerpt');
  const contentInput = document.getElementById('crud-article-content');
  const readtimeInput = document.getElementById('crud-article-readtime');
  const tagsInput = document.getElementById('crud-article-tags');
  const statusInput = document.getElementById('crud-article-status');
  const featuredInput = document.getElementById('crud-article-featured');

  if (id) {
    const a = DB.getArticleById(id);
    if (!a) return;
    if (modalTitle) modalTitle.textContent = 'Chỉnh sửa bài viết';
    if (idInput) idInput.value = a.id;
    if (titleInput) titleInput.value = a.title || '';
    if (categoryInput) categoryInput.value = a.category || '';
    if (colorInput) colorInput.value = a.categoryColor || 'primary';
    if (imageInput) imageInput.value = a.image || '';
    if (excerptInput) excerptInput.value = a.excerpt || '';
    if (contentInput) contentInput.value = a.content || '';
    if (readtimeInput) readtimeInput.value = a.readTime || 5;
    if (tagsInput) tagsInput.value = (a.tags || []).join(', ');
    if (statusInput) statusInput.value = a.status || 'published';
    if (featuredInput) featuredInput.checked = !!a.featured;
  } else {
    if (modalTitle) modalTitle.textContent = 'Thêm bài viết mới';
    if (idInput) idInput.value = '';
    if (titleInput) titleInput.value = '';
    if (categoryInput) categoryInput.value = 'Cẩm nang du lịch';
    if (colorInput) colorInput.value = 'primary';
    if (imageInput) imageInput.value = 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80';
    if (excerptInput) excerptInput.value = '';
    if (contentInput) contentInput.value = '<p>Nội dung bài viết...</p>';
    if (readtimeInput) readtimeInput.value = '6';
    if (tagsInput) tagsInput.value = 'Du lịch, Nghỉ dưỡng';
    if (statusInput) statusInput.value = 'published';
    if (featuredInput) featuredInput.checked = false;
  }

  modal.classList.add('active');
}

// ==========================================================================
// ==========================================================================
// 9. REVENUE ANALYTICS & EXPORT
// ==========================================================================
function renderRevenueAnalytics() {
  const stats = DB.getDashboardStats();
  const revToday = document.getElementById('analytics-rev-today');
  const revWeek = document.getElementById('analytics-rev-week');
  const revMonth = document.getElementById('analytics-rev-month');
  const revYear = document.getElementById('analytics-rev-year');

  if (revToday) revToday.textContent = formatCurrency(stats.totalRevenue * 0.08);
  if (revWeek) revWeek.textContent = formatCurrency(stats.totalRevenue * 0.35);
  if (revMonth) revMonth.textContent = formatCurrency(stats.totalRevenue);
  if (revYear) revYear.textContent = formatCurrency(stats.totalRevenue * 3.5);

  const btnExport = document.getElementById('btn-export-revenue-csv');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      exportBookingsToCSV();
    });
  }
}

function exportBookingsToCSV() {
  const bookings = DB.getBookings();
  let csv = 'Mã đơn,Khách hàng,SĐT,Khách sạn,Loại phòng,Ngày nhận,Ngày trả,Tổng tiền (VNĐ),Trạng thái\n';

  bookings.forEach(b => {
    csv += `"${b.code}","${b.customerName}","${b.customerPhone}","${b.hotelName}","${b.roomName}","${b.checkIn}","${b.checkOut}",${b.totalAmount},"${b.status}"\n`;
  });

  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Bao_Cao_Doanh_Thu_HotelBooking_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  Toast.success('Xuất file thành công', 'Đã tải xuống file báo cáo doanh thu CSV.');
}

// ==========================================================================
// 10. SETUP ADMIN CRUD FORM SUBMISSIONS
// ==========================================================================
function setupAdminModals() {
  const formHotel = document.getElementById('form-hotel-crud');
  if (formHotel) {
    formHotel.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('crud-hotel-id').value;
      const hotelData = {
        name: document.getElementById('crud-hotel-name').value.trim(),
        city: document.getElementById('crud-hotel-city').value,
        address: document.getElementById('crud-hotel-address').value.trim(),
        stars: Number(document.getElementById('crud-hotel-stars').value),
        category: (document.getElementById('crud-hotel-category')?.value) || 'hotel',
        priceMin: Number(document.getElementById('crud-hotel-price').value),
        type: document.getElementById('crud-hotel-type').value,
        image: document.getElementById('crud-hotel-image').value.trim() || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        amenities: document.getElementById('crud-hotel-amenities').value.split(',').map(s => s.trim()).filter(Boolean),
        description: document.getElementById('crud-hotel-desc').value.trim()
      };

      if (id) {
        DB.updateHotel(id, hotelData);
        Toast.success('Thành công', 'Đã cập nhật thông tin khách sạn.');
      } else {
        DB.addHotel(hotelData);
        Toast.success('Thành công', 'Đã thêm khách sạn mới vào hệ thống.');
      }

      document.getElementById('modal-hotel-form').classList.remove('active');
      renderHotelsManagement();
      renderDashboardOverview();
    });
  }

  const formRoom = document.getElementById('form-room-crud');
  if (formRoom) {
    formRoom.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('crud-room-id').value;
      const roomData = {
        hotelId: document.getElementById('crud-room-hotel-id').value,
        name: document.getElementById('crud-room-name').value.trim(),
        type: document.getElementById('crud-room-type').value,
        price: Number(document.getElementById('crud-room-price').value),
        capacityAdults: Number(document.getElementById('crud-room-adults').value),
        capacityChildren: Number(document.getElementById('crud-room-children').value),
        size: Number(document.getElementById('crud-room-size').value),
        bed: document.getElementById('crud-room-bed').value.trim(),
        quantity: Number(document.getElementById('crud-room-quantity').value) || 1,
        availableCount: document.getElementById('crud-room-available-count') ? Number(document.getElementById('crud-room-available-count').value) : Number(document.getElementById('crud-room-quantity').value),
        image: document.getElementById('crud-room-image').value.trim() || 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
        amenities: document.getElementById('crud-room-amenities').value.split(',').map(s => s.trim()).filter(Boolean),
        description: document.getElementById('crud-room-desc').value.trim()
      };

      if (id) {
        DB.updateRoom(id, roomData);
        Toast.success('Thành công', 'Đã cập nhật loại phòng.');
      } else {
        DB.addRoom(roomData);
        Toast.success('Thành công', 'Đã thêm phòng mới vào khách sạn.');
      }

      document.getElementById('modal-room-form').classList.remove('active');
      renderRoomsManagement();
    });
  }

  const formPromo = document.getElementById('form-promo-crud');
  if (formPromo) {
    formPromo.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('crud-promo-id').value;
      const promoData = {
        code: document.getElementById('crud-promo-code').value.trim().toUpperCase(),
        title: document.getElementById('crud-promo-title').value.trim(),
        discountPercent: Number(document.getElementById('crud-promo-percent').value) || 0,
        discountAmount: Number(document.getElementById('crud-promo-amount').value) || 0,
        discountMax: Number(document.getElementById('crud-promo-max').value) || 0,
        minSpend: Number(document.getElementById('crud-promo-min-spend').value) || 0,
        startDate: document.getElementById('crud-promo-start').value,
        endDate: document.getElementById('crud-promo-end').value,
        usageLimit: Number(document.getElementById('crud-promo-limit').value) || 500
      };

      if (id) {
        DB.updatePromotion(id, promoData);
        Toast.success('Thành công', 'Đã cập nhật mã giảm giá.');
      } else {
        DB.addPromotion(promoData);
        Toast.success('Thành công', 'Đã tạo mã khuyến mãi mới.');
      }

      document.getElementById('modal-promo-form').classList.remove('active');
      renderPromotionsManagement();
    });
  }

  const formArticle = document.getElementById('form-article-crud');
  if (formArticle) {
    formArticle.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('crud-article-id').value;
      const title = document.getElementById('crud-article-title').value.trim();
      const slug = title.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      const articleData = {
        title,
        slug: slug || 'bai-viet',
        category: document.getElementById('crud-article-category').value.trim(),
        categoryColor: document.getElementById('crud-article-color').value,
        image: document.getElementById('crud-article-image').value.trim() || 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
        excerpt: document.getElementById('crud-article-excerpt').value.trim(),
        content: document.getElementById('crud-article-content').value.trim(),
        readTime: Number(document.getElementById('crud-article-readtime').value) || 5,
        tags: document.getElementById('crud-article-tags').value.split(',').map(s => s.trim()).filter(Boolean),
        status: document.getElementById('crud-article-status').value,
        featured: document.getElementById('crud-article-featured').checked,
        author: 'Biên tập viên HotelBooking',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
      };

      if (articleData.featured) {
        DB.getArticles().forEach(a => {
          if (a.id !== id && a.featured) DB.updateArticle(a.id, { featured: false });
        });
      }

      if (id) {
        DB.updateArticle(id, articleData);
        Toast.success('Thành công', 'Đã cập nhật bài viết.');
      } else {
        DB.addArticle(articleData);
        Toast.success('Thành công', 'Đã thêm bài viết mới.');
      }

      document.getElementById('modal-article-form').classList.remove('active');
      renderArticlesManagement();
      renderDashboardOverview();
    });
  }

  document.getElementById('btn-open-add-hotel')?.addEventListener('click', () => openEditHotelModal());
  document.getElementById('btn-open-add-room')?.addEventListener('click', () => openEditRoomModal());
  document.getElementById('btn-open-add-promo')?.addEventListener('click', () => openEditPromoModal());
  document.getElementById('btn-open-add-article')?.addEventListener('click', () => openEditArticleModal());

  document.querySelectorAll('.modal-close, .btn-modal-cancel').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  document.getElementById('btn-admin-reset-db')?.addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn khôi phục toàn bộ cơ sở dữ liệu về dữ liệu mẫu ban đầu?')) {
      DB.resetToDefault();
      Toast.success('Đã khôi phục', 'Dữ liệu đã được đặt lại về trạng thái ban đầu.');
      setTimeout(() => location.reload(), 1000);
    }
  });
}

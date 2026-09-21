/* ==========================================================================
   HOTELBOOKING - AUTHENTICATION & USER SERVICE (auth.js)
   ========================================================================== */

class AuthService {
  constructor() {
    this.currentUser = DB.getCurrentUser();
    this.initNavbar();
  }

  /**
   * Đăng nhập hệ thống
   * @param {string} email 
   * @param {string} password 
   * @param {boolean} remember 
   * @returns {{ success: boolean, message: string, user?: object }}
   */
  login(email, password, remember = false) {
    if (!email || !password) {
      return { success: false, message: 'Vui lòng điền đầy đủ email và mật khẩu.' };
    }

    const user = DB.getUserByEmail(email);
    if (!user) {
      return { success: false, message: 'Tài khoản email không tồn tại trong hệ thống.' };
    }

    if (user.status === 'blocked') {
      return { success: false, message: 'Tài khoản của bạn đã bị khóa. Vui lòng liên hệ quản trị viên.' };
    }

    if (user.password !== password) {
      return { success: false, message: 'Mật khẩu không chính xác.' };
    }

    // Đăng nhập thành công
    this.currentUser = user;
    DB.setCurrentUser(user);

    if (remember) {
      localStorage.setItem('HB_REMEMBER_EMAIL', email);
    } else {
      localStorage.removeItem('HB_REMEMBER_EMAIL');
    }

    return { success: true, message: 'Đăng nhập thành công!', user };
  }

  /**
   * Đăng ký tài khoản khách hàng mới
   */
  register({ name, email, phone, password, confirmPassword }) {
    if (!name || !email || !phone || !password) {
      return { success: false, message: 'Vui lòng điền đầy đủ các thông tin bắt buộc.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'Địa chỉ email không hợp lệ.' };
    }

    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      return { success: false, message: 'Số điện thoại phải từ 10-11 chữ số.' };
    }

    if (password.length < 6) {
      return { success: false, message: 'Mật khẩu phải chứa ít nhất 6 ký tự.' };
    }

    if (password !== confirmPassword) {
      return { success: false, message: 'Xác nhận mật khẩu không trùng khớp.' };
    }

    const existing = DB.getUserByEmail(email);
    if (existing) {
      return { success: false, message: 'Email này đã được đăng ký tài khoản.' };
    }

    const newUser = DB.createUser({
      name,
      email,
      phone,
      password,
      role: 'CUSTOMER'
    });

    this.currentUser = newUser;
    DB.setCurrentUser(newUser);

    return { success: true, message: 'Đăng ký tài khoản thành công!', user: newUser };
  }

  /**
   * Đăng xuất
   */
  logout() {
    this.currentUser = null;
    DB.setCurrentUser(null);
    Toast.info('Thông báo', 'Bạn đã đăng xuất khỏi hệ thống.');
    setTimeout(() => {
      window.location.href = getRootPath() + 'index.html';
    }, 500);
  }

  /**
   * Đổi mật khẩu
   */
  changePassword(oldPassword, newPassword, confirmNewPassword) {
    if (!this.currentUser) {
      return { success: false, message: 'Vui lòng đăng nhập.' };
    }

    if (this.currentUser.password !== oldPassword) {
      return { success: false, message: 'Mật khẩu hiện tại không đúng.' };
    }

    if (newPassword.length < 6) {
      return { success: false, message: 'Mật khẩu mới phải có ít nhất 6 ký tự.' };
    }

    if (newPassword !== confirmNewPassword) {
      return { success: false, message: 'Xác nhận mật khẩu mới không khớp.' };
    }

    DB.updateUser(this.currentUser.id, { password: newPassword });
    this.currentUser.password = newPassword;
    return { success: true, message: 'Đổi mật khẩu thành công!' };
  }

  /**
   * Cập nhật thông tin hồ sơ
   */
  updateProfile(updateData) {
    if (!this.currentUser) return { success: false, message: 'Vui lòng đăng nhập.' };
    const updated = DB.updateUser(this.currentUser.id, updateData);
    this.currentUser = updated;
    return { success: true, message: 'Cập nhật thông tin thành công!', user: updated };
  }

  /**
   * Kiểm tra quyền đăng nhập
   */
  requireAuth(redirectUrl = null) {
    if (!this.currentUser) {
      const target = redirectUrl || window.location.href;
      window.location.href = `${getRootPath()}pages/auth/login.html?redirect=${encodeURIComponent(target)}`;
      return false;
    }
    return true;
  }

  /**
   * Kiểm tra quyền Admin
   */
  /**
   * Kiểm tra quyền Admin & Super Admin
   */
  requireAdmin() {
    if (!this.currentUser || (this.currentUser.role !== 'ADMIN' && this.currentUser.role !== 'SUPER_ADMIN')) {
      Toast.error('Yêu cầu quyền Admin', 'Vui lòng đăng nhập tài khoản Quản trị viên (admin@hotelbooking.vn / admin123)');
      setTimeout(() => {
        window.location.href = getRootPath() + 'pages/auth/login.html?redirect=' + encodeURIComponent(window.location.href);
      }, 1000);
      return false;
    }
    return true;
  }

  /**
   * Kiểm tra quyền Nhân viên hoặc Quản trị viên (Staff / Admin / Super Admin)
   */
  requireStaffOrAdmin() {
    if (!this.currentUser || (this.currentUser.role !== 'STAFF' && this.currentUser.role !== 'ADMIN' && this.currentUser.role !== 'SUPER_ADMIN')) {
      Toast.error('Yêu cầu quyền truy cập', 'Vui lòng đăng nhập tài khoản Nhân viên hoặc Quản trị viên.');
      setTimeout(() => {
        window.location.href = getRootPath() + 'pages/auth/login.html?redirect=' + encodeURIComponent(window.location.href);
      }, 1000);
      return false;
    }
    return true;
  }

  /**
   * Tự động khởi tạo & Render Header Navbar tương ứng với trạng thái đăng nhập
   */
  initNavbar() {
    const run = () => {
      this.renderNavUserSection();
      this.initUserDropdownEvents();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }

  renderNavUserSection() {
    const navActions = document.getElementById('nav-user-actions');
    if (!navActions) return;

    const root = getRootPath();
    const user = this.currentUser;

    if (user) {
      const isStaffOrAdmin = user.role === 'ADMIN' || user.role === 'SUPER_ADMIN' || user.role === 'STAFF';
      const roleLabel = {
        'SUPER_ADMIN': '👑 Tổng Quản Trị',
        'ADMIN': '💼 Quản Trị Viên',
        'STAFF': '👔 Nhân Viên Tiếp Tân',
        'CUSTOMER': '👤 Khách Hàng Thân Thiết'
      }[user.role] || '👤 Thành Viên';

      const avatarHtml = typeof getInitialsAvatar === 'function'
        ? getInitialsAvatar(user.name, 'user-avatar')
        : `<div class="user-avatar" style="background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800;">${(user.name || 'U')[0]}</div>`;

      navActions.innerHTML = `
        <div class="user-menu-wrapper">
          <button class="user-profile-btn" id="user-profile-toggle">
            ${avatarHtml}
            <span class="user-name">${user.name}</span>
            <span class="material-symbols-outlined" style="font-size: 18px; color: var(--text-muted);">expand_more</span>
          </button>
          
          <div class="user-dropdown" id="user-dropdown-menu">
            <div class="dropdown-header">
              <div class="dropdown-user-name">${user.name}</div>
              <div class="dropdown-user-role">${roleLabel}</div>
            </div>
            
            ${isStaffOrAdmin ? `
              <a href="${root}pages/admin/index.html" class="dropdown-item" style="color: var(--primary); font-weight: 700;">
                <span class="material-symbols-outlined" style="color: var(--primary);">dashboard</span> Quản Trị Hệ Thống (Portal)
              </a>
              <div class="dropdown-divider"></div>
            ` : ''}

            <a href="${root}pages/profile/index.html?tab=profile" class="dropdown-item">
              <span class="material-symbols-outlined">person</span> Hồ sơ cá nhân
            </a>
            <a href="${root}pages/profile/index.html?tab=favorites" class="dropdown-item" style="color: #e11d48; font-weight: 600;">
              <span class="material-symbols-outlined" style="color: #e11d48;">favorite</span> Khách sạn yêu thích
            </a>
            <a href="${root}pages/profile/index.html?tab=bookings" class="dropdown-item">
              <span class="material-symbols-outlined">history</span> Lịch sử đặt phòng
            </a>
            <a href="${root}pages/profile/index.html?tab=reviews" class="dropdown-item">
              <span class="material-symbols-outlined">reviews</span> Đánh giá của tôi
            </a>
            <a href="${root}pages/profile/index.html?tab=security" class="dropdown-item">
              <span class="material-symbols-outlined">lock_reset</span> Đổi mật khẩu
            </a>
            
            <div class="dropdown-divider"></div>
            <button class="dropdown-item text-danger" id="btn-logout" style="width: 100%; border: none; background: none; cursor: pointer;">
              <span class="material-symbols-outlined">logout</span> Đăng xuất
            </button>
          </div>
        </div>
      `;
    } else {
      navActions.innerHTML = `
        <a href="${root}pages/auth/login.html" class="nav-auth-btn btn-outline">
          Đăng nhập
        </a>
        <a href="${root}pages/auth/register.html" class="nav-auth-btn btn-primary">
          Đăng ký
        </a>
      `;
    }
  }

  initUserDropdownEvents() {
    const toggleBtn = document.getElementById('user-profile-toggle');
    const dropdown = document.getElementById('user-dropdown-menu');
    const logoutBtn = document.getElementById('btn-logout');

    if (toggleBtn && dropdown) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
          dropdown.classList.remove('show');
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.logout();
      });
    }

    // Mobile nav toggle
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  }
}

/**
 * Trợ giúp lấy đường dẫn gốc tương đối cho các trang con
 */
function getRootPath() {
  const path = window.location.pathname;
  if (path.includes('/pages/hotels/') || path.includes('/pages/rooms/') || path.includes('/pages/booking/') || path.includes('/pages/auth/') || path.includes('/pages/profile/') || path.includes('/pages/admin/') || path.includes('/pages/news/')) {
    return '../../';
  } else if (path.includes('/pages/')) {
    return '../';
  }
  return './';
}

const Auth = new AuthService();
window.Auth = Auth;
window.getRootPath = getRootPath;

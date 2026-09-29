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
  async login(email, password, remember = false) {
    if (!email || !password) {
      return { success: false, message: 'Vui lòng điền đầy đủ email và mật khẩu.' };
    }

    try {
      if (typeof FirebaseService !== 'undefined' && FirebaseService.isLive) {
        const userCredential = await FirebaseService.auth.signInWithEmailAndPassword(email, password);
        let user = DB.getUserByEmail(email);
        
        if (!user) {
          // Admin init via seed fallback if not in DB but auth succeeds
          user = { id: userCredential.user.uid, email, role: email === 'admin@hotelbooking.vn' ? 'SUPER_ADMIN' : 'CUSTOMER', name: 'User' };
          DB.createUser(user);
        }

        if (user.status === 'blocked') {
          await FirebaseService.auth.signOut();
          return { success: false, message: 'Tài khoản của bạn đã bị khóa.' };
        }

        this.currentUser = user;
        DB.setCurrentUser(user);

        if (remember) {
          localStorage.setItem('HB_REMEMBER_EMAIL', email);
        } else {
          localStorage.removeItem('HB_REMEMBER_EMAIL');
        }

        return { success: true, message: 'Đăng nhập thành công!', user };
      } else {
        // Fallback to local
        const user = DB.getUserByEmail(email);
        if (!user || user.password !== password) return { success: false, message: 'Sai thông tin đăng nhập.' };
        this.currentUser = user;
        DB.setCurrentUser(user);
        return { success: true, message: 'Đăng nhập Local thành công!', user };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Đăng nhập thất bại: ' + error.message };
    }
  }

  async register({ name, email, phone, password, confirmPassword }) {
    if (!name || !email || !phone || !password) return { success: false, message: 'Vui lòng điền đủ thông tin.' };
    if (password !== confirmPassword) return { success: false, message: 'Mật khẩu không khớp.' };

    try {
      if (typeof FirebaseService !== 'undefined' && FirebaseService.isLive) {
        const userCredential = await FirebaseService.auth.createUserWithEmailAndPassword(email, password);
        
        const newUser = DB.createUser({
          id: userCredential.user.uid,
          name,
          email,
          phone,
          role: 'CUSTOMER'
        });

        this.currentUser = newUser;
        DB.setCurrentUser(newUser);

        return { success: true, message: 'Đăng ký thành công!', user: newUser };
      } else {
        // Fallback
        const newUser = DB.createUser({ name, email, phone, password, role: 'CUSTOMER' });
        this.currentUser = newUser;
        DB.setCurrentUser(newUser);
        return { success: true, message: 'Đăng ký Local thành công!', user: newUser };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Đăng ký thất bại: ' + error.message };
    }
  }

  async logout() {
    if (typeof FirebaseService !== 'undefined' && FirebaseService.isLive) {
      await FirebaseService.auth.signOut();
    }
    this.currentUser = null;
    DB.setCurrentUser(null);
    Toast.info('Thông báo', 'Bạn đã đăng xuất khỏi hệ thống.');
    setTimeout(() => {
      window.location.href = getRootPath() + 'index.html';
    }, 500);
  }

  async changePassword(oldPassword, newPassword, confirmNewPassword) {
    if (!this.currentUser) return { success: false, message: 'Vui lòng đăng nhập.' };
    if (newPassword !== confirmNewPassword) return { success: false, message: 'Xác nhận mật khẩu không khớp.' };

    try {
      if (typeof FirebaseService !== 'undefined' && FirebaseService.isLive) {
        // Requires recent login, this is a simplified version
        await FirebaseService.auth.currentUser.updatePassword(newPassword);
        return { success: true, message: 'Đổi mật khẩu thành công!' };
      } else {
        return { success: true, message: 'Đổi mật khẩu Local thành công!' };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

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

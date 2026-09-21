/* ==========================================================================
   HOTELBOOKING - TOAST NOTIFICATION UTILITY (toast.js)
   ========================================================================== */

class ToastService {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    this.container = container;
  }

  /**
   * Hiển thị thông báo Toast
   * @param {string} title Tiêu đề
   * @param {string} message Nội dung chi tiết
   * @param {'success'|'error'|'warning'|'info'} type Loại thông báo
   * @param {number} duration Thời gian hiển thị (ms)
   */
  show(title, message, type = 'info', duration = 3500) {
    if (!this.container) this.init();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconName = 'info';
    if (type === 'success') iconName = 'check_circle';
    if (type === 'error') iconName = 'cancel';
    if (type === 'warning') iconName = 'warning';

    toast.innerHTML = `
      <div class="toast-icon">
        <span class="material-symbols-outlined icon-fill">${iconName}</span>
      </div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" title="Đóng">&times;</button>
    `;

    this.container.appendChild(toast);

    // Trigger enter animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    const closeToast = () => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    };

    toast.querySelector('.toast-close').addEventListener('click', closeToast);

    // Auto dismiss
    setTimeout(closeToast, duration);
  }

  success(title, message) { this.show(title, message, 'success'); }
  error(title, message) { this.show(title, message, 'error'); }
  warning(title, message) { this.show(title, message, 'warning'); }
  info(title, message) { this.show(title, message, 'info'); }
}

const Toast = new ToastService();
window.Toast = Toast;

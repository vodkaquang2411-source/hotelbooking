/* ==========================================================================
   HOTELBOOKING - UTILITY FORMATTERS (formatters.js)
   ========================================================================== */

/**
 * Chuẩn hóa đường dẫn hình ảnh cục bộ tự động tương thích trang gốc (index.html) và các trang con (pages/...)
 * @param {string} path 
 * @returns {string}
 */
function formatImgPath(path) {
  if (!path) return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const clean = path.replace(/^(\.\.\/)+/, '').replace(/^\//, '');
  const isInPages = window.location.pathname.includes('/pages/');
  return isInPages ? '../../' + clean : clean;
}

/**
 * Định dạng số tiền sang định dạng tiền Việt Nam Đồng (VNĐ)
 * @param {number|string} amount 
 * @returns {string} ví dụ: "2.500.000 ₫"
 */
function formatCurrency(amount) {
  const num = Number(amount) || 0;
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0
  }).format(num);
}

/**
 * Định dạng chuỗi ngày YYYY-MM-DD sang DD/MM/YYYY
 * @param {string|Date} dateInput 
 * @returns {string} ví dụ: "20/08/2026"
 */
function formatDate(dateInput) {
  if (!dateInput) return '';
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return String(dateInput);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Định dạng ngày giờ DD/MM/YYYY HH:mm
 * @param {string|Date} dateInput 
 * @returns {string} ví dụ: "14:30 20/08/2026"
 */
function formatDateTime(dateInput) {
  if (!dateInput) return '';
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return String(dateInput);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes} ${formatDate(d)}`;
}

/**
 * Tính số đêm nghỉ giữa ngày Check-in và Check-out
 * @param {string|Date} checkIn 
 * @param {string|Date} checkOut 
 * @returns {number} Số đêm (tối thiểu 1)
 */
function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 1;
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = d2.getTime() - d1.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

/**
 * Tạo mã đặt phòng duy nhất dạng BK + số ngẫu nhiên
 * @returns {string} ví dụ: "BK00821"
 */
function generateBookingCode() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `BK00${randomNum}`;
}

/**
 * Sinh ID ngẫu nhiên với tiền tố
 * @param {string} prefix 
 * @returns {string} ví dụ: "htl_1719283719"
 */
function generateId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}

/**
 * Rút gọn văn bản nếu vượt quá độ dài
 * @param {string} str 
 * @param {number} maxLen 
 * @returns {string}
 */
function truncateText(str, maxLen = 80) {
  if (!str) return '';
  if (str.length <= maxLen) return str;
  return str.substring(0, maxLen) + '...';
}

/**
 * Trả về class CSS và text hiển thị tương ứng với trạng thái đơn đặt phòng
 * @param {string} status 
 * @returns {{ className: string, label: string }}
 */
function getBookingStatusBadge(status) {
  switch (status) {
    case 'Chờ xác nhận':
    case 'pending':
      return { className: 'status-pending', label: 'Chờ xác nhận' };
    case 'Đã xác nhận':
    case 'confirmed':
      return { className: 'status-confirmed', label: 'Đã xác nhận' };
    case 'Đã nhận phòng':
    case 'checked_in':
      return { className: 'status-checkedin', label: 'Đã nhận phòng' };
    case 'Đã trả phòng':
    case 'completed':
      return { className: 'status-completed', label: 'Đã trả phòng' };
    case 'Đã hủy':
    case 'cancelled':
      return { className: 'status-cancelled', label: 'Đã hủy' };
    default:
      return { className: 'badge-primary', label: status || 'Không rõ' };
  }
}

/**
 * Trích xuất chữ cái viết tắt đại diện cho tên tài khoản
 * Ví dụ: "Nguyễn Văn An" -> "A", "Admin Portal" -> "A", "Customer 1" -> "C"
 * @param {string} name 
 * @returns {string}
 */
function getInitials(name) {
  if (!name) return 'U';
  const parts = name.trim().split(/\s+/);
  if (!parts.length) return 'U';
  const last = parts[parts.length - 1];
  return (last[0] || 'U').toUpperCase();
}

/**
 * Mảng màu gradient sang trọng cho Avatar chữ cái đầu
 */
const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #1e40af, #3b82f6)',
  'linear-gradient(135deg, #0d9488, #14b8a6)',
  'linear-gradient(135deg, #7c3aed, #a855f7)',
  'linear-gradient(135deg, #b45309, #f59e0b)',
  'linear-gradient(135deg, #be123c, #f43f5e)',
  'linear-gradient(135deg, #0369a1, #38bdf8)',
  'linear-gradient(135deg, #4338ca, #6366f1)',
  'linear-gradient(135deg, #047857, #10b981)'
];

/**
 * Sinh màu gradient ngẫu nhiên cố định theo tên
 * @param {string} name 
 * @returns {string}
 */
function getInitialsColor(name) {
  if (!name) return AVATAR_GRADIENTS[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_GRADIENTS.length;
  return AVATAR_GRADIENTS[index];
}

/**
 * Tạo thẻ HTML Avatar chữ cái đầu thay thế cho ảnh người thật
 * @param {string} name 
 * @param {string} customClass 
 * @param {string} extraStyle 
 * @returns {string} HTML string
 */
function getInitialsAvatar(name, customClass = '', extraStyle = '') {
  const initial = getInitials(name);
  const gradient = getInitialsColor(name);
  return `<div class="user-avatar-initials ${customClass}" style="background: ${gradient}; ${extraStyle}" title="${name || 'Người dùng'}">${initial}</div>`;
}

/**
 * Kiểm tra xem 2 khoảng thời gian [start1, end1] và [start2, end2] có bị trùng lặp không
 * @param {string|Date} start1 
 * @param {string|Date} end1 
 * @param {string|Date} start2 
 * @param {string|Date} end2 
 * @returns {boolean}
 */
function isDateOverlap(start1, end1, start2, end2) {
  const s1 = new Date(start1).getTime();
  const e1 = new Date(end1).getTime();
  const s2 = new Date(start2).getTime();
  const e2 = new Date(end2).getTime();
  return s1 < e2 && e1 > s2;
}

/**
 * Chuyển đổi chuỗi tiếng Việt có dấu sang không dấu để tìm kiếm thông minh
 * @param {string} str 
 * @returns {string}
 */
function removeVietnameseTones(str) {
  if (!str) return '';
  str = String(str).toLowerCase().trim();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  return str;
}

/**
 * Debounce helper ngăn chặn gọi hàm quá nhiều lần khi gõ phím
 * @param {Function} func 
 * @param {number} delay 
 * @returns {Function}
 */
function debounce(func, delay = 250) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}


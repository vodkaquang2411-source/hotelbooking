/**
 * HotelBooking - Floating Social Contact Widget
 */

(function () {
  'use strict';

  function initSocialFloating() {
    if (window.location.pathname.includes('/admin') || window.location.pathname.includes('admin.html')) return;
    if (document.getElementById('social-floating-wrap')) return;

    const wrap = document.createElement('div');
    wrap.id = 'social-floating-wrap';
    wrap.className = 'social-floating-wrap';
    wrap.innerHTML = `
      <!-- Zalo -->
      <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" class="social-float-btn social-float-zalo" aria-label="Chat qua Zalo">
        <span class="zalo-custom-icon">Zalo</span>
        <span class="social-tooltip">Chat qua Zalo</span>
        <span class="social-pulse-ring"></span>
      </a>

      <!-- Facebook Messenger -->
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-float-btn social-float-fb" aria-label="Liên hệ Facebook">
        <svg viewBox="0 0 24 24" class="social-float-svg" width="28" height="28" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
        <span class="social-tooltip">Liên hệ Facebook</span>
      </a>

      <!-- Instagram -->
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-float-btn social-float-ig" aria-label="Theo dõi Instagram">
        <svg viewBox="0 0 24 24" class="social-float-svg" width="28" height="28" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span class="social-tooltip">Theo dõi Instagram</span>
      </a>
    `;

    document.body.appendChild(wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSocialFloating);
  } else {
    initSocialFloating();
  }
})();

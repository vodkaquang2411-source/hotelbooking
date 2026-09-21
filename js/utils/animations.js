/**
 * HOTELBOOKING - MOTION & ANIMATION ENGINE (animations.js)
 * Tối ưu hiệu ứng chuyển động mượt mà, Scroll Reveal, Number Counter, Ripple Effect
 * Hỗ trợ tự động prefers-reduced-motion
 */

const Motion = (function() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      return;
    }
    initScrollReveal();
    initButtonRipples();
    initHeaderScrollEffect();
    initStatCounters();
    initDropdownTransitions();
  }

  /**
   * 1. Scroll Reveal với IntersectionObserver
   */
  function initScrollReveal() {
    const selector = '[data-reveal], .reveal:not(.active)';
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  /**
   * 2. Counter animation tăng số mượt mà cho Dashboard và Thống kê
   */
  function initStatCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-counter')) || 0;
          const duration = parseInt(el.getAttribute('data-counter-duration'), 10) || 1200;
          const prefix = el.getAttribute('data-counter-prefix') || '';
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const isDecimal = target % 1 !== 0;

          animateValue(el, 0, target, duration, prefix, suffix, isDecimal);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
  }

  function animateValue(el, start, end, duration, prefix, suffix, isDecimal) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;

      el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString('vi-VN')}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${prefix}${isDecimal ? end.toFixed(1) : end.toLocaleString('vi-VN')}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  /**
   * 3. Ripple Effect khi click Button
   */
  function initButtonRipples() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn, .btn-primary, .btn-accent, .nav-auth-btn');
      if (!btn || btn.disabled) return;

      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'rippleEffect 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      ripple.style.pointerEvents = 'none';

      btn.style.position = btn.style.position || 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 450);
    }, { passive: true });

    if (!document.getElementById('ripple-style')) {
      const style = document.createElement('style');
      style.id = 'ripple-style';
      style.innerHTML = `
        @keyframes rippleEffect {
          to {
            transform: scale(3.5);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * 4. Header Scroll Blur & Compact State
   */
  function initHeaderScrollEffect() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let isTicking = false;
    window.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 25) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          isTicking = false;
        });
        isTicking = true;
      }
    }, { passive: true });
  }

  /**
   * 5. Dropdown Smooth Transition
   */
  function initDropdownTransitions() {
    document.querySelectorAll('.dropdown, .user-profile-btn').forEach(trigger => {
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const dropdown = trigger.parentElement.querySelector('.dropdown-menu, .user-dropdown');
          if (dropdown) dropdown.classList.remove('show');
        }
      });
    });
  }

  return {
    init,
    initScrollReveal,
    animateValue
  };
})();

// Khởi chạy khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  Motion.init();
});

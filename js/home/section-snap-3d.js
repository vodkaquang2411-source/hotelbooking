/**
 * HOTELBOOKING - SECTION NAVIGATION (section-snap-3d.js)
 * Tối ưu: Đã loại bỏ cuộn cưỡng bức (wheel hijacking), 3D perspective thrashing và mousemove card tilt.
 * Giữ nguyên trạng thái mượt mà bằng native smooth scrolling.
 */

const SectionSnap3D = (function() {
  function scrollToSection(targetIndex) {
    const rawSections = document.querySelectorAll('main > section, footer.site-footer');
    if (targetIndex >= 0 && targetIndex < rawSections.length) {
      rawSections[targetIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }

  return {
    init: function() {},
    scrollToSection: scrollToSection
  };
})();

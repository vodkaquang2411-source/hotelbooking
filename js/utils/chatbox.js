/**
 * HotelBooking - Floating 24/7 Live AI Concierge Chatbox Widget (chatbox.js)
 */

(function () {
  'use strict';

  const BOT_RESPONSES = [
    {
      keywords: ['chao', 'chào', 'hello', 'hi', 'alo', 'start'],
      reply: 'Dạ xin chào Quý khách! Chúc Quý khách một ngày tuyệt vời. Em có thể hỗ trợ Quý khách tìm khách sạn, đặt phòng hay săn mã ưu đãi nào hôm nay ạ? 🌟'
    },
    {
      keywords: ['khach san', 'khách sạn', 'resort', 'villa', 'homestay', 'can ho', 'căn hộ', 'o dau', 'ở đâu', 'goi y', 'gợi ý'],
      reply: 'HotelBooking hiện có hơn **50 khách sạn, resort & villa 5 sao** tại khắp 12 điểm đến hàng đầu như Sa Pa, Phú Quốc, Đà Nẵng, Nha Trang, Quảng Ninh, Hà Nội, Hội An... Quý khách có thể bấm vào mục **[Khám phá khách sạn](pages/hotels/index.html)** để lọc theo sở thích hoặc cho em biết địa điểm Quý khách muốn đến nhé!'
    },
    {
      keywords: ['giam gia', 'giảm giá', 'voucher', 'khuyen mai', 'khuyến mãi', 'ma', 'mã', 'uudai', 'ưu đãi', 'sale', 'discount'],
      reply: '🎁 Hiện hệ thống đang có các mã ưu đãi độc quyền cực hot:\n- **SUMMER2026**: Giảm ngay 20% tối đa 1.000.000đ\n- **LUXURY500**: Giảm 500.000đ cho đơn từ 3.000.000đ\n- **WEEKEND15**: Giảm 15% đặt phòng cuối tuần\nQuý khách chỉ cần sao chép mã ở mục Khuyến mãi và dán vào bước thanh toán là được trừ tiền ngay ạ!'
    },
    {
      keywords: ['huy', 'hủy', 'doi phong', 'đổi phòng', 'hoan tien', 'hoàn tiền', 'chinh sach', 'chính sách'],
      reply: '🛡️ Tất cả các khách sạn trên HotelBooking đều hỗ trợ **Hủy miễn phí trước 48 giờ** trước ngày nhận phòng (hoàn tiền 100%). Quý khách có thể quản lý và yêu cầu hỗ trợ trực tiếp trong mục **Thông tin tài khoản > Lịch sử đặt phòng**.'
    },
    {
      keywords: ['hotline', 'lien he', 'liên hệ', 'sdt', 'sđt', 'so dien thoai', 'số điện thoại', 'goi', 'gọi', 'nhan vien', 'nhân viên', 'tu van', 'tư vấn', 'admin'],
      reply: '📞 Tổng đài Chăm sóc khách hàng 24/7 của HotelBooking:\n- **Hotline**: **0345 662 169** (Hỗ trợ khẩn cấp 24/7)\n- **Email**: minhanhĐS@gmail.com\nĐội ngũ CSKH luôn sẵn sàng giải đáp mọi yêu cầu của Quý khách bất cứ lúc nào!'
    },
    {
      keywords: ['thanh toan', 'thanh toán', 'chuyen khoan', 'chuyển khoản', 'vietqr', 'the', 'thẻ', 'coc', 'cọc', 'tien mat', 'tiền mặt'],
      reply: '💳 HotelBooking hỗ trợ đa dạng phương thức thanh toán an toàn 100%:\n1. Quét mã **VietQR chuẩn ngân hàng 24/7** (Tự động xác nhận sau 3 giây)\n2. Thẻ quốc tế Visa/Mastercard/JCB\n3. Thanh toán trực tiếp khi nhận phòng (cho các khách sạn áp dụng).'
    },
    {
      keywords: ['sapa', 'sa pa', 'fansipan', 'muong hoa', 'mường hoa'],
      reply: '🏔️ Tại Sa Pa, em gợi ý Quý khách các điểm lưu trú đẳng cấp nhất:\n- **Hotel de la Coupole - MGallery 5★** (Trung tâm thị xã, view mây tuyệt đẹp)\n- **Topas Ecolodge Sapa** (Bungalow biệt lập giữa thung lũng Mường Hoa)\n- **Silk Path Grand Resort & Spa Sapa**.'
    },
    {
      keywords: ['phu quoc', 'phú quốc', 'bai khem', 'bãi khem', 'hon thom', 'hòn thơm'],
      reply: '🏝️ Tại đảo ngọc Phú Quốc:\n- **JW Marriott Phu Quoc Emerald Bay 5★** (Kiến trúc trường đại học độc bản Bãi Khem)\n- **Vinpearl Discovery Coastalland Villas**\n- **Premier Village Phu Quoc Resort**.'
    },
    {
      keywords: ['da nang', 'đà nẵng', 'my khe', 'mỹ khê', 'ba na', 'bà nà', 'son tra', 'sơn trà'],
      reply: '🌊 Tại Đà Nẵng:\n- **InterContinental Danang Sun Peninsula Resort 5★** (Bán đảo Sơn Trà)\n- **Novotel Danang Premier Han River**\n- **Furama Resort Danang**.'
    }
  ];

  function initChatbox() {
    if (window.location.pathname.includes('/admin') || window.location.pathname.includes('admin.html')) return;
    if (document.getElementById('chatbox-floating-wrap')) return;

    // Detect if we are in a subfolder like pages/hotels/
    const isSubdir = window.location.pathname.includes('/pages/');
    const linkPrefix = isSubdir ? '../../' : '';

    const wrap = document.createElement('div');
    wrap.id = 'chatbox-floating-wrap';
    wrap.className = 'chatbox-floating-wrap';
    wrap.innerHTML = `
      <button id="chatbox-trigger-btn" class="chatbox-trigger-btn" aria-label="Mở chatbox tư vấn">
        <span class="material-symbols-outlined" id="chatbox-trigger-icon">chat</span>
        <span class="chatbox-badge-dot" id="chatbox-badge-dot"></span>
      </button>
      <div class="chatbox-tooltip">Cần hỗ trợ? Chat ngay!</div>

      <div class="chatbox-window" id="chatbox-window">
        <div class="chatbox-header">
          <div class="chatbox-header-info">
            <div class="chatbox-avatar">
              HB
              <span class="chatbox-online-dot"></span>
            </div>
            <div>
              <h4 class="chatbox-header-title">Trợ Lý HotelBooking</h4>
              <div class="chatbox-header-status">
                <span class="material-symbols-outlined" style="font-size:12px;color:#10b981;">fiber_manual_record</span>
                Trực tuyến 24/7 • Sẵn sàng hỗ trợ
              </div>
            </div>
          </div>
          <div class="chatbox-header-actions">
            <button id="chatbox-close-btn" title="Đóng chat">
              <span class="material-symbols-outlined" style="font-size:18px;">close</span>
            </button>
          </div>
        </div>

        <div class="chatbox-body" id="chatbox-body">
          <div class="chat-bubble chat-bubble-bot">
            👋 Xin chào Quý khách! Em là Trợ lý tư vấn HotelBooking. Em có thể hỗ trợ Quý khách tìm phòng, tư vấn điểm đến nghỉ dưỡng 5 sao hoặc săn mã giảm giá ngay lúc này!
            <div class="chat-timestamp">${getCurrentTime()}</div>
          </div>

          <div class="chatbox-quick-chips" id="chatbox-quick-chips">
            <button class="chat-chip-btn" data-msg="Tư vấn chọn khách sạn resort 5 sao">
              <span class="material-symbols-outlined" style="font-size:16px;color:#C9A227;">hotel</span> Gợi ý khách sạn & resort 5★
            </button>
            <button class="chat-chip-btn" data-msg="Lấy mã giảm giá và voucher hôm nay">
              <span class="material-symbols-outlined" style="font-size:16px;color:#e11d48;">redeem</span> Nhận voucher giảm giá 20%
            </button>
            <button class="chat-chip-btn" data-msg="Chính sách hủy phòng và hoàn tiền thế nào?">
              <span class="material-symbols-outlined" style="font-size:16px;color:#0284c7;">verified_user</span> Chính sách hủy phòng & hoàn tiền
            </button>
            <button class="chat-chip-btn" data-msg="Hotline liên hệ trực tiếp nhân viên tư vấn">
              <span class="material-symbols-outlined" style="font-size:16px;color:#10b981;">call</span> Hotline tư vấn: 0345 662 169
            </button>
          </div>

          <div class="chatbox-typing" id="chatbox-typing">
            <span></span><span></span><span></span>
          </div>
        </div>

        <form class="chatbox-footer" id="chatbox-form">
          <input type="text" id="chatbox-input" class="chatbox-input" placeholder="Nhập câu hỏi của bạn..." autocomplete="off" required>
          <button type="submit" class="chatbox-send-btn" title="Gửi tin nhắn">
            <span class="material-symbols-outlined" style="font-size:18px;">send</span>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(wrap);

    const triggerBtn = document.getElementById('chatbox-trigger-btn');
    const triggerIcon = document.getElementById('chatbox-trigger-icon');
    const badgeDot = document.getElementById('chatbox-badge-dot');
    const win = document.getElementById('chatbox-window');
    const closeBtn = document.getElementById('chatbox-close-btn');
    const form = document.getElementById('chatbox-form');
    const input = document.getElementById('chatbox-input');
    const body = document.getElementById('chatbox-body');
    const typing = document.getElementById('chatbox-typing');
    const chipsContainer = document.getElementById('chatbox-quick-chips');

    function toggleChat(open) {
      const isOpen = open !== undefined ? open : !win.classList.contains('active');
      if (isOpen) {
        win.classList.add('active');
        triggerIcon.textContent = 'close';
        if (badgeDot) badgeDot.style.display = 'none';
        setTimeout(() => input.focus(), 200);
      } else {
        win.classList.remove('active');
        triggerIcon.textContent = 'chat';
      }
    }

    window.HotelChatbot = {
      toggleWindow: toggleChat,
      open: () => toggleChat(true)
    };
    window.openChatbox = () => toggleChat(true);

    triggerBtn.addEventListener('click', () => toggleChat());
    closeBtn.addEventListener('click', () => toggleChat(false));

    // Handle Quick Chips
    if (chipsContainer) {
      chipsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.chat-chip-btn');
        if (btn) {
          const msg = btn.dataset.msg;
          sendUserMessage(msg);
        }
      });
    }

    // Handle Form Submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      sendUserMessage(text);
    });

    function sendUserMessage(text) {
      // Append user bubble
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble chat-bubble-user';
      userBubble.innerHTML = `${escapeHTML(text)}<div class="chat-timestamp">${getCurrentTime()}</div>`;
      
      body.insertBefore(userBubble, typing);
      scrollToBottom();

      // Show typing
      typing.style.display = 'flex';
      body.appendChild(typing);
      scrollToBottom();

      // Formulate response
      setTimeout(() => {
        typing.style.display = 'none';
        const botReply = generateReply(text, linkPrefix);
        const botBubble = document.createElement('div');
        botBubble.className = 'chat-bubble chat-bubble-bot';
        botBubble.innerHTML = `${formatBotMarkdown(botReply)}<div class="chat-timestamp">${getCurrentTime()}</div>`;
        body.appendChild(botBubble);
        scrollToBottom();
      }, 650);
    }

    function scrollToBottom() {
      body.scrollTop = body.scrollHeight;
    }

    function getCurrentTime() {
      const now = new Date();
      return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    }

    function escapeHTML(str) {
      return str.replace(/[&<>'"]/g, function(tag) {
        const chars = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        };
        return chars[tag] || tag;
      });
    }

    function formatBotMarkdown(text) {
      let formatted = escapeHTML(text);
      formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color:var(--primary);font-weight:700;text-decoration:underline;">$1</a>');
      formatted = formatted.replace(/\n/g, '<br>');
      return formatted;
    }

    function generateReply(userText, prefix) {
      const lower = userText.toLowerCase();
      for (const item of BOT_RESPONSES) {
        for (const kw of item.keywords) {
          if (lower.includes(kw)) {
            let res = item.reply;
            if (prefix && res.includes('pages/hotels/index.html')) {
              res = res.replace('pages/hotels/index.html', prefix + 'pages/hotels/index.html');
            }
            return res;
          }
        }
      }
      return `Cảm ơn Quý khách đã gửi yêu cầu! Đội ngũ Chuyên viên tư vấn HotelBooking đã ghi nhận và sẽ phản hồi chi tiết ngay. Quý khách cũng có thể gọi trực tiếp Hotline **0345 662 169** (24/7) để được hỗ trợ tức thì nhé! 🌟`;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbox);
  } else {
    initChatbox();
  }
})();

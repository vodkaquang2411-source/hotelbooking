/* ==========================================================================
   HOTELBOOKING - LUXURY E-TICKET & BOOKING VOUCHER PRINTER ENGINE
   ========================================================================== */

function printBookingTicket(booking) {
  if (!booking) return;

  const htl = typeof DB !== 'undefined' ? DB.getHotelById(booking.hotelId) : null;
  const hotelAddress = htl ? htl.address + ', ' + htl.city : (booking.hotelAddress || 'Trung tâm thành phố');
  const checkInDate = typeof formatDate === 'function' ? formatDate(booking.checkIn) : booking.checkIn;
  const checkOutDate = typeof formatDate === 'function' ? formatDate(booking.checkOut) : booking.checkOut;
  const createdTime = typeof formatDateTime === 'function' ? formatDateTime(booking.createdAt) : booking.createdAt;
  const totalPrice = typeof formatCurrency === 'function' ? formatCurrency(booking.totalAmount) : booking.totalAmount + 'đ';
  const subtotalPrice = typeof formatCurrency === 'function' ? formatCurrency(booking.subtotal || booking.totalAmount) : totalPrice;

  const servicesHtml = (booking.services && booking.services.length)
    ? booking.services.map(s => `<tr><td style="padding: 6px 0; color: #475569;">+ ${s.name || s.id}</td><td style="text-align: right; font-weight: 700; color: #0F2747;">${typeof formatCurrency === 'function' ? formatCurrency(s.price) : s.price}</td></tr>`).join('')
    : '';

  const discountHtml = booking.discountAmount > 0
    ? `<tr><td style="padding: 6px 0; color: #dc2626;">Giảm giá Voucher (${booking.promoCode || 'Ưu đãi'}):</td><td style="text-align: right; font-weight: 700; color: #dc2626;">-${typeof formatCurrency === 'function' ? formatCurrency(booking.discountAmount) : booking.discountAmount}</td></tr>`
    : '';

  const ticketHtml = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Phiếu Xác Nhận Đặt Phòng - #${booking.code}</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      background: #f1f5f9;
      color: #0f172a;
      padding: 30px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ticket-wrapper {
      background: #ffffff;
      width: 100%;
      max-width: 780px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 15px 45px rgba(15, 39, 71, 0.12);
      border: 1px solid #e2e8f0;
    }
    .ticket-header {
      background: linear-gradient(135deg, #0F2747 0%, #1D406E 100%);
      color: #ffffff;
      padding: 30px 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 3px solid #C9A227;
    }
    .brand-title {
      font-size: 24px;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -0.5px;
    }
    .brand-subtitle {
      font-size: 12px;
      color: #C9A227;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 700;
      margin-top: 2px;
    }
    .ticket-badge {
      background: rgba(201, 162, 39, 0.2);
      border: 1px solid #C9A227;
      color: #FDE047;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
    }
    .ticket-body {
      padding: 32px 36px;
    }
    .hotel-banner {
      background: #FAF8F4;
      border: 1px solid rgba(201, 162, 39, 0.3);
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 24px;
    }
    .hotel-name {
      font-size: 20px;
      font-weight: 800;
      color: #0F2747;
      margin-bottom: 6px;
    }
    .hotel-address {
      font-size: 13px;
      color: #64748b;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }
    .info-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 16px 20px;
    }
    .info-label {
      font-size: 11px;
      text-transform: uppercase;
      font-weight: 800;
      color: #64748b;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    .info-value {
      font-size: 15px;
      font-weight: 700;
      color: #0f172a;
    }
    .dates-strip {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 12px;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 14px;
      padding: 16px 20px;
      margin-bottom: 24px;
      text-align: center;
    }
    .date-box .d-label {
      font-size: 11px;
      color: #1e40af;
      font-weight: 700;
      text-transform: uppercase;
    }
    .date-box .d-val {
      font-size: 16px;
      font-weight: 800;
      color: #1e3a8a;
      margin-top: 2px;
    }
    .nights-pill {
      background: #1e40af;
      color: #ffffff;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 800;
    }
    .pricing-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
      font-size: 14px;
    }
    .total-row {
      border-top: 2px dashed #cbd5e1;
      padding-top: 12px;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .total-label {
      font-size: 16px;
      font-weight: 800;
      color: #0F2747;
    }
    .total-amount {
      font-size: 24px;
      font-weight: 900;
      color: #0F2747;
    }
    .ticket-footer {
      background: #FAF8F4;
      border-top: 1px solid #e2e8f0;
      padding: 20px 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #64748b;
    }
    .print-actions {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      gap: 12px;
    }
    .btn-print {
      background: #0F2747;
      color: #ffffff;
      border: none;
      padding: 12px 28px;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(15, 39, 71, 0.25);
    }
    .btn-close {
      background: #ffffff;
      color: #475569;
      border: 1px solid #cbd5e1;
      padding: 12px 24px;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
    }
    @media print {
      body { background: #ffffff; padding: 0; }
      .ticket-wrapper { box-shadow: none; border: 1px solid #cbd5e1; max-width: 100%; border-radius: 0; }
      .print-actions { display: none; }
    }
  </style>
</head>
<body>
  <div>
    <div class="ticket-wrapper">
      <div class="ticket-header">
        <div>
          <div class="brand-title">HotelBooking</div>
          <div class="brand-subtitle">Phiếu Xác Nhận Đặt Phòng 5★</div>
        </div>
        <div style="text-align: right;">
          <span class="ticket-badge">MÃ ĐƠN: #${booking.code}</span>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px;">Ngày đặt: ${createdTime}</div>
        </div>
      </div>

      <div class="ticket-body">
        <div class="hotel-banner">
          <div class="hotel-name">${booking.hotelName}</div>
          <div class="hotel-address">📍 ${hotelAddress}</div>
        </div>

        <div class="dates-strip">
          <div class="date-box">
            <div class="d-label">Nhận phòng (Check-in)</div>
            <div class="d-val">${checkInDate}</div>
            <div style="font-size: 11px; color: #64748b;">Từ 14:00</div>
          </div>
          <div>
            <span class="nights-pill">${booking.nights} Đêm</span>
          </div>
          <div class="date-box">
            <div class="d-label">Trả phòng (Check-out)</div>
            <div class="d-val">${checkOutDate}</div>
            <div style="font-size: 11px; color: #64748b;">Trước 12:00</div>
          </div>
        </div>

        <div class="grid-2">
          <div class="info-card">
            <div class="info-label">Thông tin khách hàng</div>
            <div class="info-value">${booking.customerName}</div>
            <div style="font-size: 13px; color: #64748b; margin-top: 4px;">📞 ${booking.customerPhone}</div>
            <div style="font-size: 13px; color: #64748b;">✉️ ${booking.customerEmail}</div>
          </div>
          <div class="info-card">
            <div class="info-label">Chi tiết phòng lưu trú</div>
            <div class="info-value">${booking.roomName}</div>
            <div style="font-size: 13px; color: #64748b; margin-top: 4px;">Số lượng: <strong>${booking.roomCount} phòng</strong></div>
            <div style="font-size: 13px; color: #64748b;">Khách: <strong>${booking.adults} Người lớn</strong> ${booking.children ? `, ${booking.children} Trẻ em` : ''}</div>
          </div>
        </div>

        <div style="background: #f8fafc; border-radius: 14px; padding: 18px 20px; border: 1px solid #e2e8f0;">
          <div class="info-label" style="margin-bottom: 10px;">Chi tiết thanh toán (${booking.paymentMethod})</div>
          <table class="pricing-table">
            <tr>
              <td style="padding: 4px 0; color: #475569;">Tiền phòng (${booking.nights} đêm x ${booking.roomCount} phòng):</td>
              <td style="text-align: right; font-weight: 700; color: #0F2747;">${subtotalPrice}</td>
            </tr>
            ${servicesHtml}
            ${discountHtml}
          </table>

          <div class="total-row">
            <div>
              <div class="total-label">TỔNG TIỀN THANH TOÁN</div>
              <div style="font-size: 11px; color: #059669; font-weight: 700;">✓ Đã bao gồm thuế VAT & phí phục vụ</div>
            </div>
            <div class="total-amount">${totalPrice}</div>
          </div>
        </div>
      </div>

      <div class="ticket-footer">
        <div>
          <div><strong>HotelBooking Care:</strong> Hotline 1900 6868 • support@hotelbooking.vn</div>
          <div style="margin-top: 2px;">Vui lòng xuất trình mã đơn hoặc phiếu này khi làm thủ tục nhận phòng tại khách sạn.</div>
        </div>
        <div style="text-align: right; font-weight: 800; color: #C9A227;">
          CHÚC QUÝ KHÁCH KỲ NGHỈ VUI VẺ!
        </div>
      </div>
    </div>

    <div class="print-actions">
      <button class="btn-print" onclick="window.print()">🖨️ In Vé Ngay / Lưu PDF</button>
      <button class="btn-close" onclick="window.close()">Đóng cửa sổ</button>
    </div>
  </div>
</body>
</html>
  `;

  const printWindow = window.open('', '_blank', 'width=860,height=900,top=50,left=150');
  if (printWindow) {
    printWindow.document.write(ticketHtml);
    printWindow.document.close();
  }
}

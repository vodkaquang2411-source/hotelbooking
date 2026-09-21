# 🏨 HotelBooking – Website Đặt Phòng và Quản Lý Khách Sạn

> **Đồ án Môn học**: Thiết kế và phát triển ứng dụng web  
> **Phiên bản**: 1.0.0 (Hoàn chỉnh & Đầy đủ tính năng)  
> **Công nghệ**: HTML5, CSS3 (Modern Flexbox/Grid, Responsive), Vanilla JavaScript (ES6+ Modular), Data Layer (`LocalStorage` / Sẵn sàng tích hợp `Firebase Firestore`), `Chart.js`, `FontAwesome 6`.

---

## 📌 1. Bảng Đối Soát Yêu Cầu Giáo Viên (100% Đạt Chuẩn)

| Yêu cầu đồ án | Hiện trạng HotelBooking | Chi tiết triển khai |
| :--- | :---: | :--- |
| **HTML5** | ✅ Đạt | Cấu trúc ngữ nghĩa chuẩn (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) |
| **CSS3 & Animations** | ✅ Đạt | CSS Variables, Glassmorphism, Box-shadows, Card hover effects, Modal transitions, Toasts, Responsive |
| **Responsive Design** | ✅ Đạt | Tối ưu hiển thị hoàn hảo trên Mobile (<768px), Tablet (768px - 991px), Laptop và Desktop lớn |
| **JavaScript Modular** | ✅ Đạt | ES6+, cấu trúc module rõ ràng (`auth/`, `hotels/`, `rooms/`, `booking/`, `admin/`, `data/`, `utils/`) |
| **Cơ sở dữ liệu & CRUD** | ✅✅✅ | Quản lý dữ liệu tập trung qua Data Access Layer (`db.js`), đầy đủ CRUD 6 phân hệ |
| **Phân quyền người dùng** | ✅ Đạt | Phân quyền rõ rệt: **Khách hàng** (Đặt phòng, xem lịch sử, đánh giá) & **Admin** (Toàn quyền quản trị) |
| **Admin Dashboard** | ✅ Đạt | Thẻ KPI thống kê, Biểu đồ `Chart.js` tương tác, Quản lý Khách sạn, Phòng, Khách hàng, Đơn đặt, Voucher, Đánh giá |
| **Quy trình Đặt phòng** | ✅ Đạt | Flow 5 bước mượt mà: Chọn phòng → Nhập thông tin → Áp voucher → Thanh toán QR VietQR/MoMo → Nhận mã đơn |
| **Tính thực tiễn cao** | ✅ Đạt | Dữ liệu mẫu phong phú với 8+ khách sạn 5 sao toàn quốc, voucher thực tế, sinh mã QR động |

---

## 🔐 2. Tài Khoản Trải Nghiệm Nhanh (1-Click Login)

Hệ thống đã tích hợp sẵn tính năng **1-Click Login** tại trang `pages/auth/login.html`:

| Vai trò | Email đăng nhập | Mật khẩu | Quyền hạn & Chức năng |
| :--- | :--- | :--- | :--- |
| 👑 **Quản trị viên (Admin)** | `admin@hotelbooking.vn` | `admin123` | Toàn quyền quản trị Dashboard, xem biểu đồ doanh thu, thêm/sửa/xóa Khách sạn, Phòng, Khách hàng, duyệt Đơn đặt, quản lý Voucher & Đánh giá |
| 👤 **Khách hàng thân thiết** | `khachhang@gmail.com` | `user123` | Đặt phòng, áp voucher giảm giá, thanh toán QR, xem lịch sử đơn đặt, hủy phòng, viết đánh giá sau kỳ nghỉ |

---

## 🗂️ 3. Cấu Trúc Mã Nguồn (Project Structure)

```
HotelBooking/
│
├── index.html                     # Trang chủ (Banner, Tìm kiếm, KS nổi bật, Phòng nổi bật, Khuyến mãi, Reviews, Tin tức, Footer)
├── main.css                       # Gói nạp toàn bộ Stylesheet
│
├── pages/
│   ├── hotels/
│   │   ├── index.html             # Danh sách khách sạn (Tìm kiếm, Bộ lọc nâng cao: giá, sao, tiện nghi, loại hình, sắp xếp)
│   │   └── detail.html            # Chi tiết khách sạn (Gallery ảnh, Tiện nghi, Danh sách phòng, Bản đồ, Chính sách, Đánh giá)
│   │
│   ├── rooms/
│   │   └── detail.html            # Chi tiết loại phòng (Album ảnh, Thông số kỹ thuật, Widget đặt phòng tính tiền theo số đêm)
│   │
│   ├── booking/
│   │   └── index.html             # Quy trình đặt phòng 5 bước, tính tiền, áp mã voucher, sinh mã QR thanh toán & xuất hóa đơn
│   │
│   ├── auth/
│   │   ├── login.html             # Đăng nhập (Phân quyền Admin/User, 1-Click Login tài khoản mẫu)
│   │   └── register.html          # Đăng ký tài khoản khách hàng mới
│   │
│   ├── profile/
│   │   └── index.html             # Trang cá nhân (Hồ sơ, Lịch sử đặt phòng, Hủy phòng, Đổi mật khẩu, Viết đánh giá)
│   │
│   └── admin/
│       └── index.html             # Admin Portal toàn diện (Dashboard KPI, Chart.js, và Toàn bộ 6 Module CRUD)
│
├── css/
│   ├── style.css                  # CSS nền tảng: Biến màu sắc, Typography, Header, Footer, Utility classes
│   ├── components.css             # Các components: Buttons, Cards, Badges, Form controls, Rating stars, Modals, Toasts
│   ├── responsive.css             # Quy tắc Responsive Mobile, Tablet, Desktop
│   └── admin.css                  # Giao diện quản trị Admin chuyên sâu: Sidebar, Stats KPI, Data tables, Charts
│
├── js/
│   ├── utils/
│   │   ├── formatters.js          # Định dạng tiền tệ VNĐ, định dạng ngày tháng, tính số đêm, sinh mã đơn BK00xxx
│   │   └── toast.js               # Hệ thống thông báo Toast Popup thông minh
│   ├── data/
│   │   ├── seed-data.js           # Bộ dữ liệu mẫu phong phú (Khách sạn, Phòng, Users, Bookings, Vouchers, Reviews)
│   │   └── db.js                  # Data Access Layer quản lý LocalStorage / Firebase ready, cung cấp API CRUD chuẩn
│   ├── auth/
│   │   └── auth.js                # Xử lý Đăng ký, Đăng nhập, Phiên người dùng (Session), Phân quyền và Bảo vệ tuyến đường
│   ├── hotels/
│   │   ├── hotels.js              # Logic tìm kiếm, lọc đa tiêu chí, sắp xếp danh sách khách sạn
│   │   └── hotel-detail.js        # Logic hiển thị chi tiết khách sạn, danh sách phòng, chính sách và đánh giá
│   ├── rooms/
│   │   └── room-detail.js         # Logic hiển thị chi tiết phòng và tính tiền tại widget đặt phòng
│   ├── booking/
│   │   └── booking.js             # Logic quy trình đặt phòng 5 bước, áp mã voucher, thanh toán QR và lưu đơn hàng
│   ├── profile/
│   │   └── profile.js             # Logic trang cá nhân, lịch sử đơn đặt, hủy đơn, in hóa đơn và modal viết đánh giá
│   └── admin/
│       └── admin.js               # Logic điều khiển toàn bộ Admin Dashboard, Chart.js và 6 Phân hệ CRUD
│
└── README.md                      # Tài liệu hướng dẫn sử dụng và thuyết minh đồ án
```

---

## 🌟 4. Chi Tiết Các Phân Hệ Tính Năng

### 1. Phía Khách Hàng (Client Side)
- **Trang chủ (`index.html`)**: Banner Hero ấn tượng kèm thanh tìm kiếm nhanh (Địa điểm, Ngày nhận/trả, Số khách). Các phân mục nổi bật: Khách sạn 5 sao, Loại phòng sang trọng, Mã khuyến mãi đang diễn ra, Tiện nghi dịch vụ, Đánh giá thực tế, Tin tức cẩm nang du lịch và Footer thông tin liên hệ.
- **Danh sách khách sạn (`pages/hotels/index.html`)**: Bộ lọc đa tiêu chí linh hoạt: Lọc theo Tên/Từ khóa, Thành phố (Đà Nẵng, Phú Quốc, Hà Nội, TP.HCM, Nha Trang, Đà Lạt, Sa Pa, Hạ Long...), Kéo thanh giá trần, Chọn số sao (3-5 sao), Loại hình lưu trú (Khách sạn, Resort, Boutique, Villa), Tiện nghi (Hồ bơi, Buffet, Biển, Spa, Sân bay). Sắp xếp theo Giá tăng/giảm hoặc Điểm đánh giá cao nhất.
- **Chi tiết khách sạn (`pages/hotels/detail.html`)**: Thư viện hình ảnh Gallery, mô tả chi tiết, tiện ích có icon trực quan, danh sách tất cả các loại phòng trực thuộc kèm giá và nút đặt ngay, vị trí bản đồ, quy định nhận/trả phòng, chính sách hủy phòng và danh sách đánh giá khách hàng.
- **Chi tiết phòng (`pages/rooms/detail.html`)**: Album ảnh phòng, diện tích ($m^2$), sức chứa, loại giường, tầm nhìn, trang thiết bị phòng và widget tính tiền tự động theo số đêm.

### 2. Tài Khoản & Bảo Mật (User Auth & Profile)
- **Đăng ký / Đăng nhập**: Kiểm tra tính hợp lệ dữ liệu (Validation), phân quyền vai trò (Admin / Customer), cơ chế ghi nhớ đăng nhập, hỗ trợ 1-click test tài khoản.
- **Hồ sơ cá nhân**: Cập nhật thông tin (Họ tên, SĐT, Địa chỉ), đổi mật khẩu.
- **Lịch sử đặt phòng**: Xem toàn bộ đơn hàng của cá nhân, hiển thị huy hiệu trạng thái màu (`Chờ xác nhận`, `Đã xác nhận`, `Đã nhận phòng`, `Đã trả phòng`, `Đã hủy`), xem và in hóa đơn chi tiết, hủy phòng (kèm lý do).
- **Đánh giá sau kỳ nghỉ**: Đối với các đơn hàng đã hoàn tất (`Đã trả phòng`), khách hàng có thể chấm điểm 1-5 sao và viết nhận xét chi tiết; đánh giá sẽ ngay lập tức được cập nhật lên trang chi tiết khách sạn và tính lại điểm trung bình.

### 3. Quy Trình Đặt Phòng 5 Bước (Booking Flow)
1. **Bước 1**: Xác nhận phòng, khách sạn, ngày nhận phòng, ngày trả phòng (tự động tính chính xác số đêm nghỉ), số lượng phòng và số khách.
2. **Bước 2**: Nhập thông tin khách lưu trú (Họ tên, Email, SĐT, Yêu cầu đặc biệt).
3. **Bước 3**: Áp dụng mã khuyến mãi Voucher (Nhập mã như `SUMMER2026`, `WELCOME50` → Giảm giá trực tiếp và cập nhật tổng tiền thanh toán ngay lập tức).
4. **Bước 4**: Lựa chọn phương thức thanh toán (Thanh toán tại khách sạn, Quét mã QR VietQR/MoMo với mã QR sinh động, Thẻ tín dụng).
5. **Bước 5**: Xác nhận đặt phòng → Hệ thống sinh mã đặt phòng duy nhất dạng `BK00xxx`, trừ số phòng trống trong cơ sở dữ liệu, hiển thị màn hình thành công và cho phép xem chi tiết trong Lịch sử hoặc In hóa đơn.

### 4. Phân Hệ Quản Trị Admin Dashboard (`pages/admin/index.html`)
- **Dashboard Tổng quan**:
  - 6 Thẻ KPI: Tổng khách sạn (25), Tổng số phòng (180), Tổng khách hàng (1.250), Đơn đặt phòng (3.680), Doanh thu (850.000.000đ), Đánh giá (920).
  - Biểu đồ `Chart.js` tương tác cao: Doanh thu theo 12 tháng (Bar Chart), Tỷ lệ trạng thái đơn đặt phòng (Doughnut Chart).
  - Bảng đơn đặt phòng mới nhất trong hệ thống.
- **🏨 Quản lý Khách sạn (CRUD)**: Danh sách, Tìm kiếm, Thêm mới khách sạn, Sửa thông tin, Xóa khách sạn.
- **🛏️ Quản lý Loại phòng (CRUD)**: Phân loại phòng theo từng khách sạn, Thêm/Sửa/Xóa phòng, Đổi nhanh trạng thái (`Trống (Sẵn sàng)`, `Đã đặt`, `Bảo trì`).
- **👥 Quản lý Khách hàng (CRUD)**: Danh sách người dùng, Tìm kiếm theo tên/email/SĐT, Khóa / Mở khóa tài khoản ngay lập tức, Xóa người dùng.
- **📑 Quản lý Đơn đặt phòng (CRUD)**: Toàn bộ danh sách đơn đặt, lọc theo trạng thái, cập nhật trạng thái đơn (`Chờ xác nhận` → `Đã xác nhận` → `Đã nhận phòng` → `Đã trả phòng` → `Đã hủy`), xem và in hóa đơn chi tiết.
- **⭐ Quản lý Đánh giá (CRUD)**: Xem danh sách nhận xét, Ẩn/Hiện đánh giá trên trang người dùng, Xóa đánh giá vi phạm.
- **🎁 Quản lý Mã Khuyến Mãi (CRUD)**: Thêm voucher mới, Sửa voucher, Xóa, Bật/Tắt hiệu lực mã giảm giá.
- **📊 Thống kê Doanh thu & Báo cáo**: Báo cáo doanh thu theo Ngày, Tuần, Tháng, Năm; Tính năng **Xuất file báo cáo CSV/Excel** với 1 click.
- **Hệ thống**: Nút Khôi phục dữ liệu mẫu ban đầu (Reset Database) giúp dễ dàng thử nghiệm nhiều lần.

---

## 🚀 5. Hướng Dẫn Chạy & Kiểm Thử Ứng Dụng

Dự án là ứng dụng Web thuần (Pure Frontend Single/Multi-page Architecture) không yêu cầu cài đặt môi trường server phức tạp:

1. **Cách 1: Mở trực tiếp**
   - Click đúp chuột vào tệp `index.html` trong thư mục gốc dự án để mở bằng bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Firefox, Safari).

2. **Cách 2: Chạy với Live Server (VS Code / Web Server)**
   - Mở thư mục dự án trong Visual Studio Code.
   - Nhấn chuột phải vào `index.html` → Chọn **Open with Live Server** (hoặc truy cập `http://127.0.0.1:5500/index.html`).

---

*Chúc thầy cô và các bạn có trải nghiệm tuyệt vời khi đánh giá đồ án **HotelBooking**!*

#   h o t e l b o o k i n g  
 
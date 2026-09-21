/* ==========================================================================
   HOTELBOOKING - DATA ACCESS LAYER (db.js)
   Cung cấp API CRUD toàn diện cho toàn bộ hệ thống
   ========================================================================== */

const STORAGE_KEYS = {
  HOTELS: 'HB_HOTELS',
  ROOMS: 'HB_ROOMS',
  PROMOTIONS: 'HB_PROMOTIONS',
  USERS: 'HB_USERS',
  BOOKINGS: 'HB_BOOKINGS',
  REVIEWS: 'HB_REVIEWS',
  ARTICLES: 'HB_ARTICLES',
  CATEGORIES: 'HB_CATEGORIES',
  ADDON_SERVICES: 'HB_ADDON_SERVICES',
  FAVORITES: 'HB_FAVORITES',
  RECENTLY_VIEWED: 'HB_RECENTLY_VIEWED',
  CURRENT_USER: 'HB_CURRENT_USER',
  FLASH_SALE_DEALS: 'HB_FLASH_SALE_DEALS',
  IS_SEEDED: 'HB_IS_SEEDED_V24'
};

class DatabaseService {
  constructor() {
    this.initDatabase();
  }

  /**
   * Khởi tạo cơ sở dữ liệu từ Seed Data nếu chưa có trong LocalStorage
   */
  initDatabase() {
    const CURRENT_VERSION = 'HB_IS_SEEDED_V24';
    const isSeeded = localStorage.getItem(STORAGE_KEYS.IS_SEEDED);
    const hotels = this._get(STORAGE_KEYS.HOTELS);
    const articles = this._get(STORAGE_KEYS.ARTICLES);
    const rooms = this._get(STORAGE_KEYS.ROOMS);
    const users = this._get(STORAGE_KEYS.USERS);
    const promotions = this._get(STORAGE_KEYS.PROMOTIONS);

    if (!isSeeded || !hotels || !hotels.length || !articles || !articles.length || !rooms || !rooms.length || !users || !users.length) {
      this.resetToDefault();
      return;
    }

    // Auto-update articles and flash sale deals when seed data gets upgraded
    if (isSeeded !== CURRENT_VERSION) {
      if (typeof INITIAL_SEED_DATA !== 'undefined' && INITIAL_SEED_DATA.articles) {
        localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(INITIAL_SEED_DATA.articles || []));
      }
      if (typeof INITIAL_FLASH_SALE_DEALS !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.FLASH_SALE_DEALS, JSON.stringify(INITIAL_FLASH_SALE_DEALS));
      }
      localStorage.setItem(STORAGE_KEYS.IS_SEEDED, CURRENT_VERSION);
    }

    // Đảm bảo dữ liệu Flash Sale luôn tồn tại
    if (!localStorage.getItem(STORAGE_KEYS.FLASH_SALE_DEALS) && typeof INITIAL_FLASH_SALE_DEALS !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.FLASH_SALE_DEALS, JSON.stringify(INITIAL_FLASH_SALE_DEALS));
    }
  }

  /**
   * Reset toàn bộ dữ liệu về mặc định
   */
  resetToDefault() {
    if (typeof INITIAL_SEED_DATA !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.HOTELS, JSON.stringify(INITIAL_SEED_DATA.hotels || []));
      localStorage.setItem(STORAGE_KEYS.ROOMS, JSON.stringify(INITIAL_SEED_DATA.rooms || []));
      localStorage.setItem(STORAGE_KEYS.PROMOTIONS, JSON.stringify(INITIAL_SEED_DATA.promotions || []));
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_SEED_DATA.users || []));
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(INITIAL_SEED_DATA.bookings || []));
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(INITIAL_SEED_DATA.reviews || []));
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(INITIAL_SEED_DATA.articles || []));
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_SEED_DATA.categories || []));
      localStorage.setItem(STORAGE_KEYS.ADDON_SERVICES, JSON.stringify(INITIAL_SEED_DATA.addonServices || []));
      if (typeof INITIAL_FLASH_SALE_DEALS !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.FLASH_SALE_DEALS, JSON.stringify(INITIAL_FLASH_SALE_DEALS));
      }
      localStorage.setItem(STORAGE_KEYS.IS_SEEDED, 'HB_IS_SEEDED_V24');
    }
  }

  // --- Helper Methods ---
  _get(key) {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  }

  _set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // ==========================================================================
  // 1. HOTEL CRUD OPERATIONS
  // ==========================================================================
    getHotels(filterFn = null) {
    let hotels = this._get(STORAGE_KEYS.HOTELS);
    if (!hotels || hotels.length === 0) {
      if (typeof INITIAL_SEED_DATA !== 'undefined' && INITIAL_SEED_DATA.hotels) {
        hotels = INITIAL_SEED_DATA.hotels;
        this._set(STORAGE_KEYS.HOTELS, hotels);
      }
    }
    return filterFn ? hotels.filter(filterFn) : hotels;
  }

  getHotelById(id) {
    const hotels = this.getHotels();
    return hotels.find(h => h.id === id) || null;
  }

  addHotel(hotelData) {
    const hotels = this.getHotels();
    const newHotel = {
      id: generateId('htl'),
      rating: 5.0,
      reviewCount: 0,
      featured: false,
      status: 'active',
      ...hotelData
    };
    hotels.unshift(newHotel);
    this._set(STORAGE_KEYS.HOTELS, hotels);
    return newHotel;
  }

  updateHotel(id, updateData) {
    const hotels = this.getHotels();
    const index = hotels.findIndex(h => h.id === id);
    if (index !== -1) {
      hotels[index] = { ...hotels[index], ...updateData };
      this._set(STORAGE_KEYS.HOTELS, hotels);
      return hotels[index];
    }
    return null;
  }

  deleteHotel(id) {
    let hotels = this.getHotels();
    hotels = hotels.filter(h => h.id !== id);
    this._set(STORAGE_KEYS.HOTELS, hotels);
    // Xóa các phòng liên quan
    let rooms = this.getRooms();
    rooms = rooms.filter(r => r.hotelId !== id);
    this._set(STORAGE_KEYS.ROOMS, rooms);
    return true;
  }

  // ==========================================================================
  // 2. ROOM CRUD OPERATIONS
    getRooms(filterFn = null) {
    let rooms = this._get(STORAGE_KEYS.ROOMS);
    if (!rooms || rooms.length === 0) {
      if (typeof INITIAL_SEED_DATA !== 'undefined' && INITIAL_SEED_DATA.rooms) {
        rooms = INITIAL_SEED_DATA.rooms;
        this._set(STORAGE_KEYS.ROOMS, rooms);
      }
    }

    // Tự động chuẩn hóa tổng số phòng thực tế (5-10 phòng/loại) và số phòng khả dụng
    let modified = false;
    rooms = rooms.map(r => {
      let qty = r.quantity || r.totalRooms || 6;
      if (qty === 1 && !r.isSingleUnit) {
        qty = (r.type && (r.type.includes('Tổng Thống') || r.type.includes('Presidential') || r.type.includes('Villa'))) ? 2 : 8;
      }
      let avail = (r.availableCount !== undefined) 
        ? r.availableCount 
        : (r.availableRooms !== undefined ? r.availableRooms : Math.max(1, qty - 2));
      
      if (r.status === 'booked') avail = 0;

      if (r.quantity !== qty || r.availableCount !== avail || r.totalRooms !== qty) {
        r.quantity = qty;
        r.totalRooms = qty;
        r.availableCount = avail;
        modified = true;
      }
      return r;
    });

    if (modified) {
      this._set(STORAGE_KEYS.ROOMS, rooms);
    }

    return filterFn ? rooms.filter(filterFn) : rooms;
  }

  getRoomsByHotelId(hotelId) {
    return this.getRooms(r => r.hotelId === hotelId);
  }

  getRoomById(id) {
    const rooms = this.getRooms();
    return rooms.find(r => r.id === id) || null;
  }

  addRoom(roomData) {
    const rooms = this.getRooms();
    const newRoom = {
      id: generateId('room'),
      status: 'available',
      availableCount: Number(roomData.quantity) || 1,
      ...roomData
    };
    rooms.unshift(newRoom);
    this._set(STORAGE_KEYS.ROOMS, rooms);
    return newRoom;
  }

  updateRoom(id, updateData) {
    const rooms = this.getRooms();
    const index = rooms.findIndex(r => r.id === id);
    if (index !== -1) {
      rooms[index] = { ...rooms[index], ...updateData };
      this._set(STORAGE_KEYS.ROOMS, rooms);
      return rooms[index];
    }
    return null;
  }

  deleteRoom(id) {
    let rooms = this.getRooms();
    rooms = rooms.filter(r => r.id !== id);
    this._set(STORAGE_KEYS.ROOMS, rooms);
    return true;
  }

  // ==========================================================================
  // 3. BOOKING CRUD OPERATIONS
  // ==========================================================================
  getBookings(filterFn = null) {
    const bookings = this._get(STORAGE_KEYS.BOOKINGS);
    return filterFn ? bookings.filter(filterFn) : bookings;
  }

  getBookingById(id) {
    const bookings = this.getBookings();
    return bookings.find(b => b.id === id || b.code === id) || null;
  }

  getBookingsByUserId(userId) {
    return this.getBookings(b => b.userId === userId);
  }

  createBooking(bookingData) {
    const bookings = this.getBookings();
    const newBooking = {
      id: generateId('bk'),
      code: generateBookingCode(),
      status: 'Chờ xác nhận',
      isReviewed: false,
      createdAt: new Date().toISOString(),
      ...bookingData
    };
    bookings.unshift(newBooking);
    this._set(STORAGE_KEYS.BOOKINGS, bookings);

    // Tăng số lần đặt của User
    if (bookingData.userId) {
      const users = this.getUsers();
      const userIndex = users.findIndex(u => u.id === bookingData.userId);
      if (userIndex !== -1) {
        users[userIndex].bookingCount = (users[userIndex].bookingCount || 0) + 1;
        this._set(STORAGE_KEYS.USERS, users);
      }
    }

    // Cập nhật số phòng trống ngay lập tức
    if (bookingData.roomId) {
      const room = this.getRoomById(bookingData.roomId);
      if (room) {
        const count = Number(bookingData.roomCount) || 1;
        const total = Number(room.totalRooms) || Number(room.quantity) || 10;
        const currentAvail = (room.availableCount !== undefined && room.availableCount !== null) ? Number(room.availableCount) : total;
        this.updateRoom(room.id, {
          availableCount: Math.max(0, currentAvail - count)
        });
      }
    }

    // Cập nhật số suất Flash Sale còn lại nếu là đơn Flash Sale
    if (bookingData.isFlashSale) {
      this.decrementFlashSaleStock(bookingData.hotelId, bookingData.roomId, Number(bookingData.roomCount) || 1);
    }

    return newBooking;
  }

  getFlashSaleDeals() {
    const raw = localStorage.getItem(STORAGE_KEYS.FLASH_SALE_DEALS);
    if (!raw) {
      if (typeof INITIAL_FLASH_SALE_DEALS !== 'undefined') {
        this.setFlashSaleDeals(INITIAL_FLASH_SALE_DEALS);
        return INITIAL_FLASH_SALE_DEALS;
      }
      return null;
    }
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && Object.keys(parsed).length > 0) {
        return parsed;
      }
    } catch (e) {}
    if (typeof INITIAL_FLASH_SALE_DEALS !== 'undefined') {
      this.setFlashSaleDeals(INITIAL_FLASH_SALE_DEALS);
      return INITIAL_FLASH_SALE_DEALS;
    }
    return null;
  }

  setFlashSaleDeals(deals) {
    this._set(STORAGE_KEYS.FLASH_SALE_DEALS, deals);
  }

  decrementFlashSaleStock(hotelId, roomId, count = 1) {
    let allDeals = this.getFlashSaleDeals();
    if (!allDeals) return false;

    let updated = false;
    for (const slotKey in allDeals) {
      const deals = allDeals[slotKey];
      if (!Array.isArray(deals)) continue;
      for (const deal of deals) {
        if (deal.id === hotelId && (!roomId || deal.roomId === roomId || !deal.roomId)) {
          const currentRemaining = Number(deal.remainingRooms) || 0;
          const newRemaining = Math.max(0, currentRemaining - count);
          deal.remainingRooms = newRemaining;
          
          const initialTotal = Number(deal.totalRooms) || 5;
          const soldCount = initialTotal - newRemaining;
          deal.soldPercent = Math.min(100, Math.round((soldCount / initialTotal) * 100));
          updated = true;
          break;
        }
      }
      if (updated) break;
    }

    if (updated) {
      this.setFlashSaleDeals(allDeals);
      return true;
    }
    return false;
  }

  incrementFlashSaleStock(hotelId, roomId, count = 1) {
    let allDeals = this.getFlashSaleDeals();
    if (!allDeals) return false;

    let updated = false;
    for (const slotKey in allDeals) {
      const deals = allDeals[slotKey];
      if (!Array.isArray(deals)) continue;
      for (const deal of deals) {
        if (deal.id === hotelId && (!roomId || deal.roomId === roomId || !deal.roomId)) {
          const currentRemaining = Number(deal.remainingRooms) || 0;
          const initialTotal = Number(deal.totalRooms) || 5;
          const newRemaining = Math.min(initialTotal, currentRemaining + count);
          deal.remainingRooms = newRemaining;
          
          const soldCount = Math.max(0, initialTotal - newRemaining);
          deal.soldPercent = Math.max(0, Math.min(100, Math.round((soldCount / initialTotal) * 100)));
          updated = true;
          break;
        }
      }
      if (updated) break;
    }

    if (updated) {
      this.setFlashSaleDeals(allDeals);
      return true;
    }
    return false;
  }

  updateBookingStatus(id, newStatus) {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === id || b.code === id);
    if (index !== -1) {
      const prevStatus = bookings[index].status;
      bookings[index].status = newStatus;
      this._set(STORAGE_KEYS.BOOKINGS, bookings);

      // Nếu chuyển trạng thái sang Đã hủy
      if (newStatus === 'Đã hủy' && prevStatus !== 'Đã hủy') {
        if (bookings[index].roomId) {
          const room = this.getRoomById(bookings[index].roomId);
          if (room) {
            const count = Number(bookings[index].roomCount) || 1;
            const total = Number(room.totalRooms) || Number(room.quantity) || 10;
            const currentAvail = (room.availableCount !== undefined && room.availableCount !== null) ? Number(room.availableCount) : 0;
            this.updateRoom(room.id, {
              availableCount: Math.min(total, currentAvail + count)
            });
          }
        }
        if (bookings[index].isFlashSale) {
          this.incrementFlashSaleStock(bookings[index].hotelId, bookings[index].roomId, Number(bookings[index].roomCount) || 1);
        }
      }

      return bookings[index];
    }
    return null;
  }

  cancelBooking(id, reason = '') {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === id || b.code === id);
    if (index !== -1) {
      const prevStatus = bookings[index].status;
      bookings[index].status = 'Đã hủy';
      bookings[index].cancelReason = reason;
      bookings[index].cancelledAt = new Date().toISOString();
      this._set(STORAGE_KEYS.BOOKINGS, bookings);

      // Trả lại số phòng trống ngay lập tức
      if (bookings[index].roomId) {
        const room = this.getRoomById(bookings[index].roomId);
        if (room) {
          const count = Number(bookings[index].roomCount) || 1;
          const total = Number(room.totalRooms) || Number(room.quantity) || 10;
          const currentAvail = (room.availableCount !== undefined && room.availableCount !== null) ? Number(room.availableCount) : 0;
          this.updateRoom(room.id, {
            availableCount: Math.min(total, currentAvail + count)
          });
        }
      }

      // Trả lại suất Flash Sale nếu đơn đặt qua Flash Sale và trước đó chưa bị hủy
      if (bookings[index].isFlashSale && prevStatus !== 'Đã hủy') {
        this.incrementFlashSaleStock(bookings[index].hotelId, bookings[index].roomId, Number(bookings[index].roomCount) || 1);
      }

      return bookings[index];
    }
    return null;
  }

  // ==========================================================================
  // 4. USER MANAGEMENT CRUD
  // ==========================================================================
    getUsers(filterFn = null) {
    let users = this._get(STORAGE_KEYS.USERS);
    if (!users || users.length === 0) {
      if (typeof INITIAL_SEED_DATA !== 'undefined' && INITIAL_SEED_DATA.users) {
        users = INITIAL_SEED_DATA.users;
        this._set(STORAGE_KEYS.USERS, users);
      }
    }

    // Đổi tên tài khoản Admin Tổng Quản Trị sang Ông Kim
    let modified = false;
    users = users.map(u => {
      if (u.email === 'admin@hotelbooking.vn' || u.id === 'usr_001' || u.name === 'Tổng Quản Trị') {
        if (u.name !== 'Ông Kim') {
          u.name = 'Ông Kim';
          modified = true;
        }
      }
      return u;
    });

    if (modified) {
      this._set(STORAGE_KEYS.USERS, users);
      const cur = this.getCurrentUser();
      if (cur && (cur.email === 'admin@hotelbooking.vn' || cur.id === 'usr_001' || cur.name === 'Tổng Quản Trị')) {
        cur.name = 'Ông Kim';
        this.setCurrentUser(cur);
      }
    }

    return filterFn ? users.filter(filterFn) : users;
  }

  getUserById(id) {
    const users = this.getUsers();
    return users.find(u => u.id === id) || null;
  }

  getUserByEmail(email) {
    const users = this.getUsers();
    return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  }

  createUser(userData) {
    const users = this.getUsers();
    const newUser = {
      id: generateId('usr'),
      role: 'CUSTOMER',
      status: 'active',
      bookingCount: 0,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      createdAt: new Date().toISOString().split('T')[0],
      ...userData
    };
    users.push(newUser);
    this._set(STORAGE_KEYS.USERS, users);
    return newUser;
  }

  updateUser(id, updateData) {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updateData };
      this._set(STORAGE_KEYS.USERS, users);

      // Cập nhật current user nếu trùng
      const currentUser = this.getCurrentUser();
      if (currentUser && currentUser.id === id) {
        this.setCurrentUser(users[index]);
      }
      return users[index];
    }
    return null;
  }

  toggleUserStatus(id) {
    const user = this.getUserById(id);
    if (user) {
      const newStatus = user.status === 'active' ? 'blocked' : 'active';
      return this.updateUser(id, { status: newStatus });
    }
    return null;
  }

  deleteUser(id) {
    let users = this.getUsers();
    users = users.filter(u => u.id !== id);
    this._set(STORAGE_KEYS.USERS, users);
    return true;
  }

  getCurrentUser() {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (!raw) return null;
    try {
      const user = JSON.parse(raw);
      if (user && (user.name === 'Tổng Quản Trị' || user.email === 'admin@hotelbooking.vn' || user.id === 'usr_001')) {
        user.name = 'Ông Kim';
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      }
      return user;
    } catch (e) {
      return null;
    }
  }

  setCurrentUser(user) {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  }

  // ==========================================================================
  // 5. PROMOTION VOUCHERS CRUD
  // ==========================================================================
    getPromotions(filterFn = null) {
    let promos = this._get(STORAGE_KEYS.PROMOTIONS);
    if (!promos || promos.length === 0) {
      if (typeof INITIAL_SEED_DATA !== 'undefined' && INITIAL_SEED_DATA.promotions) {
        promos = INITIAL_SEED_DATA.promotions;
        this._set(STORAGE_KEYS.PROMOTIONS, promos);
      }
    }
    return filterFn ? promos.filter(filterFn) : promos;
  }

  getPromotionByCode(code) {
    if (!code) return null;
    const promos = this.getPromotions();
    return promos.find(p => p.code.toUpperCase() === code.trim().toUpperCase() && p.status === 'active') || null;
  }

  addPromotion(promoData) {
    const promos = this.getPromotions();
    const newPromo = {
      id: generateId('promo'),
      usageCount: 0,
      status: 'active',
      ...promoData,
      code: promoData.code.toUpperCase()
    };
    promos.unshift(newPromo);
    this._set(STORAGE_KEYS.PROMOTIONS, promos);
    return newPromo;
  }

  updatePromotion(id, updateData) {
    const promos = this.getPromotions();
    const index = promos.findIndex(p => p.id === id);
    if (index !== -1) {
      promos[index] = { ...promos[index], ...updateData };
      if (updateData.code) promos[index].code = updateData.code.toUpperCase();
      this._set(STORAGE_KEYS.PROMOTIONS, promos);
      return promos[index];
    }
    return null;
  }

  deletePromotion(id) {
    let promos = this.getPromotions();
    promos = promos.filter(p => p.id !== id);
    this._set(STORAGE_KEYS.PROMOTIONS, promos);
    return true;
  }

  togglePromotion(id) {
    const promos = this.getPromotions();
    const index = promos.findIndex(p => p.id === id);
    if (index !== -1) {
      promos[index].status = promos[index].status === 'active' ? 'inactive' : 'active';
      this._set(STORAGE_KEYS.PROMOTIONS, promos);
      return promos[index];
    }
    return null;
  }

  // ==========================================================================
  // 6. REVIEW & RATINGS CRUD
  // ==========================================================================
  getReviews(filterFn = null) {
    const reviews = this._get(STORAGE_KEYS.REVIEWS);
    return filterFn ? reviews.filter(filterFn) : reviews;
  }

  getReviewsByHotelId(hotelId) {
    return this.getReviews(r => r.hotelId === hotelId && r.status !== 'hidden' && r.status !== 'blocked');
  }

  addReview(reviewData) {
    const reviews = this.getReviews();
    const newReview = {
      id: generateId('rev'),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'visible',
      ...reviewData
    };
    reviews.unshift(newReview);
    this._set(STORAGE_KEYS.REVIEWS, reviews);

    // Cập nhật điểm rating trung bình của khách sạn
    const hotelReviews = reviews.filter(r => r.hotelId === reviewData.hotelId);
    const avgRating = (hotelReviews.reduce((sum, r) => sum + Number(r.rating), 0) / hotelReviews.length).toFixed(1);
    this.updateHotel(reviewData.hotelId, {
      rating: parseFloat(avgRating),
      reviewCount: hotelReviews.length
    });

    // Đánh dấu đơn đặt phòng đã review
    if (reviewData.bookingId) {
      const bookings = this.getBookings();
      const bIndex = bookings.findIndex(b => b.id === reviewData.bookingId);
      if (bIndex !== -1) {
        bookings[bIndex].isReviewed = true;
        this._set(STORAGE_KEYS.BOOKINGS, bookings);
      }
    }

    return newReview;
  }

  replyReview(reviewId, replyData) {
    const reviews = this.getReviews();
    const index = reviews.findIndex(r => r.id === reviewId);
    if (index !== -1) {
      reviews[index].reply = {
        comment: replyData.comment,
        responderName: replyData.responderName || 'Ban Quản Lý Khách Sạn',
        createdAt: new Date().toISOString().split('T')[0]
      };
      this._set(STORAGE_KEYS.REVIEWS, reviews);
      return reviews[index];
    }
    return null;
  }

  deleteReviewReply(reviewId) {
    const reviews = this.getReviews();
    const index = reviews.findIndex(r => r.id === reviewId);
    if (index !== -1) {
      delete reviews[index].reply;
      this._set(STORAGE_KEYS.REVIEWS, reviews);
      return reviews[index];
    }
    return null;
  }

  deleteReview(id) {
    let reviews = this.getReviews();
    const reviewToDelete = reviews.find(r => r.id === id);
    reviews = reviews.filter(r => r.id !== id);
    this._set(STORAGE_KEYS.REVIEWS, reviews);

    // Recalculate hotel rating if deleted review had a hotelId
    if (reviewToDelete && reviewToDelete.hotelId) {
      const hotelReviews = reviews.filter(r => r.hotelId === reviewToDelete.hotelId);
      if (hotelReviews.length > 0) {
        const avgRating = (hotelReviews.reduce((sum, r) => sum + Number(r.rating), 0) / hotelReviews.length).toFixed(1);
        this.updateHotel(reviewToDelete.hotelId, {
          rating: parseFloat(avgRating),
          reviewCount: hotelReviews.length
        });
      } else {
        this.updateHotel(reviewToDelete.hotelId, {
          rating: 5.0,
          reviewCount: 0
        });
      }
    }
    return true;
  }

  toggleReviewVisibility(id) {
    const reviews = this.getReviews();
    const index = reviews.findIndex(r => r.id === id);
    if (index !== -1) {
      reviews[index].status = reviews[index].status === 'visible' ? 'hidden' : 'visible';
      this._set(STORAGE_KEYS.REVIEWS, reviews);
      return reviews[index];
    }
    return null;
  }

  // ==========================================================================
  // 7. STATS & ANALYTICS
  // ==========================================================================
  getDashboardStats() {
    const hotels = this.getHotels();
    const rooms = this.getRooms();
    const users = this.getUsers(u => u.role === 'CUSTOMER');
    const bookings = this.getBookings();
    const reviews = this.getReviews();
    const articles = this.getArticles();

    // Tính tổng doanh thu từ các đơn không bị hủy
    const revenue = bookings
      .filter(b => b.status !== 'Đã hủy')
      .reduce((sum, b) => sum + (Number(b.totalAmount) || 0), 0);

    const totalRooms = rooms.reduce((sum, r) => sum + (Number(r.quantity) || 0), 0);

    return {
      totalHotels: hotels.length,
      totalRooms: totalRooms || 180,
      totalUsers: users.length,
      totalBookings: bookings.length,
      totalRevenue: revenue,
      totalReviews: reviews.length,
      totalArticles: articles.length
    };
  }

  // ==========================================================================
  // 8. ARTICLE (TIN TỨC & CẨM NANG) CRUD
  // ==========================================================================
    getArticles(filterFn = null) {
    let articles = this._get(STORAGE_KEYS.ARTICLES);
    if (!articles || articles.length === 0) {
      if (typeof INITIAL_SEED_DATA !== 'undefined' && INITIAL_SEED_DATA.articles) {
        articles = INITIAL_SEED_DATA.articles;
        this._set(STORAGE_KEYS.ARTICLES, articles);
      }
    }
    return filterFn ? articles.filter(filterFn) : articles;
  }

  getArticleById(id) {
    return this.getArticles().find(a => a.id === id) || null;
  }

  getArticleBySlug(slug) {
    return this.getArticles().find(a => a.slug === slug) || null;
  }

  addArticle(data) {
    const articles = this.getArticles();
    const newArticle = {
      id: generateId('art'),
      status: 'published',
      views: 0,
      createdAt: new Date().toISOString().split('T')[0],
      ...data
    };
    articles.unshift(newArticle);
    this._set(STORAGE_KEYS.ARTICLES, articles);
    return newArticle;
  }

  updateArticle(id, updateData) {
    const articles = this.getArticles();
    const index = articles.findIndex(a => a.id === id);
    if (index !== -1) {
      articles[index] = { ...articles[index], ...updateData, updatedAt: new Date().toISOString().split('T')[0] };
      this._set(STORAGE_KEYS.ARTICLES, articles);
      return articles[index];
    }
    return null;
  }

  deleteArticle(id) {
    let articles = this.getArticles();
    articles = articles.filter(a => a.id !== id);
    this._set(STORAGE_KEYS.ARTICLES, articles);
    return true;
  }

  incrementArticleViews(id) {
    const articles = this.getArticles();
    const index = articles.findIndex(a => a.id === id);
    if (index !== -1) {
      articles[index].views = (articles[index].views || 0) + 1;
      this._set(STORAGE_KEYS.ARTICLES, articles);
    }
  }

  // ==========================================================================
  // 9. CATEGORIES & ADDON SERVICES
  // ==========================================================================
  getCategories() {
    const cats = this._get(STORAGE_KEYS.CATEGORIES);
    if (cats && cats.length) return cats;
    return typeof INITIAL_SEED_DATA !== 'undefined' ? (INITIAL_SEED_DATA.categories || []) : [];
  }

  getAddonServices() {
    const srvs = this._get(STORAGE_KEYS.ADDON_SERVICES);
    if (srvs && srvs.length) return srvs;
    return typeof INITIAL_SEED_DATA !== 'undefined' ? (INITIAL_SEED_DATA.addonServices || []) : [];
  }

  // ==========================================================================
  // ==========================================================================
  /**
   * Kiểm tra số phòng thực tế còn trống cho một loại phòng trong khoảng ngày checkIn -> checkOut
   * Chỉ khi nào có người đặt trùng khoảng thời gian đó và vượt quá tổng số phòng thì mới báo hết
   * @param {string} roomId 
   * @param {string} checkIn 
   * @param {string} checkOut 
   * @param {number} requestedQty 
   * @returns {{ isAvailable: boolean, availableCount: number, totalQuantity: number }}
   */
  checkRoomAvailability(roomId, checkIn, checkOut, requestedQty = 1) {
    const room = this.getRoomById(roomId);
    if (!room) return { isAvailable: false, availableCount: 0, totalQuantity: 0 };
    if (room.status === 'inactive' || room.status === 'maintenance') {
      return { isAvailable: false, availableCount: 0, totalQuantity: 0 };
    }

    const totalQty = Number(room.totalRooms) || Number(room.quantity) || 10;
    if (!checkIn || !checkOut) {
      return { isAvailable: totalQty >= requestedQty, availableCount: totalQty, totalQuantity: totalQty };
    }

    const bookings = this.getBookings(b => 
      b.roomId === roomId && 
      b.status !== 'Đã hủy' && 
      b.status !== 'cancelled'
    );

    let bookedCount = 0;
    bookings.forEach(b => {
      if (typeof isDateOverlap === 'function' && isDateOverlap(checkIn, checkOut, b.checkIn, b.checkOut)) {
        bookedCount += (Number(b.roomCount) || 1);
      }
    });

    const availableCount = Math.max(0, totalQty - bookedCount);
    return {
      isAvailable: availableCount >= requestedQty,
      availableCount,
      totalQuantity: totalQty
    };
  }

  /**
   * Kiểm tra xem khách sạn có ít nhất 1 phòng trống trong khoảng ngày hay không
   */
  checkHotelAvailability(hotelId, checkIn, checkOut) {
    const rooms = this.getRoomsByHotelId(hotelId);
    if (!rooms.length) return true;
    return rooms.some(r => this.checkRoomAvailability(r.id, checkIn, checkOut, 1).isAvailable);
  }

  // ==========================================================================
  // 11. FAVORITES SYSTEM
  // ==========================================================================
  getFavorites(userId) {
    if (!userId) {
      const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return raw ? JSON.parse(raw) : [];
    }
    const user = this.getUserById(userId);
    return (user && user.favorites) ? user.favorites : [];
  }

  toggleFavorite(userId, hotelId) {
    if (!hotelId) return false;
    let favorites = [];

    if (userId) {
      const user = this.getUserById(userId);
      if (user) {
        user.favorites = user.favorites || [];
        const idx = user.favorites.indexOf(hotelId);
        if (idx !== -1) {
          user.favorites.splice(idx, 1);
        } else {
          user.favorites.push(hotelId);
        }
        this.updateUser(userId, { favorites: user.favorites });
        // Đồng bộ currentUser trong session
        const curUser = this.getCurrentUser();
        if (curUser && curUser.id === userId) {
          curUser.favorites = user.favorites;
          this.setCurrentUser(curUser);
        }
        return user.favorites.includes(hotelId);
      }
    }

    // Guest fallback
    const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    favorites = raw ? JSON.parse(raw) : [];
    const idx = favorites.indexOf(hotelId);
    let isFav = false;
    if (idx !== -1) {
      favorites.splice(idx, 1);
      isFav = false;
    } else {
      favorites.push(hotelId);
      isFav = true;
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    return isFav;
  }

  isFavorite(userId, hotelId) {
    if (!hotelId) return false;
    const list = this.getFavorites(userId);
    return list.includes(hotelId);
  }

  // ==========================================================================
  // 12. RECENTLY VIEWED HOTELS
  // ==========================================================================
  getRecentlyViewed() {
    const raw = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED);
    const ids = raw ? JSON.parse(raw) : [];
    const hotels = [];
    ids.forEach(id => {
      const h = this.getHotelById(id);
      if (h) hotels.push(h);
    });
    return hotels;
  }

  addRecentlyViewed(hotelId) {
    if (!hotelId) return;
    const raw = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED);
    let ids = raw ? JSON.parse(raw) : [];
    ids = ids.filter(id => id !== hotelId);
    ids.unshift(hotelId);
    if (ids.length > 5) ids = ids.slice(0, 5);
    localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(ids));
  }

  // ==========================================================================
  // 13. REVIEW VALIDATION (VERIFIED STAY)
  // ==========================================================================

  // ==========================================================================
  // ==========================================================================
  /**
   * Kiểm tra 2 khoảng thời gian có bị giao nhau (Overlapping)
   */
  areDatesOverlapping(startA, endA, startB, endB) {
    if (!startA || !endA || !startB || !endB) return false;
    const sA = new Date(startA).getTime();
    const eA = new Date(endA).getTime();
    const sB = new Date(startB).getTime();
    const eB = new Date(endB).getTime();
    return sA < eB && sB < eA;
  }

  /**
   * Kiểm tra tình trạng phòng theo ngày
   */
  checkRoomAvailability(roomId, checkIn, checkOut, requestedCount = 1) {
    const room = this.getRoomById(roomId);
    if (!room) {
      return { isAvailable: false, availableCount: 0, remainingCount: 0, bookedCount: 0, totalQuantity: 0 };
    }
    if (room.status === 'inactive' || room.status === 'maintenance') {
      return { isAvailable: false, availableCount: 0, remainingCount: 0, bookedCount: 0, totalQuantity: Number(room.quantity) || 1 };
    }

    const totalQuantity = Number(room.quantity) || 2;
    if (!checkIn || !checkOut) {
      const avail = room.availableCount !== undefined ? Number(room.availableCount) : totalQuantity;
      return {
        isAvailable: avail >= requestedCount,
        availableCount: avail,
        remainingCount: avail,
        bookedCount: Math.max(0, totalQuantity - avail),
        totalQuantity
      };
    }

    const bookings = this.getBookings(b => 
      b.roomId === roomId && 
      b.status !== 'Đã hủy' && 
      b.status !== 'cancelled'
    );

    let bookedCount = 0;
    for (const b of bookings) {
      if (b.checkIn && b.checkOut) {
        if (this.areDatesOverlapping(checkIn, checkOut, b.checkIn, b.checkOut)) {
          bookedCount += Number(b.roomCount) || 1;
        }
      }
    }

    const remainingCount = Math.max(0, totalQuantity - bookedCount);
    return {
      isAvailable: remainingCount >= requestedCount,
      availableCount: remainingCount,
      remainingCount,
      bookedCount,
      totalQuantity
    };
  }

  /**
   * Kiểm tra xem khách sạn có còn phòng trống hay không
   */
  checkHotelAvailability(hotelId, checkIn, checkOut) {
    const rooms = this.getRoomsByHotelId(hotelId);
    if (!rooms || rooms.length === 0) return true;
    if (!checkIn || !checkOut) return true;
    return rooms.some(r => this.checkRoomAvailability(r.id, checkIn, checkOut, 1).isAvailable);
  }

  // ==========================================================================
  // 10. REAL-TIME ROOM & HOTEL AVAILABILITY ENGINE (EXACT & BULLETPROOF)
  // ==========================================================================
  /**
   * Kiểm tra 2 khoảng ngày [startA, endA] và [startB, endB] có giao nhau không
   */
  areDatesOverlapping(startA, endA, startB, endB) {
    if (!startA || !endA || !startB || !endB) return false;
    const sA = String(startA).trim().substring(0, 10);
    const eA = String(endA).trim().substring(0, 10);
    const sB = String(startB).trim().substring(0, 10);
    const eB = String(endB).trim().substring(0, 10);
    return sA < eB && sB < eA;
  }

  /**
   * Kiểm tra tình trạng phòng còn trống theo ngày hoặc hiện tại
   */
  checkRoomAvailability(roomId, checkIn, checkOut, requestedQty = 1) {
    const room = this.getRoomById(roomId);
    if (!room) {
      return { isAvailable: false, availableCount: 0, totalQuantity: 0, bookedCount: 0 };
    }
    if (room.status === 'inactive' || room.status === 'maintenance') {
      return { isAvailable: false, availableCount: 0, totalQuantity: 0, bookedCount: 0 };
    }

    const totalQty = Number(room.totalRooms) || Number(room.quantity) || 10;

    const bookings = this.getBookings(b => 
      b.roomId === roomId && 
      b.status !== 'Đã hủy' && 
      b.status !== 'cancelled'
    );

    let bookedCount = 0;
    if (checkIn && checkOut) {
      bookings.forEach(b => {
        if (b.checkIn && b.checkOut) {
          if (this.areDatesOverlapping(checkIn, checkOut, b.checkIn, b.checkOut)) {
            bookedCount += (Number(b.roomCount) || 1);
          }
        }
      });
    } else {
      // Nếu không chọn ngày, tính các đơn hiện hữu chưa checkout
      const todayStr = new Date().toISOString().split('T')[0];
      bookings.forEach(b => {
        if (b.checkOut && b.checkOut >= todayStr) {
          bookedCount += (Number(b.roomCount) || 1);
        }
      });
    }

    const availableCount = Math.max(0, totalQty - bookedCount);
    return {
      isAvailable: availableCount >= requestedQty,
      availableCount,
      totalQuantity: totalQty,
      bookedCount
    };
  }

  /**
   * Kiểm tra xem khách sạn có ít nhất 1 phòng trống trong khoảng ngày hay không
   */
  checkHotelAvailability(hotelId, checkIn, checkOut) {
    const rooms = this.getRoomsByHotelId(hotelId);
    if (!rooms || rooms.length === 0) return true;
    return rooms.some(r => this.checkRoomAvailability(r.id, checkIn, checkOut, 1).isAvailable);
  }
}

const DB = new DatabaseService();

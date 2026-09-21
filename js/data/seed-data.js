/* ==========================================================================
   HOTELBOOKING - SEED DATA (seed-data.js)
   ========================================================================== */

const INITIAL_SEED_DATA = {
  "categories": [
    {
      "id": "all",
      "name": "Tất cả",
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": "hotel",
      "name": "Khách sạn",
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": "resort",
      "name": "Resort",
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": "villa",
      "name": "Villa & Biệt thự",
      "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": "homestay",
      "name": "Homestay",
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": "apartment",
      "name": "Căn hộ cao cấp",
      "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": "beach_resort",
      "name": "Beach Resort",
      "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "addonServices": [
    {
      "id": "srv_buffet",
      "name": "Buffet sáng thượng hạng Á - Âu",
      "price": 150000,
      "unit": "người/ngày",
      "icon": "restaurant",
      "desc": "Thưởng thức hơn 60 món ăn cao cấp cùng đầu bếp 5 sao."
    },
    {
      "id": "srv_airport",
      "name": "Xe limousine đưa đón sân bay 2 chiều",
      "price": 300000,
      "unit": "chuyến",
      "icon": "airport_shuttle",
      "desc": "Đón tiễn đúng giờ với nước uống và khăn lạnh miễn phí."
    },
    {
      "id": "srv_spa",
      "name": "Liệu trình Spa thư giãn & Massage thảo dược (60p)",
      "price": 500000,
      "unit": "gói",
      "icon": "spa",
      "desc": "Xua tan mệt mỏi với tinh dầu thiên nhiên và kỹ thuật viên chuyên nghiệp."
    },
    {
      "id": "srv_laundry",
      "name": "Dịch vụ giặt ủi lấy nhanh trong ngày",
      "price": 100000,
      "unit": "lần",
      "icon": "local_laundry_service",
      "desc": "Giặt sấy và ủi phẳng chuẩn chỉnh sẵn sàng trong 4 giờ."
    },
    {
      "id": "srv_car",
      "name": "Thuê xe máy / xe tay ga tự lái",
      "price": 180000,
      "unit": "ngày",
      "icon": "two_wheeler",
      "desc": "Tặng kèm 2 mũ bảo hiểm và bản đồ du lịch thành phố."
    },
    {
      "id": "srv_late_checkout",
      "name": "Check-out muộn đến 16:00",
      "price": 250000,
      "unit": "lần",
      "icon": "schedule",
      "desc": "Thoải mái nghỉ ngơi và chuẩn bị trước khi ra sân bay."
    }
  ],
  "hotels": [
    {
      "id": "htl_dn_01",
      "name": "Khách sạn Mường Thanh Luxury Đà Nẵng",
      "slug": "khach-san-muong-thanh-luxury-da-nang",
      "address": "270 Võ Nguyên Giáp, Phường Mỹ An, Quận Ngũ Hành Sơn",
      "city": "Đà Nẵng",
      "category": "hotel",
      "categoryLabel": "Khách sạn 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 1750000,
      "pricePerNight": 1750000,
      "rating": 4.95,
      "reviewCount": 268,
      "type": "Khách sạn 5 sao",
      "featured": true,
      "image": "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(1).jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(1).jpg",
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(2).jpg",
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(3).jpg"
      ],
      "description": "Tọa lạc ngay mặt tiền bãi biển Mỹ Khê xinh đẹp của Đà Nẵng, Khách sạn Mường Thanh Luxury Đà Nẵng mang đến dịch vụ nghỉ dưỡng 5 sao tiêu chuẩn quốc tế với tầm nhìn toàn cảnh đại dương, hồ bơi vô cực trên cao và hệ thống phòng ốc đẳng cấp.",
      "amenities": [
        "Hồ bơi vô cực",
        "Buffet sáng Á - Âu",
        "Spa & Massage thư giãn",
        "Phòng Gym cao cấp",
        "Wifi tốc độ cao",
        "Xe đưa đón sân bay",
        "Quầy bar tầng thượng",
        "Phòng hội nghị"
      ],
      "nearbyPlaces": [
        {
          "name": "Bãi biển Mỹ Khê",
          "distance": "50m (Trước mặt)",
          "type": "beach",
          "icon": "beach_access"
        },
        {
          "name": "Cầu Rồng & Sông Hàn",
          "distance": "2.5km",
          "type": "attraction",
          "icon": "nature_people"
        },
        {
          "name": "Sân bay Quốc tế Đà Nẵng",
          "distance": "5.5km (15 phút)",
          "type": "airport",
          "icon": "flight"
        },
        {
          "name": "Bán đảo Sơn Trà & Chùa Linh Ứng",
          "distance": "7.5km",
          "type": "attraction",
          "icon": "attractions"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí tiền phòng",
        "pets": "Không cho phép mang theo thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_dn_02",
      "name": "Khách sạn Royal Beach Đà Nẵng",
      "slug": "khach-san-royal-beach-da-nang",
      "address": "Đường Hồ Nghinh, Phường Phước Mỹ, Quận Sơn Trà",
      "city": "Đà Nẵng",
      "category": "hotel",
      "categoryLabel": "Khách sạn 4 sao ven biển",
      "stars": 4,
      "starRating": 4,
      "priceMin": 1150000,
      "pricePerNight": 1150000,
      "rating": 4.86,
      "reviewCount": 182,
      "type": "Khách sạn 4 sao",
      "featured": true,
      "image": "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(1).jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(1).jpg",
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(2).jpg",
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(3).jpg"
      ],
      "description": "Royal Beach Hotel Đà Nẵng là điểm dừng chân lý tưởng chỉ cách bãi biển Mỹ Khê vài bước chân. Không gian thiết kế hiện đại, tiện nghi cao cấp cùng đội ngũ nhân viên nhiệt tình chu đáo mang đến cho quý khách kỳ nghỉ đáng nhớ.",
      "amenities": [
        "Hồ bơi ngoài trời",
        "Buffet sáng miễn phí",
        "Nhà hàng ẩm thực",
        "Wifi miễn phí",
        "Lễ tân 24/7",
        "Dịch vụ phòng",
        "Thuê xe máy"
      ],
      "nearbyPlaces": [
        {
          "name": "Bãi biển Mỹ Khê",
          "distance": "200m",
          "type": "beach",
          "icon": "beach_access"
        },
        {
          "name": "Cầu Khóa Tình Yêu & Tượng Cá Chép",
          "distance": "2.0km",
          "type": "attraction",
          "icon": "favorite"
        },
        {
          "name": "Sân bay Đà Nẵng",
          "distance": "5.0km",
          "type": "airport",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_dn_03",
      "name": "Khách sạn Sunrise Riverview Đà Nẵng",
      "slug": "khach-san-sunrise-riverview-da-nang",
      "address": "Đường Trần Hưng Đạo, Quận Sơn Trà",
      "city": "Đà Nẵng",
      "category": "hotel",
      "categoryLabel": "Khách sạn ven sông Hàn",
      "stars": 4,
      "starRating": 4,
      "priceMin": 850000,
      "pricePerNight": 850000,
      "rating": 4.88,
      "reviewCount": 140,
      "type": "Khách sạn 4 sao",
      "featured": false,
      "image": "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(1).jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(1).jpg",
        "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(2).jpg",
        "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(3).jpg"
      ],
      "description": "Sunrise Riverview Hotel sở hữu tầm nhìn trực diện bờ sông Hàn thơ mộng và cầu Rồng lung linh. Vị trí tuyệt vời để ngắm lễ hội pháo hoa quốc tế và tản bộ dọc đường hoa ven sông.",
      "amenities": [
        "Tầm nhìn sông Hàn 100%",
        "Bữa sáng miễn phí",
        "Nhà hàng & Cafe",
        "Wifi tốc độ cao",
        "Dịch vụ giặt ủi",
        "Hỗ trợ tour tham quan"
      ],
      "nearbyPlaces": [
        {
          "name": "Bờ sông Hàn & Cầu Rồng",
          "distance": "100m",
          "type": "attraction",
          "icon": "nature_people"
        },
        {
          "name": "Chợ Hàn Đà Nẵng",
          "distance": "800m",
          "type": "restaurant",
          "icon": "shopping_cart"
        },
        {
          "name": "Sân bay Đà Nẵng",
          "distance": "4.0km",
          "type": "airport",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_dn_04",
      "name": "MoonLight Hotel Đà Nẵng",
      "slug": "moonlight-hotel-da-nang",
      "address": "Đường Nguyễn Chí Thanh, Quận Hải Châu",
      "city": "Đà Nẵng",
      "category": "hotel",
      "categoryLabel": "Khách sạn 4 sao trung tâm",
      "stars": 4,
      "starRating": 4,
      "priceMin": 790000,
      "pricePerNight": 790000,
      "rating": 4.89,
      "reviewCount": 165,
      "type": "Khách sạn 4 sao",
      "featured": false,
      "image": "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(1).jpg",
      "gallery": [
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(1).jpg",
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(2).jpg",
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(3).jpg"
      ],
      "description": "Nằm ngay trung tâm thành phố Đà Nẵng, MoonLight Hotel mang phong cách sang trọng, ấm cúng cùng dịch vụ chu đáo. Rất thuận tiện để mua sắm, thưởng thức ẩm thực đặc sản và khám phá cuộc sống về đêm.",
      "amenities": [
        "Trung tâm thành phố",
        "Nhà hàng & Bar",
        "Bữa sáng phong phú",
        "Wifi miễn phí",
        "Lễ tân 24/7",
        "Dịch vụ phòng"
      ],
      "nearbyPlaces": [
        {
          "name": "Nhà thờ Con Gà Đà Nẵng",
          "distance": "300m",
          "type": "attraction",
          "icon": "church"
        },
        {
          "name": "Chợ Hàn",
          "distance": "500m",
          "type": "restaurant",
          "icon": "shopping_cart"
        },
        {
          "name": "Sân bay Quốc tế Đà Nẵng",
          "distance": "3.2km",
          "type": "airport",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em miễn phí ngủ chung",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_hn_01",
      "name": "Le Grand Hanoi Hotel - The Oriental",
      "slug": "le-grand-hanoi-hotel-the-oriental",
      "address": "Phố Hàng Hành, Phường Hàng Trống, Quận Hoàn Kiếm",
      "city": "Hà Nội",
      "category": "hotel",
      "categoryLabel": "Khách sạn Boutique 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 1850000,
      "pricePerNight": 1850000,
      "rating": 4.93,
      "reviewCount": 215,
      "type": "Boutique Hotel",
      "featured": true,
      "image": "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(1).jpg",
      "gallery": [
        "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(1).jpg",
        "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(2).jpg",
        "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(3).jpg"
      ],
      "description": "Nằm ngay trung tâm phố cổ Hà Nội, chỉ vài bước chân ra Hồ Hoàn Kiếm, Le Grand Hanoi Hotel mang đến không gian nghỉ dưỡng quý phái đậm chất Đông Dương hòa quyện cùng sự tiện nghi hiện đại 5 sao.",
      "amenities": [
        "Trung tâm phố cổ",
        "Bữa sáng Buffet Á - Âu",
        "Spa & Trị liệu thư giãn",
        "Nhà hàng ẩm thực Hà Nội",
        "Wifi cáp quang",
        "Dịch vụ phòng 24/7",
        "Đưa đón sân bay"
      ],
      "nearbyPlaces": [
        {
          "name": "Hồ Hoàn Kiếm & Đền Ngọc Sơn",
          "distance": "150m",
          "type": "attraction",
          "icon": "nature_people"
        },
        {
          "name": "Nhà thờ Lớn Hà Nội",
          "distance": "200m",
          "type": "attraction",
          "icon": "church"
        },
        {
          "name": "Phố đi bộ & Ẩm thực Tạ Hiện",
          "distance": "400m",
          "type": "restaurant",
          "icon": "restaurant"
        },
        {
          "name": "Sân bay Quốc tế Nội Bài",
          "distance": "27km",
          "type": "airport",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_hn_02",
      "name": "Melon Hotel Tố Hữu",
      "slug": "melon-hotel-to-huu-ha-noi",
      "address": "Đường Tố Hữu, Phường Trung Văn, Quận Nam Từ Liêm",
      "city": "Hà Nội",
      "category": "hotel",
      "categoryLabel": "Khách sạn 4 sao hiện đại",
      "stars": 4,
      "starRating": 4,
      "priceMin": 950000,
      "pricePerNight": 950000,
      "rating": 4.82,
      "reviewCount": 138,
      "type": "Khách sạn 4 sao",
      "featured": false,
      "image": "img/Hà Nội/Melon Hotel To Huu(1).jpg",
      "gallery": [
        "img/Hà Nội/Melon Hotel To Huu(1).jpg",
        "img/Hà Nội/Melon Hotel To Huu(2).jpg",
        "img/Hà Nội/Melon Hotel To Huu(3).jpg"
      ],
      "description": "Melon Hotel Tố Hữu sở hữu phong cách thiết kế tươi trẻ, hiện đại với cửa sổ kính lớn hướng công viên xanh mát. Lựa chọn tuyệt vời cho các chuyến công tác và nghỉ dưỡng tại khu vực phía Tây thủ đô.",
      "amenities": [
        "Cửa sổ lớn view công viên",
        "Bữa sáng miễn phí",
        "Phòng họp & Business Center",
        "Wifi tốc độ cao",
        "Dịch vụ giặt ủi",
        "Bãi đỗ xe an toàn"
      ],
      "nearbyPlaces": [
        {
          "name": "Trung tâm Hội nghị Quốc gia",
          "distance": "2.5km",
          "type": "attraction",
          "icon": "business"
        },
        {
          "name": "Bảo tàng Hà Nội",
          "distance": "3.0km",
          "type": "attraction",
          "icon": "museum"
        },
        {
          "name": "Sân bay Nội Bài",
          "distance": "30km",
          "type": "airport",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_hl_01",
      "name": "Green Bay Hotel Hạ Long",
      "slug": "green-bay-hotel-ha-long",
      "address": "Đường Hoàng Quốc Việt, Phường Hùng Thắng, Thành phố Hạ Long",
      "city": "Hạ Long",
      "category": "hotel",
      "categoryLabel": "Khách sạn 4 sao ven vịnh",
      "stars": 4,
      "starRating": 4,
      "priceMin": 1150000,
      "pricePerNight": 1150000,
      "rating": 4.84,
      "reviewCount": 156,
      "type": "Khách sạn 4 sao",
      "featured": false,
      "image": "img/Hạ Long/Green bay hotel_Hạ Long(1).jpg",
      "gallery": [
        "img/Hạ Long/Green bay hotel_Hạ Long(1).jpg",
        "img/Hạ Long/Green bay hotel_Hạ Long(2).jpg",
        "img/Hạ Long/Green bay hotel_Hạ Long(3).jpg"
      ],
      "description": "Green Bay Hotel Hạ Long mang đến kỳ nghỉ trong lành bên bờ vịnh di sản. Phòng nghỉ rộng rãi, tiện nghi ấm cúng cùng dịch vụ hỗ trợ đặt tour du thuyền tham quan vịnh chuyên nghiệp.",
      "amenities": [
        "View vịnh Hạ Long",
        "Buffet sáng phong phú",
        "Nhà hàng hải sản tươi",
        "Wifi miễn phí",
        "Hỗ trợ tour du thuyền",
        "Lễ tân 24/7"
      ],
      "nearbyPlaces": [
        {
          "name": "Bến cảng Tuần Châu",
          "distance": "4.0km",
          "type": "attraction",
          "icon": "directions_boat"
        },
        {
          "name": "Công viên Sun World Hạ Long",
          "distance": "3.5km",
          "type": "attraction",
          "icon": "attractions"
        },
        {
          "name": "Bãi biển Bãi Cháy",
          "distance": "2.0km",
          "type": "beach",
          "icon": "beach_access"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_hl_02",
      "name": "Wyndham Garden Legend Hạ Long",
      "slug": "wyndham-garden-legend-ha-long",
      "address": "Bãi Cháy, Thành phố Hạ Long, Tỉnh Quảng Ninh",
      "city": "Hạ Long",
      "category": "hotel",
      "categoryLabel": "Khách sạn 5 sao quốc tế",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2250000,
      "pricePerNight": 2250000,
      "rating": 4.94,
      "reviewCount": 275,
      "type": "Khách sạn 5 sao",
      "featured": true,
      "image": "img/Hạ Long/Wyndham Garden Legend Hạ Long(1).jpg",
      "gallery": [
        "img/Hạ Long/Wyndham Garden Legend Hạ Long(1).jpg",
        "img/Hạ Long/Wyndham Garden Legend Hạ Long(2).jpg",
        "img/Hạ Long/Wyndham Garden Legend Hạ Long(3).jpg"
      ],
      "description": "Khách sạn 5 sao đẳng cấp quốc tế tọa lạc tại vị trí đắc địa nhìn thẳng ra vịnh Hạ Long kỳ vĩ và cầu Bãi Cháy. Sở hữu hồ bơi ngoài trời tráng lệ, dịch vụ ẩm thực thượng hạng và trung tâm thể thao hiện đại.",
      "amenities": [
        "Hồ bơi hướng vịnh",
        "Buffet sáng 5 sao Á - Âu",
        "Spa & Sauna thảo dược",
        "Phòng Gym cao cấp",
        "Quầy bar tầng thượng",
        "Xe đưa đón",
        "Phòng hội nghị quốc tế"
      ],
      "nearbyPlaces": [
        {
          "name": "Cáp treo Nữ Hoàng & Sun World",
          "distance": "800m",
          "type": "attraction",
          "icon": "attractions"
        },
        {
          "name": "Cầu Bãi Cháy",
          "distance": "500m",
          "type": "attraction",
          "icon": "nature_people"
        },
        {
          "name": "Cảng tàu khách quốc tế Hạ Long",
          "distance": "1.5km",
          "type": "attraction",
          "icon": "directions_boat"
        }
      ],
      "policies": {
        "checkIn": "15:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy trước 48 giờ",
        "children": "Trẻ em dưới 12 tuổi miễn phí",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_vt_01",
      "name": "CSJ Luxury Hotel Vũng Tàu",
      "slug": "csj-luxury-hotel-vung-tau",
      "address": "165 Thùy Vân, Phường Thắng Tam, Thành phố Vũng Tàu",
      "city": "Vũng Tàu",
      "category": "apartment",
      "categoryLabel": "Căn hộ khách sạn cao cấp",
      "stars": 5,
      "starRating": 5,
      "priceMin": 1200000,
      "pricePerNight": 1200000,
      "rating": 4.88,
      "reviewCount": 195,
      "type": "Căn hộ cao cấp",
      "featured": true,
      "image": "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(1).jpg",
      "gallery": [
        "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(1).jpg",
        "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(2).jpg",
        "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(3).jpg"
      ],
      "description": "Tọa lạc tại mặt tiền đường Thùy Vân sầm uất ngay Bãi Sau Vũng Tàu, CSJ Luxury mang đến không gian căn hộ khách sạn sang trọng với ban công view biển tuyệt mỹ, hồ bơi trên cao và đầy đủ tiện nghi bếp hiện đại.",
      "amenities": [
        "View biển Bãi Sau 100%",
        "Hồ bơi vô cực",
        "Bếp nấu tiện nghi",
        "Wifi tốc độ cao",
        "Bãi đỗ xe rộng rãi",
        "Lễ tân phục vụ 24/7"
      ],
      "nearbyPlaces": [
        {
          "name": "Bãi Sau Vũng Tàu",
          "distance": "50m (Đối diện)",
          "type": "beach",
          "icon": "beach_access"
        },
        {
          "name": "Tượng Chúa Kito Vua",
          "distance": "2.5km",
          "type": "attraction",
          "icon": "attractions"
        },
        {
          "name": "Ngọn Hải Đăng Vũng Tàu",
          "distance": "3.5km",
          "type": "attraction",
          "icon": "nature_people"
        },
        {
          "name": "Chợ đêm hải sản Vũng Tàu",
          "distance": "1.0km",
          "type": "restaurant",
          "icon": "restaurant"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Phù hợp cho gia đình có trẻ em",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_vt_02",
      "name": "Trinh's House Hotel Vũng Tàu",
      "slug": "trinhs-house-hotel-vung-tau",
      "address": "Khu Á Châu, Phường 2, Thành phố Vũng Tàu",
      "city": "Vũng Tàu",
      "category": "homestay",
      "categoryLabel": "Villa & Homestay Biển",
      "stars": 4,
      "starRating": 4,
      "priceMin": 850000,
      "pricePerNight": 850000,
      "rating": 4.83,
      "reviewCount": 142,
      "type": "Homestay",
      "featured": false,
      "image": "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(1).jpg",
      "gallery": [
        "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(1).jpg",
        "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(2).jpg",
        "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(3).jpg"
      ],
      "description": "Trinh's House là không gian nghỉ dưỡng ấm áp, xinh xắn tại Vũng Tàu. Phù hợp cho các cặp đôi, nhóm bạn và đại gia đình tìm kiếm sự thoải mái, yên tĩnh và gần gũi với thiên nhiên biển.",
      "amenities": [
        "Sân vườn BBQ",
        "Phòng gia đình lớn",
        "Wifi miễn phí",
        "Bếp nấu tự do",
        "Thuê xe máy giá rẻ",
        "Chỗ đậu ô tô"
      ],
      "nearbyPlaces": [
        {
          "name": "Bãi Sau",
          "distance": "800m",
          "type": "beach",
          "icon": "beach_access"
        },
        {
          "name": "Bãi Trước",
          "distance": "1.5km",
          "type": "beach",
          "icon": "beach_access"
        },
        {
          "name": "Mũi Nghinh Phong",
          "distance": "2.0km",
          "type": "attraction",
          "icon": "attractions"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Miễn phí cho trẻ em",
        "pets": "Cho phép mang thú cưng nhỏ"
      },
      "status": "active"
    },
    {
      "id": "htl_dl_01",
      "name": "Adadilia Villa View Hotel Đà Lạt",
      "slug": "adadilia-villa-view-hotel-da-lat",
      "address": "Đường Hùng Vương, Phường 11, Thành phố Đà Lạt",
      "city": "Đà Lạt",
      "category": "villa",
      "categoryLabel": "Biệt thự đồi thông Đà Lạt",
      "stars": 4,
      "starRating": 4,
      "priceMin": 750000,
      "pricePerNight": 750000,
      "rating": 4.87,
      "reviewCount": 178,
      "type": "Villa & Biệt thự",
      "featured": true,
      "image": "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(1).jpg",
      "gallery": [
        "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(1).jpg",
        "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(2).jpg",
        "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(3).jpg"
      ],
      "description": "Nằm thoai thoải trên triền đồi thông Hùng Vương, Adadilia Villa View mở ra tầm nhìn bao quát thung lũng đèn đêm lãng mạn và rừng thông mộng mơ của xứ sở sương mù Đà Lạt.",
      "amenities": [
        "View thung lũng đèn lãng mạn",
        "Sân vườn cafe & BBQ",
        "Bữa sáng ấm cúng",
        "Lò sưởi phòng khách",
        "Wifi cáp quang",
        "Bãi đỗ xe ô tô"
      ],
      "nearbyPlaces": [
        {
          "name": "Thung Lũng Đèn & Cầu Đất Farm",
          "distance": "1.0km",
          "type": "attraction",
          "icon": "landscape"
        },
        {
          "name": "Hồ Xuân Hương & Chợ Đà Lạt",
          "distance": "4.5km",
          "type": "attraction",
          "icon": "nature_people"
        },
        {
          "name": "Chùa Linh Phước (Chùa Ve Chai)",
          "distance": "2.0km",
          "type": "attraction",
          "icon": "temple_buddhist"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em miễn phí ngủ cùng bố mẹ",
        "pets": "Cho phép mang theo thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_dl_02",
      "name": "Queen T&T Hotel Đà Lạt",
      "slug": "queen-tt-hotel-da-lat",
      "address": "Đường Phan Bội Châu, Phường 2, Thành phố Đà Lạt",
      "city": "Đà Lạt",
      "category": "hotel",
      "categoryLabel": "Khách sạn 4 sao trung tâm",
      "stars": 4,
      "starRating": 4,
      "priceMin": 890000,
      "pricePerNight": 890000,
      "rating": 4.85,
      "reviewCount": 160,
      "type": "Khách sạn 4 sao",
      "featured": false,
      "image": "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(1).jpg",
      "gallery": [
        "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(1).jpg",
        "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(2).jpg",
        "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(3).jpg"
      ],
      "description": "Queen T&T Hotel tọa lạc ngay trung tâm thành phố ngàn hoa, chỉ cách Chợ Đêm Đà Lạt và Hồ Xuân Hương 5 phút đi bộ. Không gian sang trọng, ấm áp với đầy đủ tiện nghi cao cấp.",
      "amenities": [
        "Trung tâm chợ đêm",
        "Bữa sáng Buffet",
        "Nhà hàng & Quầy Bar",
        "Wifi tốc độ cao",
        "Dịch vụ phòng 24/7",
        "Hỗ trợ thuê xe máy"
      ],
      "nearbyPlaces": [
        {
          "name": "Chợ Đêm Đà Lạt",
          "distance": "300m",
          "type": "restaurant",
          "icon": "shopping_cart"
        },
        {
          "name": "Hồ Xuân Hương",
          "distance": "400m",
          "type": "attraction",
          "icon": "nature_people"
        },
        {
          "name": "Quảng trường Lâm Viên",
          "distance": "1.0km",
          "type": "attraction",
          "icon": "attractions"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_hg_01",
      "name": "Historic Eco House Hà Giang",
      "slug": "historic-eco-house-ha-giang",
      "address": "Thôn Nà Thác, Xã Phương Độ, Thành phố Hà Giang",
      "city": "Hà Giang",
      "category": "homestay",
      "categoryLabel": "Nghỉ dưỡng sinh thái bản địa",
      "stars": 4,
      "starRating": 4,
      "priceMin": 480000,
      "pricePerNight": 480000,
      "rating": 4.87,
      "reviewCount": 145,
      "type": "Homestay",
      "featured": true,
      "image": "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(1).jpg",
      "gallery": [
        "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(1).jpg",
        "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(2).jpg",
        "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(3).jpg"
      ],
      "description": "Historic Eco House nằm yên bình giữa thung lũng ruộng bậc thang xanh ngát và núi rừng kỳ vĩ của Hà Giang. Kiến trúc nhà sàn truyền thống kết hợp tiện nghi nghỉ dưỡng hiện đại, mang lại trải nghiệm văn hóa bản địa độc đáo.",
      "amenities": [
        "View ruộng bậc thang 360°",
        "Ẩm thực dân tộc đặc sắc",
        "Sân lửa trại & Giao lưu văn nghệ",
        "Wifi miễn phí",
        "Cho thuê xe máy phượt",
        "Tắm lá thuốc người Dao"
      ],
      "nearbyPlaces": [
        {
          "name": "Cột mốc số 0 Hà Giang",
          "distance": "4.5km",
          "type": "attraction",
          "icon": "pin_drop"
        },
        {
          "name": "Núi Cấm Sơn & Cổng Trời",
          "distance": "5.0km",
          "type": "attraction",
          "icon": "landscape"
        },
        {
          "name": "Làng văn hóa thôn Nà Thác",
          "distance": "100m",
          "type": "attraction",
          "icon": "holiday_village"
        }
      ],
      "policies": {
        "checkIn": "13:00",
        "checkOut": "11:30",
        "cancellation": "Miễn phí hủy trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí",
        "pets": "Cho phép mang thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_hg_02",
      "name": "Lotus Premium Lodge Hà Giang",
      "slug": "lotus-premium-lodge-ha-giang",
      "address": "Thị trấn Đồng Văn, Huyện Đồng Văn, Tỉnh Hà Giang",
      "city": "Hà Giang",
      "category": "resort",
      "categoryLabel": "Lodge nghỉ dưỡng cao cấp",
      "stars": 5,
      "starRating": 5,
      "priceMin": 980000,
      "pricePerNight": 980000,
      "rating": 4.93,
      "reviewCount": 188,
      "type": "Resort",
      "featured": true,
      "image": "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(1).jpg",
      "gallery": [
        "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(1).jpg",
        "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(2).jpg",
        "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(3).jpg"
      ],
      "description": "Lotus Premium Lodge là tuyệt tác nghỉ dưỡng 5 sao giữa lòng Công viên Địa chất Toàn cầu Cao nguyên đá Đồng Văn. Khám phá vẻ đẹp kỳ vĩ của mây trời, thưởng thức ẩm thực tinh tế và dịch vụ chăm sóc VIP chu đáo.",
      "amenities": [
        "Tầm nhìn cao nguyên đá hùng vĩ",
        "Hồ bơi nước ấm trên mây",
        "Nhà hàng ẩm thực cao cấp",
        "Spa thảo mộc vùng cao",
        "Wifi tốc độ cao",
        "Xe đưa đón tận nơi"
      ],
      "nearbyPlaces": [
        {
          "name": "Phố cổ Đồng Văn",
          "distance": "1.2km",
          "type": "attraction",
          "icon": "storefront"
        },
        {
          "name": "Đèo Mã Pí Lèng & Hẻm Tu Sản",
          "distance": "9.0km",
          "type": "attraction",
          "icon": "landscape"
        },
        {
          "name": "Cột cờ Lũng Cú",
          "distance": "22km",
          "type": "attraction",
          "icon": "flag"
        },
        {
          "name": "Dinh thự Vua Mèo",
          "distance": "14km",
          "type": "attraction",
          "icon": "castle"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_pq_01",
      "name": "Vinpearl Resort & Spa Phú Quốc",
      "slug": "vinpearl-resort-spa-phu-quoc",
      "address": "Bãi Dài, Xã Gành Dầu, Thành phố Phú Quốc",
      "city": "Phú Quốc",
      "category": "resort",
      "categoryLabel": "Resort nghỉ dưỡng 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2900000,
      "pricePerNight": 2900000,
      "rating": 4.88,
      "reviewCount": 230,
      "type": "Resort",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Khám phá thiên đường nghỉ dưỡng nhiệt đới tại Đảo Ngọc Phú Quốc với bãi biển riêng tư cát trắng mịn, hồ bơi vô cực rộng lớn và hệ thống nhà hàng Á - Âu thượng hạng.",
      "amenities": [
        "Bãi biển riêng tư",
        "Hồ bơi vô cực 5000m²",
        "Sân golf 18 lỗ",
        "Khu vui chơi trẻ em",
        "Buffet hải sản",
        "Đưa đón sân bay miễn phí"
      ],
      "nearbyPlaces": [
        {
          "name": "VinWonders & Safari",
          "distance": "1.5km",
          "type": "attraction",
          "icon": "attractions"
        },
        {
          "name": "Thành phố Grand World",
          "distance": "2.0km",
          "type": "attraction",
          "icon": "nightlife"
        },
        {
          "name": "Sân bay Phú Quốc",
          "distance": "32km",
          "type": "airport",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy trước 3 ngày được hoàn 100%",
        "children": "Tối đa 2 trẻ em dưới 12 tuổi",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_nt_01",
      "name": "InterContinental Nha Trang Bay",
      "slug": "intercontinental-nha-trang-bay",
      "address": "32-34 Trần Phú, Phường Lộc Thọ, Thành phố Nha Trang",
      "city": "Nha Trang",
      "category": "beach_resort",
      "categoryLabel": "Beach Resort 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2200000,
      "pricePerNight": 2200000,
      "rating": 4.9,
      "reviewCount": 195,
      "type": "Beach Resort",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Tọa lạc ngay mặt tiền con đường biển đẹp nhất Nha Trang, tất cả các phòng đều sở hữu ban công riêng hướng thẳng ra vịnh biển xanh biếc tuyệt đẹp.",
      "amenities": [
        "View biển trực diện",
        "3 Hồ bơi ngoài trời",
        "Nhà hàng hải sản tươi sống",
        "Spa đá nóng cao cấp",
        "Phòng tập Gym 24/7"
      ],
      "nearbyPlaces": [
        {
          "name": "Bãi biển Trần Phú",
          "distance": "50m",
          "type": "beach",
          "icon": "beach_access"
        },
        {
          "name": "Tháp Trầm Hương & Quảng Trường",
          "distance": "400m",
          "type": "attraction",
          "icon": "attractions"
        },
        {
          "name": "Sân bay Cam Ranh",
          "distance": "35km",
          "type": "airport",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "15:00",
        "checkOut": "12:00",
        "cancellation": "Hủy trước 48 giờ miễn phí",
        "children": "Miễn phí 1 trẻ dưới 12 tuổi",
        "pets": "Không cho phép thú cưng"
      },
      "status": "active"
    },
    {
      "id": "htl_hp_01",
      "name": "Meliá Vinpearl Hải Phòng Rivera",
      "slug": "melia-vinpearl-hai-phong-rivera",
      "address": "Đường Manhattan 9, KĐT Vinhomes Imperia, Thượng Lý, Hồng Bàng, Hải Phòng",
      "city": "Hải Phòng",
      "category": "hotel",
      "categoryLabel": "Khách sạn 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 1850000,
      "pricePerNight": 1850000,
      "rating": 4.9,
      "reviewCount": 38,
      "type": "Khách sạn 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Nằm trong khuôn viên khu đô thị Vinhomes Imperia xa hoa bậc nhất Đất Cảng, Meliá Vinpearl Rivera mang kiến trúc Pháp thanh lịch với tầm nhìn tuyệt đẹp hướng ra dòng sông Cấm thơ mộng.",
      "amenities": [
        "Hồ bơi bốn mùa",
        "Nhà hàng 5 sao",
        "Phòng Gym & Yoga",
        "Spa trị liệu",
        "Xe đưa đón",
        "Wifi tốc độ cao",
        "Phòng hội nghị"
      ],
      "nearbyPlaces": [
        {
          "name": "Nhà Hát Lớn Hải Phòng",
          "distance": "2.8 km",
          "icon": "theater_comedy"
        },
        {
          "name": "Sân bay Quốc tế Cát Bi",
          "distance": "7.5 km",
          "icon": "flight"
        },
        {
          "name": "Chợ Tam Bạc & Ga Hải Phòng",
          "distance": "2.2 km",
          "icon": "storefront"
        },
        {
          "name": "Khu ẩm thực phố đi bộ",
          "distance": "1.5 km",
          "icon": "restaurant"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí ăn sáng và giường phụ có sẵn."
      },
      "status": "active"
    },
    {
      "id": "htl_hp_02",
      "name": "Flamingo Cát Bà Beach Resort",
      "slug": "flamingo-cat-ba-beach-resort",
      "address": "Bãi tắm Cát Cò 1 & 2, Thị trấn Cát Bà, Huyện Cát Hải, Hải Phòng",
      "city": "Hải Phòng",
      "category": "beach_resort",
      "categoryLabel": "Beach Resort 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2200000,
      "pricePerNight": 2200000,
      "rating": 4.8,
      "reviewCount": 42,
      "type": "Beach Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85",
      "gallery": [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Tọa lạc trọn vẹn trên bãi biển Cát Cò đẹp nhất đảo ngọc Cát Bà, Flamingo Resort là tổ hợp nghỉ dưỡng xanh giữa thiên nhiên vịnh Lan Hạ kỳ vĩ.",
      "amenities": [
        "Bãi tắm riêng Cát Cò",
        "Hồ bơi vô cực ngắm vịnh",
        "Onsen khoáng nóng Nhật Bản",
        "Quầy Bar Skyview",
        "Buffet hải sản",
        "Khu vui chơi trẻ em"
      ],
      "nearbyPlaces": [
        {
          "name": "Bãi biển Cát Cò 1",
          "distance": "50 m",
          "icon": "beach_access"
        },
        {
          "name": "Bến bèo đi vịnh Lan Hạ",
          "distance": "1.8 km",
          "icon": "directions_boat"
        },
        {
          "name": "Vườn Quốc Gia Cát Bà",
          "distance": "12.0 km",
          "icon": "park"
        },
        {
          "name": "Chợ đêm Cát Bà",
          "distance": "1.2 km",
          "icon": "storefront"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 72 giờ",
        "children": "Phù hợp cho gia đình có trẻ nhỏ, nhiều hoạt động bãi biển."
      },
      "status": "active"
    },
    {
      "id": "htl_hp_03",
      "name": "Cát Bà Eco Valley Homestay",
      "slug": "cat-ba-eco-valley-homestay",
      "address": "Thung lũng Bướm, Thôn Hải Sơn, Trân Châu, Cát Bà, Hải Phòng",
      "city": "Hải Phòng",
      "category": "homestay",
      "categoryLabel": "Homestay 3 sao",
      "stars": 3,
      "starRating": 3,
      "priceMin": 750000,
      "pricePerNight": 750000,
      "rating": 4.7,
      "reviewCount": 26,
      "type": "Homestay 3 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Homestay sinh thái ẩn mình giữa thung lũng đá vôi xanh ngát, đem lại không gian nghỉ dưỡng thanh bình, tách biệt hoàn toàn khỏi khói bụi thành phố.",
      "amenities": [
        "Sân vườn & BBQ",
        "Hồ bơi sinh thái",
        "Bữa sáng dân dã",
        "Cho thuê xe máy",
        "Tour leo núi & kayak",
        "Wifi miễn phí"
      ],
      "nearbyPlaces": [
        {
          "name": "Động Trung Trang",
          "distance": "3.5 km",
          "icon": "landscape"
        },
        {
          "name": "Vườn Quốc Gia Cát Bà",
          "distance": "5.0 km",
          "icon": "forest"
        },
        {
          "name": "Làng chài Việt Hải",
          "distance": "8.5 km",
          "icon": "sailing"
        },
        {
          "name": "Thị trấn Cát Bà",
          "distance": "6.0 km",
          "icon": "location_city"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 8 tuổi ở cùng phòng miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_qn_01",
      "name": "FLC Grand Hotel Hạ Long",
      "slug": "flc-grand-hotel-ha-long",
      "address": "Đoàn Kết, Phường Hà Trung, TP. Hạ Long, Quảng Ninh",
      "city": "Quảng Ninh",
      "category": "resort",
      "categoryLabel": "Resort 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2100000,
      "pricePerNight": 2100000,
      "rating": 4.9,
      "reviewCount": 45,
      "type": "Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Tọa lạc trên đồi Văn Nghệ ở độ cao 100m, FLC Grand Hotel Hạ Long sở hữu tầm nhìn 360 độ ngắm trọn kỳ quan thiên nhiên thế giới Vịnh Hạ Long huyền thoại.",
      "amenities": [
        "Sân Golf 18 hố ngắm vịnh",
        "Hồ bơi vô cực trên đồi",
        "Trung tâm hội nghị quốc tế",
        "Spa cao cấp",
        "Nhà hàng Á - Âu",
        "Club Lounge"
      ],
      "nearbyPlaces": [
        {
          "name": "Bảo tàng Quảng Ninh",
          "distance": "2.5 km",
          "icon": "museum"
        },
        {
          "name": "Sun World Hạ Long Complex",
          "distance": "5.5 km",
          "icon": "attractions"
        },
        {
          "name": "Cảng tàu khách Quốc tế Hạ Long",
          "distance": "6.0 km",
          "icon": "directions_boat"
        },
        {
          "name": "Cầu Bãi Cháy",
          "distance": "4.2 km",
          "icon": "bridge"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí tiền phòng và bữa sáng."
      },
      "status": "active"
    },
    {
      "id": "htl_qn_02",
      "name": "Yoko Onsen Quang Hanh Resort",
      "slug": "yoko-onsen-quang-hanh-resort",
      "address": "Tổ 5, Khu 9B, Phường Quang Hanh, TP. Cẩm Phả, Quảng Ninh",
      "city": "Quảng Ninh",
      "category": "resort",
      "categoryLabel": "Resort 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 3800000,
      "pricePerNight": 3800000,
      "rating": 4.9,
      "reviewCount": 36,
      "type": "Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Khu nghỉ dưỡng suối khoáng nóng chuẩn phong cách Nhật Bản đầu tiên tại Việt Nam, mang đến trải nghiệm chăm sóc sức khỏe và tái tạo năng lượng hoàn hảo.",
      "amenities": [
        "Khoáng nóng tự nhiên Onsen",
        "Kiến trúc chuẩn Nhật Bản",
        "Bữa ăn Kaiseki truyền thống",
        "Phòng xông đá muối Himalaya",
        "Vườn thiền Bonsai",
        "Biệt thự Washitsu"
      ],
      "nearbyPlaces": [
        {
          "name": "Suối khoáng nóng Quang Hanh",
          "distance": "0 m",
          "icon": "spa"
        },
        {
          "name": "TP. Hạ Long",
          "distance": "14 km",
          "icon": "location_city"
        },
        {
          "name": "Đền Cửa Ông",
          "distance": "18 km",
          "icon": "temple_buddhist"
        },
        {
          "name": "Sân bay Vân Đồn",
          "distance": "32 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "15:00",
        "checkOut": "12:00",
        "cancellation": "Hủy phòng trước 7 ngày để nhận hoàn tiền 100%",
        "children": "Dành cho khách từ 12 tuổi trở lên để đảm bảo tính tĩnh lặng."
      },
      "status": "active"
    },
    {
      "id": "htl_qn_03",
      "name": "De LaSea Ha Long Hotel",
      "slug": "de-lasea-ha-long-hotel",
      "address": "Đường Hoàng Quốc Việt, Phường Bãi Cháy, TP. Hạ Long, Quảng Ninh",
      "city": "Quảng Ninh",
      "category": "hotel",
      "categoryLabel": "Khách sạn 4 sao",
      "stars": 4,
      "starRating": 4,
      "priceMin": 1150000,
      "pricePerNight": 1150000,
      "rating": 4.7,
      "reviewCount": 30,
      "type": "Khách sạn 4 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Khách sạn 4 sao hiện đại ngay trung tâm Bãi Cháy, đi bộ chỉ vài bước là đến bãi tắm và phố ẩm thực đêm sầm uất.",
      "amenities": [
        "Hồ bơi trong nhà",
        "Nhà hàng buffet",
        "Phòng gym",
        "Dịch vụ tour vịnh Hạ Long",
        "Bãi đỗ xe rộng rãi",
        "Wifi miễn phí"
      ],
      "nearbyPlaces": [
        {
          "name": "Bãi tắm Bãi Cháy",
          "distance": "400 m",
          "icon": "beach_access"
        },
        {
          "name": "Sun World Hạ Long",
          "distance": "1.2 km",
          "icon": "attractions"
        },
        {
          "name": "Chợ đêm Bãi Cháy",
          "distance": "800 m",
          "icon": "storefront"
        },
        {
          "name": "Cảng Tuần Châu",
          "distance": "7.5 km",
          "icon": "sailing"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi ở chung phòng bố mẹ miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_sp_01",
      "name": "Hotel de la Coupole - MGallery Sapa",
      "slug": "hotel-de-la-coupole-mgallery-sapa",
      "address": "Số 1 Đường Hoàng Liên, Thị xã Sa Pa, Tỉnh Lào Cai",
      "city": "Sa Pa",
      "category": "hotel",
      "categoryLabel": "Khách sạn 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2950000,
      "pricePerNight": 2950000,
      "rating": 4.9,
      "reviewCount": 48,
      "type": "Khách sạn 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Kiệt tác lộng lẫy hòa quyện phong cách thời trang Haute Couture Paris thế kỷ 20 cùng hoa văn thổ cẩm bản địa Tây Bắc độc đáo. Ngay tại sảnh là ga tàu hỏa hỏa leo núi đưa bạn lên đỉnh Fansipan.",
      "amenities": [
        "Ga tàu hỏa leo núi Mường Hoa nội khu",
        "Bể bơi nước nóng Le Grand Bassin",
        "Nhà hàng Chic phong cách Pháp",
        "Spa Nuages",
        "Quầy Bar Absinthe trên tầng thượng",
        "View trọn thung lũng"
      ],
      "nearbyPlaces": [
        {
          "name": "Nhà Thờ Đá Sa Pa",
          "distance": "150 m",
          "icon": "church"
        },
        {
          "name": "Ga cáp treo Fansipan",
          "distance": "2.8 km",
          "icon": "landscape"
        },
        {
          "name": "Bản Cát Cát",
          "distance": "1.9 km",
          "icon": "nature_people"
        },
        {
          "name": "Hồ Sa Pa",
          "distance": "600 m",
          "icon": "water"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí ăn sáng và giường phụ có sẵn."
      },
      "status": "active"
    },
    {
      "id": "htl_sp_02",
      "name": "Pao's Sapa Leisure Hotel",
      "slug": "paos-sapa-leisure-hotel",
      "address": "Đường Mường Hoa, Phường Cầu Mây, Sa Pa, Lào Cai",
      "city": "Sa Pa",
      "category": "hotel",
      "categoryLabel": "Khách sạn 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 1750000,
      "pricePerNight": 1750000,
      "rating": 4.8,
      "reviewCount": 39,
      "type": "Khách sạn 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Tựa vào sườn đồi với kiến trúc ruộng bậc thang uốn lượn, Pao's Sapa Leisure Hotel mang đến tầm nhìn bao quát thung lũng Mường Hoa xanh ngút ngàn.",
      "amenities": [
        "Hồ bơi nước ấm bốn mùa",
        "View thung lũng Mường Hoa",
        "Nhà hàng A Lỉnh ẩm thực bản địa",
        "Rooftop Bar ngắm mây",
        "Phòng gym & spa",
        "Lửa trại buổi tối"
      ],
      "nearbyPlaces": [
        {
          "name": "Thung lũng Mường Hoa",
          "distance": "500 m",
          "icon": "filter_hdr"
        },
        {
          "name": "Nhà thờ Đá Sa Pa",
          "distance": "1.2 km",
          "icon": "church"
        },
        {
          "name": "Bản Lao Chải - Tả Van",
          "distance": "5.5 km",
          "icon": "hiking"
        },
        {
          "name": "Núi Hàm Rồng",
          "distance": "1.8 km",
          "icon": "terrain"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi ở cùng miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_sp_03",
      "name": "Eco Palms House - Sapa Retreat",
      "slug": "eco-palms-house-sapa-retreat",
      "address": "Bản Lao Chải, Thung lũng Mường Hoa, Sa Pa, Lào Cai",
      "city": "Sa Pa",
      "category": "homestay",
      "categoryLabel": "Homestay 4 sao",
      "stars": 4,
      "starRating": 4,
      "priceMin": 1450000,
      "pricePerNight": 1450000,
      "rating": 4.9,
      "reviewCount": 35,
      "type": "Homestay 4 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Các căn bungalow lợp mái lá cọ tự nhiên nằm lọt thỏm giữa những thửa ruộng bậc thang kỳ vĩ. Nơi lý tưởng để thức dậy đón mây bay lãng đãng ngang qua cửa sổ.",
      "amenities": [
        "Bungalow riêng tư giữa ruộng bậc thang",
        "Bồn tắm gỗ thảo dược Dao đỏ",
        "Nhà hàng gia đình đặc sản Tây Bắc",
        "Sân ngắm bình minh & mây mù",
        "Trà chiều ngắm cảnh"
      ],
      "nearbyPlaces": [
        {
          "name": "Ruộng bậc thang Lao Chải",
          "distance": "0 m",
          "icon": "eco"
        },
        {
          "name": "Bản Tả Van",
          "distance": "2.0 km",
          "icon": "holiday_village"
        },
        {
          "name": "Suối Mường Hoa",
          "distance": "600 m",
          "icon": "water_drop"
        },
        {
          "name": "Thị trấn Sa Pa",
          "distance": "6.5 km",
          "icon": "location_city"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "11:30",
        "cancellation": "Hủy miễn phí trước 3 ngày",
        "children": "Khuyên dùng cho các cặp đôi và gia đình yêu thiên nhiên."
      },
      "status": "active"
    },
    {
      "id": "htl_sp_04",
      "name": "Bamboo Sapa Hotel",
      "slug": "bamboo-sapa-hotel",
      "address": "18 Mường Hoa, Sa Pa, Lào Cai",
      "city": "Sa Pa",
      "category": "hotel",
      "categoryLabel": "Khách sạn 4 sao",
      "stars": 4,
      "starRating": 4,
      "priceMin": 1250000,
      "pricePerNight": 1250000,
      "rating": 4.7,
      "reviewCount": 31,
      "type": "Khách sạn 4 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Nổi tiếng với hồ bơi vô cực lưng chừng núi ngắm trọn vẹn đỉnh Fansipan hùng vĩ và thung lũng mây trắng bồng bềnh.",
      "amenities": [
        "Hồ bơi vô cực view dãy Hoàng Liên Sơn",
        "Nhà hàng Bamboo",
        "Vườn tre check-in độc đáo",
        "Phòng tắm kính ngắm núi",
        "Dịch vụ spa"
      ],
      "nearbyPlaces": [
        {
          "name": "Trung tâm thị xã Sa Pa",
          "distance": "300 m",
          "icon": "location_city"
        },
        {
          "name": "Nhà thờ Đá",
          "distance": "450 m",
          "icon": "church"
        },
        {
          "name": "Chợ đêm Sa Pa",
          "distance": "600 m",
          "icon": "storefront"
        },
        {
          "name": "Núi Hàm Rồng",
          "distance": "1.0 km",
          "icon": "terrain"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_nb_01",
      "name": "Emeralda Resort Ninh Bình",
      "slug": "emeralda-resort-ninh-binh",
      "address": "Khu bảo tồn Vân Long, Xã Gia Vân, Gia Viễn, Ninh Bình",
      "city": "Ninh Bình",
      "category": "resort",
      "categoryLabel": "Resort 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2350000,
      "pricePerNight": 2350000,
      "rating": 4.9,
      "reviewCount": 40,
      "type": "Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Tái hiện nguyên vẹn vẻ đẹp thanh bình của làng quê Bắc Bộ với tường gạch đỏ, mái ngói cong và những rặng cau xanh mướt bên đầm lầy Vân Long.",
      "amenities": [
        "Kiến trúc làng quê Bắc Bộ xưa",
        "Hồ bơi trong nhà & ngoài trời",
        "La Cochinchine Luxury Spa",
        "Đạp xe dạo vườn cây ăn trái",
        "Nhà hàng Sen & Organics"
      ],
      "nearbyPlaces": [
        {
          "name": "Khu bảo tồn thiên nhiên Vân Long",
          "distance": "500 m",
          "icon": "nature"
        },
        {
          "name": "Chùa Bái Đính",
          "distance": "10 km",
          "icon": "temple_buddhist"
        },
        {
          "name": "Quần thể Tràng An",
          "distance": "15 km",
          "icon": "landscape"
        },
        {
          "name": "Cố đô Hoa Lư",
          "distance": "12 km",
          "icon": "castle"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 72 giờ",
        "children": "Không gian xanh rất an toàn và bổ ích cho trẻ nhỏ."
      },
      "status": "active"
    },
    {
      "id": "htl_res_01",
      "name": "Six Senses Ninh Van Bay Resort",
      "slug": "six-senses-ninh-van-bay-resort",
      "address": "Vịnh Ninh Vân, Thị xã Ninh Hòa, Nha Trang, Khánh Hòa",
      "city": "Nha Trang",
      "category": "resort",
      "categoryLabel": "Resort 5 sao siêu sang",
      "stars": 5,
      "starRating": 5,
      "priceMin": 8500000,
      "pricePerNight": 8500000,
      "rating": 5.0,
      "reviewCount": 78,
      "type": "Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Khu nghỉ dưỡng biệt lập đẳng cấp thế giới nép mình giữa những tảng đá tự nhiên kỳ vĩ hướng ra vịnh biển xanh ngọc bích. Trải nghiệm tàu cao tốc riêng đưa đón và dịch vụ quản gia tận tâm 24/7.",
      "amenities": [
        "Bãi biển vịnh riêng tư",
        "Hồ bơi vách đá tự nhiên",
        "Six Senses Spa danh tiếng",
        "Rạp chiếu phim ngoài trời trên biển",
        "Quản gia riêng (GEM)",
        "Bữa ăn hữu cơ từ trang trại"
      ],
      "nearbyPlaces": [
        {
          "name": "Vịnh Ninh Vân",
          "distance": "0 m",
          "icon": "waves"
        },
        {
          "name": "Đảo Hòn Tre",
          "distance": "8.0 km",
          "icon": "sailing"
        },
        {
          "name": "Trung tâm TP. Nha Trang (đi tàu)",
          "distance": "20 phút",
          "icon": "directions_boat"
        },
        {
          "name": "Sân bay Quốc tế Cam Ranh",
          "distance": "55 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 7 ngày",
        "children": "Trẻ em được tham gia các câu lạc bộ khám phá thiên nhiên miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_res_02",
      "name": "Legacy Yên Tử - MGallery Resort",
      "slug": "legacy-yen-tu-mgallery-resort",
      "address": "Khu di tích danh thắng Yên Tử, Thượng Yên Công, TP. Uông Bí, Quảng Ninh",
      "city": "Quảng Ninh",
      "category": "resort",
      "categoryLabel": "Resort 5 sao Thiền & Di sản",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2850000,
      "pricePerNight": 2850000,
      "rating": 4.9,
      "reviewCount": 64,
      "type": "Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Được thiết kế bởi kiến trúc sư lừng danh Bill Bensley dựa trên cảm hứng kiến trúc cung đình thời nhà Trần thế kỷ 13, Legacy Yên Tử là chốn an trú tĩnh lặng linh thiêng nuôi dưỡng tâm hồn.",
      "amenities": [
        "Kiến trúc cung đình cổ xưa",
        "Lớp thiền chuông & Yoga sáng",
        "Bể bơi tự nhiên khoáng núi",
        "Nhà hàng ẩm thực cung đình Thọ Quang",
        "Trung tâm chăm sóc sức khỏe Am Tuệ Tĩnh"
      ],
      "nearbyPlaces": [
        {
          "name": "Cáp treo Yên Tử",
          "distance": "200 m",
          "icon": "landscape"
        },
        {
          "name": "Chùa Hoa Yên & Chùa Đồng",
          "distance": "1.5 km",
          "icon": "temple_buddhist"
        },
        {
          "name": "TP. Hạ Long",
          "distance": "40 km",
          "icon": "location_city"
        },
        {
          "name": "Sân bay Cát Bi Hải Phòng",
          "distance": "45 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 72 giờ",
        "children": "Trẻ em dưới 6 tuổi dùng chung phòng và ăn sáng miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_res_03",
      "name": "Topas Ecolodge Sapa Resort",
      "slug": "topas-ecolodge-sapa-resort",
      "address": "Thôn Bản Lếch, Xã Thanh Bình, Sa Pa, Lào Cai",
      "city": "Sa Pa",
      "category": "resort",
      "categoryLabel": "Resort sinh thái 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 4200000,
      "pricePerNight": 4200000,
      "rating": 5.0,
      "reviewCount": 92,
      "type": "Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Nằm trên đỉnh đồi hình nón sâu trong thung lũng Mường Hoa, Topas Ecolodge nổi tiếng toàn cầu với hai hồ bơi vô cực nước nóng nhìn thẳng ra biển mây và ruộng bậc thang tầng tầng lớp lớp.",
      "amenities": [
        "2 Hồ bơi vô cực nước nóng ngắm mây",
        "Bungalow đá granite trắng",
        "Dịch vụ tắm lá thuốc Dao đỏ",
        "Nhà hàng ẩm thực Bắc Âu & Bản địa",
        "Xe đưa đón limousine Hà Nội - Sa Pa"
      ],
      "nearbyPlaces": [
        {
          "name": "Vườn Quốc Gia Hoàng Liên",
          "distance": "1.0 km",
          "icon": "forest"
        },
        {
          "name": "Bản Thanh Kim",
          "distance": "2.5 km",
          "icon": "holiday_village"
        },
        {
          "name": "Thị xã Sa Pa",
          "distance": "18 km",
          "icon": "location_city"
        },
        {
          "name": "Đỉnh Fansipan",
          "distance": "22 km",
          "icon": "filter_hdr"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "11:00",
        "cancellation": "Hủy miễn phí trước 5 ngày",
        "children": "Khu nghỉ dưỡng sinh thái không tivi mang đến sự tĩnh tâm tuyệt đối."
      },
      "status": "active"
    },
    {
      "id": "htl_res_04",
      "name": "Naman Retreat Da Nang Resort",
      "slug": "naman-retreat-da-nang-resort",
      "address": "Đường Trường Sa, Phường Hòa Hải, Quận Ngũ Hành Sơn, Đà Nẵng",
      "city": "Đà Nẵng",
      "category": "resort",
      "categoryLabel": "Resort 5 sao kiến trúc Tre",
      "stars": 5,
      "starRating": 5,
      "priceMin": 3600000,
      "pricePerNight": 3600000,
      "rating": 4.9,
      "reviewCount": 71,
      "type": "Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Kiến trúc tre độc đáo của Võ Trọng Nghĩa",
        "Pure Spa miễn phí mỗi ngày",
        "Hồ bơi vô cực sát biển",
        "Lớp học Yoga và Thiền trên cát",
        "Nhà hàng Hay Hay Bar"
      ],
      "nearbyPlaces": [
        {
          "name": "Bãi biển Non Nước",
          "distance": "0 m",
          "icon": "beach_access"
        },
        {
          "name": "Sân Golf BRG Danang",
          "distance": "800 m",
          "icon": "golf_course"
        },
        {
          "name": "Phố cổ Hội An",
          "distance": "12 km",
          "icon": "castle"
        },
        {
          "name": "Sân bay Đà Nẵng",
          "distance": "15 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 48 giờ",
        "children": "Bao gồm liệu trình trị liệu Spa hàng ngày cho mỗi khách lưu trú."
      },
      "status": "active"
    },
    {
      "id": "htl_br_01",
      "name": "InterContinental Danang Sun Peninsula Resort",
      "slug": "intercontinental-danang-sun-peninsula-resort",
      "address": "Bãi Bắc, Bán đảo Sơn Trà, Quận Sơn Trà, Đà Nẵng",
      "city": "Đà Nẵng",
      "category": "beach_resort",
      "categoryLabel": "Beach Resort 5 sao biểu tượng",
      "stars": 5,
      "starRating": 5,
      "priceMin": 9200000,
      "pricePerNight": 9200000,
      "rating": 5.0,
      "reviewCount": 110,
      "type": "Beach Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Bãi biển riêng biệt dài 700m",
        "Nhà hàng La Maison 1888 đạt sao Michelin",
        "Cáp treo Nam Tram vượt sườn núi",
        "Mi-Sol Spa trị liệu âm thanh",
        "Biệt thự hồ bơi view vịnh"
      ],
      "description": "Tuyệt tác nghỉ dưỡng ven biển sang trọng bậc nhất hành tinh do KTS lừng danh Bill Bensley kiến tạo, trải dài qua 4 tầng: Heaven, Sky, Earth và Sea trên bán đảo Sơn Trà hoang sơ.",
      "nearbyPlaces": [
        {
          "name": "Bán đảo Sơn Trà & Voọc Chà Vá",
          "distance": "0 m",
          "icon": "pets"
        },
        {
          "name": "Chùa Linh Ứng Bãi Bụt",
          "distance": "4.5 km",
          "icon": "temple_buddhist"
        },
        {
          "name": "Cầu Rồng Đà Nẵng",
          "distance": "16 km",
          "icon": "bridge"
        },
        {
          "name": "Sân bay Đà Nẵng",
          "distance": "20 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "15:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 14 ngày",
        "children": "Trải nghiệm sang trọng và bảo mật hàng đầu cho các kỳ nghỉ VIP."
      },
      "status": "active"
    },
    {
      "id": "htl_br_02",
      "name": "JW Marriott Phu Quoc Emerald Bay Resort",
      "slug": "jw-marriott-phu-quoc-emerald-bay-resort",
      "address": "Bãi Khem, Phường An Thới, TP. Phú Quốc, Kiên Giang",
      "city": "Phú Quốc",
      "category": "beach_resort",
      "categoryLabel": "Beach Resort 5 sao Đại học Pháp",
      "stars": 5,
      "starRating": 5,
      "priceMin": 6800000,
      "pricePerNight": 6800000,
      "rating": 4.9,
      "reviewCount": 95,
      "type": "Beach Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Bãi Khem cát trắng như kem",
        "Hồ bơi hình vỏ sò Shell Pool",
        "Chanterelle Spa by JW",
        "Nhà hàng Pink Pearl phong cách Gatsby",
        "Các phân khoa trường đại học độc đáo"
      ],
      "description": "Khu nghỉ dưỡng mang câu chuyện thần thoại về trường đại học cổ điển Lamarck University thế kỷ 19, nằm trên bãi biển Bãi Khem đẹp nhất đảo ngọc Phú Quốc.",
      "nearbyPlaces": [
        {
          "name": "Bãi Khem",
          "distance": "0 m",
          "icon": "beach_access"
        },
        {
          "name": "Cáp treo Hòn Thơm Sun World",
          "distance": "3.5 km",
          "icon": "attractions"
        },
        {
          "name": "Thị trấn Hoàng Hôn Sunset Town",
          "distance": "3.8 km",
          "icon": "apartment"
        },
        {
          "name": "Sân bay Phú Quốc",
          "distance": "18 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "15:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy trước 5 ngày",
        "children": "Trẻ em thỏa thích trải nghiệm làm bánh và các lớp học nghệ thuật."
      },
      "status": "active"
    },
    {
      "id": "htl_br_03",
      "name": "Mia Resort Nha Trang",
      "slug": "mia-resort-nha-trang",
      "address": "Bãi Dông, Xã Cam Hải Đông, Cam Lâm, Nha Trang, Khánh Hòa",
      "city": "Nha Trang",
      "category": "beach_resort",
      "categoryLabel": "Beach Resort 5 sao vịnh biển",
      "stars": 5,
      "starRating": 5,
      "priceMin": 3400000,
      "pricePerNight": 3400000,
      "rating": 4.9,
      "reviewCount": 68,
      "type": "Beach Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Bãi biển riêng kín gió",
        "Biệt thự mái cỏ thân thiện môi trường",
        "Nhà hàng Sandals view biển",
        "Oasis Spa sang trọng",
        "Lớp chèo Sup & Kayak biển"
      ],
      "description": "Nằm thoai thoải trên sườn đồi nhìn xuống bờ vịnh phẳng lặng như gương, Mia Resort Nha Trang là không gian nghỉ dưỡng xanh lý tưởng cho kỳ nghỉ tái tạo sức sống.",
      "nearbyPlaces": [
        {
          "name": "Bãi Dông",
          "distance": "0 m",
          "icon": "beach_access"
        },
        {
          "name": "Sân bay Quốc tế Cam Ranh",
          "distance": "16 km",
          "icon": "flight"
        },
        {
          "name": "Viện Hải Dương Học Nha Trang",
          "distance": "12 km",
          "icon": "water"
        },
        {
          "name": "Tháp Bà Ponagar",
          "distance": "18 km",
          "icon": "temple_buddhist"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí tiền phòng."
      },
      "status": "active"
    },
    {
      "id": "htl_br_04",
      "name": "Premier Village Danang Resort",
      "slug": "premier-village-danang-resort",
      "address": "99 Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, Đà Nẵng",
      "city": "Đà Nẵng",
      "category": "beach_resort",
      "categoryLabel": "Beach Resort Biệt thự biển 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 5500000,
      "pricePerNight": 5500000,
      "rating": 4.8,
      "reviewCount": 82,
      "type": "Beach Resort 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "100% Biệt thự có hồ bơi riêng",
        "Bãi biển Mỹ An nước trong xanh",
        "Nhà hàng Cá Chuồn Cồ hải sản tươi sống",
        "Dịch vụ BBQ tại vườn biệt thự",
        "Nautica Beach Club"
      ],
      "description": "Quần thể biệt thự nghỉ dưỡng biển 5 sao sang trọng do tập đoàn Accor quản lý, sở hữu vị trí mặt tiền biển Mỹ Khê tuyệt đẹp với hồ bơi riêng tư cho từng căn.",
      "nearbyPlaces": [
        {
          "name": "Bãi biển Mỹ An",
          "distance": "0 m",
          "icon": "beach_access"
        },
        {
          "name": "Danh thắng Ngũ Hành Sơn",
          "distance": "3.5 km",
          "icon": "landscape"
        },
        {
          "name": "Cầu Rồng Đà Nẵng",
          "distance": "4.0 km",
          "icon": "bridge"
        },
        {
          "name": "Sân bay Đà Nẵng",
          "distance": "6.5 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "15:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 72 giờ",
        "children": "Không gian lý tưởng cho đại gia đình và nhóm bạn bè."
      },
      "status": "active"
    },
    {
      "id": "htl_vil_01",
      "name": "Ana Mandara Villas Dalat Resort & Spa",
      "slug": "ana-mandara-villas-dalat-resort-spa",
      "address": "Đường Lê Lai, Phường 5, TP. Đà Lạt, Lâm Đồng",
      "city": "Đà Lạt",
      "category": "villa",
      "categoryLabel": "Quần thể Biệt thự Pháp cổ 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2600000,
      "pricePerNight": 2600000,
      "rating": 4.9,
      "reviewCount": 85,
      "type": "Villa & Biệt thự 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "17 Biệt thự cổ kiểu Pháp nguyên bản",
        "Lò sưởi củi ấm cúng trong phòng",
        "Hồ bơi nước ấm ngoài trời giữa rừng thông",
        "Nhà hàng Le Petit Dalat",
        "La Cochinchine Spa"
      ],
      "description": "Tọa lạc trên ngọn đồi thông xanh mát, Ana Mandara lưu giữ nguyên vẹn 17 căn biệt thự cổ thời Pháp thuộc thập niên 1920 với sàn gỗ, lò sưởi ấm và vẻ đẹp quý tộc hoài niệm.",
      "nearbyPlaces": [
        {
          "name": "Hồ Xuân Hương & Chợ Đà Lạt",
          "distance": "2.0 km",
          "icon": "water"
        },
        {
          "name": "Dinh III Bảo Đại",
          "distance": "2.8 km",
          "icon": "castle"
        },
        {
          "name": "Thiền Viện Trúc Lâm & Hồ Tuyền Lâm",
          "distance": "6.0 km",
          "icon": "temple_buddhist"
        },
        {
          "name": "Sân bay Liên Khương",
          "distance": "30 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 48 giờ",
        "children": "Trẻ em dưới 6 tuổi ở chung giường bố mẹ miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_vil_02",
      "name": "Vinpearl Discovery Coastalland Villas Phú Quốc",
      "slug": "vinpearl-discovery-coastalland-villas-phu-quoc",
      "address": "Khu Bãi Dài, Xã Gành Dầu, TP. Phú Quốc, Kiên Giang",
      "city": "Phú Quốc",
      "category": "villa",
      "categoryLabel": "Biệt thự biển 5 sao có hồ bơi riêng",
      "stars": 5,
      "starRating": 5,
      "priceMin": 4500000,
      "pricePerNight": 4500000,
      "rating": 4.9,
      "reviewCount": 76,
      "type": "Villa & Biệt thự 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Hồ bơi riêng biệt từng villa",
        "Sân golf 18 hố Vinpearl Golf",
        "Xe điện đưa đón VinWonders & Safari",
        "Bãi biển Bãi Dài hoàng hôn",
        "Bếp nướng BBQ ngoài trời"
      ],
      "description": "Tổ hợp biệt thự nghỉ dưỡng sang trọng bậc nhất phía bắc đảo ngọc, bao quanh bởi hồ nước ngọt rộng lớn và bãi biển riêng thơ mộng, kề cận Grand World 'thành phố không ngủ'.",
      "nearbyPlaces": [
        {
          "name": "Grand World Phú Quốc",
          "distance": "800 m",
          "icon": "attractions"
        },
        {
          "name": "Công viên VinWonders & Safari",
          "distance": "1.5 km",
          "icon": "pets"
        },
        {
          "name": "Corona Casino",
          "distance": "1.0 km",
          "icon": "casino"
        },
        {
          "name": "Sân bay Phú Quốc",
          "distance": "32 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy phòng trước 72 giờ",
        "children": "Xe điện đưa đón nội khu không giới hạn."
      },
      "status": "active"
    },
    {
      "id": "htl_vil_03",
      "name": "Saint Simeon Resort & Spa Sanctuary Villa",
      "slug": "saint-simeon-resort-spa-sanctuary-villa",
      "address": "Đường bờ biển Long Hải - Phước Hải, Huyện Đất Đỏ, Vũng Tàu",
      "city": "Vũng Tàu",
      "category": "villa",
      "categoryLabel": "Biệt thự hướng biển cao cấp 4 sao",
      "stars": 4,
      "starRating": 4,
      "priceMin": 3100000,
      "pricePerNight": 3100000,
      "rating": 4.8,
      "reviewCount": 52,
      "type": "Villa & Biệt thự 4 sao",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Biệt thự 2-3 phòng ngủ có hồ bơi",
        "Sân vườn BBQ ngoài trời",
        "Bãi biển Long Hải riêng tư",
        "Nhà hàng hải sản tươi",
        "Dịch vụ đầu bếp tại gia"
      ],
      "description": "Không gian villa biệt lập với hồ bơi riêng và sân vườn xanh mát sát bờ biển Long Hải lộng gió, thích hợp cho các buổi họp mặt gia đình và tiệc nướng cuối tuần.",
      "nearbyPlaces": [
        {
          "name": "Bãi biển Phước Hải",
          "distance": "500 m",
          "icon": "beach_access"
        },
        {
          "name": "Đèo Nước Ngọt",
          "distance": "3.5 km",
          "icon": "terrain"
        },
        {
          "name": "TP. Vũng Tàu",
          "distance": "22 km",
          "icon": "location_city"
        },
        {
          "name": "Chợ hải sản Long Hải",
          "distance": "4.0 km",
          "icon": "storefront"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trang bị đầy đủ bếp nấu và dụng cụ tiệc nướng."
      },
      "status": "active"
    },
    {
      "id": "htl_vil_04",
      "name": "Sapa CatCat Hill Resort & Villa",
      "slug": "sapa-catcat-hill-resort-villa",
      "address": "Số 86 Fansipan, Sa Pa, Lào Cai",
      "city": "Sa Pa",
      "category": "villa",
      "categoryLabel": "Biệt thự đồi săn mây 4 sao",
      "stars": 4,
      "starRating": 4,
      "priceMin": 1950000,
      "pricePerNight": 1950000,
      "rating": 4.8,
      "reviewCount": 49,
      "type": "Villa & Biệt thự 4 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Biệt thự mái vòm view toàn cảnh thung lũng",
        "Bể bơi vô cực nước nóng trên cao",
        "Ban công ngắm đỉnh Fansipan",
        "Nhà hàng đặc sản lợn bản, cá hồi",
        "Bồn tắm sục ngắm cảnh"
      ],
      "description": "Các căn villa đồi mái vòm độc đáo nằm rải rác bên triền đồi ngắm trọn vẹn bản Cát Cát và dãy Hoàng Liên Sơn hùng vĩ trong màn sương bồng bềnh.",
      "nearbyPlaces": [
        {
          "name": "Bản Cát Cát",
          "distance": "800 m",
          "icon": "nature_people"
        },
        {
          "name": "Nhà Thờ Đá Sa Pa",
          "distance": "1.2 km",
          "icon": "church"
        },
        {
          "name": "Ga Cáp treo Fansipan",
          "distance": "2.0 km",
          "icon": "landscape"
        },
        {
          "name": "Thác Bạc",
          "distance": "11 km",
          "icon": "water"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_hs_01",
      "name": "Lá Đỏ Homestay & Coffee Sapa",
      "slug": "la-do-homestay-coffee-sapa",
      "address": "Số 31 Đường Hoàng Liên, Sa Pa, Lào Cai",
      "city": "Sa Pa",
      "category": "homestay",
      "categoryLabel": "Homestay săn mây view Fansipan 4 sao",
      "stars": 4,
      "starRating": 4,
      "priceMin": 650000,
      "pricePerNight": 650000,
      "rating": 4.9,
      "reviewCount": 58,
      "type": "Homestay 4 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Sân thượng săn mây triệu view",
        "Quán cafe phong cách mộc mạc",
        "Bữa sáng bánh mì bơ mứt",
        "Cho thuê trang phục dân tộc check-in",
        "Tư vấn tour trekking bản làng"
      ],
      "description": "Nằm ngay lưng chừng đồi gần trung tâm thị xã, Lá Đỏ Homestay là tọa độ săn mây và ngắm hoàng hôn Fansipan được giới trẻ yêu thích nhất Sa Pa.",
      "nearbyPlaces": [
        {
          "name": "Nhà Thờ Đá Sa Pa",
          "distance": "400 m",
          "icon": "church"
        },
        {
          "name": "Hồ Sa Pa",
          "distance": "700 m",
          "icon": "water"
        },
        {
          "name": "Bản Cát Cát",
          "distance": "1.5 km",
          "icon": "nature_people"
        },
        {
          "name": "Chợ đêm Sa Pa",
          "distance": "800 m",
          "icon": "storefront"
        }
      ],
      "policies": {
        "checkIn": "13:30",
        "checkOut": "11:30",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Rất phù hợp cho các cặp đôi và phượt thủ."
      },
      "status": "active"
    },
    {
      "id": "htl_hs_02",
      "name": "The Wilder-nest Homestay Đà Lạt",
      "slug": "the-wilder-nest-homestay-da-lat",
      "address": "Đường Tuyền Lâm, Xã Hiệp An, Huyện Đức Trọng, Đà Lạt",
      "city": "Đà Lạt",
      "category": "homestay",
      "categoryLabel": "Homestay đồi cỏ hồng 4 sao",
      "stars": 4,
      "starRating": 4,
      "priceMin": 850000,
      "pricePerNight": 850000,
      "rating": 4.8,
      "reviewCount": 62,
      "type": "Homestay 4 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Lối đi cầu gỗ xuyên đồi cỏ",
        "Không gian ngắm sương mù sớm",
        "Tiệc nướng BBQ than hoa",
        "Phòng ốc ốp gỗ thông thơm nức",
        "Cafe acoustic ban đêm"
      ],
      "description": "Nằm biệt lập bên sườn đồi nhìn xuống thung lũng Tuyền Lâm bao la với cây cầu gỗ mộc mạc uốn lượn giữa cánh đồng cỏ dại mộng mơ.",
      "nearbyPlaces": [
        {
          "name": "Hồ Tuyền Lâm",
          "distance": "1.5 km",
          "icon": "water"
        },
        {
          "name": "Đường hầm điêu khắc",
          "distance": "3.0 km",
          "icon": "palette"
        },
        {
          "name": "Thiền Viện Trúc Lâm",
          "distance": "4.5 km",
          "icon": "temple_buddhist"
        },
        {
          "name": "Trung tâm Đà Lạt",
          "distance": "9.0 km",
          "icon": "location_city"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Không gian chill yên tĩnh tuyệt đối."
      },
      "status": "active"
    },
    {
      "id": "htl_hs_03",
      "name": "Tràng An Lotus Homestay Ninh Bình",
      "slug": "trang-an-lotus-homestay-ninh-binh",
      "address": "Thôn Khê Hạ, Xã Ninh Xuân, Huyện Hoa Lư, Ninh Bình",
      "city": "Ninh Bình",
      "category": "homestay",
      "categoryLabel": "Homestay đầm sen & núi đá 3 sao",
      "stars": 3,
      "starRating": 3,
      "priceMin": 550000,
      "pricePerNight": 550000,
      "rating": 4.8,
      "reviewCount": 44,
      "type": "Homestay 3 sao",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Bể bơi sân vườn nhìn ra núi đá vôi",
        "Đạp xe ngắm cánh đồng lúa miễn phí",
        "Cơm gia đình đặc sản dê núi & cơm cháy",
        "Sân vườn hoa sen ngát hương",
        "Wifi tốc độ cao"
      ],
      "description": "Tọa lạc ngay cạnh bến thuyền Tràng An và Hang Múa, homestay mang đến không gian làng quê thanh bình với hồ bơi ngoài trời nhìn thẳng vách núi đá vôi sừng sững.",
      "nearbyPlaces": [
        {
          "name": "Danh thắng Tràng An",
          "distance": "1.2 km",
          "icon": "landscape"
        },
        {
          "name": "Đỉnh Hang Múa",
          "distance": "1.8 km",
          "icon": "terrain"
        },
        {
          "name": "Cố Đô Hoa Lư",
          "distance": "4.5 km",
          "icon": "castle"
        },
        {
          "name": "Chùa Bái Đính",
          "distance": "9.0 km",
          "icon": "temple_buddhist"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 8 tuổi ở cùng miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_hs_04",
      "name": "Cát Bà Rustic Valley Homestay",
      "slug": "cat-ba-rustic-valley-homestay",
      "address": "Thung Lũng Bướm, Xã Trân Châu, Huyện Cát Hải, Hải Phòng",
      "city": "Hải Phòng",
      "category": "homestay",
      "categoryLabel": "Homestay sinh thái vịnh biển 3 sao",
      "stars": 3,
      "starRating": 3,
      "priceMin": 600000,
      "pricePerNight": 600000,
      "rating": 4.7,
      "reviewCount": 38,
      "type": "Homestay 3 sao",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Nhà sàn gỗ mộc mạc",
        "Bữa tối hải sản BBQ Cát Bà",
        "Tour chèo Kayak vịnh Lan Hạ",
        "Vườn cây ăn trái hái tự do",
        "Không gian lửa trại buổi tối"
      ],
      "description": "Homestay sinh thái nằm trọn trong thung lũng đá vôi Cát Bà yên bình, nơi bạn có thể đạp xe ngắm làng quê và thưởng thức hải sản nướng dân dã.",
      "nearbyPlaces": [
        {
          "name": "Động Trung Trang",
          "distance": "3.0 km",
          "icon": "landscape"
        },
        {
          "name": "Vườn Quốc Gia Cát Bà",
          "distance": "4.5 km",
          "icon": "park"
        },
        {
          "name": "Bến bèo đi vịnh Lan Hạ",
          "distance": "5.0 km",
          "icon": "directions_boat"
        },
        {
          "name": "Bãi tắm Cát Cò",
          "distance": "6.5 km",
          "icon": "beach_access"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em được trải nghiệm bắt ốc và hái trái cây."
      },
      "status": "active"
    },
    {
      "id": "htl_apt_01",
      "name": "Altara Suites by Ri-Yaz Luxury Apartment",
      "slug": "altara-suites-by-ri-yaz-luxury-apartment",
      "address": "120 Võ Nguyên Giáp, Phường Phước Mỹ, Quận Sơn Trà, Đà Nẵng",
      "city": "Đà Nẵng",
      "category": "apartment",
      "categoryLabel": "Căn hộ dịch vụ 5 sao view biển",
      "stars": 5,
      "starRating": 5,
      "priceMin": 1650000,
      "pricePerNight": 1650000,
      "rating": 4.9,
      "reviewCount": 88,
      "type": "Căn hộ cao cấp 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Căn hộ 1-2 phòng ngủ đầy đủ bếp & máy giặt",
        "Hồ bơi vô cực trên tầng 33",
        "View panorama 360 độ biển Mỹ Khê",
        "Altitude Bar tầng thượng",
        "Phòng Gym & Xông hơi"
      ],
      "description": "Căn hộ khách sạn 5 sao cao cấp tọa lạc tại vị trí vàng mặt tiền biển Mỹ Khê, được trang bị tiện nghi sinh hoạt hiện đại hoàn chỉnh như chính ngôi nhà thứ hai sang trọng của bạn.",
      "nearbyPlaces": [
        {
          "name": "Bãi biển Mỹ Khê",
          "distance": "100 m",
          "icon": "beach_access"
        },
        {
          "name": "Cầu Sông Hàn",
          "distance": "2.0 km",
          "icon": "bridge"
        },
        {
          "name": "Sân bay Đà Nẵng",
          "distance": "5.5 km",
          "icon": "flight"
        },
        {
          "name": "Bán đảo Sơn Trà",
          "distance": "6.0 km",
          "icon": "landscape"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Căn hộ gia đình đầy đủ máy giặt, lò vi sóng, tủ lạnh hai cánh."
      },
      "status": "active"
    },
    {
      "id": "htl_apt_02",
      "name": "The Five Residences Hanoi Apartment",
      "slug": "the-five-residences-hanoi-apartment",
      "address": "345 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội",
      "city": "Hà Nội",
      "category": "apartment",
      "categoryLabel": "Căn hộ dịch vụ hạng sang 5 sao",
      "stars": 5,
      "starRating": 5,
      "priceMin": 2200000,
      "pricePerNight": 2200000,
      "rating": 4.9,
      "reviewCount": 65,
      "type": "Căn hộ cao cấp 5 sao",
      "featured": true,
      "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Căn hộ nội thất chuẩn Neo-Classic",
        "Hồ bơi nước ấm 4 mùa trong nhà",
        "Khu xông hơi đá muối Himalaya & Onsen",
        "Dịch vụ lễ tân & bảo vệ 24/7",
        "Nhà hàng Five Deli"
      ],
      "description": "Tổ hợp căn hộ dịch vụ cao cấp ngay trung tâm quận Ba Đình thanh lịch, mang đến không gian sống thượng lưu với tiện ích thư giãn Onsen và hồ bơi bốn mùa đẳng cấp.",
      "nearbyPlaces": [
        {
          "name": "Hồ Tây & Phố Trích Sài",
          "distance": "1.2 km",
          "icon": "water"
        },
        {
          "name": "Lotte Center Liễu Giai",
          "distance": "800 m",
          "icon": "domain"
        },
        {
          "name": "Lăng Bác & Quảng trường Ba Đình",
          "distance": "2.2 km",
          "icon": "account_balance"
        },
        {
          "name": "Sân bay Nội Bài",
          "distance": "22 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy trước 48 giờ",
        "children": "Phù hợp cho chuyên gia và gia đình lưu trú ngắn ngày hay dài hạn."
      },
      "status": "active"
    },
    {
      "id": "htl_apt_03",
      "name": "Oyster Gành Hào Condotel Apartment",
      "slug": "oyster-ganh-hao-condotel-apartment",
      "address": "82 Trần Phú, Phường 5, TP. Vũng Tàu, Bà Rịa - Vũng Tàu",
      "city": "Vũng Tàu",
      "category": "apartment",
      "categoryLabel": "Căn hộ Condotel view biển 4 sao",
      "stars": 4,
      "starRating": 4,
      "priceMin": 1100000,
      "pricePerNight": 1100000,
      "rating": 4.8,
      "reviewCount": 73,
      "type": "Căn hộ cao cấp 4 sao",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Hồ bơi chân mây vô cực ngắm hoàng hôn",
        "Ban công ôm trọn bãi Dâu biển",
        "Bếp nấu mini hiện đại",
        "Sky Bar trên tầng thượng",
        "Khu cà phê ngắm sóng"
      ],
      "description": "Tọa lạc trên cung đường ven biển Trần Phú đẹp nhất Vũng Tàu, Oyster Gành Hào sở hữu hồ bơi vô cực ngắm hoàng hôn buông xuống biển đẹp mê đắm.",
      "nearbyPlaces": [
        {
          "name": "Bãi Dâu Vũng Tàu",
          "distance": "50 m",
          "icon": "beach_access"
        },
        {
          "name": "Nhà hàng Gành Hào nổi tiếng",
          "distance": "200 m",
          "icon": "restaurant"
        },
        {
          "name": "Cáp treo Hồ Mây Park",
          "distance": "2.5 km",
          "icon": "attractions"
        },
        {
          "name": "Bạch Dinh",
          "distance": "3.0 km",
          "icon": "castle"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Trẻ em dưới 6 tuổi miễn phí."
      },
      "status": "active"
    },
    {
      "id": "htl_apt_04",
      "name": "The Arena Cam Ranh Beachfront Apartment",
      "slug": "the-arena-cam-ranh-beachfront-apartment",
      "address": "Đại lộ Nguyễn Tất Thành, Cam Ranh, Nha Trang, Khánh Hòa",
      "city": "Nha Trang",
      "category": "apartment",
      "categoryLabel": "Căn hộ biển 4 sao đa tiện ích",
      "stars": 4,
      "starRating": 4,
      "priceMin": 950000,
      "pricePerNight": 950000,
      "rating": 4.7,
      "reviewCount": 54,
      "type": "Căn hộ cao cấp 4 sao",
      "featured": false,
      "image": "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
      ],
      "amenities": [
        "Bãi Dài cát trắng mịn",
        "Hồ bơi giật cấp dài nhất Bãi Dài",
        "Phố đi bộ ẩm thực & nhạc nước",
        "Căn hộ ban công đón gió biển",
        "Công viên nước mini"
      ],
      "description": "Tổ hợp căn hộ nghỉ dưỡng biển sôi động tại Bãi Dài Cam Ranh với bể bơi vô cực giật cấp độc đáo và vị trí chỉ cách sân bay 5 phút di chuyển.",
      "nearbyPlaces": [
        {
          "name": "Bãi biển Bãi Dài",
          "distance": "100 m",
          "icon": "beach_access"
        },
        {
          "name": "Sân bay Quốc tế Cam Ranh",
          "distance": "4.5 km",
          "icon": "flight"
        },
        {
          "name": "KN Golf Links",
          "distance": "6.0 km",
          "icon": "golf_course"
        },
        {
          "name": "TP. Nha Trang",
          "distance": "28 km",
          "icon": "location_city"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Hủy miễn phí trước 24 giờ",
        "children": "Nhiều khu vui chơi và hồ bơi phù hợp cho trẻ em."
      },
      "status": "active"
    },
    {
      "id": "htl_hoian_01",
      "name": "Four Seasons Resort The Nam Hai",
      "city": "Hội An",
      "address": "Bãi biển Hà My, Điện Bàn, Quảng Nam (cạnh Phố Cổ Hội An)",
      "stars": 5,
      "starRating": 5,
      "rating": 4.9,
      "reviewCount": 3,
      "priceMin": 8500000,
      "pricePerNight": 8500000,
      "category": "beach_resort",
      "categoryLabel": "Beach Resort",
      "status": "active",
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Khu nghỉ dưỡng biển siêu sang 5 sao đẳng cấp Forbes thế giới bên bờ biển Hà My, sở hữu 3 hồ bơi vô cực trải dài ra biển và liệu trình Spa hoa sen độc bản.",
      "amenities": [
        "Hồ bơi vô cực 3 tầng",
        "Bãi biển riêng tư Hà My",
        "The Heart of the Earth Spa",
        "Nhà hàng ẩm thực Michelin",
        "Xe đưa đón phố cổ",
        "Miễn phí Wifi 5G",
        "Sân Tennis & Golf"
      ],
      "nearbyPlaces": [
        {
          "name": "Phố cổ Hội An",
          "distance": "7.5 km",
          "icon": "holiday_village"
        },
        {
          "name": "Bãi biển An Bàng",
          "distance": "3.2 km",
          "icon": "beach_access"
        },
        {
          "name": "Sân bay Quốc tế Đà Nẵng",
          "distance": "25 km",
          "icon": "flight"
        }
      ],
      "policies": {
        "checkIn": "15:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy trước 7 ngày"
      }
    },
    {
      "id": "htl_hoian_02",
      "name": "Anantara Hoi An Resort",
      "city": "Hội An",
      "address": "01 Phạm Hồng Thái, Phường Cẩm Châu, Hội An",
      "stars": 5,
      "starRating": 5,
      "rating": 4.8,
      "reviewCount": 3,
      "priceMin": 4200000,
      "pricePerNight": 4200000,
      "category": "resort",
      "categoryLabel": "Resort",
      "status": "active",
      "image": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Khu nghỉ dưỡng ven bờ sông Thu Bồn thơ mộng giao thoa giữa nét kiến trúc thuộc địa Pháp cổ và phong cách Á Đông truyền thống chỉ cách phố cổ 5 phút đi bộ.",
      "amenities": [
        "Hồ bơi sân vườn nhiệt đới",
        "Thuyền du ngoạn sông Thu Bồn",
        "Anantara Spa",
        "Nhà hàng ẩm thực ven sông",
        "Lớp học nấu ăn",
        "Miễn phí xe đạp",
        "Buffet sáng thượng hạng"
      ],
      "nearbyPlaces": [
        {
          "name": "Chùa Cầu Hội An",
          "distance": "900 m",
          "icon": "temple_buddhist"
        },
        {
          "name": "Chợ đêm Hội An",
          "distance": "700 m",
          "icon": "storefront"
        },
        {
          "name": "Bến thuyền sông Hoài",
          "distance": "500 m",
          "icon": "directions_boat"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy trước 3 ngày"
      }
    },
    {
      "id": "htl_hue_01",
      "name": "Silk Path Grand Hue Hotel",
      "city": "Hội An",
      "address": "02 Lê Lợi, Phường Vĩnh Ninh, Thành phố Huế (Gần Hội An)",
      "stars": 5,
      "starRating": 5,
      "rating": 4.8,
      "reviewCount": 3,
      "priceMin": 2600000,
      "pricePerNight": 2600000,
      "category": "hotel",
      "categoryLabel": "Khách sạn",
      "status": "active",
      "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
      ],
      "description": "Khách sạn phong cách quý tộc cung đình Đông Dương tráng lệ, sở hữu hồ bơi bốn mùa, nhà hàng Cung Đình và tầm nhìn trọn vẹn ra sông Hương.",
      "amenities": [
        "Hồ bơi ngoài trời",
        "Chi Spa & Xông hơi thảo mộc",
        "Nhà hàng Nam Phương",
        "Phòng tập Gym cao cấp",
        "Quầy Bar Olivio",
        "Xe đưa đón sân bay",
        "Bữa sáng Buffet đa dạng"
      ],
      "nearbyPlaces": [
        {
          "name": "Đại Nội Kinh Thành",
          "distance": "1.8 km",
          "icon": "account_balance"
        },
        {
          "name": "Cầu Tràng Tiền",
          "distance": "1.1 km",
          "icon": "bridge"
        },
        {
          "name": "Bến thuyền Tòa Khâm",
          "distance": "800 m",
          "icon": "directions_boat"
        }
      ],
      "policies": {
        "checkIn": "14:00",
        "checkOut": "12:00",
        "cancellation": "Miễn phí hủy trước 2 ngày"
      }
    }
  ],
  "rooms": [
    {
      "id": "rm_dn_01_1",
      "hotelId": "htl_dn_01",
      "name": "Deluxe 2 Giường Hướng Phố (Deluxe Twin City)",
      "type": "Phòng Deluxe",
      "price": 1750000,
      "originalPrice": 2200000,
      "size": 35,
      "bed": "2 Giường đơn",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thành phố năng động",
      "totalRooms": 2,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(4)_loai_phong_Deluxe 2 giường Hướng phố.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(4)_loai_phong_Deluxe 2 giường Hướng phố.jpg",
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(1).jpg"
      ],
      "description": "Phòng Deluxe 2 giường đơn êm ái, cửa sổ lớn đón ánh sáng tự nhiên với đầy đủ tiện nghi cao cấp 5 sao.",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "TV 50 inch",
        "Bồn tắm đứng",
        "Minibar"
      ]
    },
    {
      "id": "rm_dn_01_2",
      "hotelId": "htl_dn_01",
      "name": "Suite Grand Hướng Đại Dương (Grand Ocean Suite)",
      "type": "Phòng Suite",
      "price": 2650000,
      "originalPrice": 3400000,
      "size": 55,
      "bed": "1 Giường King lớn",
      "capacityAdults": 2,
      "capacityChildren": 2,
      "maxGuests": 2,
      "view": "Hướng đại dương trực diện",
      "totalRooms": 8,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(5)_loai_phong_Suite Grand Hướng Đại Dương.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(5)_loai_phong_Suite Grand Hướng Đại Dương.jpg",
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(2).jpg"
      ],
      "description": "Không gian Suite rộng rãi với phòng khách riêng biệt, ban công kính bao trọn đại dương Mỹ Khê xanh ngắt.",
      "amenities": [
        "View biển trực diện",
        "Bồn tắm nằm cao cấp",
        "Bữa sáng buffet",
        "Trái cây chào mừng",
        "Phòng khách riêng"
      ]
    },
    {
      "id": "rm_dn_01_3",
      "hotelId": "htl_dn_01",
      "name": "Phòng Suite Tổng Thống Giường Lớn (Presidential Suite)",
      "type": "Phòng Tổng Thống",
      "price": 5500000,
      "originalPrice": 7200000,
      "size": 110,
      "bed": "1 Giường King siêu lớn",
      "capacityAdults": 4,
      "capacityChildren": 2,
      "maxGuests": 4,
      "view": "Toàn cảnh biển và thành phố 360°",
      "totalRooms": 2,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(6)_loai_phong_Phòng Suite Tổng Thống Giường Lớn.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(6)_loai_phong_Phòng Suite Tổng Thống Giường Lớn.jpg",
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(3).jpg"
      ],
      "description": "Đỉnh cao nghỉ dưỡng thượng lưu với diện tích 110m², phòng ăn, quầy bar, phòng làm việc VIP và bồn sục Jacuzzi thư giãn.",
      "amenities": [
        "Bồn sục Jacuzzi",
        "Quản gia phục vụ",
        "Bữa sáng VIP",
        "Rượu vang & Trái cây nhập khẩu",
        "Xe đưa đón sân bay riêng"
      ]
    },
    {
      "id": "rm_dn_01_4",
      "hotelId": "htl_dn_01",
      "name": "Deluxe Giường King Hướng Biển (Deluxe King Ocean View)",
      "type": "Phòng Deluxe",
      "price": 2150000,
      "originalPrice": 2700000,
      "size": 40,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng biển Mỹ Khê",
      "totalRooms": 12,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(7)_loai_phong_Deluxe giường King Hướng biển.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(7)_loai_phong_Deluxe giường King Hướng biển.jpg"
      ],
      "description": "Giường King cỡ lớn êm ái, cửa kính hướng biển ngắm bình minh tuyệt đẹp ngay trên giường ngủ.",
      "amenities": [
        "Bữa sáng buffet",
        "View biển",
        "Wifi tốc độ cao",
        "Bồn tắm nằm",
        "Smart TV"
      ]
    },
    {
      "id": "rm_dn_01_5",
      "hotelId": "htl_dn_01",
      "name": "Executive King Suite Ban Công Biển",
      "type": "Phòng Executive",
      "price": 3250000,
      "originalPrice": 4100000,
      "size": 65,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 2,
      "maxGuests": 2,
      "view": "Ban công góc ngắm biển",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(8)_loai_phong_Deluxe giường King Hướng biển.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(8)_loai_phong_Deluxe giường King Hướng biển.jpg"
      ],
      "description": "Phòng Executive có ban công riêng cực rộng ngắm trọn bờ biển Mỹ Khê và thành phố Đà Nẵng lung linh về đêm.",
      "amenities": [
        "Ban công biển riêng",
        "Bữa sáng cao cấp",
        "Đặc quyền Executive Lounge",
        "Bồn tắm view biển"
      ]
    },
    {
      "id": "rm_dn_02_1",
      "hotelId": "htl_dn_02",
      "name": "Phòng Loại Sang 2 Giường Đơn (Deluxe Twin)",
      "type": "Phòng Deluxe",
      "price": 1150000,
      "originalPrice": 1500000,
      "size": 30,
      "bed": "2 Giường đơn",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thành phố",
      "totalRooms": 10,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(4)_loai_phong_Phòng Loại Sang 2 Giường Đơn Không Có Ban Công.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(4)_loai_phong_Phòng Loại Sang 2 Giường Đơn Không Có Ban Công.jpg"
      ],
      "description": "Phòng 2 giường đơn bài trí tinh tế, gọn gàng và đầy đủ tiện nghi, phù hợp cho cặp bạn bè hoặc đồng nghiệp.",
      "amenities": [
        "Bữa sáng",
        "Wifi",
        "Điều hòa",
        "Phòng tắm riêng",
        "Nước suối miễn phí"
      ]
    },
    {
      "id": "rm_dn_02_2",
      "hotelId": "htl_dn_02",
      "name": "Premier Deluxe Suite Cận Biển",
      "type": "Phòng Suite",
      "price": 1850000,
      "originalPrice": 2400000,
      "size": 45,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng biển thoáng đãng",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(5)_loai_phong_Premier Deluxe Suite.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(5)_loai_phong_Premier Deluxe Suite.jpg"
      ],
      "description": "Suite Premier với ban công đón gió biển mát rượi, nội thất gỗ ấm cúng và bồn tắm thư giãn.",
      "amenities": [
        "Ban công biển",
        "Bồn tắm nằm",
        "Bữa sáng miễn phí",
        "Minibar",
        "Smart TV"
      ]
    },
    {
      "id": "rm_dn_02_3",
      "hotelId": "htl_dn_02",
      "name": "Phòng Deluxe Gia Đình 2 Giường Lớn (Family Deluxe)",
      "type": "Phòng Gia Đình",
      "price": 2250000,
      "originalPrice": 2900000,
      "size": 50,
      "bed": "2 Giường đôi lớn",
      "capacityAdults": 4,
      "capacityChildren": 2,
      "maxGuests": 4,
      "view": "Hướng phố và biển",
      "totalRooms": 8,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(6)_loai_phong_Phòng Deluxe gia đình 2 giường.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(6)_loai_phong_Phòng Deluxe gia đình 2 giường.jpg"
      ],
      "description": "Không gian rộng rãi với 2 giường đôi lớn, hoàn hảo cho cả gia đình hoặc nhóm 4 người đi du lịch biển.",
      "amenities": [
        "2 Giường đôi lớn",
        "Bữa sáng cho 4 người",
        "Wifi",
        "Bàn ăn gia đình",
        "Tủ lạnh lớn"
      ]
    },
    {
      "id": "rm_dn_02_4",
      "hotelId": "htl_dn_02",
      "name": "Phòng Studio Đẳng Cấp Giường Đôi (Executive Studio)",
      "type": "Phòng Studio",
      "price": 1550000,
      "originalPrice": 1950000,
      "size": 38,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thành phố",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(7)_loai_phong_Phòng Studio Đẳng Cấp Giường Đôi.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(7)_loai_phong_Phòng Studio Đẳng Cấp Giường Đôi.jpg"
      ],
      "description": "Studio phong cách hiện đại với không gian tiếp khách và giường đôi thoải mái.",
      "amenities": [
        "Bếp nhỏ tiện lợi",
        "Bữa sáng",
        "Wifi",
        "Bàn làm việc",
        "Smart TV"
      ]
    },
    {
      "id": "rm_dn_02_5",
      "hotelId": "htl_dn_02",
      "name": "Phòng Ba Người Hướng Thành Phố (Triple City View)",
      "type": "Phòng Ba Người",
      "price": 1650000,
      "originalPrice": 2100000,
      "size": 40,
      "bed": "1 Giường đôi + 1 Giường đơn",
      "capacityAdults": 3,
      "capacityChildren": 1,
      "maxGuests": 3,
      "view": "Hướng thành phố",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(8)_loai_phong_Phòng Ba Người Hướng Thành Phố.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(8)_loai_phong_Phòng Ba Người Hướng Thành Phố.jpg"
      ],
      "description": "Thiết kế linh hoạt gồm 1 giường đôi và 1 giường đơn, rất thuận tiện cho nhóm 3 người.",
      "amenities": [
        "Bữa sáng cho 3 người",
        "Wifi",
        "Điều hòa",
        "Két sắt an toàn",
        "Máy sấy tóc"
      ]
    },
    {
      "id": "rm_dn_03_1",
      "hotelId": "htl_dn_03",
      "name": "Studio Nhìn Ra Vườn (Garden View Studio)",
      "type": "Phòng Studio",
      "price": 1250000,
      "originalPrice": 1600000,
      "size": 36,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng vườn xanh mát",
      "totalRooms": 8,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(4)_loai_phong_Studio Nhìn Ra Vườn.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(4)_loai_phong_Studio Nhìn Ra Vườn.jpg"
      ],
      "description": "Căn Studio yên bình nhìn ra tiểu cảnh sân vườn xanh mướt, trang bị đầy đủ tiện nghi sinh hoạt.",
      "amenities": [
        "Bữa sáng",
        "Wifi",
        "Ban công",
        "Smart TV",
        "Bình đun siêu tốc"
      ]
    },
    {
      "id": "rm_dn_03_2",
      "hotelId": "htl_dn_03",
      "name": "Giường Đơn Trong Phòng Tập Thể (Dorm Bed)",
      "type": "Phòng Tập Thể",
      "price": 250000,
      "originalPrice": 350000,
      "size": 25,
      "bed": "1 Giường tầng đơn",
      "capacityAdults": 1,
      "capacityChildren": 0,
      "maxGuests": 1,
      "view": "Hướng phố",
      "totalRooms": 16,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(5)_loai_phong_Giường Đơn Trong Phòng Ngủ Tập Thể.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(5)_loai_phong_Giường Đơn Trong Phòng Ngủ Tập Thể.jpg"
      ],
      "description": "Giường đơn êm ái trong phòng tập thể sạch sẽ, có rèm che riêng tư, tủ khóa đồ và ổ cắm sạc cá nhân.",
      "amenities": [
        "Tủ khóa an toàn",
        "Đèn đọc sách",
        "Rèm riêng tư",
        "Wifi tốc độ cao",
        "Điều hòa 24/24"
      ]
    },
    {
      "id": "rm_dn_03_3",
      "hotelId": "htl_dn_03",
      "name": "Suite Nhìn Ra Sông Hàn (Riverview Suite)",
      "type": "Phòng Suite",
      "price": 1850000,
      "originalPrice": 2450000,
      "size": 48,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng sông Hàn & Cầu Rồng",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(6)_loai_phong_Suite Nhìn Ra Sông.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(6)_loai_phong_Suite Nhìn Ra Sông.jpg"
      ],
      "description": "Tận hưởng khung cảnh sông Hàn lãng mạn và ngắm cầu Rồng phun lửa từ ban công phòng Suite cao cấp.",
      "amenities": [
        "View sông Hàn",
        "Bồn tắm nằm",
        "Bữa sáng miễn phí",
        "Sofa tiếp khách",
        "Smart TV"
      ]
    },
    {
      "id": "rm_dn_03_4",
      "hotelId": "htl_dn_03",
      "name": "Phòng Giường Đôi Deluxe Hướng Phố",
      "type": "Phòng Deluxe",
      "price": 850000,
      "originalPrice": 1150000,
      "size": 32,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thành phố",
      "totalRooms": 10,
      "available": true,
      "image": "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(7)_loai_phong_Phòng Giường đôi Deluxe.jpg",
      "gallery": [
        "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(7)_loai_phong_Phòng Giường đôi Deluxe.jpg"
      ],
      "description": "Phòng Deluxe giường đôi êm ái, trang nhã, giá cả phải chăng cho các cặp đôi du lịch Đà Nẵng.",
      "amenities": [
        "Bữa sáng",
        "Wifi",
        "Điều hòa",
        "Máy nước nóng",
        "Ấm đun nước"
      ]
    },
    {
      "id": "rm_dn_04_1",
      "hotelId": "htl_dn_04",
      "name": "Phòng Superior Giường Đôi Nhìn Ra Thành Phố",
      "type": "Phòng Superior",
      "price": 790000,
      "originalPrice": 1050000,
      "size": 28,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng phố",
      "totalRooms": 12,
      "available": true,
      "image": "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(4)_loai_phong_Phòng Superior Giường Đôi Nhìn Ra Thành Phố.jpg",
      "gallery": [
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(4)_loai_phong_Phòng Superior Giường Đôi Nhìn Ra Thành Phố.jpg"
      ],
      "description": "Phòng Superior trung tâm ấm cúng, sàn gỗ sang trọng và cửa sổ nhìn ngắm phố phường nhộn nhịp.",
      "amenities": [
        "Bữa sáng",
        "Wifi",
        "Điều hòa",
        "Bàn làm việc",
        "Két an toàn"
      ]
    },
    {
      "id": "rm_dn_04_2",
      "hotelId": "htl_dn_04",
      "name": "Suite Nhìn Ra Thành Phố (City Suite)",
      "type": "Phòng Suite",
      "price": 1350000,
      "originalPrice": 1800000,
      "size": 45,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Toàn cảnh thành phố",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(5)_loai_phong_Suite Nhìn Ra Thành Phố.jpg",
      "gallery": [
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(5)_loai_phong_Suite Nhìn Ra Thành Phố.jpg"
      ],
      "description": "Suite rộng rãi với cửa kính panoramic nhìn trọn cảnh đêm lung linh của Đà Nẵng.",
      "amenities": [
        "Cửa kính Panorama",
        "Bồn tắm nằm",
        "Bữa sáng phong phú",
        "Sofa tiếp khách",
        "Smart TV"
      ]
    },
    {
      "id": "rm_dn_04_3",
      "hotelId": "htl_dn_04",
      "name": "Giường Đơn Trong Phòng Ngủ Tập Thể",
      "type": "Phòng Tập Thể",
      "price": 220000,
      "originalPrice": 300000,
      "size": 26,
      "bed": "1 Giường tầng",
      "capacityAdults": 1,
      "capacityChildren": 0,
      "maxGuests": 1,
      "view": "Hướng phố",
      "totalRooms": 16,
      "available": true,
      "image": "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(6)_loai_phong_Giường Đơn Trong Phòng Ngủ Tập Thể  Với Phòng Tắm Chung.jpg",
      "gallery": [
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(6)_loai_phong_Giường Đơn Trong Phòng Ngủ Tập Thể  Với Phòng Tắm Chung.jpg"
      ],
      "description": "Giải pháp lưu trú siêu tiết kiệm ngay trung tâm cho các bạn trẻ du lịch bụi hoặc công tác ngắn ngày.",
      "amenities": [
        "Tủ đồ cá nhân",
        "Ổ cắm riêng",
        "Đèn đọc sách",
        "Wifi",
        "Điều hòa"
      ]
    },
    {
      "id": "rm_dn_04_4",
      "hotelId": "htl_dn_04",
      "name": "Suite Hạng Tổng Thống MoonLight Luxury",
      "type": "Phòng Tổng Thống",
      "price": 3850000,
      "originalPrice": 5200000,
      "size": 90,
      "bed": "1 Giường King siêu lớn",
      "capacityAdults": 4,
      "capacityChildren": 2,
      "maxGuests": 4,
      "view": "Tầm nhìn 270° thành phố",
      "totalRooms": 2,
      "available": true,
      "image": "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(7)_loai_phong_Suite Hạng tổng thống.jpg",
      "gallery": [
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(7)_loai_phong_Suite Hạng tổng thống.jpg"
      ],
      "description": "Phòng tổng thống xa hoa nhất MoonLight với phòng khách sang trọng, bàn họp và dịch vụ VIP.",
      "amenities": [
        "Bồn sục Jacuzzi",
        "Phòng khách VIP",
        "Bữa sáng phục vụ tại phòng",
        "Rượu vang & Trái cây",
        "Quản gia riêng"
      ]
    },
    {
      "id": "rm_dn_04_5",
      "hotelId": "htl_dn_04",
      "name": "Phòng 3 Người Nhìn Ra Thành Phố (Triple Room)",
      "type": "Phòng Ba Người",
      "price": 1450000,
      "originalPrice": 1900000,
      "size": 38,
      "bed": "1 Giường đôi + 1 Giường đơn",
      "capacityAdults": 3,
      "capacityChildren": 1,
      "maxGuests": 3,
      "view": "Hướng thành phố",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(8)_loai_phong_Phòng 3 Người Nhìn Ra Thành Phố.jpg",
      "gallery": [
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(8)_loai_phong_Phòng 3 Người Nhìn Ra Thành Phố.jpg"
      ],
      "description": "Phòng 3 người tiện nghi, không gian thoáng đãng cho nhóm bạn bè hoặc gia đình nhỏ.",
      "amenities": [
        "Bữa sáng cho 3 người",
        "Wifi",
        "Điều hòa",
        "TV màn hình phẳng",
        "Tủ quần áo"
      ]
    },
    {
      "id": "rm_hn_01_1",
      "hotelId": "htl_hn_01",
      "name": "Phòng Tiêu Chuẩn Giường Queen (Standard Queen)",
      "type": "Phòng Tiêu Chuẩn",
      "price": 1850000,
      "originalPrice": 2350000,
      "size": 28,
      "bed": "1 Giường Queen",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng phố cổ",
      "totalRooms": 2,
      "available": true,
      "image": "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(4)_loaiphong_Phòng Tiêu chuẩn giường Queen.jpg",
      "gallery": [
        "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(4)_loaiphong_Phòng Tiêu chuẩn giường Queen.jpg"
      ],
      "description": "Không gian ấm cúng, thiết kế mang đậm phong vị Hà Nội xưa kết hợp tiện nghi cao cấp 5 sao.",
      "amenities": [
        "Bữa sáng buffet phố cổ",
        "Wifi tốc độ cao",
        "Bồn tắm đứng",
        "Minibar",
        "Máy pha cafe"
      ]
    },
    {
      "id": "rm_hn_01_2",
      "hotelId": "htl_hn_01",
      "name": "Phòng Loại Sang Giường Đôi (Deluxe Double Room)",
      "type": "Phòng Deluxe",
      "price": 2450000,
      "originalPrice": 3100000,
      "size": 38,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng phố Hàng Hành",
      "totalRooms": 8,
      "available": true,
      "image": "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(5)_loaiphong_Phòng Loại Sang Giường Đôi.jpg",
      "gallery": [
        "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(5)_loaiphong_Phòng Loại Sang Giường Đôi.jpg"
      ],
      "description": "Phòng Deluxe sang trọng với ban công ngắm nhìn nét duyên dáng của phố cổ Hà Nội.",
      "amenities": [
        "Ban công phố cổ",
        "Bồn tắm nằm cao cấp",
        "Bữa sáng",
        "Trà chiều",
        "Smart TV"
      ]
    },
    {
      "id": "rm_hn_01_3",
      "hotelId": "htl_hn_01",
      "name": "Superior Suite Giường King (King Superior Suite)",
      "type": "Phòng Suite",
      "price": 3250000,
      "originalPrice": 4200000,
      "size": 52,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 2,
      "maxGuests": 2,
      "view": "Hướng Hồ Hoàn Kiếm",
      "totalRooms": 4,
      "available": true,
      "image": "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(6)_loaiphong_Superior Suite giường King.jpg",
      "gallery": [
        "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(6)_loaiphong_Superior Suite giường King.jpg"
      ],
      "description": "Căn Suite thượng hạng với phòng khách riêng, nội thất gỗ quý và dịch vụ phòng VIP.",
      "amenities": [
        "Phòng khách riêng",
        "Bồn tắm sục",
        "Bữa sáng thượng hạng",
        "Xe đưa đón sân bay",
        "Rượu vang chào mừng"
      ]
    },
    {
      "id": "rm_hn_02_1",
      "hotelId": "htl_hn_02",
      "name": "Phòng Cao Cấp Cho Hai Người (Executive Double)",
      "type": "Phòng Cao Cấp",
      "price": 950000,
      "originalPrice": 1250000,
      "size": 30,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thành phố",
      "totalRooms": 10,
      "available": true,
      "image": "img/Hà Nội/Melon Hotel To Huu(4)_loaiphong_Phòng Cao Cấp Cho Hai Người.jpg",
      "gallery": [
        "img/Hà Nội/Melon Hotel To Huu(4)_loaiphong_Phòng Cao Cấp Cho Hai Người.jpg"
      ],
      "description": "Phòng cao cấp thiết kế hiện đại, tinh tế, trang bị bàn làm việc và điều hòa 2 chiều êm ái.",
      "amenities": [
        "Bữa sáng",
        "Wifi tốc độ cao",
        "Bàn làm việc",
        "Smart TV",
        "Két an toàn"
      ]
    },
    {
      "id": "rm_hn_02_2",
      "hotelId": "htl_hn_02",
      "name": "Phòng Cao Cấp Giường Đôi Cửa Sổ Lớn Hướng Phố",
      "type": "Phòng Cao Cấp",
      "price": 1250000,
      "originalPrice": 1600000,
      "size": 35,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Cửa sổ lớn hướng phố",
      "totalRooms": 8,
      "available": true,
      "image": "img/Hà Nội/Melon Hotel To Huu(5)_loaiphong_Phòng Cao Cấp Giường Đôi Hướng Thành Phố Cửa Sổ Lớn.jpg",
      "gallery": [
        "img/Hà Nội/Melon Hotel To Huu(5)_loaiphong_Phòng Cao Cấp Giường Đôi Hướng Thành Phố Cửa Sổ Lớn.jpg"
      ],
      "description": "Cửa sổ kính kịch trần mở ra không gian thành phố năng động, phòng ngập tràn ánh sáng tự nhiên.",
      "amenities": [
        "Cửa sổ lớn",
        "Bữa sáng miễn phí",
        "Bồn tắm đứng hiện đại",
        "Sofa thư giãn",
        "Minibar"
      ]
    },
    {
      "id": "rm_hn_02_3",
      "hotelId": "htl_hn_02",
      "name": "Phòng Loại Sang Giường Đôi – Hướng Công Viên",
      "type": "Phòng Loại Sang",
      "price": 1450000,
      "originalPrice": 1850000,
      "size": 40,
      "bed": "1 Giường King lớn",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng công viên xanh",
      "totalRooms": 6,
      "available": true,
      "image": "img/Hà Nội/Melon Hotel To Huu(6)_loaiphong_Phòng Loại Sang Giường Đôi – Hướng Công Viên.jpg",
      "gallery": [
        "img/Hà Nội/Melon Hotel To Huu(6)_loaiphong_Phòng Loại Sang Giường Đôi – Hướng Công Viên.jpg"
      ],
      "description": "Tầm nhìn hướng công viên yên tĩnh, trong lành, đem lại cảm giác thư thái sau một ngày làm việc bận rộn.",
      "amenities": [
        "View công viên",
        "Bồn tắm nằm",
        "Bữa sáng cao cấp",
        "Máy pha cafe",
        "Smart TV"
      ]
    },
    {
      "id": "rm_hl_01_1",
      "hotelId": "htl_hl_01",
      "name": "Phòng Hai Giường Đơn Loại Sang (Deluxe Twin)",
      "type": "Phòng Deluxe",
      "price": 1150000,
      "originalPrice": 1450000,
      "size": 32,
      "bed": "2 Giường đơn",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng vịnh Hạ Long",
      "totalRooms": 10,
      "available": true,
      "image": "img/Hạ Long/Green bay hotel_Hạ Long(4)_loai_phong_Phòng Hai Giường Đơn Loại Sang.jpg",
      "gallery": [
        "img/Hạ Long/Green bay hotel_Hạ Long(4)_loai_phong_Phòng Hai Giường Đơn Loại Sang.jpg"
      ],
      "description": "Phòng 2 giường đơn êm ái, ban công ngắm nhìn vịnh biển Hạ Long và núi đá vôi kỳ thú.",
      "amenities": [
        "View vịnh",
        "Bữa sáng",
        "Wifi",
        "Điều hòa",
        "Minibar"
      ]
    },
    {
      "id": "rm_hl_01_2",
      "hotelId": "htl_hl_01",
      "name": "Phòng Deluxe Gia Đình Hướng Vịnh (Family Deluxe)",
      "type": "Phòng Gia Đình",
      "price": 1950000,
      "originalPrice": 2500000,
      "size": 48,
      "bed": "1 Giường đôi + 2 Giường đơn",
      "capacityAdults": 4,
      "capacityChildren": 2,
      "maxGuests": 4,
      "view": "Hướng vịnh toàn cảnh",
      "totalRooms": 6,
      "available": true,
      "image": "img/Hạ Long/Green bay hotel_Hạ Long(5)_loai_phong_Phòng Deluxe Gia đình.jpg",
      "gallery": [
        "img/Hạ Long/Green bay hotel_Hạ Long(5)_loai_phong_Phòng Deluxe Gia đình.jpg"
      ],
      "description": "Phòng gia đình tiện nghi với không gian rộng rãi cho 4 người lớn cùng ngắm vịnh biển di sản.",
      "amenities": [
        "Bữa sáng cho 4 người",
        "Ban công vịnh",
        "Bồn tắm nằm",
        "Smart TV",
        "Tủ lạnh"
      ]
    },
    {
      "id": "rm_hl_02_1",
      "hotelId": "htl_hl_02",
      "name": "Superior Garden Room (2 Single Beds, Hill View)",
      "type": "Phòng Superior",
      "price": 2250000,
      "originalPrice": 2850000,
      "size": 35,
      "bed": "2 Giường đơn cao cấp",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng đồi và vườn",
      "totalRooms": 12,
      "available": true,
      "image": "img/Hạ Long/Wyndham Garden Legend Hạ Long(4)_loaiphong_Superior Garden Room, 2 Single Beds, Hill View.jpg",
      "gallery": [
        "img/Hạ Long/Wyndham Garden Legend Hạ Long(4)_loaiphong_Superior Garden Room, 2 Single Beds, Hill View.jpg"
      ],
      "description": "Phòng Superior 5 sao quốc tế với đệm lông vũ êm ái, tầm nhìn hướng đồi xanh mát và cầu Bãi Cháy.",
      "amenities": [
        "Bữa sáng buffet 5 sao",
        "Wifi",
        "Bồn tắm đứng & nằm",
        "Smart TV 55 inch",
        "Minibar"
      ]
    },
    {
      "id": "rm_hl_02_2",
      "hotelId": "htl_hl_02",
      "name": "Deluxe Ocean Room (2 Single Beds, Ocean View)",
      "type": "Phòng Deluxe",
      "price": 2850000,
      "originalPrice": 3600000,
      "size": 42,
      "bed": "2 Giường đơn cao cấp",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thẳng vịnh Hạ Long",
      "totalRooms": 10,
      "available": true,
      "image": "img/Hạ Long/Wyndham Garden Legend Hạ Long(5)_loaiphong_Deluxe Ocean Room, 2 Single Beds, Ocean View.jpg",
      "gallery": [
        "img/Hạ Long/Wyndham Garden Legend Hạ Long(5)_loaiphong_Deluxe Ocean Room, 2 Single Beds, Ocean View.jpg"
      ],
      "description": "Tầm nhìn ôm trọn vịnh Hạ Long tuyệt sắc, ngắm du thuyền lướt sóng ngay từ ban công phòng nghỉ.",
      "amenities": [
        "View vịnh trực diện",
        "Bồn tắm ngắm biển",
        "Bữa sáng 5 sao",
        "Áo choàng lụa",
        "Máy pha cafe"
      ]
    },
    {
      "id": "rm_hl_02_3",
      "hotelId": "htl_hl_02",
      "name": "Premier Suite (1 King Bed, Ocean View)",
      "type": "Phòng Suite",
      "price": 3950000,
      "originalPrice": 5100000,
      "size": 65,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 2,
      "maxGuests": 2,
      "view": "Toàn cảnh vịnh Hạ Long 180°",
      "totalRooms": 4,
      "available": true,
      "image": "img/Hạ Long/Wyndham Garden Legend Hạ Long(6)_loaiphong_Premier Suite, 1 King Bed, Ocean View.jpg",
      "gallery": [
        "img/Hạ Long/Wyndham Garden Legend Hạ Long(6)_loaiphong_Premier Suite, 1 King Bed, Ocean View.jpg"
      ],
      "description": "Căn Suite thượng lưu với phòng khách riêng, quầy bar và bồn tắm hướng vịnh tuyệt tác.",
      "amenities": [
        "Phòng khách riêng",
        "Bồn tắm Jacuzzi view vịnh",
        "Bữa sáng phục vụ tại phòng",
        "Rượu vang đón chào",
        "Đưa đón VIP"
      ]
    },
    {
      "id": "rm_vt_01_1",
      "hotelId": "htl_vt_01",
      "name": "Phòng Đôi 4 Người Ở (Family Suite View Biển)",
      "type": "Căn Hộ Gia Đình",
      "price": 1850000,
      "originalPrice": 2400000,
      "size": 60,
      "bed": "2 Giường đôi lớn",
      "capacityAdults": 4,
      "capacityChildren": 2,
      "maxGuests": 4,
      "view": "Hướng biển Bãi Sau",
      "totalRooms": 10,
      "available": true,
      "image": "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(4)_loai_phong_Phòng Đôi 4 người ở.jpg",
      "gallery": [
        "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(4)_loai_phong_Phòng Đôi 4 người ở.jpg"
      ],
      "description": "Căn hộ 2 phòng ngủ sang trọng có bếp nấu, phòng khách và ban công đón gió biển Bãi Sau.",
      "amenities": [
        "2 Phòng ngủ",
        "Bếp nấu gia đình",
        "Ban công ngắm biển",
        "Bể bơi trên cao",
        "Wifi"
      ]
    },
    {
      "id": "rm_vt_01_2",
      "hotelId": "htl_vt_01",
      "name": "Phòng Đơn Tiêu Chuẩn 1-2 Người Ở (Standard Studio)",
      "type": "Căn Hộ Studio",
      "price": 1200000,
      "originalPrice": 1550000,
      "size": 35,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thành phố",
      "totalRooms": 12,
      "available": true,
      "image": "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(5)_loai_phong_Phòng Đơn 1-2 người ở.jpg",
      "gallery": [
        "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(5)_loai_phong_Phòng Đơn 1-2 người ở.jpg"
      ],
      "description": "Studio gọn gàng, tinh tế đầy đủ tiện nghi bếp, máy giặt và giường đệm êm ái.",
      "amenities": [
        "Bếp nhỏ",
        "Máy giặt",
        "Wifi",
        "Smart TV",
        "Bể bơi miễn phí"
      ]
    },
    {
      "id": "rm_vt_01_3",
      "hotelId": "htl_vt_01",
      "name": "Phòng Đơn VIP 1-2 Người Ở (VIP Ocean Balcony)",
      "type": "Căn Hộ VIP",
      "price": 1650000,
      "originalPrice": 2100000,
      "size": 42,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng biển trực diện",
      "totalRooms": 8,
      "available": true,
      "image": "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(6)_loai_phong_Phòng Đơn Vip 1-2 người ở.jpg",
      "gallery": [
        "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(6)_loai_phong_Phòng Đơn Vip 1-2 người ở.jpg"
      ],
      "description": "Phòng VIP có ban công rộng trực diện biển, ngắm bình minh trên biển Vũng Tàu rực rỡ.",
      "amenities": [
        "Ban công biển",
        "Bồn tắm nằm",
        "Smart TV",
        "Bếp cao cấp",
        "Wifi"
      ]
    },
    {
      "id": "rm_vt_01_4",
      "hotelId": "htl_vt_01",
      "name": "Phòng VIP CSJ View Biển Thượng Lưu (Presidential Suite)",
      "type": "Căn Hộ Tổng Thống",
      "price": 2450000,
      "originalPrice": 3200000,
      "size": 75,
      "bed": "1 Giường King siêu lớn",
      "capacityAdults": 2,
      "capacityChildren": 2,
      "maxGuests": 2,
      "view": "Toàn cảnh biển 180°",
      "totalRooms": 4,
      "available": true,
      "image": "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(7)_loai_phong_Phòng Vip.jpg",
      "gallery": [
        "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(7)_loai_phong_Phòng Vip.jpg"
      ],
      "description": "Đỉnh cao căn hộ nghỉ dưỡng với phòng khách sang trọng, bàn bar ngắm biển và bồn sục Jacuzzi.",
      "amenities": [
        "Bồn sục Jacuzzi",
        "Quầy bar mini",
        "Ban công góc ngắm biển",
        "Bữa sáng cao cấp",
        "Bãi đỗ xe VIP"
      ]
    },
    {
      "id": "rm_vt_02_1",
      "hotelId": "htl_vt_02",
      "name": "Phòng Đôi Hướng Nhìn Ra Biển (Ocean View Double)",
      "type": "Phòng Đôi",
      "price": 1150000,
      "originalPrice": 1450000,
      "size": 32,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng nhìn ra biển",
      "totalRooms": 6,
      "available": true,
      "image": "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(4)_loai_phong_Phòng Đôi Hướng Nhìn Ra Biển.jpg",
      "gallery": [
        "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(4)_loai_phong_Phòng Đôi Hướng Nhìn Ra Biển.jpg"
      ],
      "description": "Phòng đôi view biển thoáng mát, bài trí phong cách mộc mạc, gần gũi với thiên nhiên.",
      "amenities": [
        "View biển",
        "Wifi",
        "Điều hòa",
        "Phòng tắm riêng",
        "Bếp BBQ chung"
      ]
    },
    {
      "id": "rm_vt_02_2",
      "hotelId": "htl_vt_02",
      "name": "Phòng Gia Đình Lớn 6-8 Người Ở (Large Family Room)",
      "type": "Phòng Gia Đình",
      "price": 2850000,
      "originalPrice": 3600000,
      "size": 80,
      "bed": "4 Giường đôi",
      "capacityAdults": 8,
      "capacityChildren": 4,
      "maxGuests": 8,
      "view": "Hướng sân vườn & biển",
      "totalRooms": 3,
      "available": true,
      "image": "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(5)_loai_phong_Phòng Gia Đình 6-8 người ở .jpg",
      "gallery": [
        "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(5)_loai_phong_Phòng Gia Đình 6-8 người ở .jpg"
      ],
      "description": "Phòng cực rộng với 4 giường đôi, phòng khách và sân BBQ riêng cho đại gia đình 6-8 người.",
      "amenities": [
        "Sức chứa 8 người",
        "Bếp riêng",
        "Sân nướng BBQ",
        "Wifi",
        "Bãi đỗ ô tô"
      ]
    },
    {
      "id": "rm_vt_02_3",
      "hotelId": "htl_vt_02",
      "name": "Phòng Đơn 1-2 Người Ở Tiêu Chuẩn (Standard Room)",
      "type": "Phòng Đơn",
      "price": 850000,
      "originalPrice": 1100000,
      "size": 25,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng sân vườn",
      "totalRooms": 8,
      "available": true,
      "image": "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(6)_loai_phong_Phòng Đơn 1-2 người ở .jpg",
      "gallery": [
        "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(6)_loai_phong_Phòng Đơn 1-2 người ở .jpg"
      ],
      "description": "Phòng đơn nhỏ xinh, ấm áp, yên tĩnh, phù hợp cho 1-2 người nghỉ ngơi cuối tuần.",
      "amenities": [
        "Wifi",
        "Điều hòa",
        "Phòng tắm riêng",
        "Máy sấy tóc",
        "Bình nóng lạnh"
      ]
    },
    {
      "id": "rm_dl_01_1",
      "hotelId": "htl_dl_01",
      "name": "Phòng Đôi VIP 4 Người Ở (Pine Hill Quad Suite)",
      "type": "Phòng VIP Gia Đình",
      "price": 1450000,
      "originalPrice": 1850000,
      "size": 45,
      "bed": "2 Giường đôi",
      "capacityAdults": 4,
      "capacityChildren": 2,
      "maxGuests": 4,
      "view": "Hướng đồi thông & thung lũng",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(4)_loai_phong_Phòng Đôi Vip 4 người ở.jpg",
      "gallery": [
        "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(4)_loai_phong_Phòng Đôi Vip 4 người ở.jpg"
      ],
      "description": "Phòng đôi VIP 2 giường lớn, cửa sổ kính lớn ngắm trọn thung lũng đèn đêm huyền ảo của Đà Lạt.",
      "amenities": [
        "View đồi thông",
        "Bữa sáng ấm áp",
        "Wifi",
        "Bình nước nóng",
        "Trà & Cafe Đà Lạt"
      ]
    },
    {
      "id": "rm_dl_01_2",
      "hotelId": "htl_dl_01",
      "name": "Phòng Đơn 1 Người Ở Ấm Cúng (Cozy Single)",
      "type": "Phòng Đơn",
      "price": 750000,
      "originalPrice": 950000,
      "size": 22,
      "bed": "1 Giường đơn",
      "capacityAdults": 1,
      "capacityChildren": 0,
      "maxGuests": 1,
      "view": "Hướng sân vườn hoa",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(5)_loai_phong_Phòng Đơn 1 người ở.jpg",
      "gallery": [
        "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(5)_loai_phong_Phòng Đơn 1 người ở.jpg"
      ],
      "description": "Căn phòng nhỏ ấm cúng dành cho các bạn đi du lịch một mình để tìm kiếm sự bình yên giữa phố núi.",
      "amenities": [
        "Wifi",
        "Máy sấy tóc",
        "Bình nóng lạnh",
        "Đèn đọc sách",
        "Trà atiso"
      ]
    },
    {
      "id": "rm_dl_01_3",
      "hotelId": "htl_dl_01",
      "name": "Phòng Đơn VIP 2 Người Ở Cửa Sổ Rừng Thông",
      "type": "Phòng VIP",
      "price": 1050000,
      "originalPrice": 1350000,
      "size": 32,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Rừng thông & Sương mù",
      "totalRooms": 8,
      "available": true,
      "image": "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(6)_loai_phong_Phòng Đơn Vip 2 người ở.jpg",
      "gallery": [
        "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(6)_loai_phong_Phòng Đơn Vip 2 người ở.jpg"
      ],
      "description": "Phòng VIP lãng mạn cho các cặp đôi với ban công ngắm sương mù sớm mai và rừng thông reo.",
      "amenities": [
        "Ban công ngắm thông",
        "Bồn tắm gỗ thảo mộc",
        "Bữa sáng",
        "Smart TV",
        "Wifi"
      ]
    },
    {
      "id": "rm_dl_02_1",
      "hotelId": "htl_dl_02",
      "name": "Phòng Đơn VIP 2 Người Ở (Queen City View)",
      "type": "Phòng VIP",
      "price": 890000,
      "originalPrice": 1150000,
      "size": 28,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thành phố",
      "totalRooms": 10,
      "available": true,
      "image": "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(4)_loai_phong_Phòng Đơn Vip 2 người ở.jpg",
      "gallery": [
        "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(4)_loai_phong_Phòng Đơn Vip 2 người ở.jpg"
      ],
      "description": "Phòng VIP trung tâm hiện đại, ấm áp, cách chợ đêm vài phút tản bộ.",
      "amenities": [
        "Bữa sáng",
        "Wifi",
        "Điều hòa 2 chiều",
        "Minibar",
        "Smart TV"
      ]
    },
    {
      "id": "rm_dl_02_2",
      "hotelId": "htl_dl_02",
      "name": "Phòng Đôi VIP 4 Người Ở (Royal Family Suite)",
      "type": "Phòng Gia Đình",
      "price": 1650000,
      "originalPrice": 2100000,
      "size": 45,
      "bed": "2 Giường đôi",
      "capacityAdults": 4,
      "capacityChildren": 2,
      "maxGuests": 4,
      "view": "Hướng thành phố",
      "totalRooms": 6,
      "available": true,
      "image": "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(5)_loai_phong_Phòng Đôi Vip 4 người ở.jpg",
      "gallery": [
        "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(5)_loai_phong_Phòng Đôi Vip 4 người ở.jpg"
      ],
      "description": "Phòng gia đình 2 giường đôi lớn, nội thất cao cấp mang lại sự thoải mái tối đa cho cả gia đình.",
      "amenities": [
        "Bữa sáng cho 4 người",
        "Wifi",
        "Bồn tắm đứng",
        "Smart TV",
        "Két an toàn"
      ]
    },
    {
      "id": "rm_hg_01_1",
      "hotelId": "htl_hg_01",
      "name": "Phòng Đôi 4 Người Ở (Family Quad Room)",
      "type": "Phòng Gia Đình",
      "price": 950000,
      "originalPrice": 1250000,
      "size": 40,
      "bed": "2 Giường đôi lớn",
      "capacityAdults": 4,
      "capacityChildren": 2,
      "maxGuests": 4,
      "view": "Hướng ruộng bậc thang",
      "totalRooms": 6,
      "available": true,
      "image": "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(4)_loai_phong_Phòng Đôi 4 người ở.jpg",
      "gallery": [
        "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(4)_loai_phong_Phòng Đôi 4 người ở.jpg"
      ],
      "description": "Phòng gia đình nhà sàn sinh thái với 2 giường đôi rộng rãi, ban công ngắm nhìn ruộng bậc thang mùa lúa chín.",
      "amenities": [
        "View ruộng bậc thang",
        "Bữa sáng bản địa",
        "Wifi",
        "Phòng tắm nước nóng",
        "Trà shan tuyết cổ thụ"
      ]
    },
    {
      "id": "rm_hg_01_2",
      "hotelId": "htl_hg_01",
      "name": "Phòng Đơn VIP 2 Người Ở (VIP Mountain View)",
      "type": "Phòng VIP",
      "price": 650000,
      "originalPrice": 850000,
      "size": 28,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng núi rừng hùng vĩ",
      "totalRooms": 8,
      "available": true,
      "image": "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(5)_loai_phong_Phòng Đơn Vip 2 người ở.jpg",
      "gallery": [
        "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(5)_loai_phong_Phòng Đơn Vip 2 người ở.jpg"
      ],
      "description": "Phòng VIP thiết kế bằng gỗ thông thơm dịu, cửa sổ mở ra thung lũng mây bồng bềnh mỗi sớm mai.",
      "amenities": [
        "Ban công view núi",
        "Bữa sáng đặc sản",
        "Wifi",
        "Bình nóng lạnh",
        "Máy sấy tóc"
      ]
    },
    {
      "id": "rm_hg_01_3",
      "hotelId": "htl_hg_01",
      "name": "Phòng Đơn Thường 2 Người Ở (Standard Room)",
      "type": "Phòng Tiêu Chuẩn",
      "price": 480000,
      "originalPrice": 620000,
      "size": 22,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng sân vườn",
      "totalRooms": 10,
      "available": true,
      "image": "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(6)_loai_phong_Phòng Đơn thường 2 người ở.jpg",
      "gallery": [
        "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(6)_loai_phong_Phòng Đơn thường 2 người ở.jpg"
      ],
      "description": "Phòng tiêu chuẩn mộc mạc, sạch sẽ, giá cả cực kỳ hợp lý cho các phượt thủ chinh phục Hà Giang.",
      "amenities": [
        "Bữa sáng",
        "Wifi",
        "Bình nóng lạnh",
        "Chăn nệm ấm áp"
      ]
    },
    {
      "id": "rm_hg_02_1",
      "hotelId": "htl_hg_02",
      "name": "Phòng Đơn VIP 2 Người Ở (Deluxe Valley Suite)",
      "type": "Phòng Suite VIP",
      "price": 1450000,
      "originalPrice": 1850000,
      "size": 38,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng thung lũng đá",
      "totalRooms": 6,
      "available": true,
      "image": "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(4)_loai_phong_Phòng Đơn Vip 2 người ở.jpg",
      "gallery": [
        "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(4)_loai_phong_Phòng Đơn Vip 2 người ở.jpg"
      ],
      "description": "Phòng VIP cao cấp với nội thất mộc mạc thượng hạng, ban công ngắm nhìn trọn vẹn cao nguyên đá Đồng Văn.",
      "amenities": [
        "View thung lũng",
        "Bồn tắm đá tự nhiên",
        "Bữa sáng 5 sao",
        "Sưởi ấm phòng",
        "Smart TV"
      ]
    },
    {
      "id": "rm_hg_02_2",
      "hotelId": "htl_hg_02",
      "name": "Phòng Đơn VIP Ban Công Hướng Núi",
      "type": "Phòng VIP",
      "price": 1650000,
      "originalPrice": 2100000,
      "size": 42,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng núi cao ngút ngàn",
      "totalRooms": 6,
      "available": true,
      "image": "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(5)_loai_phong_Phòng Đơn Vip 2 người ở.jpg",
      "gallery": [
        "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(5)_loai_phong_Phòng Đơn Vip 2 người ở.jpg"
      ],
      "description": "Ban công riêng rộng mở đón mây trời, thưởng trà shan tuyết giữa không gian yên bình tuyệt đối.",
      "amenities": [
        "Ban công ngắm mây",
        "Bữa sáng cao cấp",
        "Wifi cáp quang",
        "Minibar",
        "Áo choàng lông cừu"
      ]
    },
    {
      "id": "rm_hg_02_3",
      "hotelId": "htl_hg_02",
      "name": "Phòng Đơn Thường 2 Người Ở (Standard Lodge)",
      "type": "Phòng Tiêu Chuẩn",
      "price": 980000,
      "originalPrice": 1250000,
      "size": 28,
      "bed": "1 Giường đôi",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng vườn đá",
      "totalRooms": 8,
      "available": true,
      "image": "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(6)_loai_phong_Phòng Đơn thường 2 người ở.jpg",
      "gallery": [
        "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(6)_loai_phong_Phòng Đơn thường 2 người ở.jpg"
      ],
      "description": "Phòng lodge tiêu chuẩn mang đậm phong cách kiến trúc đá vùng cao, tiện nghi ấm cúng và tinh tế.",
      "amenities": [
        "Bữa sáng",
        "Wifi",
        "Bình nóng lạnh",
        "Máy sấy tóc",
        "Trà & Cafe"
      ]
    },
    {
      "id": "rm_hg_02_4",
      "hotelId": "htl_hg_02",
      "name": "Phòng Deluxe Giường Đôi Tiêu Chuẩn",
      "type": "Phòng Deluxe",
      "price": 1150000,
      "originalPrice": 1480000,
      "size": 32,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng sân hoa tam giác mạch",
      "totalRooms": 8,
      "available": true,
      "image": "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(7)_loai_phong_Phòng Đơn thường  2 người ở.jpg",
      "gallery": [
        "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(7)_loai_phong_Phòng Đơn thường  2 người ở.jpg"
      ],
      "description": "Phòng Deluxe với cửa sổ hướng ra đồi hoa tam giác mạch, không gian thoáng đãng ngập tràn sắc hương.",
      "amenities": [
        "Bữa sáng buffet",
        "View hoa tam giác mạch",
        "Wifi",
        "Điều hòa 2 chiều",
        "Smart TV"
      ]
    },
    {
      "id": "rm_pq_01_1",
      "hotelId": "htl_pq_01",
      "name": "Deluxe Ocean View King Bed",
      "type": "Phòng Deluxe",
      "price": 2900000,
      "originalPrice": 3800000,
      "size": 46,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 2,
      "maxGuests": 2,
      "view": "Hướng biển Bãi Dài",
      "totalRooms": 20,
      "available": true,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
      ],
      "description": "Phòng Deluxe hướng biển riêng tư với ban công kính rộng ngắm hoàng hôn Phú Quốc.",
      "amenities": [
        "Bãi biển riêng",
        "Bữa sáng hải sản",
        "Hồ bơi vô cực",
        "Đưa đón sân bay"
      ]
    },
    {
      "id": "rm_nt_01_1",
      "hotelId": "htl_nt_01",
      "name": "Classic Ocean View King",
      "type": "Phòng Classic",
      "price": 2200000,
      "originalPrice": 2900000,
      "size": 43,
      "bed": "1 Giường King",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxGuests": 2,
      "view": "Hướng vịnh Nha Trang",
      "totalRooms": 15,
      "available": true,
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
      ],
      "description": "Phòng Classic ban công trực diện vịnh biển Nha Trang trong xanh.",
      "amenities": [
        "View biển trực diện",
        "Bữa sáng",
        "Hồ bơi 5 sao",
        "Wifi"
      ]
    },
    {
      "id": "room_htl_hp_01_01",
      "hotelId": "htl_hp_01",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Meliá Vinpearl Hải Phòng Rivera",
      "type": "deluxe",
      "price": 1850000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_hp_01_02",
      "hotelId": "htl_hp_01",
      "name": "Phòng Premier Executive Cao Cấp - Meliá Vinpearl Hải Phòng Rivera",
      "type": "suite",
      "price": 2682500,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_hp_01_03",
      "hotelId": "htl_hp_01",
      "name": "Biệt Thự / Family Suite Gia Đình - Meliá Vinpearl Hải Phòng Rivera",
      "type": "villa",
      "price": 3885000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_hp_02_01",
      "hotelId": "htl_hp_02",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Flamingo Cát Bà Beach Resort",
      "type": "deluxe",
      "price": 2200000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_hp_02_02",
      "hotelId": "htl_hp_02",
      "name": "Phòng Premier Executive Cao Cấp - Flamingo Cát Bà Beach Resort",
      "type": "suite",
      "price": 3190000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_hp_02_03",
      "hotelId": "htl_hp_02",
      "name": "Biệt Thự / Family Suite Gia Đình - Flamingo Cát Bà Beach Resort",
      "type": "villa",
      "price": 4620000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_hp_03_01",
      "hotelId": "htl_hp_03",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Cát Bà Eco Valley Homestay",
      "type": "deluxe",
      "price": 750000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_hp_03_02",
      "hotelId": "htl_hp_03",
      "name": "Phòng Premier Executive Cao Cấp - Cát Bà Eco Valley Homestay",
      "type": "suite",
      "price": 1087500,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_hp_03_03",
      "hotelId": "htl_hp_03",
      "name": "Biệt Thự / Family Suite Gia Đình - Cát Bà Eco Valley Homestay",
      "type": "villa",
      "price": 1575000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_qn_01_01",
      "hotelId": "htl_qn_01",
      "name": "Phòng Deluxe Hướng Cảnh Quan - FLC Grand Hotel Hạ Long",
      "type": "deluxe",
      "price": 2100000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_qn_01_02",
      "hotelId": "htl_qn_01",
      "name": "Phòng Premier Executive Cao Cấp - FLC Grand Hotel Hạ Long",
      "type": "suite",
      "price": 3045000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_qn_01_03",
      "hotelId": "htl_qn_01",
      "name": "Biệt Thự / Family Suite Gia Đình - FLC Grand Hotel Hạ Long",
      "type": "villa",
      "price": 4410000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_qn_02_01",
      "hotelId": "htl_qn_02",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Yoko Onsen Quang Hanh Resort",
      "type": "deluxe",
      "price": 3800000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_qn_02_02",
      "hotelId": "htl_qn_02",
      "name": "Phòng Premier Executive Cao Cấp - Yoko Onsen Quang Hanh Resort",
      "type": "suite",
      "price": 5510000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_qn_02_03",
      "hotelId": "htl_qn_02",
      "name": "Biệt Thự / Family Suite Gia Đình - Yoko Onsen Quang Hanh Resort",
      "type": "villa",
      "price": 7980000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_qn_03_01",
      "hotelId": "htl_qn_03",
      "name": "Phòng Deluxe Hướng Cảnh Quan - De LaSea Ha Long Hotel",
      "type": "deluxe",
      "price": 1150000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_qn_03_02",
      "hotelId": "htl_qn_03",
      "name": "Phòng Premier Executive Cao Cấp - De LaSea Ha Long Hotel",
      "type": "suite",
      "price": 1667500,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_qn_03_03",
      "hotelId": "htl_qn_03",
      "name": "Biệt Thự / Family Suite Gia Đình - De LaSea Ha Long Hotel",
      "type": "villa",
      "price": 2415000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_sp_01_01",
      "hotelId": "htl_sp_01",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Hotel de la Coupole - MGallery Sapa",
      "type": "deluxe",
      "price": 2950000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_sp_01_02",
      "hotelId": "htl_sp_01",
      "name": "Phòng Premier Executive Cao Cấp - Hotel de la Coupole - MGallery Sapa",
      "type": "suite",
      "price": 4277500,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_sp_01_03",
      "hotelId": "htl_sp_01",
      "name": "Biệt Thự / Family Suite Gia Đình - Hotel de la Coupole - MGallery Sapa",
      "type": "villa",
      "price": 6195000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_sp_02_01",
      "hotelId": "htl_sp_02",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Pao's Sapa Leisure Hotel",
      "type": "deluxe",
      "price": 1750000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_sp_02_02",
      "hotelId": "htl_sp_02",
      "name": "Phòng Premier Executive Cao Cấp - Pao's Sapa Leisure Hotel",
      "type": "suite",
      "price": 2537500,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_sp_02_03",
      "hotelId": "htl_sp_02",
      "name": "Biệt Thự / Family Suite Gia Đình - Pao's Sapa Leisure Hotel",
      "type": "villa",
      "price": 3675000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_sp_03_01",
      "hotelId": "htl_sp_03",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Eco Palms House - Sapa Retreat",
      "type": "deluxe",
      "price": 1450000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_sp_03_02",
      "hotelId": "htl_sp_03",
      "name": "Phòng Premier Executive Cao Cấp - Eco Palms House - Sapa Retreat",
      "type": "suite",
      "price": 2102500,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_sp_03_03",
      "hotelId": "htl_sp_03",
      "name": "Biệt Thự / Family Suite Gia Đình - Eco Palms House - Sapa Retreat",
      "type": "villa",
      "price": 3045000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_sp_04_01",
      "hotelId": "htl_sp_04",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Bamboo Sapa Hotel",
      "type": "deluxe",
      "price": 1250000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_sp_04_02",
      "hotelId": "htl_sp_04",
      "name": "Phòng Premier Executive Cao Cấp - Bamboo Sapa Hotel",
      "type": "suite",
      "price": 1812500,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_sp_04_03",
      "hotelId": "htl_sp_04",
      "name": "Biệt Thự / Family Suite Gia Đình - Bamboo Sapa Hotel",
      "type": "villa",
      "price": 2625000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_nb_01_01",
      "hotelId": "htl_nb_01",
      "name": "Phòng Deluxe Hướng Cảnh Quan - Emeralda Resort Ninh Bình",
      "type": "deluxe",
      "price": 2350000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 38,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet",
        "Wifi miễn phí",
        "Điều hòa 2 chiều",
        "Minibar",
        "Ban công ngắm cảnh",
        "Bồn tắm nằm"
      ],
      "description": "Không gian nghỉ ngơi ấm cúng, thiết kế tinh tế với tầm nhìn hướng vườn hoặc hướng đồi núi thoáng đạt."
    },
    {
      "id": "room_htl_nb_01_02",
      "hotelId": "htl_nb_01",
      "name": "Phòng Premier Executive Cao Cấp - Emeralda Resort Ninh Bình",
      "type": "suite",
      "price": 3407500,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 52,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Đưa đón sân bay",
        "Bồn tắm ngâm thảo mộc",
        "Trà & cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng hạng sang trên tầng cao sở hữu ban công riêng biệt với tầm nhìn toàn cảnh ngoạn mục."
    },
    {
      "id": "room_htl_nb_01_03",
      "hotelId": "htl_nb_01",
      "name": "Biệt Thự / Family Suite Gia Đình - Emeralda Resort Ninh Bình",
      "type": "villa",
      "price": 4935000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 85,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Phòng khách riêng biệt",
        "Bếp nhỏ & bàn ăn",
        "Hồ ngâm riêng",
        "Bữa sáng tại phòng",
        "Dịch vụ quản gia"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_res_01_01",
      "hotelId": "htl_res_01",
      "name": "Hạng Deluxe Cảnh Quan - Six Senses Ninh Van Bay Resort",
      "type": "deluxe",
      "price": 8500000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_res_01_02",
      "hotelId": "htl_res_01",
      "name": "Hạng Suite Executive / Ocean View - Six Senses Ninh Van Bay Resort",
      "type": "suite",
      "price": 11900000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_res_01_03",
      "hotelId": "htl_res_01",
      "name": "Biệt Thự / Grand Family Villa - Six Senses Ninh Van Bay Resort",
      "type": "villa",
      "price": 17000000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_res_02_01",
      "hotelId": "htl_res_02",
      "name": "Hạng Deluxe Cảnh Quan - Legacy Yên Tử - MGallery Resort",
      "type": "deluxe",
      "price": 2850000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_res_02_02",
      "hotelId": "htl_res_02",
      "name": "Hạng Suite Executive / Ocean View - Legacy Yên Tử - MGallery Resort",
      "type": "suite",
      "price": 3989999,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_res_02_03",
      "hotelId": "htl_res_02",
      "name": "Biệt Thự / Grand Family Villa - Legacy Yên Tử - MGallery Resort",
      "type": "villa",
      "price": 5700000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_res_03_01",
      "hotelId": "htl_res_03",
      "name": "Hạng Deluxe Cảnh Quan - Topas Ecolodge Sapa Resort",
      "type": "deluxe",
      "price": 4200000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_res_03_02",
      "hotelId": "htl_res_03",
      "name": "Hạng Suite Executive / Ocean View - Topas Ecolodge Sapa Resort",
      "type": "suite",
      "price": 5880000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_res_03_03",
      "hotelId": "htl_res_03",
      "name": "Biệt Thự / Grand Family Villa - Topas Ecolodge Sapa Resort",
      "type": "villa",
      "price": 8400000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_res_04_01",
      "hotelId": "htl_res_04",
      "name": "Hạng Deluxe Cảnh Quan - Naman Retreat Da Nang Resort",
      "type": "deluxe",
      "price": 3600000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_res_04_02",
      "hotelId": "htl_res_04",
      "name": "Hạng Suite Executive / Ocean View - Naman Retreat Da Nang Resort",
      "type": "suite",
      "price": 5040000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_res_04_03",
      "hotelId": "htl_res_04",
      "name": "Biệt Thự / Grand Family Villa - Naman Retreat Da Nang Resort",
      "type": "villa",
      "price": 7200000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_br_01_01",
      "hotelId": "htl_br_01",
      "name": "Hạng Deluxe Cảnh Quan - InterContinental Danang Sun Peninsula Resort",
      "type": "deluxe",
      "price": 9200000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_br_01_02",
      "hotelId": "htl_br_01",
      "name": "Hạng Suite Executive / Ocean View - InterContinental Danang Sun Peninsula Resort",
      "type": "suite",
      "price": 12880000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_br_01_03",
      "hotelId": "htl_br_01",
      "name": "Biệt Thự / Grand Family Villa - InterContinental Danang Sun Peninsula Resort",
      "type": "villa",
      "price": 18400000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_br_02_01",
      "hotelId": "htl_br_02",
      "name": "Hạng Deluxe Cảnh Quan - JW Marriott Phu Quoc Emerald Bay Resort",
      "type": "deluxe",
      "price": 6800000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_br_02_02",
      "hotelId": "htl_br_02",
      "name": "Hạng Suite Executive / Ocean View - JW Marriott Phu Quoc Emerald Bay Resort",
      "type": "suite",
      "price": 9520000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_br_02_03",
      "hotelId": "htl_br_02",
      "name": "Biệt Thự / Grand Family Villa - JW Marriott Phu Quoc Emerald Bay Resort",
      "type": "villa",
      "price": 13600000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_br_03_01",
      "hotelId": "htl_br_03",
      "name": "Hạng Deluxe Cảnh Quan - Mia Resort Nha Trang",
      "type": "deluxe",
      "price": 3400000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_br_03_02",
      "hotelId": "htl_br_03",
      "name": "Hạng Suite Executive / Ocean View - Mia Resort Nha Trang",
      "type": "suite",
      "price": 4760000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_br_03_03",
      "hotelId": "htl_br_03",
      "name": "Biệt Thự / Grand Family Villa - Mia Resort Nha Trang",
      "type": "villa",
      "price": 6800000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_br_04_01",
      "hotelId": "htl_br_04",
      "name": "Hạng Deluxe Cảnh Quan - Premier Village Danang Resort",
      "type": "deluxe",
      "price": 5500000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_br_04_02",
      "hotelId": "htl_br_04",
      "name": "Hạng Suite Executive / Ocean View - Premier Village Danang Resort",
      "type": "suite",
      "price": 7699999,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_br_04_03",
      "hotelId": "htl_br_04",
      "name": "Biệt Thự / Grand Family Villa - Premier Village Danang Resort",
      "type": "villa",
      "price": 11000000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_vil_01_01",
      "hotelId": "htl_vil_01",
      "name": "Hạng Deluxe Cảnh Quan - Ana Mandara Villas Dalat Resort & Spa",
      "type": "deluxe",
      "price": 2600000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_vil_01_02",
      "hotelId": "htl_vil_01",
      "name": "Hạng Suite Executive / Ocean View - Ana Mandara Villas Dalat Resort & Spa",
      "type": "suite",
      "price": 3640000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_vil_01_03",
      "hotelId": "htl_vil_01",
      "name": "Biệt Thự / Grand Family Villa - Ana Mandara Villas Dalat Resort & Spa",
      "type": "villa",
      "price": 5200000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_vil_02_01",
      "hotelId": "htl_vil_02",
      "name": "Hạng Deluxe Cảnh Quan - Vinpearl Discovery Coastalland Villas Phú Quốc",
      "type": "deluxe",
      "price": 4500000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_vil_02_02",
      "hotelId": "htl_vil_02",
      "name": "Hạng Suite Executive / Ocean View - Vinpearl Discovery Coastalland Villas Phú Quốc",
      "type": "suite",
      "price": 6300000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_vil_02_03",
      "hotelId": "htl_vil_02",
      "name": "Biệt Thự / Grand Family Villa - Vinpearl Discovery Coastalland Villas Phú Quốc",
      "type": "villa",
      "price": 9000000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_vil_03_01",
      "hotelId": "htl_vil_03",
      "name": "Hạng Deluxe Cảnh Quan - Saint Simeon Resort & Spa Sanctuary Villa",
      "type": "deluxe",
      "price": 3100000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_vil_03_02",
      "hotelId": "htl_vil_03",
      "name": "Hạng Suite Executive / Ocean View - Saint Simeon Resort & Spa Sanctuary Villa",
      "type": "suite",
      "price": 4340000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_vil_03_03",
      "hotelId": "htl_vil_03",
      "name": "Biệt Thự / Grand Family Villa - Saint Simeon Resort & Spa Sanctuary Villa",
      "type": "villa",
      "price": 6200000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_vil_04_01",
      "hotelId": "htl_vil_04",
      "name": "Hạng Deluxe Cảnh Quan - Sapa CatCat Hill Resort & Villa",
      "type": "deluxe",
      "price": 1950000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_vil_04_02",
      "hotelId": "htl_vil_04",
      "name": "Hạng Suite Executive / Ocean View - Sapa CatCat Hill Resort & Villa",
      "type": "suite",
      "price": 2730000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_vil_04_03",
      "hotelId": "htl_vil_04",
      "name": "Biệt Thự / Grand Family Villa - Sapa CatCat Hill Resort & Villa",
      "type": "villa",
      "price": 3900000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_hs_01_01",
      "hotelId": "htl_hs_01",
      "name": "Hạng Deluxe Cảnh Quan - Lá Đỏ Homestay & Coffee Sapa",
      "type": "deluxe",
      "price": 650000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_hs_01_02",
      "hotelId": "htl_hs_01",
      "name": "Hạng Suite Executive / Ocean View - Lá Đỏ Homestay & Coffee Sapa",
      "type": "suite",
      "price": 910000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_hs_01_03",
      "hotelId": "htl_hs_01",
      "name": "Biệt Thự / Grand Family Villa - Lá Đỏ Homestay & Coffee Sapa",
      "type": "villa",
      "price": 1300000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_hs_02_01",
      "hotelId": "htl_hs_02",
      "name": "Hạng Deluxe Cảnh Quan - The Wilder-nest Homestay Đà Lạt",
      "type": "deluxe",
      "price": 850000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_hs_02_02",
      "hotelId": "htl_hs_02",
      "name": "Hạng Suite Executive / Ocean View - The Wilder-nest Homestay Đà Lạt",
      "type": "suite",
      "price": 1190000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_hs_02_03",
      "hotelId": "htl_hs_02",
      "name": "Biệt Thự / Grand Family Villa - The Wilder-nest Homestay Đà Lạt",
      "type": "villa",
      "price": 1700000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_hs_03_01",
      "hotelId": "htl_hs_03",
      "name": "Hạng Deluxe Cảnh Quan - Tràng An Lotus Homestay Ninh Bình",
      "type": "deluxe",
      "price": 550000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_hs_03_02",
      "hotelId": "htl_hs_03",
      "name": "Hạng Suite Executive / Ocean View - Tràng An Lotus Homestay Ninh Bình",
      "type": "suite",
      "price": 770000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_hs_03_03",
      "hotelId": "htl_hs_03",
      "name": "Biệt Thự / Grand Family Villa - Tràng An Lotus Homestay Ninh Bình",
      "type": "villa",
      "price": 1100000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_hs_04_01",
      "hotelId": "htl_hs_04",
      "name": "Hạng Deluxe Cảnh Quan - Cát Bà Rustic Valley Homestay",
      "type": "deluxe",
      "price": 600000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_hs_04_02",
      "hotelId": "htl_hs_04",
      "name": "Hạng Suite Executive / Ocean View - Cát Bà Rustic Valley Homestay",
      "type": "suite",
      "price": 840000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_hs_04_03",
      "hotelId": "htl_hs_04",
      "name": "Biệt Thự / Grand Family Villa - Cát Bà Rustic Valley Homestay",
      "type": "villa",
      "price": 1200000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_apt_01_01",
      "hotelId": "htl_apt_01",
      "name": "Hạng Deluxe Cảnh Quan - Altara Suites by Ri-Yaz Luxury Apartment",
      "type": "deluxe",
      "price": 1650000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_apt_01_02",
      "hotelId": "htl_apt_01",
      "name": "Hạng Suite Executive / Ocean View - Altara Suites by Ri-Yaz Luxury Apartment",
      "type": "suite",
      "price": 2310000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_apt_01_03",
      "hotelId": "htl_apt_01",
      "name": "Biệt Thự / Grand Family Villa - Altara Suites by Ri-Yaz Luxury Apartment",
      "type": "villa",
      "price": 3300000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_apt_02_01",
      "hotelId": "htl_apt_02",
      "name": "Hạng Deluxe Cảnh Quan - The Five Residences Hanoi Apartment",
      "type": "deluxe",
      "price": 2200000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_apt_02_02",
      "hotelId": "htl_apt_02",
      "name": "Hạng Suite Executive / Ocean View - The Five Residences Hanoi Apartment",
      "type": "suite",
      "price": 3080000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_apt_02_03",
      "hotelId": "htl_apt_02",
      "name": "Biệt Thự / Grand Family Villa - The Five Residences Hanoi Apartment",
      "type": "villa",
      "price": 4400000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_apt_03_01",
      "hotelId": "htl_apt_03",
      "name": "Hạng Deluxe Cảnh Quan - Oyster Gành Hào Condotel Apartment",
      "type": "deluxe",
      "price": 1100000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_apt_03_02",
      "hotelId": "htl_apt_03",
      "name": "Hạng Suite Executive / Ocean View - Oyster Gành Hào Condotel Apartment",
      "type": "suite",
      "price": 1540000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_apt_03_03",
      "hotelId": "htl_apt_03",
      "name": "Biệt Thự / Grand Family Villa - Oyster Gành Hào Condotel Apartment",
      "type": "villa",
      "price": 2200000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_htl_apt_04_01",
      "hotelId": "htl_apt_04",
      "name": "Hạng Deluxe Cảnh Quan - The Arena Cam Ranh Beachfront Apartment",
      "type": "deluxe",
      "price": 950000,
      "capacityAdults": 2,
      "capacityChildren": 1,
      "size": 42,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "quantity": 10,
      "totalRooms": 10,
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng buffet cao cấp",
        "Wifi tốc độ cao",
        "Điều hòa 2 chiều",
        "Minibar miễn phí",
        "Ban công ngắm cảnh",
        "Bồn tắm ngâm thư giãn"
      ],
      "description": "Không gian nghỉ dưỡng ấm cúng, nội thất sang trọng với tầm nhìn hướng vườn hoặc hướng biển thoáng đạt."
    },
    {
      "id": "room_htl_apt_04_02",
      "hotelId": "htl_apt_04",
      "name": "Hạng Suite Executive / Ocean View - The Arena Cam Ranh Beachfront Apartment",
      "type": "suite",
      "price": 1330000,
      "capacityAdults": 2,
      "capacityChildren": 2,
      "size": 65,
      "bed": "1 Giường Super King Cỡ Lớn",
      "quantity": 8,
      "totalRooms": 8,
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bữa sáng tại phòng hoặc buffet",
        "Đưa đón sân bay",
        "Bồn sục Jacuzzi",
        "Máy pha cafe Nespresso",
        "Quyền vào Lounge riêng"
      ],
      "description": "Phòng nghỉ cao cấp sở hữu ban công rộng mở với tầm nhìn toàn cảnh thiên nhiên tuyệt mỹ."
    },
    {
      "id": "room_htl_apt_04_03",
      "hotelId": "htl_apt_04",
      "name": "Biệt Thự / Grand Family Villa - The Arena Cam Ranh Beachfront Apartment",
      "type": "villa",
      "price": 1900000,
      "capacityAdults": 4,
      "capacityChildren": 2,
      "size": 110,
      "bed": "2 Giường King Riêng Biệt",
      "quantity": 6,
      "totalRooms": 6,
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi riêng biệt",
        "Phòng khách & Bếp tiện nghi",
        "Dịch vụ quản gia",
        "Tiệc nướng BBQ tại vườn",
        "Miễn phí giặt ủi"
      ],
      "description": "Không gian đẳng cấp dành cho cả gia đình hoặc nhóm bạn tận hưởng trọn vẹn kỳ nghỉ riêng tư tuyệt đối."
    },
    {
      "id": "room_namhai_01",
      "hotelId": "htl_hoian_01",
      "name": "Biệt thự 1 Phòng Ngủ Hướng Biển (One-Bedroom Oceanfront Villa)",
      "type": "Biệt thự biển",
      "price": 8500000,
      "quantity": 6,
      "availableCount": 6,
      "size": 80,
      "bed": "1 Giường King cỡ lớn",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "view": "Trực diện biển Hà My",
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Bồn tắm ngâm chìm",
        "Vòi sen ngoài trời",
        "Hồ sen riêng tư",
        "Máy pha cafe Espresso",
        "Bose Sound System",
        "Ăn sáng thượng hạng"
      ],
      "description": "Biệt thự thiết kế theo triết lý phong thủy truyền thống, bồn tắm viền lụa và hiên tắm nắng hướng thẳng ra biển Đông cát trắng."
    },
    {
      "id": "room_namhai_02",
      "hotelId": "htl_hoian_01",
      "name": "Biệt thự Hồ Bơi Riêng Bên Bờ Biển (One-Bedroom Pool Villa)",
      "type": "Biệt thự hồ bơi",
      "price": 14500000,
      "quantity": 4,
      "availableCount": 4,
      "size": 125,
      "bed": "1 Giường King siêu lớn",
      "capacityAdults": 2,
      "capacityChildren": 2,
      "view": "Hồ bơi riêng & Biển xanh",
      "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Hồ bơi nước ấm riêng",
        "Quản gia phục vụ 24/7",
        "Bồn tắm đá hoa cương",
        "Bữa sáng nổi trên hồ bơi",
        "Dịch vụ Spa tại phòng",
        "Rượu vang chào mừng"
      ],
      "description": "Trải nghiệm đỉnh cao nghỉ dưỡng với hồ bơi nhiệt đới riêng tư, sân tắm nắng cỏ xanh và dịch vụ quản gia cá nhân chu đáo."
    },
    {
      "id": "room_anantara_01",
      "hotelId": "htl_hoian_02",
      "name": "Phòng Deluxe Hướng Sông Thu Bồn (Deluxe River View Room)",
      "type": "Phòng Deluxe",
      "price": 4200000,
      "quantity": 8,
      "availableCount": 8,
      "size": 52,
      "bed": "1 Giường King hoặc 2 Giường Đơn",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "view": "Toàn cảnh sông Thu Bồn",
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Ban công ngắm hoàng hôn sông",
        "Ghế sofa nghỉ dài",
        "Bồn tắm sâu",
        "Áo choàng lụa truyền thống",
        "Wifi tốc độ cao",
        "Buffet sáng"
      ],
      "description": "Không gian nghỉ dưỡng tinh tế với ban công nhìn ra thuyền bè tấp nập trên dòng sông Thu Bồn thơ mộng."
    },
    {
      "id": "room_silkpath_01",
      "hotelId": "htl_hue_01",
      "name": "Phòng Classic Cung Đình (Classic King Room)",
      "type": "Phòng Tiêu Chuẩn 5★",
      "price": 2600000,
      "quantity": 10,
      "availableCount": 10,
      "size": 42,
      "bed": "1 Giường King hoàng gia",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "view": "Thành phố & Cố đô",
      "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "amenities": [
        "Họa tiết cung đình thêu tay",
        "Bồn tắm nằm cao cấp",
        "Smart TV 55 inch",
        "Bàn làm việc quý tộc",
        "Miễn phí trà Cung Đình",
        "Bữa sáng"
      ],
      "description": "Nội thất sang trọng mang âm hưởng hoàng gia Huế thế kỷ 19, tạo cảm giác thư thái và quý phái trong từng chi tiết."
    }
  ],
  "users": [
    {
      "id": "usr_001",
      "name": "Ông Kim",
      "email": "admin@hotelbooking.vn",
      "password": "admin123",
      "role": "ADMIN",
      "phone": "0345662169",
      "avatar": "",
      "status": "active",
      "bookingCount": 0,
      "createdAt": "2026-01-01"
    },
    {
      "id": "usr_002",
      "name": "Nhân Viên Tiếp Tân",
      "email": "staff@hotelbooking.vn",
      "password": "staff123",
      "role": "STAFF",
      "phone": "0987654321",
      "avatar": "",
      "status": "active",
      "bookingCount": 0,
      "createdAt": "2026-01-01"
    },
    {
      "id": "usr_003",
      "name": "Khách Hàng Thân Thiết",
      "email": "khachhang@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0912345678",
      "avatar": "",
      "status": "active",
      "bookingCount": 3,
      "createdAt": "2026-01-01"
    },
    {
      "id": "usr_010",
      "name": "Nguyễn Văn An",
      "email": "khach_usr_010@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0946398625",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_011",
      "name": "Trần Thị Bình",
      "email": "khach_usr_011@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0979218844",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_012",
      "name": "Lê Hồng Cường",
      "email": "khach_usr_012@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0944372302",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_013",
      "name": "Phạm Minh Dũng",
      "email": "khach_usr_013@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0924958429",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_014",
      "name": "Hoàng Đức Hương",
      "email": "khach_usr_014@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0921038262",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_015",
      "name": "Huỳnh Thanh Giang",
      "email": "khach_usr_015@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0914477508",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_016",
      "name": "Phan Quốc Hà",
      "email": "khach_usr_016@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0941252756",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_017",
      "name": "Vũ Hải Khoa",
      "email": "khach_usr_017@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0993903737",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_018",
      "name": "Võ Tuấn Linh",
      "email": "khach_usr_018@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0913157604",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_019",
      "name": "Đặng Ngọc Minh",
      "email": "khach_usr_019@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0933861341",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_020",
      "name": "Bùi Anh Nam",
      "email": "khach_usr_020@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0921968302",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_021",
      "name": "Đỗ Hoàng Oanh",
      "email": "khach_usr_021@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0933688151",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_022",
      "name": "Hồ Gia Phúc",
      "email": "khach_usr_022@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0912619992",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_023",
      "name": "Ngô Kim Quang",
      "email": "khach_usr_023@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0989779454",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_024",
      "name": "Dương Bảo Sơn",
      "email": "khach_usr_024@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0972103660",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_025",
      "name": "Lý Phương Tâm",
      "email": "khach_usr_025@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0917772143",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_026",
      "name": "Đinh Khánh Uyên",
      "email": "khach_usr_026@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0991897191",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_027",
      "name": "Đoàn Thu Vinh",
      "email": "khach_usr_027@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0939059148",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_028",
      "name": "Lâm Xuân Yến",
      "email": "khach_usr_028@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0916807419",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_029",
      "name": "Trịnh Thùy Trang",
      "email": "khach_usr_029@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0973668872",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_030",
      "name": "Mai Mỹ Thảo",
      "email": "khach_usr_030@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0992752695",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_031",
      "name": "Đào Bích Hùng",
      "email": "khach_usr_031@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0950399670",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_032",
      "name": "Cao Ánh Tú",
      "email": "khach_usr_032@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0914191658",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_033",
      "name": "Hà Thuý Thắng",
      "email": "khach_usr_033@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0988950581",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_034",
      "name": "Chu Văn Lan",
      "email": "khach_usr_034@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0975333272",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_035",
      "name": "Tạ Thị Vy",
      "email": "khach_usr_035@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0971319428",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_036",
      "name": "Quách Hồng Hằng",
      "email": "khach_usr_036@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0989747032",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_037",
      "name": "Lương Minh Long",
      "email": "khach_usr_037@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0941114914",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_038",
      "name": "Thái Đức Đạt",
      "email": "khach_usr_038@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0964009244",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_039",
      "name": "Phùng Thanh Kiên",
      "email": "khach_usr_039@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0967018153",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_040",
      "name": "Nguyễn Quốc Hiếu",
      "email": "khach_usr_040@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0910519635",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_041",
      "name": "Trần Hải Tùng",
      "email": "khach_usr_041@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0959674139",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_042",
      "name": "Lê Tuấn Nhật",
      "email": "khach_usr_042@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0952651380",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_043",
      "name": "Phạm Ngọc Bảo",
      "email": "khach_usr_043@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0990521555",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_044",
      "name": "Hoàng Anh Trúc",
      "email": "khach_usr_044@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0920447927",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_045",
      "name": "Huỳnh Hoàng Khôi",
      "email": "khach_usr_045@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0958694791",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_046",
      "name": "Phan Gia Nguyên",
      "email": "khach_usr_046@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0921879727",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_047",
      "name": "Vũ Kim Vũ",
      "email": "khach_usr_047@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0948476510",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_048",
      "name": "Võ Bảo Châu",
      "email": "khach_usr_048@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0989233778",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_049",
      "name": "Đặng Phương Duyên",
      "email": "khach_usr_049@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0974990973",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_050",
      "name": "Bùi Khánh Phương",
      "email": "khach_usr_050@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0944438891",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_051",
      "name": "Đỗ Thu Tiến",
      "email": "khach_usr_051@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0942008101",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_052",
      "name": "Hồ Xuân An",
      "email": "khach_usr_052@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0921301870",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_053",
      "name": "Ngô Thùy Bình",
      "email": "khach_usr_053@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0984184605",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_054",
      "name": "Dương Mỹ Cường",
      "email": "khach_usr_054@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0981875159",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_055",
      "name": "Lý Bích Dũng",
      "email": "khach_usr_055@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0983340408",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_056",
      "name": "Đinh Ánh Hương",
      "email": "khach_usr_056@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0997305558",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_057",
      "name": "Đoàn Thuý Giang",
      "email": "khach_usr_057@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0981885712",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_058",
      "name": "Lâm Văn Hà",
      "email": "khach_usr_058@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0917286192",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_059",
      "name": "Trịnh Thị Khoa",
      "email": "khach_usr_059@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0950441777",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_060",
      "name": "Mai Hồng Linh",
      "email": "khach_usr_060@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0929906878",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_061",
      "name": "Đào Minh Minh",
      "email": "khach_usr_061@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0971454291",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_062",
      "name": "Cao Đức Nam",
      "email": "khach_usr_062@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0928932649",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_063",
      "name": "Hà Thanh Oanh",
      "email": "khach_usr_063@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0936991324",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_064",
      "name": "Chu Quốc Phúc",
      "email": "khach_usr_064@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0986247163",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_065",
      "name": "Tạ Hải Quang",
      "email": "khach_usr_065@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0929905337",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_066",
      "name": "Quách Tuấn Sơn",
      "email": "khach_usr_066@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0924620184",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_067",
      "name": "Lương Ngọc Tâm",
      "email": "khach_usr_067@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0974925139",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_068",
      "name": "Thái Anh Uyên",
      "email": "khach_usr_068@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0921973877",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_069",
      "name": "Phùng Hoàng Vinh",
      "email": "khach_usr_069@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0939425638",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_070",
      "name": "Nguyễn Gia Yến",
      "email": "khach_usr_070@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0936669689",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_071",
      "name": "Trần Kim Trang",
      "email": "khach_usr_071@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0930622195",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_072",
      "name": "Lê Bảo Thảo",
      "email": "khach_usr_072@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0954856351",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_073",
      "name": "Phạm Phương Hùng",
      "email": "khach_usr_073@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0974814937",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_074",
      "name": "Hoàng Khánh Tú",
      "email": "khach_usr_074@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0946317513",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_075",
      "name": "Huỳnh Thu Thắng",
      "email": "khach_usr_075@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0914041395",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_076",
      "name": "Phan Xuân Lan",
      "email": "khach_usr_076@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0938729529",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_077",
      "name": "Vũ Thùy Vy",
      "email": "khach_usr_077@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0950971580",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_078",
      "name": "Võ Mỹ Hằng",
      "email": "khach_usr_078@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0993324568",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_079",
      "name": "Đặng Bích Long",
      "email": "khach_usr_079@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0957237240",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_080",
      "name": "Bùi Ánh Đạt",
      "email": "khach_usr_080@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0933361836",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_081",
      "name": "Đỗ Thuý Kiên",
      "email": "khach_usr_081@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0984039780",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_082",
      "name": "Hồ Văn Hiếu",
      "email": "khach_usr_082@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0940638616",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_083",
      "name": "Ngô Thị Tùng",
      "email": "khach_usr_083@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0922728160",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_084",
      "name": "Dương Hồng Nhật",
      "email": "khach_usr_084@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0979617763",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_085",
      "name": "Lý Minh Bảo",
      "email": "khach_usr_085@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0987051509",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_086",
      "name": "Đinh Đức Trúc",
      "email": "khach_usr_086@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0953018508",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_087",
      "name": "Đoàn Thanh Khôi",
      "email": "khach_usr_087@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0914578766",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_088",
      "name": "Lâm Quốc Nguyên",
      "email": "khach_usr_088@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0983229722",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_089",
      "name": "Trịnh Hải Vũ",
      "email": "khach_usr_089@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0929703495",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_090",
      "name": "Mai Tuấn Châu",
      "email": "khach_usr_090@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0919269723",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-10"
    },
    {
      "id": "usr_200",
      "name": "Nguyễn Văn An",
      "email": "khach_usr_200@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0937692000",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_201",
      "name": "Trần Thị Bình",
      "email": "khach_usr_201@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0943457658",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_202",
      "name": "Lê Hồng Cường",
      "email": "khach_usr_202@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0970348111",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_203",
      "name": "Phạm Minh Dũng",
      "email": "khach_usr_203@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0961494839",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_204",
      "name": "Hoàng Đức Hương",
      "email": "khach_usr_204@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0971497960",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_205",
      "name": "Huỳnh Thanh Giang",
      "email": "khach_usr_205@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0959960742",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_206",
      "name": "Phan Quốc Hà",
      "email": "khach_usr_206@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0912711512",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_207",
      "name": "Vũ Hải Khoa",
      "email": "khach_usr_207@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0951261388",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_208",
      "name": "Võ Tuấn Linh",
      "email": "khach_usr_208@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0946861607",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_209",
      "name": "Đặng Ngọc Minh",
      "email": "khach_usr_209@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0923775823",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_210",
      "name": "Bùi Anh Nam",
      "email": "khach_usr_210@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0955995431",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_211",
      "name": "Đỗ Hoàng Oanh",
      "email": "khach_usr_211@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0963091354",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_212",
      "name": "Hồ Gia Phúc",
      "email": "khach_usr_212@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0962754786",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_213",
      "name": "Ngô Kim Quang",
      "email": "khach_usr_213@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0961934577",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_214",
      "name": "Dương Bảo Sơn",
      "email": "khach_usr_214@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0923358033",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_215",
      "name": "Lý Phương Tâm",
      "email": "khach_usr_215@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0998369049",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_216",
      "name": "Đinh Khánh Uyên",
      "email": "khach_usr_216@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0990551846",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_217",
      "name": "Đoàn Thu Vinh",
      "email": "khach_usr_217@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0972593344",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_218",
      "name": "Lâm Xuân Yến",
      "email": "khach_usr_218@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0946979921",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_219",
      "name": "Trịnh Thùy Trang",
      "email": "khach_usr_219@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0964434343",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_220",
      "name": "Mai Mỹ Thảo",
      "email": "khach_usr_220@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0911626701",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_221",
      "name": "Đào Bích Hùng",
      "email": "khach_usr_221@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0948275722",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_222",
      "name": "Cao Ánh Tú",
      "email": "khach_usr_222@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0978097584",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_223",
      "name": "Hà Thuý Thắng",
      "email": "khach_usr_223@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0938396047",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_224",
      "name": "Chu Văn Lan",
      "email": "khach_usr_224@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0921884619",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_225",
      "name": "Tạ Thị Vy",
      "email": "khach_usr_225@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0964533541",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_226",
      "name": "Quách Hồng Hằng",
      "email": "khach_usr_226@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0942154503",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_227",
      "name": "Lương Minh Long",
      "email": "khach_usr_227@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0932484709",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_228",
      "name": "Thái Đức Đạt",
      "email": "khach_usr_228@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0948407678",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_229",
      "name": "Phùng Thanh Kiên",
      "email": "khach_usr_229@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0948515316",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_230",
      "name": "Nguyễn Quốc Hiếu",
      "email": "khach_usr_230@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0938393327",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_231",
      "name": "Trần Hải Tùng",
      "email": "khach_usr_231@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0924886086",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_232",
      "name": "Lê Tuấn Nhật",
      "email": "khach_usr_232@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0979144671",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_233",
      "name": "Phạm Ngọc Bảo",
      "email": "khach_usr_233@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0932343534",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_234",
      "name": "Hoàng Anh Trúc",
      "email": "khach_usr_234@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0983423354",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_235",
      "name": "Huỳnh Hoàng Khôi",
      "email": "khach_usr_235@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0997498474",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_236",
      "name": "Phan Gia Nguyên",
      "email": "khach_usr_236@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0983255067",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_237",
      "name": "Vũ Kim Vũ",
      "email": "khach_usr_237@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0997564355",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_238",
      "name": "Võ Bảo Châu",
      "email": "khach_usr_238@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0953675818",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_239",
      "name": "Đặng Phương Duyên",
      "email": "khach_usr_239@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0945771973",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_240",
      "name": "Bùi Khánh Phương",
      "email": "khach_usr_240@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0956963534",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_241",
      "name": "Đỗ Thu Tiến",
      "email": "khach_usr_241@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0939392769",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_242",
      "name": "Hồ Xuân An",
      "email": "khach_usr_242@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0913503173",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_243",
      "name": "Ngô Thùy Bình",
      "email": "khach_usr_243@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0985050675",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_244",
      "name": "Dương Mỹ Cường",
      "email": "khach_usr_244@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0937429958",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_245",
      "name": "Lý Bích Dũng",
      "email": "khach_usr_245@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0946006064",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_246",
      "name": "Đinh Ánh Hương",
      "email": "khach_usr_246@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0972141605",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_247",
      "name": "Đoàn Thuý Giang",
      "email": "khach_usr_247@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0978744843",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_248",
      "name": "Lâm Văn Hà",
      "email": "khach_usr_248@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0975143754",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_249",
      "name": "Trịnh Thị Khoa",
      "email": "khach_usr_249@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0930206621",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_250",
      "name": "Mai Hồng Linh",
      "email": "khach_usr_250@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0988115318",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_251",
      "name": "Đào Minh Minh",
      "email": "khach_usr_251@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0971550523",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_252",
      "name": "Cao Đức Nam",
      "email": "khach_usr_252@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0931782281",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_253",
      "name": "Hà Thanh Oanh",
      "email": "khach_usr_253@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0913217024",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_254",
      "name": "Chu Quốc Phúc",
      "email": "khach_usr_254@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0921947716",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_255",
      "name": "Tạ Hải Quang",
      "email": "khach_usr_255@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0955423831",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_256",
      "name": "Quách Tuấn Sơn",
      "email": "khach_usr_256@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0935754939",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_257",
      "name": "Lương Ngọc Tâm",
      "email": "khach_usr_257@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0958931598",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_258",
      "name": "Thái Anh Uyên",
      "email": "khach_usr_258@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0983533778",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_259",
      "name": "Phùng Hoàng Vinh",
      "email": "khach_usr_259@gmail.com",
      "password": "user123",
      "role": "CUSTOMER",
      "phone": "0939555856",
      "avatar": "",
      "status": "active",
      "bookingCount": 1,
      "createdAt": "2026-08-15"
    },
    {
      "id": "usr_hoian_01",
      "name": "Trần Diệu Hương",
      "email": "dieu.huong.hoian@gmail.com",
      "phone": "0918823456",
      "role": "CUSTOMER",
      "status": "active",
      "bookingCount": 2,
      "avatar": "",
      "createdAt": "2026-08-01"
    },
    {
      "id": "usr_hoian_02",
      "name": "Lê Quang Khải",
      "email": "quang.khai.resort@gmail.com",
      "phone": "0982345671",
      "role": "CUSTOMER",
      "status": "active",
      "bookingCount": 1,
      "avatar": "",
      "createdAt": "2026-08-05"
    },
    {
      "id": "usr_hue_01",
      "name": "Ngô Bích Ngọc",
      "email": "bich.ngoc.hue@gmail.com",
      "phone": "0909456782",
      "role": "CUSTOMER",
      "status": "active",
      "bookingCount": 3,
      "avatar": "",
      "createdAt": "2026-08-10"
    }
  ],
  "reviews": [
    {
      "id": "rev_001",
      "hotelId": "htl_dn_01",
      "hotelName": "Khách sạn Mường Thanh Luxury Đà Nẵng",
      "userId": "usr_010",
      "userName": "Nguyễn Văn An",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(1).jpg"
      ]
    },
    {
      "id": "rev_002",
      "hotelId": "htl_dn_01",
      "hotelName": "Khách sạn Mường Thanh Luxury Đà Nẵng",
      "userId": "usr_011",
      "userName": "Trần Thị Bình",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_003",
      "hotelId": "htl_dn_01",
      "hotelName": "Khách sạn Mường Thanh Luxury Đà Nẵng",
      "userId": "usr_012",
      "userName": "Lê Hồng Cường",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_004",
      "hotelId": "htl_dn_02",
      "hotelName": "Khách sạn Royal Beach Đà Nẵng",
      "userId": "usr_013",
      "userName": "Phạm Minh Dũng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(1).jpg"
      ]
    },
    {
      "id": "rev_005",
      "hotelId": "htl_dn_02",
      "hotelName": "Khách sạn Royal Beach Đà Nẵng",
      "userId": "usr_014",
      "userName": "Hoàng Đức Hương",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_006",
      "hotelId": "htl_dn_02",
      "hotelName": "Khách sạn Royal Beach Đà Nẵng",
      "userId": "usr_015",
      "userName": "Huỳnh Thanh Giang",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_007",
      "hotelId": "htl_dn_03",
      "hotelName": "Khách sạn Sunrise Riverview Đà Nẵng",
      "userId": "usr_016",
      "userName": "Phan Quốc Hà",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Đà Nẵng/Khách sạn Sunrise Riverview (Sunrise Riverview Hotel)_Đà_Nẵng(1).jpg"
      ]
    },
    {
      "id": "rev_008",
      "hotelId": "htl_dn_03",
      "hotelName": "Khách sạn Sunrise Riverview Đà Nẵng",
      "userId": "usr_017",
      "userName": "Vũ Hải Khoa",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_009",
      "hotelId": "htl_dn_03",
      "hotelName": "Khách sạn Sunrise Riverview Đà Nẵng",
      "userId": "usr_018",
      "userName": "Võ Tuấn Linh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_010",
      "hotelId": "htl_dn_04",
      "hotelName": "MoonLight Hotel Đà Nẵng",
      "userId": "usr_019",
      "userName": "Đặng Ngọc Minh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Đà Nẵng/MoonLight_Hotel_Đà_Nẵng(1).jpg"
      ]
    },
    {
      "id": "rev_011",
      "hotelId": "htl_dn_04",
      "hotelName": "MoonLight Hotel Đà Nẵng",
      "userId": "usr_020",
      "userName": "Bùi Anh Nam",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_012",
      "hotelId": "htl_dn_04",
      "hotelName": "MoonLight Hotel Đà Nẵng",
      "userId": "usr_021",
      "userName": "Đỗ Hoàng Oanh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_013",
      "hotelId": "htl_hn_01",
      "hotelName": "Le Grand Hanoi Hotel - The Oriental",
      "userId": "usr_022",
      "userName": "Hồ Gia Phúc",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(1).jpg"
      ]
    },
    {
      "id": "rev_014",
      "hotelId": "htl_hn_01",
      "hotelName": "Le Grand Hanoi Hotel - The Oriental",
      "userId": "usr_023",
      "userName": "Ngô Kim Quang",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_015",
      "hotelId": "htl_hn_01",
      "hotelName": "Le Grand Hanoi Hotel - The Oriental",
      "userId": "usr_024",
      "userName": "Dương Bảo Sơn",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_016",
      "hotelId": "htl_hn_02",
      "hotelName": "Melon Hotel Tố Hữu",
      "userId": "usr_025",
      "userName": "Lý Phương Tâm",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Hà Nội/Melon Hotel To Huu(1).jpg"
      ]
    },
    {
      "id": "rev_017",
      "hotelId": "htl_hn_02",
      "hotelName": "Melon Hotel Tố Hữu",
      "userId": "usr_026",
      "userName": "Đinh Khánh Uyên",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_018",
      "hotelId": "htl_hn_02",
      "hotelName": "Melon Hotel Tố Hữu",
      "userId": "usr_027",
      "userName": "Đoàn Thu Vinh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_019",
      "hotelId": "htl_hl_01",
      "hotelName": "Green Bay Hotel Hạ Long",
      "userId": "usr_028",
      "userName": "Lâm Xuân Yến",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Hạ Long/Green bay hotel_Hạ Long(1).jpg"
      ]
    },
    {
      "id": "rev_020",
      "hotelId": "htl_hl_01",
      "hotelName": "Green Bay Hotel Hạ Long",
      "userId": "usr_029",
      "userName": "Trịnh Thùy Trang",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_021",
      "hotelId": "htl_hl_01",
      "hotelName": "Green Bay Hotel Hạ Long",
      "userId": "usr_030",
      "userName": "Mai Mỹ Thảo",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_022",
      "hotelId": "htl_hl_02",
      "hotelName": "Wyndham Garden Legend Hạ Long",
      "userId": "usr_031",
      "userName": "Đào Bích Hùng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Hạ Long/Wyndham Garden Legend Hạ Long(1).jpg"
      ]
    },
    {
      "id": "rev_023",
      "hotelId": "htl_hl_02",
      "hotelName": "Wyndham Garden Legend Hạ Long",
      "userId": "usr_032",
      "userName": "Cao Ánh Tú",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_024",
      "hotelId": "htl_hl_02",
      "hotelName": "Wyndham Garden Legend Hạ Long",
      "userId": "usr_033",
      "userName": "Hà Thuý Thắng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_025",
      "hotelId": "htl_vt_01",
      "hotelName": "CSJ Luxury Hotel Vũng Tàu",
      "userId": "usr_034",
      "userName": "Chu Văn Lan",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(1).jpg"
      ]
    },
    {
      "id": "rev_026",
      "hotelId": "htl_vt_01",
      "hotelName": "CSJ Luxury Hotel Vũng Tàu",
      "userId": "usr_035",
      "userName": "Tạ Thị Vy",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_027",
      "hotelId": "htl_vt_01",
      "hotelName": "CSJ Luxury Hotel Vũng Tàu",
      "userId": "usr_036",
      "userName": "Quách Hồng Hằng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_028",
      "hotelId": "htl_vt_02",
      "hotelName": "Trinh's House Hotel Vũng Tàu",
      "userId": "usr_037",
      "userName": "Lương Minh Long",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Vũng Tàu/TRINH'S HOUSE_Hotel _Vũng_Tàu(1).jpg"
      ]
    },
    {
      "id": "rev_029",
      "hotelId": "htl_vt_02",
      "hotelName": "Trinh's House Hotel Vũng Tàu",
      "userId": "usr_038",
      "userName": "Thái Đức Đạt",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_030",
      "hotelId": "htl_vt_02",
      "hotelName": "Trinh's House Hotel Vũng Tàu",
      "userId": "usr_039",
      "userName": "Phùng Thanh Kiên",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_031",
      "hotelId": "htl_dl_01",
      "hotelName": "Adadilia Villa View Hotel Đà Lạt",
      "userId": "usr_040",
      "userName": "Nguyễn Quốc Hiếu",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(1).jpg"
      ]
    },
    {
      "id": "rev_032",
      "hotelId": "htl_dl_01",
      "hotelName": "Adadilia Villa View Hotel Đà Lạt",
      "userId": "usr_041",
      "userName": "Trần Hải Tùng",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_033",
      "hotelId": "htl_dl_01",
      "hotelName": "Adadilia Villa View Hotel Đà Lạt",
      "userId": "usr_042",
      "userName": "Lê Tuấn Nhật",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_034",
      "hotelId": "htl_dl_02",
      "hotelName": "Queen T&T Hotel Đà Lạt",
      "userId": "usr_043",
      "userName": "Phạm Ngọc Bảo",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Đà Lạt/QUEEN T&T_Hotel_Đà_Lạt(1).jpg"
      ]
    },
    {
      "id": "rev_035",
      "hotelId": "htl_dl_02",
      "hotelName": "Queen T&T Hotel Đà Lạt",
      "userId": "usr_044",
      "userName": "Hoàng Anh Trúc",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_036",
      "hotelId": "htl_dl_02",
      "hotelName": "Queen T&T Hotel Đà Lạt",
      "userId": "usr_045",
      "userName": "Huỳnh Hoàng Khôi",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_037",
      "hotelId": "htl_hg_01",
      "hotelName": "Historic Eco House Hà Giang",
      "userId": "usr_046",
      "userName": "Phan Gia Nguyên",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Hà Giang/Historic Eco House_Hotel_Hà_Giang(1).jpg"
      ]
    },
    {
      "id": "rev_038",
      "hotelId": "htl_hg_01",
      "hotelName": "Historic Eco House Hà Giang",
      "userId": "usr_047",
      "userName": "Vũ Kim Vũ",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_039",
      "hotelId": "htl_hg_01",
      "hotelName": "Historic Eco House Hà Giang",
      "userId": "usr_048",
      "userName": "Võ Bảo Châu",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_040",
      "hotelId": "htl_hg_02",
      "hotelName": "Lotus Premium Lodge Hà Giang",
      "userId": "usr_049",
      "userName": "Đặng Phương Duyên",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(1).jpg"
      ]
    },
    {
      "id": "rev_041",
      "hotelId": "htl_hg_02",
      "hotelName": "Lotus Premium Lodge Hà Giang",
      "userId": "usr_050",
      "userName": "Bùi Khánh Phương",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_042",
      "hotelId": "htl_hg_02",
      "hotelName": "Lotus Premium Lodge Hà Giang",
      "userId": "usr_051",
      "userName": "Đỗ Thu Tiến",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_043",
      "hotelId": "htl_pq_01",
      "hotelName": "Vinpearl Resort & Spa Phú Quốc",
      "userId": "usr_052",
      "userName": "Hồ Xuân An",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_044",
      "hotelId": "htl_pq_01",
      "hotelName": "Vinpearl Resort & Spa Phú Quốc",
      "userId": "usr_053",
      "userName": "Ngô Thùy Bình",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_045",
      "hotelId": "htl_pq_01",
      "hotelName": "Vinpearl Resort & Spa Phú Quốc",
      "userId": "usr_054",
      "userName": "Dương Mỹ Cường",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_046",
      "hotelId": "htl_nt_01",
      "hotelName": "InterContinental Nha Trang Bay",
      "userId": "usr_055",
      "userName": "Lý Bích Dũng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_047",
      "hotelId": "htl_nt_01",
      "hotelName": "InterContinental Nha Trang Bay",
      "userId": "usr_056",
      "userName": "Đinh Ánh Hương",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_048",
      "hotelId": "htl_nt_01",
      "hotelName": "InterContinental Nha Trang Bay",
      "userId": "usr_057",
      "userName": "Đoàn Thuý Giang",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_049",
      "hotelId": "htl_hp_01",
      "hotelName": "Meliá Vinpearl Hải Phòng Rivera",
      "userId": "usr_058",
      "userName": "Lâm Văn Hà",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_050",
      "hotelId": "htl_hp_01",
      "hotelName": "Meliá Vinpearl Hải Phòng Rivera",
      "userId": "usr_059",
      "userName": "Trịnh Thị Khoa",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_051",
      "hotelId": "htl_hp_01",
      "hotelName": "Meliá Vinpearl Hải Phòng Rivera",
      "userId": "usr_060",
      "userName": "Mai Hồng Linh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_052",
      "hotelId": "htl_hp_02",
      "hotelName": "Flamingo Cát Bà Beach Resort",
      "userId": "usr_061",
      "userName": "Đào Minh Minh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_053",
      "hotelId": "htl_hp_02",
      "hotelName": "Flamingo Cát Bà Beach Resort",
      "userId": "usr_062",
      "userName": "Cao Đức Nam",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_054",
      "hotelId": "htl_hp_02",
      "hotelName": "Flamingo Cát Bà Beach Resort",
      "userId": "usr_063",
      "userName": "Hà Thanh Oanh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_055",
      "hotelId": "htl_hp_03",
      "hotelName": "Cát Bà Eco Valley Homestay",
      "userId": "usr_064",
      "userName": "Chu Quốc Phúc",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_056",
      "hotelId": "htl_hp_03",
      "hotelName": "Cát Bà Eco Valley Homestay",
      "userId": "usr_065",
      "userName": "Tạ Hải Quang",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_057",
      "hotelId": "htl_hp_03",
      "hotelName": "Cát Bà Eco Valley Homestay",
      "userId": "usr_066",
      "userName": "Quách Tuấn Sơn",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_058",
      "hotelId": "htl_qn_01",
      "hotelName": "FLC Grand Hotel Hạ Long",
      "userId": "usr_067",
      "userName": "Lương Ngọc Tâm",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_059",
      "hotelId": "htl_qn_01",
      "hotelName": "FLC Grand Hotel Hạ Long",
      "userId": "usr_068",
      "userName": "Thái Anh Uyên",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_060",
      "hotelId": "htl_qn_01",
      "hotelName": "FLC Grand Hotel Hạ Long",
      "userId": "usr_069",
      "userName": "Phùng Hoàng Vinh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_061",
      "hotelId": "htl_qn_02",
      "hotelName": "Yoko Onsen Quang Hanh Resort",
      "userId": "usr_070",
      "userName": "Nguyễn Gia Yến",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_062",
      "hotelId": "htl_qn_02",
      "hotelName": "Yoko Onsen Quang Hanh Resort",
      "userId": "usr_071",
      "userName": "Trần Kim Trang",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_063",
      "hotelId": "htl_qn_02",
      "hotelName": "Yoko Onsen Quang Hanh Resort",
      "userId": "usr_072",
      "userName": "Lê Bảo Thảo",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_064",
      "hotelId": "htl_qn_03",
      "hotelName": "De LaSea Ha Long Hotel",
      "userId": "usr_073",
      "userName": "Phạm Phương Hùng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_065",
      "hotelId": "htl_qn_03",
      "hotelName": "De LaSea Ha Long Hotel",
      "userId": "usr_074",
      "userName": "Hoàng Khánh Tú",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_066",
      "hotelId": "htl_qn_03",
      "hotelName": "De LaSea Ha Long Hotel",
      "userId": "usr_075",
      "userName": "Huỳnh Thu Thắng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_067",
      "hotelId": "htl_sp_01",
      "hotelName": "Hotel de la Coupole - MGallery Sapa",
      "userId": "usr_076",
      "userName": "Phan Xuân Lan",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_068",
      "hotelId": "htl_sp_01",
      "hotelName": "Hotel de la Coupole - MGallery Sapa",
      "userId": "usr_077",
      "userName": "Vũ Thùy Vy",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_069",
      "hotelId": "htl_sp_01",
      "hotelName": "Hotel de la Coupole - MGallery Sapa",
      "userId": "usr_078",
      "userName": "Võ Mỹ Hằng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_070",
      "hotelId": "htl_sp_02",
      "hotelName": "Pao's Sapa Leisure Hotel",
      "userId": "usr_079",
      "userName": "Đặng Bích Long",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Khách sạn cực xinh, decor ấm cúng tinh tế từng chi tiết. Anh chị chủ nhà và nhân viên hỗ trợ nhiệt tình hết nấc!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_071",
      "hotelId": "htl_sp_02",
      "hotelName": "Pao's Sapa Leisure Hotel",
      "userId": "usr_080",
      "userName": "Bùi Ánh Đạt",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_072",
      "hotelId": "htl_sp_02",
      "hotelName": "Pao's Sapa Leisure Hotel",
      "userId": "usr_081",
      "userName": "Đỗ Thuý Kiên",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_073",
      "hotelId": "htl_sp_03",
      "hotelName": "Eco Palms House - Sapa Retreat",
      "userId": "usr_082",
      "userName": "Hồ Văn Hiếu",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt vời ngoài mong đợi! Phòng ốc sạch sẽ, view cảnh quan đẹp mê hồn. Bữa sáng buffet rất đa dạng món ngon hợp khẩu vị.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_074",
      "hotelId": "htl_sp_03",
      "hotelName": "Eco Palms House - Sapa Retreat",
      "userId": "usr_083",
      "userName": "Ngô Thị Tùng",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_075",
      "hotelId": "htl_sp_03",
      "hotelName": "Eco Palms House - Sapa Retreat",
      "userId": "usr_084",
      "userName": "Dương Hồng Nhật",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_076",
      "hotelId": "htl_sp_04",
      "hotelName": "Bamboo Sapa Hotel",
      "userId": "usr_085",
      "userName": "Lý Minh Bảo",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn mực 5 sao. Nhân viên từ lễ tân đến bảo vệ đều cực kỳ chu đáo và thân thiện. Sẽ tiếp tục quay lại trong chuyến đi tới!",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_077",
      "hotelId": "htl_sp_04",
      "hotelName": "Bamboo Sapa Hotel",
      "userId": "usr_086",
      "userName": "Đinh Đức Trúc",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_078",
      "hotelId": "htl_sp_04",
      "hotelName": "Bamboo Sapa Hotel",
      "userId": "usr_087",
      "userName": "Đoàn Thanh Khôi",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_079",
      "hotelId": "htl_nb_01",
      "hotelName": "Emeralda Resort Ninh Bình",
      "userId": "usr_088",
      "userName": "Lâm Quốc Nguyên",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Không gian thoáng đãng, hồ bơi nước trong vắt và khu vực spa mang lại cảm giác thư giãn tuyệt đối sau những ngày làm việc căng thẳng.",
      "date": "2026-08-10",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_080",
      "hotelId": "htl_nb_01",
      "hotelName": "Emeralda Resort Ninh Bình",
      "userId": "usr_089",
      "userName": "Trịnh Hải Vũ",
      "userAvatar": "",
      "rating": 4.8,
      "comment": "Gia đình mình có trải nghiệm vô cùng đáng nhớ tại đây. Giường ngủ êm ái, bồn tắm ngâm thảo mộc rất thư thái. Đánh giá 10/10!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_081",
      "hotelId": "htl_nb_01",
      "hotelName": "Emeralda Resort Ninh Bình",
      "userId": "usr_090",
      "userName": "Mai Tuấn Châu",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Vị trí đắc địa, rất thuận tiện để đi dạo, thưởng thức ẩm thực và ghé thăm các điểm tham quan nổi tiếng xung quanh.",
      "date": "2026-08-18",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_200",
      "hotelId": "htl_res_01",
      "hotelName": "Six Senses Ninh Van Bay Resort",
      "userId": "usr_200",
      "userName": "Nguyễn Văn An",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_201",
      "hotelId": "htl_res_01",
      "hotelName": "Six Senses Ninh Van Bay Resort",
      "userId": "usr_201",
      "userName": "Trần Thị Bình",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_202",
      "hotelId": "htl_res_01",
      "hotelName": "Six Senses Ninh Van Bay Resort",
      "userId": "usr_202",
      "userName": "Lê Hồng Cường",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_203",
      "hotelId": "htl_res_02",
      "hotelName": "Legacy Yên Tử - MGallery Resort",
      "userId": "usr_203",
      "userName": "Phạm Minh Dũng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_204",
      "hotelId": "htl_res_02",
      "hotelName": "Legacy Yên Tử - MGallery Resort",
      "userId": "usr_204",
      "userName": "Hoàng Đức Hương",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_205",
      "hotelId": "htl_res_02",
      "hotelName": "Legacy Yên Tử - MGallery Resort",
      "userId": "usr_205",
      "userName": "Huỳnh Thanh Giang",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_206",
      "hotelId": "htl_res_03",
      "hotelName": "Topas Ecolodge Sapa Resort",
      "userId": "usr_206",
      "userName": "Phan Quốc Hà",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_207",
      "hotelId": "htl_res_03",
      "hotelName": "Topas Ecolodge Sapa Resort",
      "userId": "usr_207",
      "userName": "Vũ Hải Khoa",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_208",
      "hotelId": "htl_res_03",
      "hotelName": "Topas Ecolodge Sapa Resort",
      "userId": "usr_208",
      "userName": "Võ Tuấn Linh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_209",
      "hotelId": "htl_res_04",
      "hotelName": "Naman Retreat Da Nang Resort",
      "userId": "usr_209",
      "userName": "Đặng Ngọc Minh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_210",
      "hotelId": "htl_res_04",
      "hotelName": "Naman Retreat Da Nang Resort",
      "userId": "usr_210",
      "userName": "Bùi Anh Nam",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_211",
      "hotelId": "htl_res_04",
      "hotelName": "Naman Retreat Da Nang Resort",
      "userId": "usr_211",
      "userName": "Đỗ Hoàng Oanh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_212",
      "hotelId": "htl_br_01",
      "hotelName": "InterContinental Danang Sun Peninsula Resort",
      "userId": "usr_212",
      "userName": "Hồ Gia Phúc",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_213",
      "hotelId": "htl_br_01",
      "hotelName": "InterContinental Danang Sun Peninsula Resort",
      "userId": "usr_213",
      "userName": "Ngô Kim Quang",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_214",
      "hotelId": "htl_br_01",
      "hotelName": "InterContinental Danang Sun Peninsula Resort",
      "userId": "usr_214",
      "userName": "Dương Bảo Sơn",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_215",
      "hotelId": "htl_br_02",
      "hotelName": "JW Marriott Phu Quoc Emerald Bay Resort",
      "userId": "usr_215",
      "userName": "Lý Phương Tâm",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_216",
      "hotelId": "htl_br_02",
      "hotelName": "JW Marriott Phu Quoc Emerald Bay Resort",
      "userId": "usr_216",
      "userName": "Đinh Khánh Uyên",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_217",
      "hotelId": "htl_br_02",
      "hotelName": "JW Marriott Phu Quoc Emerald Bay Resort",
      "userId": "usr_217",
      "userName": "Đoàn Thu Vinh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_218",
      "hotelId": "htl_br_03",
      "hotelName": "Mia Resort Nha Trang",
      "userId": "usr_218",
      "userName": "Lâm Xuân Yến",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_219",
      "hotelId": "htl_br_03",
      "hotelName": "Mia Resort Nha Trang",
      "userId": "usr_219",
      "userName": "Trịnh Thùy Trang",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_220",
      "hotelId": "htl_br_03",
      "hotelName": "Mia Resort Nha Trang",
      "userId": "usr_220",
      "userName": "Mai Mỹ Thảo",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_221",
      "hotelId": "htl_br_04",
      "hotelName": "Premier Village Danang Resort",
      "userId": "usr_221",
      "userName": "Đào Bích Hùng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_222",
      "hotelId": "htl_br_04",
      "hotelName": "Premier Village Danang Resort",
      "userId": "usr_222",
      "userName": "Cao Ánh Tú",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_223",
      "hotelId": "htl_br_04",
      "hotelName": "Premier Village Danang Resort",
      "userId": "usr_223",
      "userName": "Hà Thuý Thắng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_224",
      "hotelId": "htl_vil_01",
      "hotelName": "Ana Mandara Villas Dalat Resort & Spa",
      "userId": "usr_224",
      "userName": "Chu Văn Lan",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_225",
      "hotelId": "htl_vil_01",
      "hotelName": "Ana Mandara Villas Dalat Resort & Spa",
      "userId": "usr_225",
      "userName": "Tạ Thị Vy",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_226",
      "hotelId": "htl_vil_01",
      "hotelName": "Ana Mandara Villas Dalat Resort & Spa",
      "userId": "usr_226",
      "userName": "Quách Hồng Hằng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_227",
      "hotelId": "htl_vil_02",
      "hotelName": "Vinpearl Discovery Coastalland Villas Phú Quốc",
      "userId": "usr_227",
      "userName": "Lương Minh Long",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_228",
      "hotelId": "htl_vil_02",
      "hotelName": "Vinpearl Discovery Coastalland Villas Phú Quốc",
      "userId": "usr_228",
      "userName": "Thái Đức Đạt",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_229",
      "hotelId": "htl_vil_02",
      "hotelName": "Vinpearl Discovery Coastalland Villas Phú Quốc",
      "userId": "usr_229",
      "userName": "Phùng Thanh Kiên",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_230",
      "hotelId": "htl_vil_03",
      "hotelName": "Saint Simeon Resort & Spa Sanctuary Villa",
      "userId": "usr_230",
      "userName": "Nguyễn Quốc Hiếu",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_231",
      "hotelId": "htl_vil_03",
      "hotelName": "Saint Simeon Resort & Spa Sanctuary Villa",
      "userId": "usr_231",
      "userName": "Trần Hải Tùng",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_232",
      "hotelId": "htl_vil_03",
      "hotelName": "Saint Simeon Resort & Spa Sanctuary Villa",
      "userId": "usr_232",
      "userName": "Lê Tuấn Nhật",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_233",
      "hotelId": "htl_vil_04",
      "hotelName": "Sapa CatCat Hill Resort & Villa",
      "userId": "usr_233",
      "userName": "Phạm Ngọc Bảo",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_234",
      "hotelId": "htl_vil_04",
      "hotelName": "Sapa CatCat Hill Resort & Villa",
      "userId": "usr_234",
      "userName": "Hoàng Anh Trúc",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_235",
      "hotelId": "htl_vil_04",
      "hotelName": "Sapa CatCat Hill Resort & Villa",
      "userId": "usr_235",
      "userName": "Huỳnh Hoàng Khôi",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_236",
      "hotelId": "htl_hs_01",
      "hotelName": "Lá Đỏ Homestay & Coffee Sapa",
      "userId": "usr_236",
      "userName": "Phan Gia Nguyên",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_237",
      "hotelId": "htl_hs_01",
      "hotelName": "Lá Đỏ Homestay & Coffee Sapa",
      "userId": "usr_237",
      "userName": "Vũ Kim Vũ",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_238",
      "hotelId": "htl_hs_01",
      "hotelName": "Lá Đỏ Homestay & Coffee Sapa",
      "userId": "usr_238",
      "userName": "Võ Bảo Châu",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_239",
      "hotelId": "htl_hs_02",
      "hotelName": "The Wilder-nest Homestay Đà Lạt",
      "userId": "usr_239",
      "userName": "Đặng Phương Duyên",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_240",
      "hotelId": "htl_hs_02",
      "hotelName": "The Wilder-nest Homestay Đà Lạt",
      "userId": "usr_240",
      "userName": "Bùi Khánh Phương",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_241",
      "hotelId": "htl_hs_02",
      "hotelName": "The Wilder-nest Homestay Đà Lạt",
      "userId": "usr_241",
      "userName": "Đỗ Thu Tiến",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_242",
      "hotelId": "htl_hs_03",
      "hotelName": "Tràng An Lotus Homestay Ninh Bình",
      "userId": "usr_242",
      "userName": "Hồ Xuân An",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_243",
      "hotelId": "htl_hs_03",
      "hotelName": "Tràng An Lotus Homestay Ninh Bình",
      "userId": "usr_243",
      "userName": "Ngô Thùy Bình",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_244",
      "hotelId": "htl_hs_03",
      "hotelName": "Tràng An Lotus Homestay Ninh Bình",
      "userId": "usr_244",
      "userName": "Dương Mỹ Cường",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_245",
      "hotelId": "htl_hs_04",
      "hotelName": "Cát Bà Rustic Valley Homestay",
      "userId": "usr_245",
      "userName": "Lý Bích Dũng",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_246",
      "hotelId": "htl_hs_04",
      "hotelName": "Cát Bà Rustic Valley Homestay",
      "userId": "usr_246",
      "userName": "Đinh Ánh Hương",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_247",
      "hotelId": "htl_hs_04",
      "hotelName": "Cát Bà Rustic Valley Homestay",
      "userId": "usr_247",
      "userName": "Đoàn Thuý Giang",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_248",
      "hotelId": "htl_apt_01",
      "hotelName": "Altara Suites by Ri-Yaz Luxury Apartment",
      "userId": "usr_248",
      "userName": "Lâm Văn Hà",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Gia đình mình có kỳ nghỉ trọn vẹn và đáng nhớ. Trẻ em rất thích khu vui chơi và hồ bơi vô cực.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_249",
      "hotelId": "htl_apt_01",
      "hotelName": "Altara Suites by Ri-Yaz Luxury Apartment",
      "userId": "usr_249",
      "userName": "Trịnh Thị Khoa",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_250",
      "hotelId": "htl_apt_01",
      "hotelName": "Altara Suites by Ri-Yaz Luxury Apartment",
      "userId": "usr_250",
      "userName": "Mai Hồng Linh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_251",
      "hotelId": "htl_apt_02",
      "hotelName": "The Five Residences Hanoi Apartment",
      "userId": "usr_251",
      "userName": "Đào Minh Minh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Homestay / Villa đẹp mê ly, decor tỉ mỉ từng chi tiết, nhiều góc chụp ảnh sống ảo siêu xịn sò.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_252",
      "hotelId": "htl_apt_02",
      "hotelName": "The Five Residences Hanoi Apartment",
      "userId": "usr_252",
      "userName": "Cao Đức Nam",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_253",
      "hotelId": "htl_apt_02",
      "hotelName": "The Five Residences Hanoi Apartment",
      "userId": "usr_253",
      "userName": "Hà Thanh Oanh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_254",
      "hotelId": "htl_apt_03",
      "hotelName": "Oyster Gành Hào Condotel Apartment",
      "userId": "usr_254",
      "userName": "Chu Quốc Phúc",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Kỳ nghỉ tuyệt hảo không có điểm trừ! Không gian riêng tư, bãi biển sạch đẹp và hồ bơi cực kỳ đẳng cấp.",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_255",
      "hotelId": "htl_apt_03",
      "hotelName": "Oyster Gành Hào Condotel Apartment",
      "userId": "usr_255",
      "userName": "Tạ Hải Quang",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_256",
      "hotelId": "htl_apt_03",
      "hotelName": "Oyster Gành Hào Condotel Apartment",
      "userId": "usr_256",
      "userName": "Quách Tuấn Sơn",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_257",
      "hotelId": "htl_apt_04",
      "hotelName": "The Arena Cam Ranh Beachfront Apartment",
      "userId": "usr_257",
      "userName": "Lương Ngọc Tâm",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Dịch vụ chuẩn 5 sao quốc tế. Nhân viên chăm sóc chu đáo từ lúc nhận phòng đến khi trả phòng. Nhất định sẽ quay lại!",
      "date": "2026-08-14",
      "status": "visible",
      "isVerifiedStay": true,
      "images": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      "id": "rev_258",
      "hotelId": "htl_apt_04",
      "hotelName": "The Arena Cam Ranh Beachfront Apartment",
      "userId": "usr_258",
      "userName": "Thái Anh Uyên",
      "userAvatar": "",
      "rating": 4.9,
      "comment": "View ngắm cảnh xuất sắc ngoài sức tưởng tượng. Phòng ốc thơm tho, giường êm ái, bồn tắm ngâm thảo mộc rất thư giãn.",
      "date": "2026-08-17",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_259",
      "hotelId": "htl_apt_04",
      "hotelName": "The Arena Cam Ranh Beachfront Apartment",
      "userId": "usr_259",
      "userName": "Phùng Hoàng Vinh",
      "userAvatar": "",
      "rating": 5.0,
      "comment": "Đồ ăn tại nhà hàng nấu rất hợp khẩu vị. Bữa sáng buffet phong phú hơn 50 món Á - Âu tươi ngon.",
      "date": "2026-08-20",
      "status": "visible",
      "isVerifiedStay": true,
      "images": []
    },
    {
      "id": "rev_namhai_01",
      "hotelId": "htl_hoian_01",
      "hotelName": "Four Seasons Resort The Nam Hai",
      "userId": "usr_hoian_01",
      "userName": "Trần Diệu Hương",
      "userAvatar": "",
      "rating": 5,
      "date": "2026-08-18",
      "createdAt": "2026-08-18",
      "comment": "Four Seasons The Nam Hai thực sự là khu nghỉ dưỡng đỉnh cao nhất Việt Nam! 3 hồ bơi vô cực tuyệt đẹp nhìn ra biển Hà My. Dịch vụ và nhân viên tận tâm chu đáo đến từng chi tiết.",
      "status": "visible",
      "images": [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      "id": "rev_anantara_01",
      "hotelId": "htl_hoian_02",
      "hotelName": "Anantara Hoi An Resort",
      "userId": "usr_hoian_02",
      "userName": "Lê Quang Khải",
      "userAvatar": "",
      "rating": 5,
      "date": "2026-08-19",
      "createdAt": "2026-08-19",
      "comment": "Vị trí sát bờ sông Thu Bồn cực kỳ lãng mạn. Buổi chiều ngồi ngắm thuyền hoa đăng lung linh và đi bộ ra phố cổ chỉ mất 5 phút. Rất đáng trải nghiệm.",
      "status": "visible",
      "images": []
    },
    {
      "id": "rev_silkpath_01",
      "hotelId": "htl_hue_01",
      "hotelName": "Silk Path Grand Hue Hotel",
      "userId": "usr_hue_01",
      "userName": "Ngô Bích Ngọc",
      "userAvatar": "",
      "rating": 5,
      "date": "2026-08-20",
      "createdAt": "2026-08-20",
      "comment": "Khách sạn đẹp lộng lẫy theo phong cách cung đình hoàng gia. Bữa sáng phong phú có cả bún bò Huế chuẩn vị và trà cung đình thơm lừng.",
      "status": "visible",
      "images": [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
      ]
    }
  ],
  "promotions": [
    {
      "id": "promo_01",
      "code": "HE2026",
      "title": "Ưu đãi Chào Hè Rực Rỡ 2026",
      "description": "Giảm ngay 20% cho tất cả các đơn đặt phòng khách sạn và resort ven biển.",
      "discountPercent": 20,
      "discountAmount": 0,
      "discountMax": 500000,
      "minSpend": 1500000,
      "startDate": "2026-05-01",
      "endDate": "2026-09-30",
      "usageLimit": 1000,
      "usageCount": 142,
      "status": "active"
    },
    {
      "id": "promo_02",
      "code": "VIP25",
      "title": "Đặc quyền Hội viên VIP",
      "description": "Giảm trực tiếp 25% tối đa 1.000.000đ cho đơn đặt phòng từ 3.000.000đ.",
      "discountPercent": 25,
      "discountAmount": 0,
      "discountMax": 1000000,
      "minSpend": 3000000,
      "startDate": "2026-01-01",
      "endDate": "2026-12-31",
      "usageLimit": 500,
      "usageCount": 89,
      "status": "active"
    },
    {
      "id": "promo_03",
      "code": "SUMMER2026",
      "title": "Voucher Giảm Trực Tiếp 300K",
      "description": "Giảm ngay 300.000đ cho mọi đơn đặt phòng từ 2 đêm trở lên.",
      "discountPercent": 0,
      "discountAmount": 300000,
      "discountMax": 300000,
      "minSpend": 2000000,
      "startDate": "2026-06-01",
      "endDate": "2026-08-31",
      "usageLimit": 300,
      "usageCount": 65,
      "status": "active"
    },
    {
      "id": "promo_04",
      "code": "WELCOME10",
      "title": "Quà tặng Khách hàng mới",
      "description": "Giảm 10% cho lần đầu tiên trải nghiệm dịch vụ đặt phòng tại HotelBooking.",
      "discountPercent": 10,
      "discountAmount": 0,
      "discountMax": 200000,
      "minSpend": 800000,
      "startDate": "2026-01-01",
      "endDate": "2026-12-31",
      "usageLimit": 2000,
      "usageCount": 310,
      "status": "active"
    }
  ],
  "articles": [
        {
            "id": "art-1",
            "title": "Top 10 Khách sạn view biển đẹp nhất Việt Nam năm 2026",
            "slug": "top-10-khach-san-view-bien-dep-nhat-viet-nam-2026",
            "category": "Kinh nghiệm du lịch",
            "categoryColor": "primary",
            "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
            "author": "Vũ Kim Quang",
            "authorAvatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
            "createdAt": "2026-08-18",
            "readTime": 9,
            "views": 4280,
            "featured": true,
            "excerpt": "Khám phá danh sách những khách sạn và resort 5 sao sở hữu tầm nhìn trực diện bờ biển tuyệt mỹ từ Đà Nẵng, Nha Trang, Phú Quốc đến Quy Nhơn và Hạ Long.",
            "content": "<p class=\"lead\">Việt Nam sở hữu hơn 3.260 km bờ biển với vô vàn vịnh biển trong xanh, bãi cát trắng mịn màng và những rạn san hô nguyên sơ. Để tận hưởng trọn vẹn vẻ đẹp hùng vĩ của đại dương, việc chọn một khách sạn hay resort sở hữu tầm nhìn trực diện biển (oceanfront) là yếu tố quyết định tạo nên một kỳ nghỉ dưỡng hoàn hảo.</p><h2>1. InterContinental Danang Sun Peninsula Resort (Đà Nẵng)</h2><p>Tọa lạc biệt lập giữa cánh rừng nguyên sinh bán đảo Sơn Trà, kiệt tác kiến trúc của \"ông hoàng resort\" Bill Bensley được mệnh danh là khu nghỉ dưỡng đẳng cấp bậc nhất thế giới. Resort chia thành 4 tầng kiến trúc: Thiên đường (Heaven), Bầu trời (Sky), Mặt đất (Earth) và Biển cả (Sea) men theo sườn núi dốc thoai thoải.</p><p>Mỗi căn phòng đều có ban công rộng mở với bộ ghế sofa êm ái hướng thẳng ra vịnh Bãi Bắc riêng tư. Du khách còn có cơ hội thưởng thức ẩm thực chuẩn sao Michelin tại nhà hàng danh giá La Maison 1888 và thư giãn trên tuyến tàu điện Nam Trực độc đáo kết nối các tầng resort.</p><h2>2. Vinpearl Resort & Spa Nha Trang Bay (Khánh Hòa)</h2><p>Tọa lạc trên đảo Hòn Tre thơ mộng, Vinpearl Resort & Spa Nha Trang Bay nổi bật với kiến trúc hình cánh cung mềm mại ôm trọn bờ biển cát trắng tinh khiết. Từ khung cửa kính lớn trong phòng ngủ, du khách có thể ngắm trọn bình minh rực rỡ ló dạng trên vịnh Nha Trang - một trong 29 vịnh biển đẹp nhất hành tinh.</p><p>Khu nghỉ dưỡng sở hữu hồ bơi vô cực nước ngọt ngoài trời rộng lớn, hệ thống chòi spa trên mặt nước phong cách Bali và cáp treo vượt biển nối liền thành phố sôi động với thiên đường giải trí VinWonders.</p><h2>3. JW Marriott Phu Quoc Emerald Bay Resort & Spa (Kiên Giang)</h2><p>Nằm bên Bãi Khem - một trong những bãi biển đẹp nhất Nam đảo ngọc Phú Quốc với cát trắng mịn như kem, JW Marriott tái hiện câu chuyện giả tưởng về trường đại học Lamarck University cuối thế kỷ 19. Mỗi phân khoa là một tòa nhà kiến trúc Pháp cổ điển rực rỡ sắc màu.</p><p>Hồ bơi Shell Pool hình vỏ sò đối xứng tuyệt mỹ sát mép sóng biển là tọa độ check-in mang tính biểu tượng toàn cầu. Du khách sẽ được đắm mình trong làn nước biển trong vắt như gương và thưởng thức tiệc cocktail hoàng hôn thượng hạng tại quán bar Pink Pearl.</p><h2>4. Six Senses Ninh Van Bay (Nha Trang)</h2><p>Nằm ẩn mình giữa những khối đá tự nhiên khổng lồ và cánh rừng nhiệt đới bạt ngàn tại vịnh Ninh Vân, Six Senses là biểu tượng tối thượng của sự riêng tư và phong cách sống bền vững. Nơi đây hoàn toàn biệt lập và chỉ có thể tiếp cận bằng cano cao tốc vượt biển.</p><p>Các căn Water Villa dựng trên mặt nước hay Rock Villa xây dựng khéo léo trên vách đá tự nhiên đều có bể bơi tràn bờ riêng tư, cầu thang dẫn thẳng xuống làn nước biển xanh ngọc bích đầy ắp san hô tự nhiên.</p><h2>5. Premier Village Ha Long Bay Resort (Quảng Ninh)</h2><p>Sở hữu vị trí vàng ngay bên bờ vịnh kỳ quan thiên nhiên thế giới Hạ Long, Premier Village mang đến trải nghiệm nghỉ dưỡng 5 sao giữa lòng di sản. Toàn bộ khu nghỉ dưỡng là quần thể các căn biệt thự trắng muốt sang trọng với vườn cây xanh mát và hồ bơi riêng.</p><p>Từ ban công tầng cao, bạn có thể chiêm ngưỡng hàng nghìn hòn đảo đá vôi nhấp nhô kỳ vĩ lúc hoàng hôn buông xuống, tạo nên một bức tranh thủy mặc lay động lòng người.</p><h2>6. Hyatt Regency Danang Resort and Spa (Đà Nẵng)</h2><p>Trải dài dọc bãi biển Non Nước hoang sơ với bãi cát thoai thoải và sóng biển êm dịu quanh năm, Hyatt Regency Danang là lựa chọn số 1 cho các gia đình và cặp đôi tìm kiếm không gian nghỉ dưỡng thanh bình.</p><p>Khu nghỉ dưỡng gây ấn tượng bởi hệ thống hồ bơi liên hoàn rộng lớn bậc nhất Đà Nẵng, các căn villa hướng biển có bếp tiện nghi và câu lạc bộ trẻ em Camp Hyatt với vô vàn hoạt động vui chơi sáng tạo.</p><h2>7. Anantara Quy Nhon Villas (Bình Định)</h2><p>Nép mình bên bờ vịnh Bãi Dài hoang sơ, Anantara Quy Nhơn là khu nghỉ dưỡng boutique cao cấp chỉ gồm 26 căn biệt thự hướng biển tuyệt đối. Mỗi căn villa đều có quản gia riêng chăm sóc chu đáo từ bữa ăn sáng nổi (floating breakfast) đến tiệc BBQ hải sản tươi rói nướng ngay bên bờ sóng.</p><h2>8. Four Seasons Resort The Nam Hai (Quảng Nam)</h2><p>Tọa lạc tại bãi biển Hà My nguyên sơ gần phố cổ Hội An, The Nam Hai là bản hòa ca tuyệt vời giữa triết lý phong thủy nhà vườn xứ Quảng truyền thống và tiện nghi xa hoa hiện đại. Điểm nhấn là chuỗi 3 hồ bơi vô cực trải dài thẳng tắp hướng ra biển Đông rộng lớn.</p><h2>9. Mường Thanh Luxury Danang & Nha Trang</h2><p>Sở hữu những tòa cao ốc nguy nga tọa lạc ngay mặt đường ven biển Võ Nguyên Giáp (Đà Nẵng) và Trần Phú (Nha Trang), Mường Thanh Luxury đem đến tầm nhìn bao quát toàn cảnh biển cả bao la với mức chi phí vô cùng hợp lý, dịch vụ 5 sao chuẩn mực và nhà hàng buffet sáng phong phú.</p><h2>10. Pullman Vung Tau Hotel & Convention Centre</h2><p>Chỉ cách Bãi Sau Vũng Tàu vài phút đi bộ, Pullman Vũng Tàu ghi dấu ấn với thiết kế mái vòm atrium kính khổng lồ đón trọn ánh sáng tự nhiên. Các phòng nghỉ tầng cao sở hữu góc nhìn panorama tuyệt đẹp bắt trọn nhịp sống sôi động của phố biển và đường chân trời xa tít tắp.</p><div class=\"tip-box\"><h4><span class=\"material-symbols-outlined\">lightbulb</span> Mẹo đặt phòng khách sạn view biển giá tốt nhất</h4><p>Để săn được phòng tầng cao trực diện biển không bị khuất tầm nhìn, bạn nên đặt phòng trước từ 3 đến 4 tuần và ghi chú yêu cầu \"High floor, Direct Ocean View\" trong phần ghi chú đặt phòng trên HotelBooking. Ngoài ra, đặt phòng vào các ngày trong tuần (Chủ nhật đến Thứ năm) luôn có giá ưu đãi hơn từ 25% đến 35% so với dịp cuối tuần.</p></div>",
            "tags": [
                "Khách sạn biển",
                "Nghỉ dưỡng",
                "Đà Nẵng",
                "Phú Quốc",
                "Nha Trang",
                "Resort 5 sao"
            ],
            "status": "published"
        },
        {
            "id": "art-2",
            "title": "Cẩm nang du lịch Phú Quốc từ A đến Z cho kỳ nghỉ trọn vẹn",
            "slug": "cam-nang-du-lich-phu-quoc-tu-a-den-z",
            "category": "Cẩm nang du lịch",
            "categoryColor": "green",
            "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            "author": "Mai Hương",
            "authorAvatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
            "createdAt": "2026-08-15",
            "readTime": 11,
            "views": 3950,
            "featured": true,
            "excerpt": "Tất tần tật kinh nghiệm du lịch Đảo Ngọc Phú Quốc: Thời điểm lý tưởng, cách di chuyển, địa điểm vui chơi đỉnh cao, ẩm thực đặc sản và lịch trình gợi ý 4N3Đ hoàn hảo.",
            "content": "<p class=\"lead\">Được mệnh danh là đảo thiên đường của Việt Nam, Phú Quốc thu hút hàng triệu du khách trong và ngoài nước mỗi năm nhờ khí hậu ấm áp quanh năm, bờ biển dài cát trắng mịn màng, hải sản tươi ngon bậc nhất và hệ thống khách sạn - resort tiêu chuẩn quốc tế.</p><h2>1. Thời điểm lý tưởng nhất để vi vu Phú Quốc</h2><p>Khí hậu Phú Quốc chia làm 2 mùa rõ rệt, mỗi mùa mang một nét quyến rũ riêng biệt:</p><ul><li><strong>Mùa khô (Tháng 11 đến tháng 4 năm sau):</strong> Thời điểm vàng để du lịch Đảo Ngọc. Trời nắng đẹp rực rỡ, nhiệt độ trung bình 27 - 30°C, biển êm đềm và làn nước trong xanh thấu đáy. Đây là lúc lý tưởng nhất để tắm biển Bãi Sao, lặn ngắm san hô tại Nam Đảo và đi tour cano các hòn hoang sơ.</li><li><strong>Mùa mưa (Tháng 5 đến tháng 10):</strong> Thường có những cơn mưa rào bất chợt nhưng biển Bắc Đảo (Bãi Dài, Gành Dầu) vẫn rất êm. Giá vé máy bay và phòng khách sạn vào mùa này thường giảm sâu từ 30% - 50%, rất phù hợp cho những ai muốn nghỉ dưỡng yên tĩnh và tiết kiệm chi phí.</li></ul><h2>2. Phương tiện di chuyển đến và đi lại tại Phú Quốc</h2><h3>Cách di chuyển đến Phú Quốc</h3><ul><li><strong>Máy bay:</strong> Các hãng hàng không nội địa đều khai thác chuyến bay thẳng từ Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng đến Sân bay Quốc tế Phú Quốc với thời gian bay chỉ từ 50 phút đến 2 tiếng.</li><li><strong>Tàu cao tốc:</strong> Nếu xuất phát từ miền Tây (Rạch Giá hoặc Hà Tiên), bạn có thể trải nghiệm tàu cao tốc Superdong hoặc Phú Quốc Express với thời gian di chuyển từ 1h15 đến 2h30 phút cập bến cảng Bãi Vòng.</li></ul><h3>Đi lại trên đảo</h3><p>Bạn có thể thuê xe máy (giá dao động từ 120.000đ - 160.000đ/ngày) để tự do vi vu ngắm cảnh ven đường. Đối với nhóm bạn hoặc gia đình đông người, thuê ô tô tự lái hoặc đặt xe dịch vụ đưa đón trọn gói là giải pháp tiện nghi và an toàn nhất.</p><h2>3. Những điểm đến và trải nghiệm không thể bỏ qua</h2><h3>Khu vực Nam Đảo - Thiên đường biển đảo & Giải trí đỉnh cao</h3><ul><li><strong>Cáp treo Hòn Thơm:</strong> Tuyến cáp treo 3 dây vượt biển dài nhất thế giới (gần 7.900m), đưa bạn bay bổng giữa biển trời ngắm nhìn làng chài An Thới nhộn nhịp bên dưới.</li><li><strong>Thị trấn Hoàng Hôn (Sunset Town):</strong> Tuyệt tác kiến trúc Địa Trung Hải rực rỡ bên vách đá, nơi có Cầu Hôn (Kiss Bridge) lãng mạn và show diễn đa phương tiện Kiss of the Sea với pháo hoa rực sáng hàng đêm.</li><li><strong>Bãi Sao & Bãi Khem:</strong> Hai bãi biển nổi tiếng bậc nhất với bờ cát trắng mịn như bột mì, rặng dừa nghiêng bóng mát và làn nước biển phẳng lặng như gương.</li><li><strong>Tour cano 4 đảo:</strong> Khám phá Hòn Móng Tay, Hòn Gầm Ghì (vương quốc san hô), Hòn Mây Rút Trong và Mây Rút Ngoài với trải nghiệm đi bộ dưới đáy biển Seawalker kỳ thú.</li></ul><h3>Khu vực Bắc Đảo - Vũ trụ vui chơi giải trí không ngủ</h3><ul><li><strong>VinWonders Phú Quốc:</strong> Công viên chủ đề lớn nhất Việt Nam với thủy cung hình rùa khổng lồ The Sea Shell và hàng trăm trò chơi cảm giác mạnh đẳng cấp thế giới.</li><li><strong>Vinpearl Safari:</strong> Công viên chăm sóc và bảo tồn động vật bán hoang dã đầu tiên tại Việt Nam, mang đến trải nghiệm \"nhốt người thả thú\" đầy phấn khích.</li><li><strong>Grand World - Thành phố không ngủ:</strong> Trải nghiệm ngồi thuyền Gondola ngắm kênh đào Venice lãng mạn, chiêm ngưỡng nhà tre khổng lồ Bamboo Legend và xem show diễn thực cảnh hoành tráng \"Tinh hoa Việt Nam\".</li></ul><h3>Khu vực Trung tâm Dương Đông - Nhịp sống bản địa</h3><ul><li><strong>Dinh Cậu & Dinh Bà:</strong> Biểu tượng tâm linh lâu đời của ngư dân đảo, tọa lạc trên mỏm đá ngắm hoàng hôn buông xuống biển đẹp nao lòng.</li><li><strong>Chợ đêm Phú Quốc:</strong> Thiên đường ăn vặt và quà lưu niệm với hàng trăm gian hàng hải sản tươi sống, kem cuộn, bánh tráng nướng và ngọc trai tinh xảo.</li></ul><h2>4. Khám phá ẩm thực Đảo Ngọc</h2><ul><li><strong>Bún quậy Kiến Xây:</strong> Món ăn độc đáo mà thực khách được tự tay pha chén nước chấm riêng theo khẩu vị với muối, đường, quất và ớt tươi; chả cá và chả tôm tươi quết trực tiếp vào đáy tô rồi chan nước dùng nóng hổi.</li><li><strong>Gỏi cá trích:</strong> Thịt cá trích tươi rói lọc xương trộn cùng dừa nạo, hành tây, ớt hiểm, cuốn cùng bánh tráng và rau rừng Tây Nam Bộ, chấm nước mắm nhĩ pha ớt tỏi đậu phộng cay nồng.</li><li><strong>Nhum biển (Cầu gai) nướng mỡ hành:</strong> Nhum tươi cắt gai, nướng trên than hồng cùng mỡ hành, trứng gà và đậu phộng rang béo ngậy bổ dưỡng.</li><li><strong>Ghẹ Hàm Ninh:</strong> Ghẹ tự nhiên kích thước vừa phải nhưng thịt chắc nịch, vị ngọt đậm đà, chỉ cần hấp sả chấm muối tiêu chanh là đủ đánh thức mọi giác quan.</li></ul><h2>5. Gợi ý lịch trình 4 ngày 3 đêm chuẩn nghỉ dưỡng</h2><ol><li><strong>Ngày 1:</strong> Hạ cánh Phú Quốc - Check-in khách sạn/resort - Thư giãn bên hồ bơi - Ngắm hoàng hôn Dinh Cậu - Ăn tối và dạo Chợ đêm Dương Đông.</li><li><strong>Ngày 2:</strong> Khám phá Nam Đảo - Trải nghiệm Cáp treo Hòn Thơm & Công viên nước Aquatopia - Tắm biển Bãi Sao - Check-in Sunset Town ngắm pháo hoa Cầu Hôn.</li><li><strong>Ngày 3:</strong> Chinh phục Bắc Đảo - Khám phá vườn thú Vinpearl Safari buổi sáng - Vui chơi tại VinWonders - Chiều tối thưởng thức show thực cảnh tại Grand World.</li><li><strong>Ngày 4:</strong> Dạo biển sớm đón bình minh - Ghé cơ sở sản xuất nước mắm truyền thống Khải Hoàn và vườn tiêu Suối Đá mua quà đặc sản - Check-out và ra sân bay.</li></ol><div class=\"tip-box\"><h4><span class=\"material-symbols-outlined\">verified</span> Lưu ý quan trọng cho chuyến đi</h4><p>Hãy thoa kem chống nắng thường xuyên và ưu tiên các loại kem không chứa hạt vi nhựa để bảo vệ rạn san hô tự nhiên khi tắm biển. Đừng quên đặt phòng trước qua HotelBooking để nhận voucher giảm giá 10-20% và được đảm bảo phòng nghỉ chất lượng tốt nhất.</p></div>",
            "tags": [
                "Phú Quốc",
                "Đảo Ngọc",
                "Cẩm nang",
                "Gia đình",
                "Lịch trình 4N3Đ",
                "Ẩm thực biển"
            ],
            "status": "published"
        },
        {
            "id": "art-3",
            "title": "Review Mường Thanh Luxury: Đẳng cấp nghỉ dưỡng phong cách Việt",
            "slug": "review-muong-thanh-luxury-dang-cap-nghi-duong",
            "category": "Review khách sạn",
            "categoryColor": "accent",
            "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
            "author": "Nguyễn Minh Tuấn",
            "authorAvatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            "createdAt": "2026-08-12",
            "readTime": 8,
            "views": 2740,
            "featured": false,
            "excerpt": "Đánh giá chi tiết chuỗi khách sạn Mường Thanh Luxury về vị trí đắc địa, chất lượng phòng ốc 5 sao, ẩm thực Tây Bắc độc bản và dịch vụ tận tâm.",
            "content": "<p class=\"lead\">Trong bản đồ lưu trú nghỉ dưỡng cao cấp tại Việt Nam, Mường Thanh Luxury là phân khúc khách sạn 5 sao sang trọng bậc nhất thuộc Tập đoàn Mường Thanh. Nơi đây chinh phục du khách bởi sự kết hợp tinh tế giữa phong cách phục vụ chuẩn quốc tế và lòng hiếu khách chân thành mang đậm bản sắc văn hóa Việt.</p><h2>1. Vị thế đắc địa tại các \"cung đường vàng\" du lịch</h2><p>Một trong những điểm mạnh lớn nhất của Mường Thanh Luxury chính là vị trí tọa lạc. Hầu hết các khách sạn thuộc chuỗi đều nằm trên những trục đường huyết mạch ven biển hoặc trung tâm đô thị sầm uất:</p><ul><li><strong>Mường Thanh Luxury Đà Nẵng:</strong> Tọa lạc ngay mặt đường Võ Nguyên Giáp, chỉ cần băng qua đường là bước chân lên bãi cát trắng mịn của bãi biển Mỹ Khê danh tiếng.</li><li><strong>Mường Thanh Luxury Nha Trang:</strong> Nằm sừng sững trên cung đường Trần Phú thơ mộng, đối diện quảng trường 2/4 và vịnh biển Nha Trang xinh đẹp.</li><li><strong>Mường Thanh Luxury Hạ Long:</strong> Nằm tại trung tâm khu du lịch Bãi Cháy, đối diện công viên giải trí Sun World và bến tàu du lịch quốc tế.</li></ul><h2>2. Thiết kế không gian và trải nghiệm phòng ốc 5 sao</h2><p>Bước vào sảnh đón tiếp của Mường Thanh Luxury, du khách sẽ ngay lập tức cảm nhận được không gian bề thế, trần cao lộng lẫy kết hợp hài hòa với những hoa văn họa tiết hoa ban Tây Bắc cách điệu tinh xảo.</p><p>Các hạng phòng tại đây có diện tích rộng rãi từ 35m² (Deluxe) đến hơn 120m² (Presidential Suite). Toàn bộ nội thất được bọc gỗ trầm ấm áp, trang bị giường nệm cao cấp nhập khẩu đạt tiêu chuẩn quốc tế, rèm cửa hai lớp tự động và khung cửa sổ kính kịch trần (floor-to-ceiling) mang trọn vẹn khung cảnh thiên nhiên biển trời vào tận phòng ngủ.</p><p>Phòng tắm được ốp đá hoa cương sang trọng với bồn tắm nằm riêng biệt, vòi sen đứng áp lực mạnh và hệ thống amenities cao cấp chiết xuất tự nhiên dịu nhẹ cho làn da.</p><h2>3. Nét chấm phá độc bản: Ẩm thực Tây Bắc giữa lòng đô thị biển</h2><p>Điểm khác biệt ấn tượng nhất của Mường Thanh so với các thương hiệu quốc tế chính là mảng ẩm thực. Bên cạnh bữa tiệc buffet sáng đa dạng hơn 70 món Á - Âu với quầy phở bò truyền thống bốc khói nghi ngút, nhà hàng của Mường Thanh Luxury còn phục vụ những đặc sản trứ danh núi rừng Tây Bắc:</p><ul><li>Thịt trâu gác bếp chấm chẩm chéo cay nồng đậm đà.</li><li>Xôi nếp nương thơm dẻo hạt ngọc vùng cao.</li><li>Gà đồi nướng mắc khén da giòn thịt ngọt thơm.</li><li>Cá suối chiên giòn rụm ăn cùng rau rừng thanh mát.</li></ul><h2>4. Hệ thống tiện ích thư giãn & hội nghị đẳng cấp</h2><p>Không chỉ là điểm dừng chân nghỉ dưỡng, Mường Thanh Luxury còn đáp ứng hoàn hảo nhu cầu công tác và tổ chức sự kiện chuyên nghiệp:</p><ul><li><strong>Bể bơi vô cực ngoài trời:</strong> Tọa lạc tại các tầng cao với tầm nhìn khoáng đạt, phục vụ đồ uống tươi mát tại quầy bar bên hồ.</li><li><strong>Trầm Spa & Massage:</strong> Hệ thống phòng trị liệu sử dụng thảo mộc tự nhiên và đá nóng muối khoáng, giúp du khách thư giãn toàn diện cả thân - tâm - trí.</li><li><strong>Phòng Gym hiện đại:</strong> Trang bị đầy đủ máy chạy bộ, tạ đa năng và khu vực tập yoga riêng biệt.</li><li><strong>Trung tâm hội nghị tiệc cưới:</strong> Đại sảnh tiệc không cột với sức chứa lên tới 1.500 khách cùng hệ thống âm thanh, màn hình LED sắc nét bậc nhất.</li></ul><h2>5. Tổng kết & Đánh giá</h2><p>Với mức giá phòng dao động hợp lý từ 1.200.000đ đến 2.500.000đ/đêm bao gồm bữa sáng buffet 5 sao, Mường Thanh Luxury mang lại tỷ lệ giá trị trên giá thành (value for money) vượt trội. Đây chắc chắn là sự lựa chọn an tâm và trọn vẹn cho cả gia đình, cặp đôi và khách công tác khi ghé thăm các thành phố du lịch hàng đầu Việt Nam.</p><div class=\"tip-box\"><h4><span class=\"material-symbols-outlined\">thumb_up</span> Lời khuyên khi đặt phòng Mường Thanh Luxury</h4><p>Khi đặt phòng qua HotelBooking, bạn nên chọn các gói có gắn nhãn \"Kèm Buffet sáng\" và áp dụng mã voucher giờ vàng để được giảm thêm từ 50.000đ - 100.000đ trực tiếp trên mỗi đêm nghỉ.</p></div>",
            "tags": [
                "Mường Thanh",
                "Review khách sạn",
                "5 sao",
                "Nghỉ dưỡng",
                "Đà Nẵng",
                "Ẩm thực Tây Bắc"
            ],
            "status": "published"
        },
        {
            "id": "art-4",
            "title": "Bí quyết săn voucher và deal khách sạn 5 sao giá rẻ bất ngờ",
            "slug": "bi-quyet-san-voucher-deal-khach-san-5-sao",
            "category": "Mẹo đặt phòng",
            "categoryColor": "gold",
            "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
            "author": "Vũ Kim Quang",
            "authorAvatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
            "createdAt": "2026-08-10",
            "readTime": 7,
            "views": 5120,
            "featured": true,
            "excerpt": "Những mẹo vàng giúp bạn tiết kiệm đến 45% chi phí đặt phòng khách sạn và resort cao cấp khi lên kế hoạch du lịch thông minh.",
            "content": "<p class=\"lead\">Nghỉ dưỡng tại các khách sạn và resort 5 sao sang trọng luôn là ước mơ của mọi chuyến đi. Tuy nhiên, nhiều người thường nghĩ chi phí cho những đêm nghỉ xa hoa này quá đắt đỏ. Thực tế, nếu nắm vững những bí quyết đặt phòng thông minh, bạn hoàn toàn có thể tận hưởng dịch vụ thượng lưu với mức giá rẻ hơn từ 30% đến 50% so với giá niêm yết thông thường.</p><h2>1. Canh khung giờ Flash Sale thời gian thực trên HotelBooking</h2><p>Hệ thống HotelBooking liên tục cập nhật các chương trình <strong>Flash Sale Giờ Vàng</strong> độc quyền theo thời gian thực (real-time). Đây là các suất phòng được các khách sạn 5 sao đối tác mở bán với số lượng giới hạn theo các khung giờ:</p><ul><li><strong>09:00 - 12:00:</strong> Khung giờ khởi động buổi sáng với các deal khách sạn nội đô Hà Nội, TP.HCM, Đà Nẵng.</li><li><strong>12:00 - 15:00:</strong> Khung giờ vàng trưa với các deal resort biển Nha Trang, Phú Quốc, Phan Thiết giảm sâu đến -50%.</li><li><strong>18:00 - 21:00:</strong> Khung giờ vàng buổi tối với số lượng mã voucher giảm thêm (FLASH50K, VIPFLASH10, BUFFETFREE).</li></ul><p>Hãy truy cập mục Flash Sale trên trang chủ, lưu sẵn các mã voucher vào tài khoản và đặt ngay khi đồng hồ đếm ngược mở bán khung giờ yêu thích.</p><h2>2. Nguyên tắc thời điểm đặt phòng: Quy tắc 21 ngày & Đặt giữa tuần</h2><p>Hai yếu tố then chốt quyết định giá phòng khách sạn là <em>thời điểm đặt</em> và <em>ngày lưu trú</em>:</p><ul><li><strong>Quy tắc đặt sớm 21 ngày (Early Bird):</strong> Đặt trước chuyến đi từ 3 đến 4 tuần giúp bạn vừa có giá tốt nhất vừa thoải mái lựa chọn những phòng view biển đẹp ở tầng cao nhất trước khi hết phòng.</li><li><strong>Nghỉ dưỡng giữa tuần (Chủ Nhật đến Thứ Năm):</strong> Giá phòng tại các khu nghỉ dưỡng nổi tiếng như Đà Lạt, Sa Pa hay Phú Quốc vào các đêm từ Chủ Nhật đến Thứ Năm thường rẻ hơn từ 30% - 40% so với đêm Thứ Sáu và Thứ Bảy. Bạn vừa tiết kiệm được khoản tiền lớn, vừa tránh được cảnh đông đúc, xếp hàng ăn sáng.</li></ul><h2>3. Đăng ký tài khoản thành viên để nhận đặc quyền ẩn</h2><p>Nhiều khách sạn thường dành mức giá riêng (Member Deals) thấp hơn từ 10% đến 15% cho khách hàng đã đăng nhập. Khi bạn tạo tài khoản trên HotelBooking:</p><ul><li>Được tích lũy điểm thưởng cho mỗi hóa đơn thanh toán thành công.</li><li>Được ưu tiên nâng hạng phòng miễn phí (Room Upgrade) khi khách sạn còn phòng trống.</li><li>Được check-in sớm hoặc check-out muộn thêm 2 tiếng tùy tình trạng phòng thực tế.</li></ul><h2>4. Chú ý kỹ các điều khoản đi kèm (Terms & Conditions)</h2><p>Một deal phòng giá rẻ chỉ thực sự trọn vẹn nếu bạn đọc kỹ các điều khoản sau:</p><ul><li><strong>Đã bao gồm thuế và phí dịch vụ chưa?</strong> Giá phòng trên HotelBooking luôn hiển thị minh bạch tổng giá trị bao gồm 10% VAT và 5% phí dịch vụ.</li><li><strong>Bữa sáng miễn phí:</strong> Hãy ưu tiên các gói phòng có chữ \"Bao gồm ăn sáng\" vì nếu mua lẻ tại quầy lễ tân khách sạn 5 sao, giá buffet sáng thường dao động từ 350.000đ - 600.000đ/người.</li><li><strong>Chính sách hủy hoàn:</strong> Nếu lịch trình chưa chắc chắn 100%, hãy chọn phòng có chính sách \"Hủy miễn phí trước 48h\" để không bị mất tiền oan nếu phát sinh sự cố đột xuất.</li></ul><div class=\"tip-box\"><h4><span class=\"material-symbols-outlined\">star</span> Tóm tắt 4 bước săn deal nhanh nhất</h4><p>1. Xác định ngày đi sớm trước 3 tuần -> 2. Canh khung giờ Flash Sale -> 3. Thu thập mã voucher giảm giá -> 4. Đặt phòng và thanh toán online bảo mật để khóa giữ mức giá tốt nhất.</p></div>",
            "tags": [
                "Mẹo đặt phòng",
                "Tiết kiệm",
                "Voucher",
                "Kinh nghiệm",
                "Flash Sale",
                "Resort 5 sao"
            ],
            "status": "published"
        },
        {
            "id": "art-5",
            "title": "Khám phá ẩm thực Đà Nẵng: 15 món ngon nức tiếng phải thử",
            "slug": "kham-pha-am-thuc-da-nang-15-mon-ngon",
            "category": "Ẩm thực",
            "categoryColor": "teal",
            "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
            "author": "Lê Bảo Ngọc",
            "authorAvatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            "createdAt": "2026-08-08",
            "readTime": 10,
            "views": 3800,
            "featured": false,
            "excerpt": "Hành trình food tour Đà Nẵng trọn vẹn với 15 món ăn đậm đà khó cưỡng cùng danh sách địa chỉ quán ăn nức tiếng chuẩn vị bản xứ.",
            "content": "<p class=\"lead\">Đà Nẵng không chỉ nổi tiếng với những cây cầu độc đáo bắc qua sông Hàn thơ mộng hay bờ biển Mỹ Khê quyến rũ, mà còn là thiên đường ẩm thực níu chân du khách bởi hương vị miền Trung đậm đà khó quên, nguyên liệu tươi rói và mức giá vô cùng bình dân.</p><h2>Danh sách 15 món ngon kèm địa chỉ quán nức tiếng</h2><h3>1. Mì Quảng ếch & tôm thịt</h3><p>Mì Quảng là linh hồn của ẩm thực Quảng Nam - Đà Nẵng. Sợi mì gạo dày dặn dẻo dai, bên trên là thịt ếch đồng om sả nghệ hoặc tôm thịt đậm đà, chan nước dùng xâm xấp sền sệt, rắc thêm đậu phộng rang giòn, ăn cùng bánh tráng mè nướng và đĩa rau sống bắp chuối tươi non.</p><p><em>Địa chỉ gợi ý:</em> Mì Quảng ếch Bếp Trang (26 Lê Hồng Phong), Mì Quảng Bà Mua (19 Trần Bình Trọng).</p><h3>2. Bánh tráng cuốn thịt heo hai đầu da</h3><p>Miếng thịt ba chỉ được luộc khéo léo để hai đầu mỡ trong veo giòn ngậy, cuốn cùng bánh tráng phơi sương Đại Lộc, lát dưa leo, chuối chát, khế chua và rau sống tươi. Bí quyết ngon nằm ở bát mắm nêm nguyên chất dậy mùi thơm nức tỏi ớt băm nhuyễn.</p><p><em>Địa chỉ gợi ý:</em> Quán Trần (04 Lê Duẩn), Quán Đại Lộc Nhỏ (27/2 Trung Nữ Vương), Quán Mậu (35 Đỗ Thúc Tịnh).</p><h3>3. Bún chả cá Đà Nẵng</h3><p>Tô bún chả cá nóng hổi với nước dùng nấu từ xương cá biển, bí đỏ, cà chua và bắp cải ngọt thanh tự nhiên. Miếng chả cá thu, cá mối chiên vàng ruộm hoặc chả hấp dai sần sật, thêm chút ớt rim cay xè đặc trưng miền Trung làm bừng tỉnh mọi giác quan.</p><p><em>Địa chỉ gợi ý:</em> Bún chả cá Bà Lữ (319 Hùng Vương), Bún chả cá Hờn (113/3 Nguyễn Chí Thanh).</p><h3>4. Gỏi cá Nam Ô danh bất hư truyền</h3><p>Được làm từ cá trích tươi vừa đánh bắt tại làng chài Nam Ô, gỏi cá có hai kiểu: gỏi ướt đậm đà cay nồng trong nước mắm ớt gừng và gỏi khô bùi bùi thơm phức thính gạo rang. Cuốn cùng lá đọt cóc rừng, lá trâm ổi rồi chấm nước sốt tương đậu đậm vị.</p><p><em>Địa chỉ gợi ý:</em> Gỏi cá Thanh Hương (1029 Nguyễn Lương Bằng, Liên Chiểu).</p><h3>5. Bánh xèo & Nem lụi Bà Dưỡng</h3><p>Chiếc bánh xèo giòn rụm màu nghệ vàng ươm, nhân ngập tôm đất và thịt bò bằm tươi rói. Nem lụi nướng than hoa thơm lừng chấm cùng thứ nước sốt gan heo béo bùi gia truyền sánh mịn đã tạo nên thương hiệu ẩm thực trứ danh hàng chục năm qua.</p><p><em>Địa chỉ gợi ý:</em> Quán Bà Dưỡng (Kiệt 280/23 Hoàng Diệu, Hải Châu).</p><h3>6. Bê thui Cầu Mống</h3><p>Thịt bê được thui nguyên con bằng rơm và than hoa, lớp da chín vàng giòn sần sật còn thịt bên trong hồng hào mềm mọng ngọt lịm. Chấm cùng mắm nêm cá cơm nguyên chất pha chanh ớt và ăn kèm khế chua chuối chát.</p><p><em>Địa chỉ gợi ý:</em> Bê thui Rạng (395 Điện Biên Phủ), Bê thui Huynh Đệ (14B Phạm Văn Đồng).</p><h3>7. Cơm gà xối mỡ & cơm gà xé</h3><p>Hạt cơm được nấu bằng nước luộc gà béo ngậy vàng óng ả, thịt gà ta xé phay trộn gỏi chua ngọt hoặc đùi gà xối mỡ giòn tan rôm rốp, ăn kèm chén canh lòng gà nóng hổi và đồ chua muối giòn.</p><p><em>Địa chỉ gợi ý:</em> Cơm gà A Hải (96 Phan Châu Trinh), Cơm gà Hồng Ngọc (193 Nguyễn Chí Thanh).</p><h3>8. Chè sầu Liên (Sầu riêng bà Liên)</h3><p>Món tráng miệng nổi tiếng toàn quốc với từng múi sầu riêng tươi béo ngậy ngập trong nước cốt dừa thơm ngọt, thạch dừa giòn mát và hạt đác dẻo dai. Dưới thời tiết nắng ấm miền Trung, thưởng thức một bát chè sầu mát lạnh là trải nghiệm sảng khoái tuyệt vời.</p><p><em>Địa chỉ gợi ý:</em> Chè Liên (189 Hoàng Diệu hoặc 175 Hải Phòng).</p><h3>9. Bún mắm nêm thịt heo quay</h3><p>Tô bún đầy đặn với thịt heo quay giòn bì rôm rốp, nem chua, chả bò, đậu phộng rang, mít non luộc và chan thứ mắm nêm cay xè tê đầu lưỡi đặc trưng.</p><p><em>Địa chỉ gợi ý:</em> Bún mắm Bà Thuyên (424/3 Lê Duẩn), Bún mắm Ngọc (20 Đoàn Thị Điểm).</p><h3>10. Hải sản tươi sống bên bờ biển</h3><p>Đến Đà Nẵng nhất định phải ghé các quán hải sản bình dân bên bờ biển để tự tay lựa chọn ghẹ xanh, mực nhảy, tôm tít, ốc hương còn bơi lội tung tăng trong bể kính rồi yêu cầu chế biến hấp sả, nướng mọi hoặc rang muối ớt.</p><p><em>Địa chỉ gợi ý:</em> Hải sản Năm Đảnh (K139/H59/38 Trần Quang Khải), Hải sản Bé Mặn (Lô 11 Võ Nguyên Giáp).</p><h3>11. Ram cuốn cải giòn rụm</h3><p>Thanh ram cuốn thịt mộc nhĩ chiên vàng ruộm nóng hổi, kẹp cùng lá cải cay nồng và đồ chua rồi chấm nước mắm ớt tỏi chua ngọt.</p><h3>12. Bánh đập dập & hến xào</h3><p>Bánh tráng nướng giòn kẹp lấy miếng bánh ướt mỏng mềm dẻo, đập nhẹ cho dính vào nhau rồi chấm mắm nêm hoặc xúc cùng đĩa hến xào sả ớt thơm lừng.</p><h3>13. Ốc hút & Mít trộn đĩa bay</h3><p>Ốc gạo, ốc bươu xào sả ớt sền sệt cay nồng, ăn kèm đĩa mít non xé sợi trộn da heo luộc, đậu phộng và rau răm, xúc cùng bánh tráng mè nướng.</p><h3>14. Bánh canh ruộng cầu Thuận Phước</h3><p>Tô bánh canh bột lọc dẻo dai nấu cùng cá nục nướng gỡ xương thơm phức, thêm chả cá chiên và ớt cay chỉ với giá từ 15.000đ - 25.000đ/tô.</p><h3>15. Tré Bà Đệ đặc sản làm quà</h3><p>Đặc sản truyền thống từ thịt nạc và bì heo thái chỉ ướp củ riềng tỏi thơm nức, ủ lên men chua thanh gói trong rơm truyền thống. Món quà không thể thiếu sau mỗi chuyến đi Đà Nẵng.</p><div class=\"tip-box\"><h4><span class=\"material-symbols-outlined\">restaurant</span> Gợi ý food tour buổi tối</h4><p>Hãy ghé Chợ đêm Helio hoặc Chợ đêm Sơn Trà từ 18:30 để hòa mình vào không gian ẩm thực đường phố sôi động với hàng trăm món ngon hấp dẫn cùng âm nhạc acoustic ngoài trời cực chill!</p></div>",
            "tags": [
                "Ẩm thực",
                "Đà Nẵng",
                "Món ngon",
                "Food tour",
                "Đặc sản miền Trung"
            ],
            "status": "published"
        },
        {
            "id": "art-6",
            "title": "Kinh nghiệm du lịch Sa Pa & Đà Lạt mùa săn mây mộng mơ",
            "slug": "kinh-nghiem-du-lich-sa-pa-da-lat-san-may",
            "category": "Điểm đến",
            "categoryColor": "green",
            "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
            "author": "Mai Hương",
            "authorAvatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
            "createdAt": "2026-08-05",
            "readTime": 9,
            "views": 3210,
            "featured": false,
            "excerpt": "Hòa mình vào không khí se lạnh, chiêm ngưỡng biển mây bồng bềnh kỳ vĩ và lưu lại những khoảnh khắc đẹp như tranh tại Sa Pa và Đà Lạt.",
            "content": "<p class=\"lead\">Đối với những tâm hồn say mê vẻ đẹp thiên nhiên và cảm giác se lạnh trong lành, trải nghiệm đứng trên đỉnh đèo đón ánh bình minh rạng rỡ soi rọi xuống biển mây cuồn cuộn trôi tại Sa Pa và Đà Lạt luôn là khoảnh khắc kỳ diệu khiến bất cứ ai cũng phải ngẩn ngơ.</p><h2>1. Sa Pa vs Đà Lạt: Hai phong cách săn mây độc đáo</h2><p>Mỗi miền đất mang lại một cung bậc cảm xúc săn mây hoàn toàn khác biệt:</p><ul><li><strong>Sa Pa (Lào Cai) - Hùng vĩ & Kỳ tráng:</strong> Nằm dưới chân dãy Hoàng Liên Sơn sừng sững, biển mây Sa Pa mang vẻ đẹp bao la, cuồn cuộn tràn qua các đỉnh núi cao ngút ngàn, che phủ những thửa ruộng bậc thang kỳ vĩ tại thung lũng Mường Hoa.</li><li><strong>Đà Lạt (Lâm Đồng) - Thơ mộng & Dịu dàng:</strong> Mây Đà Lạt lững lờ trôi giữa những rặng thông xanh ngút ngàn, vờn quanh mặt hồ sương sớm tĩnh lặng và những ngôi nhà mái ngói cổ kính, tạo cảm giác yên bình và chữa lành tâm hồn.</li></ul><h2>2. Thời điểm vàng để săn mây thành công 99%</h2><p>Để bắt trọn khoảnh khắc biển mây bồng bềnh, bạn cần lưu ý hai yếu tố then chốt:</p><ul><li><strong>Mùa săn mây đẹp nhất:</strong> Từ tháng 9 đến tháng 3 năm sau. Đây là thời kỳ giao mùa, độ ẩm không khí cao kết hợp biên độ nhiệt ngày và đêm lớn, tạo điều kiện thuận lợi nhất cho những biển mây dày đặc xuất hiện.</li><li><strong>Khung giờ vàng trong ngày:</strong> Từ <strong>05:00 đến 06:30 sáng</strong>. Bạn cần thức dậy từ sớm khi trời còn tờ mờ tối và có mặt tại điểm săn mây trước khi mặt trời ló dạng để kịp ngắm nhìn khoảnh khắc ánh dương đầu tiên dát vàng lên biển mây trắng muốt.</li><li><strong>Điều kiện thời tiết:</strong> Hãy theo dõi dự báo thời tiết đêm hôm trước. Nếu ngày hôm trước có mưa nhẹ hoặc nhiều sương mù và hôm sau trời nắng ráo, tỷ lệ bắt gặp biển mây gần như đạt 100%.</li></ul><h2>3. Top tọa độ săn mây trứ danh tại Sa Pa</h2><ul><li><strong>Đỉnh Fansipan (3.143m):</strong> Nóc nhà Đông Dương - nơi bạn có thể đứng trên biển mây bao la ngút ngàn ngắm nhìn quần thể chùa tâm linh uy nghiêm thoát tục giữa chốn bồng lai tiên cảnh.</li><li><strong>Đèo Ô Quy Hồ & Cổng Trời:</strong> Một trong \"Tứ đại đỉnh đèo\" của núi rừng Tây Bắc. Từ Cổng Trời Ô Quy Hồ hoặc cây cầu kính Rồng Mây, bạn sẽ được chiêm ngưỡng thác mây cuồn cuộn đổ qua sườn núi vô cùng ngoạn mục.</li><li><strong>Bản Hang Đá & Bản Sâu Chua:</strong> Tọa độ săn mây nguyên sơ dành cho những ai yêu thích sự yên tĩnh, với mỏm đá tự nhiên nhô ra giữa không trung nhìn thẳng xuống thung lũng bạt ngàn mây.</li></ul><h2>4. Top điểm săn mây đỉnh cao tại Đà Lạt</h2><ul><li><strong>Đồi chè Cầu Đất & Thảm gỗ săn mây:</strong> Tọa độ săn mây số 1 Đà Lạt. Khung cảnh những chiếc tuabin quạt gió khổng lồ quay chậm rãi giữa biển mây trắng bồng bềnh và đồi chè xanh mướt là bức tranh thơ mộng bậc nhất.</li><li><strong>Đỉnh Hòn Bồ & Đồi Đa Phú:</strong> Điểm cắm trại qua đêm yêu thích của giới trẻ để sáng sớm mở cửa lều là đón trọn biển mây trôi dưới chân.</li><li><strong>Đồi Thiên Phúc Đức:</strong> Đứng bên cây thông cô đơn ngắm nhìn mây vờn quanh đỉnh núi Langbiang huyền thoại trong làn sương sớm mờ ảo.</li></ul><h2>5. Hành trang cần chuẩn bị khi đi săn mây</h2><ul><li><strong>Trang phục giữ ấm:</strong> Nhiệt độ sáng sớm trên đồi núi thường chỉ từ 8°C đến 14°C. Hãy chuẩn bị áo khoác gió, khăn choàng cổ ấm và găng tay.</li><li><strong>Giày thể thao:</strong> Chọn giày có độ bám dính tốt tránh trơn trượt trên sườn đồi phủ đầy sương mai.</li><li><strong>Thiết bị chụp ảnh:</strong> Sạc đầy pin điện thoại, mang theo sạc dự phòng và chân máy tripod để quay những đoạn video time-lapse mây trôi kỳ ảo.</li></ul><h2>6. Gợi ý khách sạn & resort săn mây ngay tại ban công</h2><p>Nếu không muốn thức dậy quá sớm để di chuyển đường đèo, bạn có thể chọn các khách sạn 5 sao có tầm nhìn thung lũng đón mây ngay tại phòng ngủ:</p><ul><li><strong>Tại Sa Pa:</strong> Hotel de la Coupole - MGallery (trung tâm thị xã), Silk Path Grand Resort & Spa Sapa, Topas Ecolodge (Bản Lếch).</li><li><strong>Tại Đà Lạt:</strong> Ana Mandara Villas Dalat Resort & Spa (rừng thông cổ kính), Dalat Wonder Resort (view hồ Tuyền Lâm mờ sương), Hôtel Colline (trung tâm tiện nghi).</li></ul><div class=\"tip-box\"><h4><span class=\"material-symbols-outlined\">explore</span> Bí quyết đặt phòng mùa săn mây</h4><p>Mùa mây thu đông là mùa cao điểm du lịch Sa Pa và Đà Lạt. Đừng quên truy cập HotelBooking để đặt phòng sớm từ 2 đến 3 tuần, nhận ngay các voucher giảm giá và tận hưởng dịch vụ nghỉ dưỡng cao cấp nhất.</p></div>",
            "tags": [
                "Sa Pa",
                "Đà Lạt",
                "Săn mây",
                "Điểm đến",
                "Khách sạn view đẹp",
                "Kinh nghiệm du lịch"
            ],
            "status": "published"
        }
  ],
  "bookings": [
    {
      "id": "bk_test_soldout_3",
      "code": "BK8883",
      "userId": "usr_customer_1",
      "hotelId": "htl_sp_01",
      "roomId": "rm_sp_01_1",
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "nights": 3,
      "roomCount": 1,
      "adults": 2,
      "children": 0,
      "totalAmount": 7500000,
      "status": "Đã xác nhận",
      "customerName": "Nguyễn Hoàng Nam",
      "customerEmail": "nam.nguyen@gmail.com",
      "customerPhone": "0933445566",
      "createdAt": "2026-08-22T09:15:00.000Z"
    },
    {
      "id": "bk_test_soldout_2",
      "code": "BK8882",
      "userId": "usr_customer_1",
      "hotelId": "htl_hn_01",
      "roomId": "rm_hn_01_1",
      "checkIn": "2026-08-26",
      "checkOut": "2026-08-29",
      "nights": 3,
      "roomCount": 2,
      "adults": 2,
      "children": 0,
      "totalAmount": 18000000,
      "status": "Đã xác nhận",
      "customerName": "Lê Thị Mai",
      "customerEmail": "mai.le@gmail.com",
      "customerPhone": "0912345678",
      "createdAt": "2026-08-21T14:30:00.000Z"
    },
    {
      "id": "bk_test_soldout_1",
      "code": "BK8881",
      "userId": "usr_customer_1",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_1",
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "nights": 3,
      "roomCount": 2,
      "adults": 2,
      "children": 0,
      "totalAmount": 10500000,
      "status": "Đã xác nhận",
      "customerName": "Trần Văn Bình",
      "customerEmail": "binh.tran@gmail.com",
      "customerPhone": "0988776655",
      "createdAt": "2026-08-20T10:00:00.000Z"
    },
    {
      "id": "bk_sample_1_a",
      "code": "HB8810A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_1",
      "roomName": "Deluxe 2 Giường Hướng Phố (Deluxe Twin City)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 10500000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_1_b",
      "code": "HB8810B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_1",
      "roomName": "Deluxe 2 Giường Hướng Phố (Deluxe Twin City)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 14000000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_2_a",
      "code": "HB8811A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_2",
      "roomName": "Suite Grand Hướng Đại Dương (Grand Ocean Suite)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 15900000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_2_b",
      "code": "HB8811B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_2",
      "roomName": "Suite Grand Hướng Đại Dương (Grand Ocean Suite)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 21200000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_3_a",
      "code": "HB8812A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_3",
      "roomName": "Phòng Suite Tổng Thống Giường Lớn (Presidential Suite)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 33000000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_3_b",
      "code": "HB8812B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_3",
      "roomName": "Phòng Suite Tổng Thống Giường Lớn (Presidential Suite)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 44000000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_4_a",
      "code": "HB8813A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_4",
      "roomName": "Deluxe Giường King Hướng Biển (Deluxe King Ocean View)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 12900000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_4_b",
      "code": "HB8813B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_4",
      "roomName": "Deluxe Giường King Hướng Biển (Deluxe King Ocean View)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 17200000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_5_a",
      "code": "HB8814A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_5",
      "roomName": "Executive King Suite Ban Công Biển",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 19500000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_5_b",
      "code": "HB8814B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_01",
      "roomId": "rm_dn_01_5",
      "roomName": "Executive King Suite Ban Công Biển",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 26000000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_6_a",
      "code": "HB8815A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_1",
      "roomName": "Phòng Loại Sang 2 Giường Đơn (Deluxe Twin)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 6900000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_6_b",
      "code": "HB8815B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_1",
      "roomName": "Phòng Loại Sang 2 Giường Đơn (Deluxe Twin)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 9200000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_7_a",
      "code": "HB8816A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_2",
      "roomName": "Premier Deluxe Suite Cận Biển",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 11100000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_7_b",
      "code": "HB8816B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_2",
      "roomName": "Premier Deluxe Suite Cận Biển",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 14800000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_8_a",
      "code": "HB8817A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_3",
      "roomName": "Phòng Deluxe Gia Đình 2 Giường Lớn (Family Deluxe)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 13500000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_8_b",
      "code": "HB8817B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_3",
      "roomName": "Phòng Deluxe Gia Đình 2 Giường Lớn (Family Deluxe)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 18000000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_9_a",
      "code": "HB8818A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_4",
      "roomName": "Phòng Studio Đẳng Cấp Giường Đôi (Executive Studio)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 9300000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_9_b",
      "code": "HB8818B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_4",
      "roomName": "Phòng Studio Đẳng Cấp Giường Đôi (Executive Studio)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 12400000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_10_a",
      "code": "HB8819A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_5",
      "roomName": "Phòng Ba Người Hướng Thành Phố (Triple City View)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 9900000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_10_b",
      "code": "HB8819B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_02",
      "roomId": "rm_dn_02_5",
      "roomName": "Phòng Ba Người Hướng Thành Phố (Triple City View)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 13200000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_11_a",
      "code": "HB8820A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_03",
      "roomId": "rm_dn_03_1",
      "roomName": "Studio Nhìn Ra Vườn (Garden View Studio)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 7500000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_11_b",
      "code": "HB8820B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_03",
      "roomId": "rm_dn_03_1",
      "roomName": "Studio Nhìn Ra Vườn (Garden View Studio)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 10000000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_12_a",
      "code": "HB8821A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_03",
      "roomId": "rm_dn_03_2",
      "roomName": "Giường Đơn Trong Phòng Tập Thể (Dorm Bed)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 1500000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_12_b",
      "code": "HB8821B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_03",
      "roomId": "rm_dn_03_2",
      "roomName": "Giường Đơn Trong Phòng Tập Thể (Dorm Bed)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 2000000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_13_a",
      "code": "HB8822A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_03",
      "roomId": "rm_dn_03_3",
      "roomName": "Suite Nhìn Ra Sông Hàn (Riverview Suite)",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 11100000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_13_b",
      "code": "HB8822B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_03",
      "roomId": "rm_dn_03_3",
      "roomName": "Suite Nhìn Ra Sông Hàn (Riverview Suite)",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 14800000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_14_a",
      "code": "HB8823A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_03",
      "roomId": "rm_dn_03_4",
      "roomName": "Phòng Giường Đôi Deluxe Hướng Phố",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 5100000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_14_b",
      "code": "HB8823B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_03",
      "roomId": "rm_dn_03_4",
      "roomName": "Phòng Giường Đôi Deluxe Hướng Phố",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 6800000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    },
    {
      "id": "bk_sample_15_a",
      "code": "HB8824A",
      "userId": "usr_02",
      "customerName": "Trần Thị Mai",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0987654321",
      "hotelId": "htl_dn_04",
      "roomId": "rm_dn_04_1",
      "roomName": "Phòng Superior Giường Đôi Nhìn Ra Thành Phố",
      "roomCount": 2,
      "checkIn": "2026-08-25",
      "checkOut": "2026-08-28",
      "guestsAdults": 2,
      "guestsChildren": 0,
      "totalAmount": 4740000,
      "paymentMethod": "MOMO",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-23T00:00:31.921509"
    },
    {
      "id": "bk_sample_15_b",
      "code": "HB8824B",
      "userId": "usr_02",
      "customerName": "Lê Hoàng Nam",
      "customerEmail": "customer@hotelbooking.vn",
      "customerPhone": "0912345678",
      "hotelId": "htl_dn_04",
      "roomId": "rm_dn_04_1",
      "roomName": "Phòng Superior Giường Đôi Nhìn Ra Thành Phố",
      "roomCount": 2,
      "checkIn": "2026-08-28",
      "checkOut": "2026-09-01",
      "guestsAdults": 2,
      "guestsChildren": 1,
      "totalAmount": 6320000,
      "paymentMethod": "VNPAY",
      "paymentStatus": "Đã thanh toán",
      "status": "Đã xác nhận",
      "isReviewed": false,
      "createdAt": "2026-08-24T00:00:31.921509"
    }
  ]
};

const INITIAL_FLASH_SALE_DEALS = {
  "slot-4": [
    {
      "id": "htl_dn_01",
      "roomId": "rm_dn_01_1",
      "name": "Khách sạn Mường Thanh Luxury Đà Nẵng",
      "roomName": "Deluxe 2 Giường Hướng Phố",
      "city": "Đà Nẵng",
      "image": "img/Đà Nẵng/Khách sạn Mường Thanh Luxury_Đà Nẵng(1).jpg",
      "discount": 40,
      "originalPrice": 1750000,
      "salePrice": 1050000,
      "totalRooms": 4,
      "remainingRooms": 2,
      "soldPercent": 50,
      "viewers": 45,
      "isHot": true,
      "tag": "Gần biển Mỹ Khê"
    },
    {
      "id": "htl_hl_02",
      "roomId": "rm_hl_02_1",
      "name": "Wyndham Garden Legend Hạ Long",
      "roomName": "Superior Garden Room",
      "city": "Hạ Long",
      "image": "img/Hạ Long/Wyndham Garden Legend Hạ Long(1).jpg",
      "discount": 35,
      "originalPrice": 2250000,
      "salePrice": 1462000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 32,
      "isHot": false,
      "tag": "View Vịnh trọn vẹn"
    },
    {
      "id": "htl_dl_01",
      "roomId": "rm_dl_01_3",
      "name": "Adadilia Villa View Hotel Đà Lạt",
      "roomName": "Phòng Đơn VIP Rừng Thông",
      "city": "Đà Lạt",
      "image": "img/Đà Lạt/ADADILIA VILLA VIEW_Hotel_Đà_Lạt(1).jpg",
      "discount": 45,
      "originalPrice": 1050000,
      "salePrice": 578000,
      "totalRooms": 4,
      "remainingRooms": 1,
      "soldPercent": 75,
      "viewers": 58,
      "isHot": true,
      "tag": "Sắp cháy phòng"
    }
  ],
  "slot-3": [
    {
      "id": "htl_nt_01",
      "roomId": "rm_nt_01_1",
      "name": "InterContinental Nha Trang Bay",
      "roomName": "Classic Ocean View King",
      "city": "Nha Trang",
      "image": "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
      "discount": 30,
      "originalPrice": 2200000,
      "salePrice": 1540000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 28,
      "isHot": false,
      "tag": "Biển Trần Phú đẹp nhất"
    },
    {
      "id": "htl_pq_01",
      "roomId": "rm_pq_01_1",
      "name": "Vinpearl Resort & Spa Phú Quốc",
      "roomName": "Deluxe Ocean View King Bed",
      "city": "Phú Quốc",
      "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
      "discount": 38,
      "originalPrice": 2900000,
      "salePrice": 1798000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 34,
      "isHot": false,
      "tag": "Bãi Dài cát trắng"
    },
    {
      "id": "htl_dn_02",
      "roomId": "rm_dn_02_1",
      "name": "Khách sạn Royal Beach Đà Nẵng",
      "roomName": "Phòng Loại Sang 2 Giường Đơn",
      "city": "Đà Nẵng",
      "image": "img/Đà Nẵng/Khách sạn Royal Beach_Đà_Nẵng(1).jpg",
      "discount": 35,
      "originalPrice": 1150000,
      "salePrice": 748000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 36,
      "isHot": true,
      "tag": "Hồ bơi vô cực ven biển"
    }
  ],
  "slot-2": [
    {
      "id": "htl_qn_02",
      "roomId": "room_htl_qn_02_01",
      "name": "Yoko Onsen Quang Hanh Resort",
      "roomName": "Phòng Deluxe Hướng Cảnh Quan",
      "city": "Quảng Ninh",
      "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "discount": 35,
      "originalPrice": 3800000,
      "salePrice": 2470000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 29,
      "isHot": true,
      "tag": "Khoáng nóng Nhật Bản"
    },
    {
      "id": "htl_qn_01",
      "roomId": "room_htl_qn_01_01",
      "name": "FLC Grand Hotel Hạ Long",
      "roomName": "Phòng Deluxe Hướng Cảnh Quan",
      "city": "Quảng Ninh",
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "discount": 40,
      "originalPrice": 2100000,
      "salePrice": 1260000,
      "totalRooms": 6,
      "remainingRooms": 3,
      "soldPercent": 50,
      "viewers": 21,
      "isHot": false,
      "tag": "View trọn Vịnh di sản"
    },
    {
      "id": "htl_hn_01",
      "roomId": "rm_hn_01_1",
      "name": "Le Grand Hanoi Hotel - The Oriental",
      "roomName": "Phòng Tiêu Chuẩn Giường Queen",
      "city": "Hà Nội",
      "image": "img/Hà Nội/Le Grand Hanoi Hotel - The Oriental(1).jpg",
      "discount": 35,
      "originalPrice": 1850000,
      "salePrice": 1202000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 25,
      "isHot": false,
      "tag": "Phố Cổ Hoàn Kiếm"
    }
  ],
  "slot-1": [
    {
      "id": "htl_vt_01",
      "roomId": "rm_vt_01_2",
      "name": "CSJ Luxury Hotel Vũng Tàu",
      "roomName": "Phòng Đơn Tiêu Chuẩn",
      "city": "Vũng Tàu",
      "image": "img/Vũng Tàu/CSJ LUXURY_Hotel_Vũng_Tàu(1).jpg",
      "discount": 45,
      "originalPrice": 1200000,
      "salePrice": 660000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 17,
      "isHot": true,
      "tag": "Sát Bãi Sau biển xanh"
    },
    {
      "id": "htl_hg_02",
      "roomId": "rm_hg_02_4",
      "name": "Lotus Premium Lodge Hà Giang",
      "roomName": "Phòng Deluxe Giường Đôi",
      "city": "Hà Giang",
      "image": "img/Hà Giang/Lotus Premium Lodge_Hotel_Hà_Giang(1).jpg",
      "discount": 50,
      "originalPrice": 1150000,
      "salePrice": 575000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 14,
      "isHot": false,
      "tag": "Cao nguyên đá Đồng Văn"
    },
    {
      "id": "htl_hp_01",
      "roomId": "room_htl_hp_01_01",
      "name": "Meliá Vinpearl Hải Phòng Rivera",
      "roomName": "Phòng Deluxe Hướng Cảnh Quan",
      "city": "Hải Phòng",
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "discount": 50,
      "originalPrice": 1850000,
      "salePrice": 925000,
      "totalRooms": 5,
      "remainingRooms": 2,
      "soldPercent": 60,
      "viewers": 39,
      "isHot": true,
      "tag": "5 Sao Đẳng Cấp Đất Cảng"
    }
  ]
};

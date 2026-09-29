const fs = require('fs');
let code = fs.readFileSync('js/data/db.js', 'utf8');

const replacements = [
  { search: /this\._set\(STORAGE_KEYS\.HOTELS,\s*hotels\);\s*return\s*newHotel;/g, replace: "this._set(STORAGE_KEYS.HOTELS, hotels);\n    this.pushToFirestore('hotels', newHotel.id, newHotel);\n    return newHotel;" },
  { search: /this\._set\(STORAGE_KEYS\.HOTELS,\s*hotels\);\s*return\s*hotels\[index\];/g, replace: "this._set(STORAGE_KEYS.HOTELS, hotels);\n      this.pushToFirestore('hotels', id, hotels[index]);\n      return hotels[index];" },
  { search: /this\._set\(STORAGE_KEYS\.ROOMS,\s*rooms\);\s*return\s*true;/g, replace: "this._set(STORAGE_KEYS.ROOMS, rooms);\n    this.deleteFromFirestore('hotels', id);\n    return true;" },

  { search: /this\._set\(STORAGE_KEYS\.ROOMS,\s*rooms\);\s*return\s*newRoom;/g, replace: "this._set(STORAGE_KEYS.ROOMS, rooms);\n    this.pushToFirestore('rooms', newRoom.id, newRoom);\n    return newRoom;" },
  { search: /this\._set\(STORAGE_KEYS\.ROOMS,\s*rooms\);\s*return\s*rooms\[index\];/g, replace: "this._set(STORAGE_KEYS.ROOMS, rooms);\n      this.pushToFirestore('rooms', id, rooms[index]);\n      return rooms[index];" },
  { search: /rooms\s*=\s*rooms\.filter\(r\s*=>\s*r\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.ROOMS,\s*rooms\);\s*return\s*true;/g, replace: "rooms = rooms.filter(r => r.id !== id);\n    this._set(STORAGE_KEYS.ROOMS, rooms);\n    this.deleteFromFirestore('rooms', id);\n    return true;" },

  { search: /this\._set\(STORAGE_KEYS\.USERS,\s*users\);\s*return\s*newUser;/g, replace: "this._set(STORAGE_KEYS.USERS, users);\n    this.pushToFirestore('users', newUser.id, newUser);\n    return newUser;" },
  { search: /this\._set\(STORAGE_KEYS\.USERS,\s*users\);\s*\/\/\s*Cập\s*nhật\s*current\s*user/g, replace: "this._set(STORAGE_KEYS.USERS, users);\n      this.pushToFirestore('users', id, users[index]);\n      // Cập nhật current user" },
  { search: /users\s*=\s*users\.filter\(u\s*=>\s*u\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.USERS,\s*users\);\s*return\s*true;/g, replace: "users = users.filter(u => u.id !== id);\n    this._set(STORAGE_KEYS.USERS, users);\n    this.deleteFromFirestore('users', id);\n    return true;" },

  { search: /this\._set\(STORAGE_KEYS\.PROMOTIONS,\s*promos\);\s*return\s*newPromo;/g, replace: "this._set(STORAGE_KEYS.PROMOTIONS, promos);\n    this.pushToFirestore('promotions', newPromo.id, newPromo);\n    return newPromo;" },
  { search: /this\._set\(STORAGE_KEYS\.PROMOTIONS,\s*promos\);\s*return\s*promos\[index\];/g, replace: "this._set(STORAGE_KEYS.PROMOTIONS, promos);\n      this.pushToFirestore('promotions', promos[index].id, promos[index]);\n      return promos[index];" },
  { search: /promos\s*=\s*promos\.filter\(p\s*=>\s*p\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.PROMOTIONS,\s*promos\);\s*return\s*true;/g, replace: "promos = promos.filter(p => p.id !== id);\n    this._set(STORAGE_KEYS.PROMOTIONS, promos);\n    this.deleteFromFirestore('promotions', id);\n    return true;" },

  { search: /this\._set\(STORAGE_KEYS\.ARTICLES,\s*articles\);\s*return\s*newArticle;/g, replace: "this._set(STORAGE_KEYS.ARTICLES, articles);\n    this.pushToFirestore('articles', newArticle.id, newArticle);\n    return newArticle;" },
  { search: /this\._set\(STORAGE_KEYS\.ARTICLES,\s*articles\);\s*return\s*articles\[index\];/g, replace: "this._set(STORAGE_KEYS.ARTICLES, articles);\n      this.pushToFirestore('articles', id, articles[index]);\n      return articles[index];" },
  { search: /articles\s*=\s*articles\.filter\(a\s*=>\s*a\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.ARTICLES,\s*articles\);\s*return\s*true;/g, replace: "articles = articles.filter(a => a.id !== id);\n    this._set(STORAGE_KEYS.ARTICLES, articles);\n    this.deleteFromFirestore('articles', id);\n    return true;" }
];

replacements.forEach(r => {
  code = code.replace(r.search, r.replace);
});

// Bookings and Reviews are a bit more complex, let's just append to them where they return
code = code.replace(/return\s*newBooking;/g, "this.pushToFirestore('bookings', newBooking.id, newBooking);\n    return newBooking;");
code = code.replace(/return\s*bookings\[index\];/g, "this.pushToFirestore('bookings', bookings[index].id, bookings[index]);\n      return bookings[index];");

code = code.replace(/return\s*newReview;/g, "this.pushToFirestore('reviews', newReview.id, newReview);\n    return newReview;");
code = code.replace(/return\s*reviews\[index\];/g, "this.pushToFirestore('reviews', reviews[index].id, reviews[index]);\n      return reviews[index];");
code = code.replace(/reviews\s*=\s*reviews\.filter\(r\s*=>\s*r\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.REVIEWS,\s*reviews\);/g, "reviews = reviews.filter(r => r.id !== id);\n    this._set(STORAGE_KEYS.REVIEWS, reviews);\n    this.deleteFromFirestore('reviews', id);");


fs.writeFileSync('js/data/db.js', code, 'utf8');
console.log('db.js patched for Firebase writes');

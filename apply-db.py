import re

with open('js/data/db.js', 'r', encoding='utf-8') as f:
    code = f.read()

syncCode = '''

  // ==========================================================================
  // FIREBASE FIRESTORE HYBRID SYNC (Added)
  // ==========================================================================
  
  initFirestoreSync() {
    if (typeof FirebaseService !== 'undefined' && FirebaseService.isLive) {
      const db = FirebaseService.db;
      
      const collections = [
        { name: 'hotels', key: STORAGE_KEYS.HOTELS },
        { name: 'rooms', key: STORAGE_KEYS.ROOMS },
        { name: 'promotions', key: STORAGE_KEYS.PROMOTIONS },
        { name: 'users', key: STORAGE_KEYS.USERS },
        { name: 'bookings', key: STORAGE_KEYS.BOOKINGS },
        { name: 'reviews', key: STORAGE_KEYS.REVIEWS },
        { name: 'articles', key: STORAGE_KEYS.ARTICLES }
      ];

      collections.forEach(col => {
        db.collection(col.name).onSnapshot(snapshot => {
          if (!snapshot.empty) {
            const data = snapshot.docs.map(doc => doc.data());
            localStorage.setItem(col.key, JSON.stringify(data));
          }
        });
      });
    }
  }

  async pushToFirestore(collection, docId, data) {
    if (typeof FirebaseService !== 'undefined' && FirebaseService.isLive) {
      try {
        await FirebaseService.db.collection(collection).doc(docId).set(data, { merge: true });
      } catch (e) {
        console.error("Firestore push error", e);
      }
    }
  }

  async deleteFromFirestore(collection, docId) {
    if (typeof FirebaseService !== 'undefined' && FirebaseService.isLive) {
      try {
        await FirebaseService.db.collection(collection).doc(docId).delete();
      } catch (e) {
        console.error("Firestore delete error", e);
      }
    }
  }
'''

code = code.replace('initDatabase() {', 'initDatabase() {\n    this.initFirestoreSync();')
code = re.sub(r'\}\s*const DB = new DatabaseService\(\);', syncCode + '\n}\n\nconst DB = new DatabaseService();', code)

replacements = [
    (r'this\._set\(STORAGE_KEYS\.HOTELS,\s*hotels\);\s*return\s*newHotel;', "this._set(STORAGE_KEYS.HOTELS, hotels);\n    this.pushToFirestore('hotels', newHotel.id, newHotel);\n    return newHotel;"),
    (r'this\._set\(STORAGE_KEYS\.HOTELS,\s*hotels\);\s*return\s*hotels\[index\];', "this._set(STORAGE_KEYS.HOTELS, hotels);\n      this.pushToFirestore('hotels', id, hotels[index]);\n      return hotels[index];"),
    (r'this\._set\(STORAGE_KEYS\.ROOMS,\s*rooms\);\s*return\s*true;', "this._set(STORAGE_KEYS.ROOMS, rooms);\n    this.deleteFromFirestore('hotels', id);\n    return true;"),

    (r'this\._set\(STORAGE_KEYS\.ROOMS,\s*rooms\);\s*return\s*newRoom;', "this._set(STORAGE_KEYS.ROOMS, rooms);\n    this.pushToFirestore('rooms', newRoom.id, newRoom);\n    return newRoom;"),
    (r'this\._set\(STORAGE_KEYS\.ROOMS,\s*rooms\);\s*return\s*rooms\[index\];', "this._set(STORAGE_KEYS.ROOMS, rooms);\n      this.pushToFirestore('rooms', id, rooms[index]);\n      return rooms[index];"),
    (r'rooms\s*=\s*rooms\.filter\(r\s*=>\s*r\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.ROOMS,\s*rooms\);\s*return\s*true;', "rooms = rooms.filter(r => r.id !== id);\n    this._set(STORAGE_KEYS.ROOMS, rooms);\n    this.deleteFromFirestore('rooms', id);\n    return true;"),

    (r'this\._set\(STORAGE_KEYS\.USERS,\s*users\);\s*return\s*newUser;', "this._set(STORAGE_KEYS.USERS, users);\n    this.pushToFirestore('users', newUser.id, newUser);\n    return newUser;"),
    (r'this\._set\(STORAGE_KEYS\.USERS,\s*users\);\s*//\s*Cập\s*nhật\s*current\s*user', "this._set(STORAGE_KEYS.USERS, users);\n      this.pushToFirestore('users', id, users[index]);\n      // Cập nhật current user"),
    (r'users\s*=\s*users\.filter\(u\s*=>\s*u\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.USERS,\s*users\);\s*return\s*true;', "users = users.filter(u => u.id !== id);\n    this._set(STORAGE_KEYS.USERS, users);\n    this.deleteFromFirestore('users', id);\n    return true;"),

    (r'this\._set\(STORAGE_KEYS\.PROMOTIONS,\s*promos\);\s*return\s*newPromo;', "this._set(STORAGE_KEYS.PROMOTIONS, promos);\n    this.pushToFirestore('promotions', newPromo.id, newPromo);\n    return newPromo;"),
    (r'this\._set\(STORAGE_KEYS\.PROMOTIONS,\s*promos\);\s*return\s*promos\[index\];', "this._set(STORAGE_KEYS.PROMOTIONS, promos);\n      this.pushToFirestore('promotions', promos[index].id, promos[index]);\n      return promos[index];"),
    (r'promos\s*=\s*promos\.filter\(p\s*=>\s*p\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.PROMOTIONS,\s*promos\);\s*return\s*true;', "promos = promos.filter(p => p.id !== id);\n    this._set(STORAGE_KEYS.PROMOTIONS, promos);\n    this.deleteFromFirestore('promotions', id);\n    return true;"),

    (r'this\._set\(STORAGE_KEYS\.ARTICLES,\s*articles\);\s*return\s*newArticle;', "this._set(STORAGE_KEYS.ARTICLES, articles);\n    this.pushToFirestore('articles', newArticle.id, newArticle);\n    return newArticle;"),
    (r'this\._set\(STORAGE_KEYS\.ARTICLES,\s*articles\);\s*return\s*articles\[index\];', "this._set(STORAGE_KEYS.ARTICLES, articles);\n      this.pushToFirestore('articles', id, articles[index]);\n      return articles[index];"),
    (r'articles\s*=\s*articles\.filter\(a\s*=>\s*a\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.ARTICLES,\s*articles\);\s*return\s*true;', "articles = articles.filter(a => a.id !== id);\n    this._set(STORAGE_KEYS.ARTICLES, articles);\n    this.deleteFromFirestore('articles', id);\n    return true;"),
    
    (r'return\s*newBooking;', "this.pushToFirestore('bookings', newBooking.id, newBooking);\n    return newBooking;"),
    (r'return\s*bookings\[index\];', "this.pushToFirestore('bookings', bookings[index].id, bookings[index]);\n      return bookings[index];"),
    (r'return\s*newReview;', "this.pushToFirestore('reviews', newReview.id, newReview);\n    return newReview;"),
    (r'return\s*reviews\[index\];', "this.pushToFirestore('reviews', reviews[index].id, reviews[index]);\n      return reviews[index];"),
    (r'reviews\s*=\s*reviews\.filter\(r\s*=>\s*r\.id\s*!==\s*id\);\s*this\._set\(STORAGE_KEYS\.REVIEWS,\s*reviews\);', "reviews = reviews.filter(r => r.id !== id);\n    this._set(STORAGE_KEYS.REVIEWS, reviews);\n    this.deleteFromFirestore('reviews', id);")
]

for search, replace in replacements:
    code = re.sub(search, replace, code)

with open('js/data/db.js', 'w', encoding='utf-8') as f:
    f.write(code)

print('db.js patched safely!')

async function seedFirestore() {
  if (typeof FirebaseService !== 'undefined' && FirebaseService.isLive) {
    console.log('Seeding Firestore...');
    const db = FirebaseService.db;
    const collections = [
      { name: 'hotels', data: INITIAL_SEED_DATA.hotels },
      { name: 'rooms', data: INITIAL_SEED_DATA.rooms },
      { name: 'promotions', data: INITIAL_SEED_DATA.promotions },
      { name: 'users', data: INITIAL_SEED_DATA.users },
      { name: 'bookings', data: INITIAL_SEED_DATA.bookings },
      { name: 'reviews', data: INITIAL_SEED_DATA.reviews },
      { name: 'articles', data: INITIAL_SEED_DATA.articles }
    ];

    for (let col of collections) {
      if (col.data && col.data.length > 0) {
        let snapshot = await db.collection(col.name).limit(1).get();
        if (snapshot.empty) {
          console.log('Seeding collection: ' + col.name);
          for (let item of col.data) {
            await db.collection(col.name).doc(item.id).set(item);
          }
        }
      }
    }
    console.log('Firestore seeded!');
  }
}
window.seedFirestore = seedFirestore;

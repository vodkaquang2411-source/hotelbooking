/**
 * HOTELBOOKING - FIREBASE CONFIGURATION & BACKEND INTEGRATION
 * Cấu hình kết nối Firebase Authentication, Cloud Firestore và Firebase Storage
 * 
 * Hướng dẫn tích hợp Firebase dự án thực tế:
 * 1. Truy cập https://console.firebase.google.com/
 * 2. Tạo dự án mới: "HotelBooking-App"
 * 3. Bật Authentication (Email/Password), Firestore Database và Firebase Storage
 * 4. Dán thông tin firebaseConfig vào bên dưới
 */

const firebaseConfig = {
  apiKey: "AIzaSyCQYYchg7o5cP7M3NIW7Lbgsyn_C3X1Ihw",
  authDomain: "hotelbooking-f9754.firebaseapp.com",
  projectId: "hotelbooking-f9754",
  storageBucket: "hotelbooking-f9754.firebasestorage.app",
  messagingSenderId: "416189135798",
  appId: "1:416189135798:web:15a2ce0b5d8e35653f5f17",
  measurementId: "G-C186JW6JFD"
};

class FirebaseBackendService {
  constructor() {
    this.isInitialized = false;
    this.isLive = false;
    this.auth = null;
    this.db = null;
    this.storage = null;
    this.init();
  }

  init() {
    try {
      if (typeof firebase !== 'undefined' && firebase.initializeApp) {
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        if (firebase.storage) {
          this.storage = firebase.storage();
        }
        this.isInitialized = true;
        this.isLive = true;
        console.log('🔥 [Firebase] Backend connected successfully (Auth + Firestore + Storage)');
      } else {
        console.log('📦 [Firebase Ready] Dual-mode active: LocalStorage/IndexedDB with full Firestore Schema');
      }
    } catch (err) {
      console.warn('⚠️ [Firebase] Running in offline hybrid mode with local database fallback.', err);
    }
  }

  // Upload file lên Firebase Storage hoặc fallback Base64
  async uploadFile(file, folder = 'uploads') {
    if (this.isLive && this.storage) {
      try {
        const storageRef = this.storage.ref(`${folder}/${Date.now()}_${file.name}`);
        const snapshot = await storageRef.put(file);
        return await snapshot.ref.getDownloadURL();
      } catch (e) {
        console.warn('Storage upload error, using DataURL fallback:', e);
      }
    }

    // Fallback DataURL Base64
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }
}

const FirebaseService = new FirebaseBackendService();
window.FirebaseService = FirebaseService;
window.firebaseConfig = firebaseConfig;


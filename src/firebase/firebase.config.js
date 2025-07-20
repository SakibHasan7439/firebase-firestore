import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmWbiZ_ahNq_kZS20YJZOzNf-hL4zVHB4",
  authDomain: "cloud-firestore-db-3188d.firebaseapp.com",
  projectId: "cloud-firestore-db-3188d",
  storageBucket: "cloud-firestore-db-3188d.firebasestorage.app",
  messagingSenderId: "101464482431",
  appId: "1:101464482431:web:b456a8aaa2b2269ba6d54a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
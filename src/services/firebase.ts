// Firebase Web SDK – CareConnect
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIgGJPopOg1EtXJk5hOfE43Wy4dT1OZ8A",
  authDomain: "test-f80e2.firebaseapp.com",
  projectId: "test-f80e2",
  storageBucket: "test-f80e2.firebasestorage.app",
  messagingSenderId: "998655559449",
  appId: "1:998655559449:web:7cf8fe76af797e7904e788",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

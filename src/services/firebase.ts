// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIgGJPopOg1EtXJk5hOfE43Wy4dT1OZ8A",
  authDomain: "test-f80e2.firebaseapp.com",
  projectId: "test-f80e2",
  storageBucket: "test-f80e2.firebasestorage.app",
  messagingSenderId: "998655559449",
  appId: "1:998655559449:web:7cf8fe76af797e7904e788"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);

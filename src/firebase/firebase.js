// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

// Konfigurasi Firebase untuk aplikasi web kamu
const firebaseConfig = {
  apiKey: "AIzaSyCFqTBZ_FS45syMu1GwbAddt1qVH-kB7H0",
  authDomain: "btnmovie-cfab8.firebaseapp.com",
  databaseURL: "https://btnmovie-cfab8-default-rtdb.asia-southeast1.firebasedatabase.app/", // Ganti dengan URL yang benar
  projectId: "btnmovie-cfab8",
  storageBucket: "btnmovie-cfab8.appspot.com",
  messagingSenderId: "400491473212",
  appId: "1:400491473212:web:073bb4e223ddb4d2741639",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-12fd0.firebaseapp.com",
  projectId: "mern-estate-12fd0",
  storageBucket: "mern-estate-12fd0.appspot.com",
  messagingSenderId: "580425303412",
  appId: "1:580425303412:web:c36b91466ee09018d25821",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

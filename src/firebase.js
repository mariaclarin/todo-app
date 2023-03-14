// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTxm8GCR_liJPfqHaJfx-kvdPKo3hcmww",
  authDomain: "wadstodoapp.firebaseapp.com",
  projectId: "wadstodoapp",
  storageBucket: "wadstodoapp.appspot.com",
  messagingSenderId: "586122308587",
  appId: "1:586122308587:web:3e789695166cfe9a43c7ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
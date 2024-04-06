import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2co9sdD-kslOW39Wr8n7CMW-dzVCv19s",
  authDomain: "auth-grand-reunion.firebaseapp.com",
  projectId: "auth-grand-reunion",
  storageBucket: "auth-grand-reunion.appspot.com",
  messagingSenderId: "237769239177",
  appId: "1:237769239177:web:d7fc7457ffeea0b532b458",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

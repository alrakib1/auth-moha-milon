// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0mKah85uabn4gYhevj1iR4ftpdFAO-l8",
  authDomain: "auth-moha-milon-3c07e.firebaseapp.com",
  projectId: "auth-moha-milon-3c07e",
  storageBucket: "auth-moha-milon-3c07e.appspot.com",
  messagingSenderId: "30459638773",
  appId: "1:30459638773:web:bcd83c48a25b0af48ca6bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

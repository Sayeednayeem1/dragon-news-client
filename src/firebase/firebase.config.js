// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHagUK3jNcy2-HNkTGP5_dn1v888ZCDJk",
  authDomain: process.env.REACT_APP_authDomain,
  projectId: "dragon-news-6d7a9",
  storageBucket: "dragon-news-6d7a9.appspot.com",
  messagingSenderId: "99965599550",
  appId: "1:99965599550:web:f0122fa90916e9f19ab66f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
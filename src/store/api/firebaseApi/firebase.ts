// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCJXNquA55h72tx-_jY9nmXqnD0pFWZdDc",
  authDomain: "tuesday-markets.firebaseapp.com",
  projectId: "tuesday-markets",
  storageBucket: "tuesday-markets.appspot.com",
  messagingSenderId: "714016537556",
  appId: "1:714016537556:web:fb407a5e9c115cb7cf7441",
  measurementId: "G-ERBS696C2D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-gIgw-9ctNg7TuKjjR2hZujiG8yN4EQc",
  authDomain: "my-cloths-shop.firebaseapp.com",
  projectId: "my-cloths-shop",
  storageBucket: "my-cloths-shop.appspot.com",
  messagingSenderId: "224426342895",
  appId: "1:224426342895:web:93ea016cfa3ad7e3d65e1a",
  measurementId: "G-SFXZ38KTQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBVDKCAnusEnNCxUsnsOt-_0Vli_sS0oA",
  authDomain: "lab06-bded2.firebaseapp.com",
  projectId: "lab06-bded2",
  storageBucket: "lab06-bded2.appspot.com",
  messagingSenderId: "477482286557",
  appId: "1:477482286557:web:da9f093095df7b3f8aca34",
  measurementId: "G-KKBF03B22P"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const database = getFirestore()
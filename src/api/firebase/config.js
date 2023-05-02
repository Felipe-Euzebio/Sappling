// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwDpm9yfYqbLP0X6Au_qEQhaJjLFCFmRQ",
  authDomain: "sappling-c8616.firebaseapp.com",
  projectId: "sappling-c8616",
  storageBucket: "sappling-c8616.appspot.com",
  messagingSenderId: "691983428097",
  appId: "1:691983428097:web:00c042f5fb2c6ec9e96e00",
  measurementId: "G-JSBW3FX0Q9"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

export default firebase;
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe_OnLkHVa2Mfo3Jx9vYoANdOwwkCUuZc",
  authDomain: "todos-backend-f4835.firebaseapp.com",
  projectId: "todos-backend-f4835",
  storageBucket: "todos-backend-f4835.appspot.com",
  messagingSenderId: "634420103637",
  appId: "1:634420103637:web:a8bd428dd51358597dd55c",
  measurementId: "G-C2Y10RL5HX"
};

firebase.initializeApp(firebaseConfig);


export default firebase
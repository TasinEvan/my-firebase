// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnLTqVRlG2d_CrGrnOOphudkFvYBvPfo",
  authDomain: "my-firebase-fdd0a.firebaseapp.com",
  projectId: "my-firebase-fdd0a",
  storageBucket: "my-firebase-fdd0a.appspot.com",
  messagingSenderId: "238428669536",
  appId: "1:238428669536:web:7aa4460ce11d1f6adce505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app)

//Most of this code comes from Firebase when setting up project

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXJ_IRLue0HrTA2OgOs389FzS-Kyw1A2w",
    authDomain: "react-auth-aaf99.firebaseapp.com",
    projectId: "react-auth-aaf99",
    storageBucket: "react-auth-aaf99.firebasestorage.app",
    messagingSenderId: "1087419621497",
    appId: "1:1087419621497:web:cda7ba6b4814ef21d534a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//You use this to log in, sign up, log out etc. 
export const auth = getAuth(app);
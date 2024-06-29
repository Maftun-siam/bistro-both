// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId,
    apiKey: "AIzaSyAAnlni59_RYE2FQn_I5TGjj2vkHPURMo8",
    authDomain: "bistro-boss-a23ca.firebaseapp.com",
    projectId: "bistro-boss-a23ca",
    storageBucket: "bistro-boss-a23ca.appspot.com",
    messagingSenderId: "723137364151",
    appId: "1:723137364151:web:fe78019aa222c00eb44d32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
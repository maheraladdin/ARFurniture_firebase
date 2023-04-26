// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDstYvQ19j92ytyZtvPU0ZCnjN5ZpwCKSc",
    authDomain: "arfurniture-2d013.firebaseapp.com",
    projectId: "arfurniture-2d013",
    storageBucket: "arfurniture-2d013.appspot.com",
    messagingSenderId: "258703257642",
    appId: "1:258703257642:web:8899c10d4d070c1e209353",
    measurementId: "G-XVT4BZ507M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

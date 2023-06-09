// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // firebaseConfig data
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// reference to the firestore database
export const db = getFirestore(app);
// reference to the products collection
export const productsCol = collection(db,"products");
// reference to the users collection
export const usersCol = collection(db,"users");
// reference to the advertisements collection
export const advertisementsCol = collection(db,"advertisements");

// reference to the auth
export const auth = getAuth(app);

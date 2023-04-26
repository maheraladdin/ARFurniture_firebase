import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
import {collection,setDoc} from "firebase/firestore";
import { setItemAsync } from "expo-secure-store";

// register user
const registerUser = (username,email, password) => {
    try {
        (async () => {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    // Signed in
                    const user = userCredential.user;
                    console.log(user);

                    // user data
                    const userData = {
                        id: user.uid,
                        username,
                        email,
                        cart: [],
                        wishList: [],
                        lastLoginAt: new Date().toString(),
                    }

                    // save user data to firestore database
                    // create a reference to the users collection
                    const userCollection = collection(db, `users`);
                    // add user data to users collection
                    setDoc(userCollection, userData).then(() => {
                        console.log("user data added to firestore database");
                    }).catch((error) => {
                        console.log(error);
                    });

                    // save user data to secure storage
                    setItemAsync("userData", JSON.stringify(userData)).catch((error) => {
                        console.log(error);
                    });

                    // save a token to secure storage
                    user.getIdToken().then((token) => {
                        setItemAsync("@token", token);
                    }).catch((error) => {
                        console.log(error);
                    });

                })
                .catch((error) => {
                    console.log(error);
                })
        })();

    } catch (error) {
        console.log(error);
    }
}

export default registerUser;
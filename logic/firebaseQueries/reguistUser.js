<<<<<<< HEAD
import { createUserWithEmailAndPassword } from 'firebase/auth';
=======
>>>>>>> origin/main
import { auth } from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
import {collection,setDoc} from "firebase/firestore";
import { setItemAsync } from "expo-secure-store";

// register user
<<<<<<< HEAD
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
=======
export const registerUser = async (username,email, password) => {
    try {
        await auth.createUserWithEmailAndPassword(email, password)
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
                const userCollection = collection(db,`users/${user.uid}`);
                // add user data to users collection
                setDoc(userCollection,userData).then(() => {
                    console.log("user data added to firestore database");
                }).catch((error) => {
                    console.log(error);
                });

                // save user data to secure storage
                setItemAsync("userData",JSON.stringify(userData)).catch((error) => {
                    console.log(error);
                });

                // save a token to secure storage
                user.getIdToken().then((token) => {
                    setItemAsync("@token",token);
                }).catch((error) => {
                    console.log(error);
                });


            })
            .catch((error) => {
                console.log(error);
            });
>>>>>>> origin/main

    } catch (error) {
        console.log(error);
    }
<<<<<<< HEAD
}

export default registerUser;
=======
}
>>>>>>> origin/main

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
import {doc,setDoc} from "firebase/firestore";
import {isLogin} from "../../data/isLogin";
// register user
const registerUser = (username,email, password) => {
    try {
        (async () => {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    // Signed in
                    const user = userCredential.user;

                    // user data
                    const userData = {
                        id: user.uid,
                        username,
                        email,
                        cart: [],
                        wishList: [],
                        lastLoginAt: new Date().toString(),
                    }

                    // create a document
                    const userDoc = doc(db, `users`, user.uid);

                    // save user data to firestore database
                    setDoc(userDoc,userData);

                    // you are now logged in
                    isLogin.changeState = true;
                    isLogin.changeUid = user.uid;
                    isLogin.changeUserData = userData;
                })
                .catch((error) => {
                    console.log("any error happen while sign up",error);
                })
        })();
        } catch (error) {
        console.log(error);
        }
};

export default registerUser;

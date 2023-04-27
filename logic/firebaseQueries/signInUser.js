import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import {isLogin} from "../isLogin";
// sign in user
export const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            // save a token to secure storage
            // you are now logged in
            isLogin.changeState = true;
            isLogin.changeUid = user.uid;
        })
        .catch((error) => {
           console.log(error);
        });
}
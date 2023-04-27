import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import {isLogin} from "../../data/isLogin";
// sign out user
export const signOutUser = async () => {
    signOut(auth).then(() => {
        // you are now logged in
        isLogin.changeState = false;
        isLogin.changeUid = "";
    }).catch((error) => {
        console.log(error);
    });
}
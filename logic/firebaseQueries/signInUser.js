import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../../firebaseConfig';
import {isLogin} from "../../data/isLogin";
import {usersCol} from "../../firebaseConfig";
import {doc, getDocs, query, updateDoc, where} from "firebase/firestore";
// sign in user
export const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth,email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            // you are now logged in
            isLogin.changeState = true;
            isLogin.changeUid = user.uid;

            // query user data
            const userQuery = await query(usersCol,where("id","==",user.uid));

            // get user data
            const userSnapshot = await getDocs(userQuery);

            // get user data
            isLogin.changeUserData = await userSnapshot.docs.map(doc => doc.data())[0];

            // update last login
            const userDoc = await doc(db, `users`, user.uid);

            await updateDoc(userDoc, {
                lastLoginAt: new Date().toString()
            });

        })
        .catch((error) => {
           console.log(error);
        });
}
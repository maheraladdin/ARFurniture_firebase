import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { setItemAsync } from "expo-secure-store";

// sign in user
export const signInUser = async (email, password) => {
    signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            // save a token to secure storage
            user.getIdToken().then((token) => {
                setItemAsync("@token",token);
            }).catch((error) => {
                console.log(error);
            });

            // save user data to secure storage
            // save user data to secure storage
            setItemAsync("userData",JSON.stringify(user)).catch((error) => {
                console.log(error);
            });
        })
}
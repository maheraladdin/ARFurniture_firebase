import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { setItemAsync } from "expo-secure-store";

// sign out user
export const signOutUser = async () => {
    signOut(auth).then(() => {
        console.log("user signed out");
        setItemAsync("@token","").catch((error) => {
            console.log(error);
        });
        setItemAsync("userData","").catch((error) => {
            console.log(error);
        });
    }).catch((error) => {
        console.log(error);
    });
}
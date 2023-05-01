import { db } from '../../firebaseConfig';
import { auth } from "../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { updateEmail } from "firebase/auth";
import { isLogin } from "../../data/isLogin";

const updateUser = (data) => {
    updateEmail(auth.currentUser, data.email).then(async () => {
        const userDoc = await doc(db, `users`, isLogin.uid);
        isLogin.updateProfile = data;
        await updateDoc(userDoc, data);
    }).catch((error) => {
        console.log(error);
    });
}

export default updateUser;
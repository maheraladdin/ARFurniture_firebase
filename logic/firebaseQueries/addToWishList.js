import {isLogin} from "../../data/isLogin";
import {db} from "../../firebaseConfig";
import {doc, updateDoc} from "firebase/firestore";

const updateWishList = async (userId) => {
// get user data
    const userDoc = await doc(db, `users`, userId);

    // update wish list
    await updateDoc(userDoc, {
        wishList: isLogin.userData.wishList
    });
}

export default updateWishList;
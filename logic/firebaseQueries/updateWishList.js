import {db} from "../../firebaseConfig";
import {doc, updateDoc} from "firebase/firestore";

const updateWishList = async (userId,wishlist) => {
// get user data
    const userDoc = await doc(db, `users`, userId);

    // update wish list
    await updateDoc(userDoc, {
        wishList: wishlist
    });
}

export default updateWishList;
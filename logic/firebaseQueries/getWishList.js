import { productsCol } from "../../firebaseConfig"
import { getDocs, query, where } from "firebase/firestore";
import { isLogin } from "../../data/isLogin";
const getWishList = async () => {
    // fetch products from firebase database
    // query documents from products collection by wish list
    const productsQuery = await query(productsCol, where("_id", "in", isLogin.wishList));
    // get all documents from products collection
    const productsSnapshot = await getDocs(productsQuery);
    // get all documents data
    return productsSnapshot.docs.map(doc => doc.data());
}

export default getWishList;
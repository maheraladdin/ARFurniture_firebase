import {getDocs, query, where} from "firebase/firestore";
import {productsCol} from "../../firebaseConfig";

const queryProductsByCategory = async (category) => {
    // fetch products from firebase database
    // query documents from products collection by category
    const productsQuery = await category !== "all" ? query(productsCol, where("category", "==", category)) : productsCol;
    // get all documents from products collection
    const productsSnapshot = await getDocs(productsQuery);
    // get all documents data
    return productsSnapshot.docs.map(doc => doc.data());
}

export default queryProductsByCategory;
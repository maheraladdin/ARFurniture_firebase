import {getDocs} from "firebase/firestore";
import {advertisementsCol} from "../../firebaseConfig";

// fetch advertisement from firebase database
const getAdvertisements = async () => {
    // get all documents from advertisements collection
    const advertisementsSnapshot = await getDocs(advertisementsCol);
    // get all documents data and return it
    return advertisementsSnapshot.docs.map(doc => doc.data());
}

export default getAdvertisements;
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {useState,useEffect} from "react";
import AllActive from "../filter/active/all";
import AllUnActiveLightMode from "../filter/light_mode/all";
import ChairActive from "../filter/active/chair";
import ChairUnActiveLightMode from "../filter/light_mode/chair";
import CupboardActive from "../filter/active/cupboard";
import CupboardUnActiveLightMode from "../filter/light_mode/cupboard";
import LampActive from "../filter/active/lamp";
import LampUnActiveLightMode from "../filter/light_mode/lamp";
import {db} from "../../firebaseConfig";
import {collection, getDocs,query,where} from "firebase/firestore";

export default function HomeFilter({setDATA}) {
    const [filters, setFilters] = useState("all");
    const [data, setData] = useState([]);

    // get all products
    const getAllProducts = () => {
        // fetch products from firebase database
        // create a reference to the products collection
        (async () => {
                const productsCol = await collection(db, "products");
                // get all documents from products collection
                const productsSnapshot = await getDocs(productsCol);
                // get all documents data
                const productsList = productsSnapshot.docs.map(doc => doc.data());
                // set products
                setDATA(productsList);
                // set filters
                setFilters("all")
            }
        )();
    }

    // query products based on category
    const queryProductsBasedOnCategory = async (category) => {
        // fetch products from firebase database
        // create a reference to the products collection
        const productsCol = await collection(db,"products");
        // query documents from products collection
        const productsQuery = await query(productsCol,where("category","==",category));
        // get queried documents from products collection
        const productsSnapshot = await getDocs(productsQuery);
        // get all documents data
        const productsList = productsSnapshot.docs.map(doc => doc.data());
        // set products
        setDATA(productsList);
        // set filters
        setFilters(category)
    }

    useEffect(() => {
        setData([
            {
                id: "1",
                element: filters === "all" ? <AllActive/> : <AllUnActiveLightMode/>,
                active: getAllProducts,
            },
            {
                id: "2",
                element: filters === "chair" ? <ChairActive/> : <ChairUnActiveLightMode/>,
                active: () => queryProductsBasedOnCategory("chair"),
            },
            {
                id: "3",
                element: filters === "cupboard" ? <CupboardActive/> : <CupboardUnActiveLightMode/>,
                active: () => queryProductsBasedOnCategory("cupboard"),
            },
            {
                id: "4",
                element: filters === "lampshade" ? <LampActive/> : <LampUnActiveLightMode/>,
                active: () => queryProductsBasedOnCategory("lampshade"),
            }
        ])

    }, [filters]);

    useEffect(getAllProducts, []);




    return (
        <FlatList
            data={data}
            renderItem={({item}) =>
                <TouchableOpacity onPress={item.active}>
                    {item.element}
                </TouchableOpacity>
        }
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            style={styles.flatList}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        height: 90,
        marginHorizontal: 10,
    }
});
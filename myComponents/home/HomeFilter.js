import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {useState,useEffect} from "react";
import queryProductsByCategory from "../../logic/firebaseQueries/queryProductsBasedOnCategory";
import initiateFilter from "../../data/initiateFilter";

export default function HomeFilter({setDATA}) {
    const [filters, setFilters] = useState("all");
    const [data, setData] = useState([]);

    // query products based on category
    const queryProductsBasedOnCategory = (category) => {
        queryProductsByCategory(category).then(productsList => {
            // set products
            setDATA(productsList);
            // set filters
            setFilters(category);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        setData(initiateFilter(filters,queryProductsBasedOnCategory));
    }, [filters]);

    useEffect(() => queryProductsBasedOnCategory("all"), []);

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
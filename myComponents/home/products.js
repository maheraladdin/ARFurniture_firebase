import Product from "./product";
import {FlatList, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";

export default function Products({DATA}) {

    const router = useRouter();



    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) =>
                (
                    <TouchableOpacity onPress={() => router.push("productDetails")}>
                        <Product image={item.imageURI} title={item.productName} price={item.productPrice} />
                    </TouchableOpacity>
                )
        }
            numColumns={2}
        />
    )
}
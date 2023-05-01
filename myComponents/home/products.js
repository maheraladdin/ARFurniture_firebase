import Product from "./product";
import {FlatList} from "react-native";

export default function Products({DATA}) {

    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Product productId={item._id} image={item.imageURI} title={item.productName} price={item.productPrice} />}
            numColumns={2}
        />
    )
}
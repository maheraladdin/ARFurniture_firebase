import Navigator from "../myComponents/home/navigator";
import {useState} from "react";
import HomeHeader from "../myComponents/home/homeHeader";
import Products from "../myComponents/home/products";
import getWishList from "../logic/firebaseQueries/getWishList";
import {useEffect} from "react";

export default function WishList() {
	const [navigate, setNavigate] = useState("wishList");
	const [DATA, setDATA] = useState();

	useEffect(() => {
		getWishList(setDATA)
			.then(wishList => {
				setDATA(wishList);
			})
			.catch(err => console.log(err));
	}, [DATA]);



	return (
		<>
			{/* header */}
			<HomeHeader/>

			{/* products */}
			<Products DATA={DATA} />


			{/* navigator */}
			<Navigator setNavigate={setNavigate} navigate={navigate}/>
		</>
	);
}

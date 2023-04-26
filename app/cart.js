import Navigator from "../myComponents/home/navigator";
import {useState} from "react";
import HomeHeader from "../myComponents/home/homeHeader";

export default function Carts() {
	const [navigate, setNavigate] = useState("cart");

	return (
		<>
			{/* header */}
			<HomeHeader/>



			{/* navigator */}
			<Navigator setNavigate={setNavigate} navigate={navigate}/>
		</>
	);
}

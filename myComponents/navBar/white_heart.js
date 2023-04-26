import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {TouchableOpacity} from "react-native";
import {checkLogin} from "../../logic/checkLogin";
import {DialogLogin} from "../DialogLogin";
import {useState} from "react";

function WhiteHeart(props) {
	const [visible,setVisible] = useState(false);
	const isLogin = checkLogin();
	return (
		<TouchableOpacity onPress={() => {
			if(isLogin._j) {
				console.log(isLogin)
				props.setNavigate("wishList");
				props.router.push("/wishList");
			}
			else {
				setVisible(true);
			}
		}}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width={30.049}
				height={27.532}
				viewBox="0 0 30.049 27.532"
				{...props}
			>
				<Path
					d="M95.024 229.532l-1.54-1.39q-3.973-3.648-6.569-6.294a46.061 46.061 0 01-4.136-4.73 15.631 15.631 0 01-2.16-3.775 9.863 9.863 0 01-.62-3.418A7.759 7.759 0 0187.888 202a8.012 8.012 0 013.963 1.014 9.624 9.624 0 013.174 2.93 10.95 10.95 0 013.343-2.986 7.832 7.832 0 013.794-.958 7.759 7.759 0 017.888 7.925 9.862 9.862 0 01-.62 3.418 15.631 15.631 0 01-2.16 3.775 46.066 46.066 0 01-4.136 4.73q-2.6 2.646-6.569 6.294zm0-2.967q3.8-3.493 6.258-5.991a49.955 49.955 0 003.9-4.376 14.443 14.443 0 002.028-3.348 7.883 7.883 0 00.582-2.919 5.561 5.561 0 00-1.578-4.081 5.446 5.446 0 00-4.048-1.6 6.014 6.014 0 00-3.582 1.183 8.42 8.42 0 00-2.661 3.324h-1.84a8.329 8.329 0 00-2.624-3.305 5.951 5.951 0 00-3.582-1.2 5.446 5.446 0 00-4.048 1.6 5.57 5.57 0 00-1.578 4.087 8 8 0 00.582 2.937 14.627 14.627 0 002.028 3.38 45.082 45.082 0 003.925 4.376q2.482 2.477 6.238 5.933zm0-11.156z"
					transform="translate(-80 -202)"
					fill="#f8f9fa"
				/>
			</Svg>
			<DialogLogin visible={visible} setVisible={setVisible}/>
		</TouchableOpacity>
	);
}

export default WhiteHeart;

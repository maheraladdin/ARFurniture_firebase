import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	ImageBackground
} from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import ConBtn from "../myComponents/buttons/continue_button";
import LoginFace from "../myComponents/buttons/login_with_facebook_button";
import LoginGoogle from "../myComponents/buttons/login_with_google";
import SignUp from "../myComponents/buttons/sign_up_button";

const image = { uri: "https://via.placeholder.com/200x100" };

export default function login() {
	return (
		<ScrollView>
			<Back />
			<ImageBackground source={image} style={styles.image}>
				<Text>AR Furniture</Text>
			</ImageBackground>

		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: "cover",
	}
});

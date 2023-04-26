import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	ImageBackground,
	Dimensions,
	KeyboardAvoidingView,
} from "react-native";
import Back from "../myComponents/buttons/back_button_light_mode";
import {useState} from "react";
import ConBtn from "../myComponents/buttons/continue_button";

export default function Signup() {

	// username
	const [username, setUsername] = useState("");

	// email
	const [email, setEmail] = useState("");

	// password
	const [password, setPassword] = useState("");

	// confirm password
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<KeyboardAvoidingView
			behavior={"padding"}
		>
			<ScrollView>
				<Back />
				<ImageBackground source={{uri: "https://firebasestorage.googleapis.com/v0/b/arfurniture-2d013.appspot.com/o/backgrounds%2Fsignup.png?alt=media&token=4d83cc89-6edc-4a8d-baf9-3de851f173fd"}} style={styles.image}>
					<Text style={styles.imageText}>AR Furniture</Text>
				</ImageBackground>

				<View
					style={styles.inputContainer}
					behavior={"padding"}
				>
					<TextInput
						style={styles.input}
						placeholder={"username"}
						placeholderTextColor={"#CCC"}
						onChangeText={setEmail}
						value={email}
					/>
					<TextInput
						style={styles.input}
						placeholder={"email"}
						placeholderTextColor={"#CCC"}
						onChangeText={setEmail}
						value={email}
					/>
					<TextInput
						style={styles.input}
						placeholder={"password"}
						placeholderTextColor={"#CCC"}
						onChangeText={setPassword}
						value={password}
						secureTextEntry={true}
					/>
					<TextInput
						style={styles.input}
						placeholder={"confirm password"}
						placeholderTextColor={"#CCC"}
						onChangeText={setPassword}
						value={password}
						secureTextEntry={true}
					/>
					<ConBtn activity={"home"}/>
				</View>

			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: 200,
		position: "absolute",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingBottom: 10,
	},
	imageText: {
		fontSize: 30,
		color: "#518379",
	},
	input : {
		width: Dimensions.get("window").width - 20,
		height: 50,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 25,
		padding: 25,
		fontSize: 15,
	},
	inputContainer : {
		paddingVertical: 20,
		marginTop: 200,
		flex: 1,
		alignItems: "center",
		gap: 30,
		marginBottom: 20,
	}
});

import {StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity,Dimensions,KeyboardAvoidingView} from "react-native";
import ChangePhoto from "../myComponents/buttons/put_image";
import Back from "../myComponents/buttons/back_button_light_mode";
import Confirm from "../myComponents/buttons/confirm_button";
import {useRouter} from "expo-router";
import {useState} from "react";
import * as ImagePicker from "expo-image-picker";
import updateUser from "../logic/firebaseQueries/updateUser";
import {isLogin} from "../data/isLogin";

export default function editProfile() {

	const router = useRouter();

	// image
	const [image, setImage] = useState(isLogin.userData.image || "");

	// username
	const [username, setUsername] = useState("");

	// email
	const [email, setEmail] = useState("");

	const confirmHandler = async () => {
		// update user data
		await updateUser({username, email, image});
		// go to profile page
		router.push("./home");
	}

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			base64: true,
		});

		// if use didn't cancel the image picker
		if (!result.canceled) {
			setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={"padding"}
		>
		<ScrollView>
				<Back activity={"Profile"}/>
				<View style={styles.container}>
					<Image
						source={{uri: image || "https://via.placeholder.com/200x200"}}
						style={styles.image}
					/>
					<TouchableOpacity onPress={pickImage} style={styles.ChangePhoto}>
						<ChangePhoto />
					</TouchableOpacity>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder={"User name"}
							placeholderTextColor={"#CCC"}
							onChangeText={setUsername}
						/>
						<TextInput
							style={styles.input}
							placeholder={"Email"}
							placeholderTextColor={"#CCC"}
							onChangeText={setEmail}
						/>
					</View>

					<TouchableOpacity onPress={confirmHandler} style={styles.confirmButton}>
						<Confirm />
					</TouchableOpacity>
				</View>
		</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
		marginTop: 50,
	},
	ChangePhoto: {
		position: "absolute",
		top: 220,
	},
	container: {
		flex: 1,
		alignItems: "center",
		marginBottom: 20,
	},
	confirmButton: {
		marginVertical: 30,
	},
	input : {
		width: Dimensions.get("window").width - 20,
		height: 50,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 25,
		paddingLeft: 25,
		marginBottom: 25,
	},
	inputContainer : {
		marginTop: 40,
	}
});


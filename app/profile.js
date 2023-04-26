import Navigator from "../myComponents/home/navigator";
import {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import EditButton from "../myComponents/buttons/edit_button";
import TurnToDarkMode from "../myComponents/buttons/turn_to_dark_mode";
import PhoneIcon from "../myComponents/profile/light_mode/phone_icon";
import PrivacyPolicyIcon from "../myComponents/profile/light_mode/privacy_policy_icon";
import TermsAndConditions from "../myComponents/profile/light_mode/Terms_and_Conditions";
import Logout from "../myComponents/profile/light_mode/logout";
import {useRouter} from "expo-router";

export default function profile() {
	const [navigate, setNavigate] = useState("profile");
	const [profileData, setProfileData] = useState([]);

	const router = useRouter();

	const generateButton = (icon, text,activity) => {
		return (
			<TouchableOpacity onPress={activity ? ()=> router.push(activity) : null} style={styles.ButtonsNavigators}>
				{icon}
				<Text>{text}</Text>
			</TouchableOpacity>
		)
	}

	const Buttons = [
		{
			element: generateButton(<PhoneIcon/>, "Contact US", "contactUs"),
		},
		{
			element: generateButton(<PrivacyPolicyIcon />, "Privacy Policy", "privacyPolicy"),
		},
		{
			element: generateButton(<TermsAndConditions />, "Terms & Conditions", "termsAndConditions"),
		},
		{
			element: generateButton(<Logout />, "logout", "home"),
		}
		];

	return (
		<>
			<View style={styles.container}>
				<Image
					source={{uri: profileData.image || "https://via.placeholder.com/200x200"}}
					style={styles.image}
				/>
				<TouchableOpacity style={styles.editButton}>
					<EditButton />
				</TouchableOpacity>
				<Text style={styles.customerName}>
					{profileData.name || "Customer Name"}
				</Text>
				<TouchableOpacity style={styles.modeIcon}>
					<TurnToDarkMode />
				</TouchableOpacity>

				<FlatList
					data={Buttons}
					renderItem={({item}) => item.element}
					ItemSeparatorComponent={() => <View style={{height: 20}}/>}
					style={styles.flatList}
				/>

			</View>
			{/* navigator */}
			<Navigator style={styles.navigator} setNavigate={setNavigate} navigate={navigate}/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
		marginTop: 50,
	},
	editButton: {
		position: "absolute",
		top: 220,
	},
	customerName: {
		fontSize: 30,
		marginTop: 40,
	},
	modeIcon: {
		marginVertical: 20,
	},
	flatList: {
		alignSelf: "stretch",
		marginHorizontal: 10,
	},
	ButtonsNavigators: {
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		paddingBottom: 10,
		flex: 1,
		flexDirection: "row",
		gap: 10,
		fontWeight: "bold",
	}
});



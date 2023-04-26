import {StyleSheet, View, TextInput, ScrollView} from "react-native";
import ProfileAvatar from "../myComponents/profile/profile_avatar_photo";
import PutButton from "../myComponents/buttons/put_image";
import Back from "../myComponents/buttons/back_button_light_mode";
import Confirm from "../myComponents/buttons/confirm_button";
import { Link } from "expo-router";

export default function editProfile() {
	return (
		<ScrollView>
			<View style={{
				marginBottom: 20
			}}>
				<Back activity={"Profile"}/>
				<View style={{ marginTop: 40 }}>


					<View style={{ alignItems: "center", marginTop: 30 }}>
						<ProfileAvatar />
					</View>
					<View style={{ alignItems: "center", marginTop: -25 }}>
						<PutButton />
					</View>

					<View style={{ marginTop: 60 }}>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<TextInput
								style={{
									width: 300,
									height: 50,
									borderRadius: 30,
									borderColor: "#212529",
									borderWidth: 2,
									paddingLeft: 30,
								}}
								placeholder="Username"
							></TextInput>
						</View>

						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								marginTop: 20,
							}}
						>
							<TextInput
								style={{
									width: 300,
									height: 50,
									borderRadius: 30,
									borderColor: "#212529",
									borderWidth: 2,
									paddingLeft: 30,
								}}
								placeholder="Example@gmail.com"
							></TextInput>
						</View>

						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								marginTop: 20,
							}}
						>
							<TextInput
								style={{
									width: 300,
									height: 50,
									borderRadius: 30,
									borderColor: "#212529",
									borderWidth: 2,
									paddingLeft: 30,
								}}
								placeholder="Phone number"
							></TextInput>
						</View>
					</View>

					<View style={{ alignItems: "center", marginTop: 60 }}>
						<Link href={"./profile"}>
							<Confirm />
						</Link>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}


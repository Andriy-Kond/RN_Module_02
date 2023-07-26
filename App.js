import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	Text,
	View,
	Image,
	ImageBackground,
	TextInput,
	TouchableOpacity,
} from "react-native";

import { styles } from "./AppStyles";

import bgPhotoImage from "./src/img/bg_photo.jpg";
import emptyImg from "./src/img/reg_rectangle_grey.png";

import RobotoRegular400 from "./src/fonts/Roboto-Regular-400.ttf";
import RobotoMedium500 from "./src/fonts/Roboto-Medium-500.ttf";
import RobotoBold700 from "./src/fonts/Roboto-Bold-700.ttf";
import { useFonts } from "expo-font";

export default function App() {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const [fontsLoaded] = useFonts({
		RobotoRegular400,
		RobotoMedium500,
		RobotoBold700,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar />

			<ImageBackground
				source={bgPhotoImage}
				style={styles.container}
				resizeMode="cover">
				<View style={styles.form}>
					<Image style={styles.regImg} source={emptyImg}></Image>
					<Text style={styles.formTitle}>Реєстрація</Text>

					<TextInput
						style={styles.input}
						value={login}
						placeholder={"Логін"}
						placeholderTextColor={"#BDBDBD"}
						onChangeText={(text) => setLogin(text)}
					/>

					<TextInput
						style={styles.input}
						value={email}
						placeholder={"Адреса електронної пошти"}
						placeholderTextColor={"#BDBDBD"}
						onChangeText={(text) => setEmail(text)}
					/>

					<View style={[styles.input, styles.passwordInputContainer]}>
						<TextInput
							style={styles.passwordInput}
							value={password}
							placeholder={"Пароль"}
							placeholderTextColor={"#BDBDBD"}
							onChangeText={(text) => setPassword(text)}
							secureTextEntry={!showPassword}
						/>
						<TouchableOpacity onPress={togglePasswordVisibility}>
							<Text style={styles.passwordToggleText}>
								{showPassword ? "Приховати" : "Показати"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</>
	);
}

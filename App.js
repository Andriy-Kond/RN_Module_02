import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
	Text,
	View,
	Image,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Keyboard,
	SafeAreaView,
} from "react-native";
import CustomButton from "./CustomBtn";
import { styles } from "./AppStyles";
import bgPhotoImage from "./src/img/bg_photo.jpg";
import RobotoRegular400 from "./src/fonts/Roboto-Regular-400.ttf";
import RobotoMedium500 from "./src/fonts/Roboto-Medium-500.ttf";
import RobotoBold700 from "./src/fonts/Roboto-Bold-700.ttf";
import { useFonts } from "expo-font";

import regEmptyImg from "./src/img/reg_rectangle_grey.png";
// import RegAddImgBtn from "./src/img/reg_add_btn.svg";

export default function App() {
	const [fontsLoaded] = useFonts({
		RobotoRegular400,
		RobotoMedium500,
		RobotoBold700,
	});

	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [keyboardVisible, setKeyboardVisible] = useState(false);
	const [formHeight, setFormHeight] = useState(550);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			() => {
				setKeyboardVisible(true);
				setFormHeight(374);
			}
		);

		const keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			() => {
				setKeyboardVisible(false);
				setFormHeight(550);
			}
		);

		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, []);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar />

			<SafeAreaView
				// behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.container}>
				{/* фонове зображення */}
				<Image
					source={bgPhotoImage} // посилання на фонове зображення
					style={styles.imgBg}
					resizeMode="cover"></Image>

				{/* Форма з інпутами */}
				<View style={[styles.form, { height: formHeight }]}>
					<View style={styles.regImageContainer}>
						<Image style={styles.regEmptyImg} source={regEmptyImg}></Image>
						{/* <RegAddImgBtn width={25} height={25} /> */}
					</View>
					<Text style={styles.formTitle}>Реєстрація</Text>

					<View style={styles.inputsWrapper}>
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

					{!keyboardVisible && (
						<>
							<CustomButton
								title="Зареєструватись"
								width="100%"
								buttonStyle={{ width: "100%", marginBottom: 16 }}
								// onPress={handleButtonPress}
							/>

							<TouchableOpacity
							// onPress={handleLogin}
							>
								<Text style={styles.loginBtn}>Вже є акаунт? Увійти</Text>
							</TouchableOpacity>
						</>
					)}
				</View>
			</SafeAreaView>
		</>
	);
}

import React, { useState, useEffect } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	ScrollView,
} from "react-native";

import { styles } from "./LoginScreenStyles.js";

import bgPhotoImage from "../../img/bg_photo.jpg";
import InputLoginForm from "../../components/inputLoginForm/InputLoginForm.jsx";

const LoginScreen = () => {
	const [keyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			() => {
				setKeyboardVisible(true);
			}
		);

		const keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			() => {
				setKeyboardVisible(false);
			}
		);

		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, []);

	const mainBtnText = "Увійти";
	const secondBtnText = "Немає акаунту? Зареєструватися";

	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{/* Обгортка для контролю за клавіатурою */}
				{/* <ScrollView> */}
				<KeyboardAvoidingView
					style={styles.container}
					behavior={Platform.OS === "ios" ? "padding" : "height"}>
					{/* фонове зображення */}
					<Image
						source={bgPhotoImage} // посилання на фонове зображення
						style={styles.imgBg}
						resizeMode="cover"
					/>
					{/* Форма з інпутами */}
					<InputLoginForm
						keyboardVisible={keyboardVisible}
						mainBtnText={mainBtnText}
						secondBtnText={secondBtnText}
					/>
				</KeyboardAvoidingView>
				{/* </ScrollView> */}
			</TouchableWithoutFeedback>
		</>
	);
};

export default LoginScreen;

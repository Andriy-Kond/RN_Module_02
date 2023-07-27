import React, { useState, useEffect } from "react";
import { Image, KeyboardAvoidingView, Keyboard } from "react-native";

import { styles } from "./RegistrationScreenStyles.js";

import bgPhotoImage from "../../img/bg_photo.jpg";
import InputForm from "../../components/inputForm/InputForm.jsx";

const RegistrationScreen = () => {
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

	const mainBtnText = "Зареєструватися";
	const secondBtnText = "Вже є акаунт? Увійти";
	const isRegistered = false;

	return (
		<>
			{/* Обгортка для контролю за клавіатурою */}
			<KeyboardAvoidingView
				// behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.container}>
				{/* фонове зображення */}
				<Image
					source={bgPhotoImage} // посилання на фонове зображення
					style={styles.imgBg}
					resizeMode="cover"></Image>

				{/* Форма з інпутами */}
				<InputForm
					keyboardVisible={keyboardVisible}
					isRegistered={isRegistered}
					mainBtnText={mainBtnText}
					secondBtnText={secondBtnText}></InputForm>
			</KeyboardAvoidingView>
		</>
	);
};

export default RegistrationScreen;

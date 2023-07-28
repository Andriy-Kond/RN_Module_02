import React, { useState, useEffect } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	ScrollView,
} from "react-native";

import { styles } from "./RegistrationScreenStyles.js";

import bgPhotoImage from "../../img/bg_photo.jpg";
import InputRegisterForm from "../../components/inputRegisterForm/InputRegisterForm.jsx";

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

	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{/* <ScrollView> */}
				{/* Обгортка для контролю за клавіатурою */}
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.container}>
					{/* фонове зображення */}
					<Image
						source={bgPhotoImage} // посилання на фонове зображення
						style={styles.imgBg}
						resizeMode="cover"
					/>

					{/* Форма з інпутами */}
					<InputRegisterForm
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

export default RegistrationScreen;

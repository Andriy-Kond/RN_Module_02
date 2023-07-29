// import React, { useState, useEffect } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	ScrollView,
} from "react-native";

import { styles } from "./RegistrationStyles.js";

import bgPhotoImage from "../../img/bg_photo.jpg";
import InputRegisterForm from "../../components/registerForm/RegisterForm.jsx";

export default function Registration() {
	const mainBtnText = "Зареєструватися";
	const secondBtnText = "Вже є акаунт? Увійти";

	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					{/* Обгортка для контролю за клавіатурою */}
					<KeyboardAvoidingView
						// behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}>
						{/* фонове зображення */}
						<Image
							source={bgPhotoImage} // посилання на фонове зображення
							style={styles.imgBg}
							resizeMode="cover"
						/>

						{/* Форма з інпутами */}
						<InputRegisterForm
							mainBtnText={mainBtnText}
							secondBtnText={secondBtnText}
						/>
					</KeyboardAvoidingView>
				</ScrollView>
			</TouchableWithoutFeedback>
		</>
	);
}
// import React, { useState, useEffect } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	ScrollView,
} from "react-native";

import { styles } from "./LoginStyles.js";

import bgPhotoImage from "../../img/bg_photo.jpg";
import InputLoginForm from "../../components/loginForm/LoginForm.jsx";

export default function Login() {
	const mainBtnText = "Увійти";
	const secondBtnText = "Немає акаунту? Зареєструватися";

	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{/* Обгортка для контролю за клавіатурою */}
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<KeyboardAvoidingView
						style={styles.container}
						// behavior={Platform.OS === "ios" ? "padding" : "height"}
					>
						{/* фонове зображення */}
						<Image
							source={bgPhotoImage} // посилання на фонове зображення
							style={styles.imgBg}
							resizeMode="cover"
						/>
						{/* Форма з інпутами */}
						<InputLoginForm
							mainBtnText={mainBtnText}
							secondBtnText={secondBtnText}
						/>
					</KeyboardAvoidingView>
				</ScrollView>
			</TouchableWithoutFeedback>
		</>
	);
}
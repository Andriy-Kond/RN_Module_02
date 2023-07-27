import React, { useState, useEffect, useReducer } from "react";
import {
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Keyboard,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

import CustomButton from "./CustomBtn.jsx";
import { styles } from "./RegistrationScreenStyles.js";

import bgPhotoImage from "./img/bg_photo.jpg";
import regEmptyImg from "./img/reg_rectangle_grey.png";

const inputsInitialState = {
	inputs: {},
};

const inputsReducer = (state, action) => {
	switch (action.type) {
		case "FOCUS_CHANGE":
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.isFocused,
				},
			};
		default:
			return state;
	}
};

const RegistrationScreen = () => {
	const [inputsState, dispatch] = useReducer(inputsReducer, inputsInitialState);

	const onFocusChange = (name, isFocused) => {
		dispatch({ type: "FOCUS_CHANGE", name, isFocused });
	};

	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const [keyboardVisible, setKeyboardVisible] = useState(false);
	// const [isPressed, setIsPressed] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

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

	return (
		<>
			<KeyboardAvoidingView
				// behavior={Platform.OS === "ios" ? "padding" : "height"}

				style={styles.container}>
				{/* фонове зображення */}
				<Image
					source={bgPhotoImage} // посилання на фонове зображення
					style={styles.imgBg}
					resizeMode="cover"></Image>

				{/* Форма з інпутами */}
				<View
					style={[
						styles.form,
						// { height: formHeight }
					]}>
					<View style={styles.regImageContainer}>
						<Image style={styles.regEmptyImg} source={regEmptyImg}></Image>
					</View>

					<TouchableOpacity
						style={[styles.regAddImgBtn]}
						onPress={() => console.log("Button pressed1")}
						// onPressIn={() => setIsPressed(true)}
						// onPressOut={() => setIsPressed(false)}
					>
						<Svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<Circle cx="12.5" cy="12.5" r="12" fill="#fff" stroke="#FF6C00" />
							<Path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
								fill="#FF6C00"
							/>
						</Svg>
					</TouchableOpacity>
					<Text style={styles.formTitle}>Реєстрація</Text>

					<View
						style={[
							styles.inputsWrapper,
							keyboardVisible && { marginBottom: 16 },
						]}>
						<TextInput
							style={[
								styles.input,
								inputsState.inputs["loginInput"] ? styles.inputFocused : null,
							]}
							value={login}
							placeholder={"Логін"}
							placeholderTextColor={"#BDBDBD"}
							onChangeText={(text) => setLogin(text)}
							onFocus={() => onFocusChange("loginInput", true)}
							onBlur={() => onFocusChange("loginInput", false)}
						/>

						<TextInput
							style={[
								styles.input,
								inputsState.inputs["emailInput"] ? styles.inputFocused : null,
							]}
							value={email}
							placeholder={"Адреса електронної пошти"}
							placeholderTextColor={"#BDBDBD"}
							onChangeText={(text) => setEmail(text)}
							onFocus={() => onFocusChange("emailInput", true)}
							onBlur={() => onFocusChange("emailInput", false)}
						/>

						<View
							style={[
								styles.input,
								styles.passwordInputContainer,
								inputsState.inputs["passwordInput"]
									? styles.inputFocused
									: null,
							]}>
							<TextInput
								style={styles.passwordInput}
								value={password}
								placeholder={"Пароль"}
								placeholderTextColor={"#BDBDBD"}
								onChangeText={(text) => setPassword(text)}
								secureTextEntry={!showPassword}
								onFocus={() => onFocusChange("passwordInput", true)}
								onBlur={() => onFocusChange("passwordInput", false)}
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
								buttonStyle={styles.regBtn}
								// buttonStyle={{ width: "100%", marginBottom: 16 }}
								// onPress={handleButtonPress}
							/>

							<TouchableOpacity
								// onPress={handleLogin}
								onPress={() => console.log("Button pressed")}>
								<Text style={styles.loginBtn}>Вже є акаунт? Увійти</Text>
							</TouchableOpacity>
						</>
					)}
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default RegistrationScreen;

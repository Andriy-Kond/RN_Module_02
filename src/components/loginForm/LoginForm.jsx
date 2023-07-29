import React, { useState, useEffect, useReducer } from "react";
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./LoginFormStyles.js";

import BtnMain from "../BtnMain.jsx";
import BtnSecond from "../BtnSecond.jsx";

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

const LoginForm = ({ mainBtnText, secondBtnText }) => {
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

	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [inputsState, dispatch] = useReducer(inputsReducer, inputsInitialState);
	const onFocusChange = (name, isFocused) => {
		dispatch({ type: "FOCUS_CHANGE", name, isFocused });
	};

	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<View style={[styles.form]}>
			<Text style={styles.formTitle}>Увійти</Text>

			<View
				style={[styles.inputsWrapper, keyboardVisible && { marginBottom: 16 }]}>
				<TextInput
					value={email}
					autoFocus
					keyboardType="email-address"
					style={[
						styles.input,
						inputsState.inputs["emailInput"] ? styles.inputFocused : null,
					]}
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
						inputsState.inputs["passwordInput"] ? styles.inputFocused : null,
					]}>
					<TextInput
						value={password}
						placeholder={"Пароль"}
						style={styles.passwordInput}
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
					<BtnMain
						title={mainBtnText}
						buttonStyle={styles.mainBtn}
						onPress={() => {}}
					/>

					<BtnSecond
						title={secondBtnText}
						onPress={() => navigation.navigate("Registration")}
					/>
				</>
			)}
		</View>
	);
};

export default LoginForm;

import React, { useState, useReducer, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./LoginFormStyles.js";

import { BtnMain } from "../btns/BtnMain.jsx";
import { BtnSecond } from "../btns/BtnSecond.jsx";
// import { inputsReducer } from "../../utils/inputsReducer.js";

import { StateContext } from "../../utils/inputsContextContainer";

export default function LoginForm({ mainBtnText, secondBtnText }) {
	const navigation = useNavigation();

	const { inputsState, dispatch } = useContext(StateContext);
	// console.log("LoginForm >> inputsInitialState:", inputsInitialState);

	// const [inputsState, dispatch] = useReducer(inputsReducer, inputsInitialState);
	// console.log("LoginForm >> inputsState:", inputsState);

	const [onFocus, setOnFocus] = useState(false);

	const onFocusChange = (name, isFocused) => {
		setOnFocus(isFocused);
		dispatch({ type: "FOCUS_CHANGE", name, isFocused });
	};

	const setEmail = (email) => {
		dispatch({ type: "EMAIL_CHANGE", email });
	};

	const setPassword = (password) => {
		dispatch({ type: "PASSWORD_CHANGE", password });
	};

	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// submit login
	const submitLogin = () => {
		// логіка перевірки email і пароля
		// Якщо дані вірні то перехід на HomeScreen
		dispatch({ type: "SUBMIT", inputsInitialState });
		navigation.navigate("Home", { screen: "Posts" });
		// if (email === "example@example.com" && password === "password") {
		// }
	};

	return (
		<View style={[styles.form]}>
			<Text style={styles.formTitle}>Увійти</Text>

			<View style={[styles.inputsWrapper, onFocus && { marginBottom: 16 }]}>
				<TextInput
					placeholder={"Адреса електронної пошти"}
					value={inputsState.email}
					autoFocus
					keyboardType="email-address"
					style={[
						styles.input,
						inputsState.inputs["emailInput"] ? styles.inputFocused : null,
					]}
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
						placeholder={"Пароль"}
						value={inputsState.password}
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

			{!onFocus && (
				<>
					<BtnMain
						title={mainBtnText}
						buttonStyle={styles.mainBtn}
						onPress={() => submitLogin()}
					/>

					<BtnSecond
						title={secondBtnText}
						onPress={() => navigation.navigate("Registration")}
					/>
				</>
			)}
		</View>
	);
}

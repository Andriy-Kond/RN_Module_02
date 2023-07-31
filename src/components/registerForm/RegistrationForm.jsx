import React, { useState, useReducer, useContext } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./RegistrationFormStyles.js";

import { BtnMain } from "../btns/BtnMain.jsx";
import { BtnSecond } from "../btns/BtnSecond.jsx";

import regEmptyImg from "../../img/reg_rectangle_grey.png";
// import { inputsReducer } from "../../utils/inputsReducer.js";

import { StateContext } from "../../utils/inputsContextContainer";

export default function RegistrationForm({ mainBtnText, secondBtnText }) {
	const navigation = useNavigation();

	const { inputsState, dispatch } = useContext(StateContext);
	// console.log("RegistrationForm >> inputsInitialState:", inputsInitialState);

	// const [inputsState, dispatch] = useReducer(inputsReducer, inputsInitialState);
	// console.log("RegistrationForm >> inputsState:", inputsState);

	const [onFocus, setOnFocus] = useState(false);

	const onFocusChange = (name, isFocused) => {
		setOnFocus(isFocused);
		dispatch({ type: "FOCUS_CHANGE", name, isFocused });
	};

	const setLogin = (login) => {
		dispatch({ type: "LOGIN_CHANGE", login });
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

	// submit registration
	const submitRegistration = () => {
		dispatch({ type: "SUBMIT" });
		navigation.navigate("Home", { screen: "Posts" });
	};

	return (
		<View style={styles.form}>
			<View style={styles.regImageContainer}>
				<Image style={styles.regEmptyImg} source={regEmptyImg} />

				<TouchableOpacity
					style={[styles.regAddImgBtn]}
					onPress={() => console.log("Button regAddImgBtn pressed")}>
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
			</View>

			<Text style={styles.formTitle}>Реєстрація</Text>

			<View style={[styles.inputsWrapper, onFocus && { marginBottom: 16 }]}>
				<TextInput
					placeholder={"Логін"}
					value={inputsState.login}
					autoFocus
					style={[
						styles.input,
						inputsState.inputs["loginInput"] ? styles.inputFocused : null,
					]}
					placeholderTextColor={"#BDBDBD"}
					onChangeText={(text) => setLogin(text)}
					onFocus={() => onFocusChange("loginInput", true)}
					onBlur={() => onFocusChange("loginInput", false)}
				/>

				<TextInput
					placeholder={"Адреса електронної пошти"}
					value={inputsState.email}
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
						onPress={() => submitRegistration()}
					/>

					<BtnSecond
						title={secondBtnText}
						onPress={() => {
							navigation.navigate("Login");
						}}
					/>
				</>
			)}
		</View>
	);
}

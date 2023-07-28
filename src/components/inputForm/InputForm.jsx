import React, { useState, useEffect, useReducer } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { styles } from "./InputFormStyles.js";

import BtnMain from "../BtnMain.jsx";
import BtnSecond from "../BtnSecond.jsx";

import regEmptyImg from "../../img/reg_rectangle_grey.png";

const inputsInitialState = {
	inputs: {},
};

const inputsReducer = (state, action) => {
	// state - поточний стан компонента
	// action - об'єкт дії, який містить інформацію про те, яку дію необхідно виконати.
	switch (action.type) {
		case "FOCUS_CHANGE":
			return {
				...state, // розпилення для створення нового об'єкта стану -  зберігаємо всі властивості стану, а потім перезаписуємо inputs з новим значенням
				inputs: {
					...state.inputs,
					[action.name]: action.isFocused,
				},
			};
		default:
			return state;
	}
};

const InputForm = ({
	keyboardVisible,
	isRegistered,
	mainBtnText,
	secondBtnText,
}) => {
	const [inputsState, dispatch] = useReducer(inputsReducer, inputsInitialState);
	// inputsInitialState - початковий стан компоненту, переданий у useReducer
	// inputsState - це змінна, в якій зберігається поточний стан компоненту (містить об'єкт inputs)
	// dispatch - ф-я, що приймає об'єкт дії і викликає редюсер для обробки цієї дії та оновлення стану компоненту

	const onFocusChange = (name, isFocused) => {
		dispatch({ type: "FOCUS_CHANGE", name, isFocused });
		// створюємо дію з типом "FOCUS_CHANGE"
	};

	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<View style={[styles.form]}>
			{!isRegistered && (
				<View style={styles.regImageContainer}>
					<Image style={styles.regEmptyImg} source={regEmptyImg}></Image>

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
			)}

			<Text style={isRegistered ? styles.formTitleReg : styles.formTitle}>
				{isRegistered ? "Увійти" : "Реєстрація"}
			</Text>

			<View
				style={[styles.inputsWrapper, keyboardVisible && { marginBottom: 16 }]}>
				{!isRegistered && (
					<TextInput
						value={login}
						autoFocus={!isRegistered ? true : false}
						style={[
							styles.input,
							inputsState.inputs["loginInput"] ? styles.inputFocused : null,
						]}
						placeholder={"Логін"}
						placeholderTextColor={"#BDBDBD"}
						onChangeText={(text) => setLogin(text)}
						onFocus={() => onFocusChange("loginInput", true)}
						onBlur={() => onFocusChange("loginInput", false)}
					/>
				)}

				<TextInput
					value={email}
					autoFocus={isRegistered ? true : false}
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
						buttonStyle={styles.regBtn}
						onPress={() => console.log("Button Зареєструватись pressed")}
					/>

					<BtnSecond
						title={secondBtnText}
						onPress={() => console.log("Button Увійти pressed")}></BtnSecond>
				</>
			)}
		</View>
	);
};

export default InputForm;

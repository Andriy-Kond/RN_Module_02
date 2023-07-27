import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BtnSecond = ({ title, onPress, buttonStyle }) => {
	return (
		<TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonText: {
		marginBottom: 44,
		color: "#1B4371",
		textAlign: "center",
		fontFamily: "RobotoRegular400",
		fontSize: 16,
	},

	// button: {
	// 	backgroundColor: "#FF6C00",
	// 	paddingVertical: 16,
	// 	paddingHorizontal: 32,
	// 	borderRadius: 100,
	// },

	// buttonText: {
	// 	textAlign: "center",
	// 	color: "#FFF",
	// 	fontFamily: "RobotoRegular400",
	// 	fontSize: 16,
	// },
});

export default BtnSecond;

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BtnSecond = ({ title, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
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
});

export default BtnSecond;

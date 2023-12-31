import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export function BtnGoBack({ buttonStyle }) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={[styles.button, buttonStyle]}
			onPress={() => navigation.goBack()}>
			<Svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<Path
					d="M20 12H4"
					stroke="#212121"
					stroke-opacity="0.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<Path
					d="M10 18L4 12L10 6"
					stroke="#212121"
					stroke-opacity="0.8"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</Svg>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		marginLeft: 16,
		// backgroundColor: "#FF6C00",
		// paddingVertical: 16,
		// paddingHorizontal: 32,
		// borderRadius: 100,
	},
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		margin: 20,
		padding: 20,
		flex: 1,
	},

	input: {
		height: 60,
		width: "100%", // 343
		marginBottom: 16,
		paddingHorizontal: 16,

		borderWidth: 1,

		borderRadius: 10,
		backgroundColor: "#F6F6F6",
		borderColor: "#E8E8E8",

		color: "#212121",
		fontFamily: "RobotoRegular400",
		fontSize: 16,

		alignItems: "center",
	},

	passwordToggleText: {
		color: "#1B4371",
	},
});

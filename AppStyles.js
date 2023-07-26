import { StyleSheet } from "react-native";

const regImgHeight = 120;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 0,
		padding: 0,
		justifyContent: "flex-end",
		alignItems: "center",
	},

	form: {
		position: "relative",
		height: 549,
		width: "100%",
		paddingLeft: 16,
		paddingRight: 16,

		alignItems: "center",
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	regImg: {
		position: "absolute",
		width: regImgHeight,
		height: regImgHeight,

		borderRadius: 16,
		background: "#F6F6F6",

		top: 0,
		left: 0,

		transform: [{ translateY: -regImgHeight / 2 }],
	},

	formTitle: {
		paddingTop: 92,
		paddingBottom: 32,
		color: "#212121",
		fontFamily: "RobotoMedium500",
		fontSize: 30,
		letterSpacing: 0.3,
	},

	input: {
		height: 50,
		width: 343,
		marginBottom: 16,

		paddingLeft: 16,
		paddingRight: 16,
		borderWidth: 1,

		borderRadius: 10,
		backgroundColor: "#F6F6F6",
		borderColor: "#E8E8E8",

		color: "#BDBDBD",
		fontFamily: "RobotoRegular400",
		fontSize: 16,

		alignItems: "center",
	},

	passwordInputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	passwordInput: {
		flex: 1,
	},

	passwordToggleText: {
		color: "#1B4371",
	},
});

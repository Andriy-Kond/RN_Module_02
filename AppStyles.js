import { StyleSheet } from "react-native";

const regImgHeight = 120;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},

	imgBg: {
		// flex: 1,
		// resizeMode: "cover",
		// justifyContent: "center",

		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},

	form: {
		width: "100%",
		paddingLeft: 16,
		paddingRight: 16,

		alignItems: "center",
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	regImageContainer: {
		position: "relative",
	},

	regAddImgBtn: {
		position: "absolute",
		width: 25,
		height: 25,
		transform: [
			{ translateY: regImgHeight / 8 },
			{ translateX: regImgHeight / 2 - 12.5 },
		],
	},

	regEmptyImg: {
		position: "absolute",
		width: regImgHeight,
		height: regImgHeight,

		borderRadius: 16,
		backgroundColor: "#F6F6F6",

		top: 0,
		left: 0,

		transform: [
			{ translateY: -regImgHeight / 2 },
			{ translateX: -regImgHeight / 2 },
		],
	},

	formTitle: {
		paddingTop: 92,
		paddingBottom: 32,
		color: "#212121",
		fontFamily: "RobotoMedium500",
		fontSize: 30,
		letterSpacing: 0.3,
	},

	inputsWrapper: {
		marginBottom: 26,
		width: "100%",
	},

	input: {
		height: 50,
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

	regBtn: {
		width: 343,
	},

	loginBtn: {
		color: "#1B4371",
		textAlign: "center",
		fontFamily: "RobotoRegular400",
		fontSize: 16,
	},
});

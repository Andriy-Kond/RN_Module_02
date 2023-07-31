import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	scrollContainer: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	container: {
		paddingHorizontal: 16,
		paddingTop: 32,
		flex: 1,
		width: "100%",
		backgroundColor: "white",
	},

	item: {
		flexDirection: "row",
		alignItems: "center",
	},

	userImg: {
		borderRadius: 16,
		marginRight: 8,
		width: 60,
		height: 60,
	},

	userName: {
		color: "#212121",
		fontFamily: "RobotoBold700",
		fontSize: 13,
	},

	userEmail: {
		color: "rgba(33, 33, 33, 0.80)",
		fontFamily: "RobotoRegular400",
		fontSize: 11,
	},
});

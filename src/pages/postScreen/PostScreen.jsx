import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import { styles } from "./PostScreenStyles";

export default function PostScreen() {
	return (
		<KeyboardAvoidingView
		// behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView style={styles.container}>
					<Text style={styles.passwordToggleText}>I am PostScreen</Text>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

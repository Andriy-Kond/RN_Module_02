import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./MapStyles";

export default function Map() {
	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<KeyboardAvoidingView
						// behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}>
						<Text style={styles.passwordToggleText}>I am Map</Text>
					</KeyboardAvoidingView>
				</ScrollView>
			</TouchableWithoutFeedback>
		</>
	);
}

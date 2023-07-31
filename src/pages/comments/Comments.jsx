import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./CommentsStyles";

export default function Comments() {
	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<KeyboardAvoidingView
						// behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}>
						<Text>I am Comments</Text>
					</KeyboardAvoidingView>
				</ScrollView>
			</TouchableWithoutFeedback>
		</>
	);
}

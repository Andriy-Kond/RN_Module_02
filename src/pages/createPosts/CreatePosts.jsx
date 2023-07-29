import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./CreatePostsStyles";

export default function CreatePosts() {
	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<KeyboardAvoidingView
						// behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}>
						<Text style={styles.passwordToggleText}>I am CreatePosts</Text>
					</KeyboardAvoidingView>
				</ScrollView>
			</TouchableWithoutFeedback>
		</>
	);
}

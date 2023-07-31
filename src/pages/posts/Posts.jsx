import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Image,
	View,
} from "react-native";

import Svg, { Path } from "react-native-svg";
import { styles } from "./PostsStyles";

import userImg from "../../img/reg_rectangle_grey.png";

export default function Posts() {
	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<KeyboardAvoidingView
						// behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}>
						<View style={styles.item}>
							<Image style={styles.userImg} source={userImg} />
							<View>
								<Text style={styles.userName}>Natali Romanova</Text>
								<Text style={styles.userEmail}>email@example.com</Text>
							</View>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
			</TouchableWithoutFeedback>
		</>
	);
}

import {
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	ScrollView,
} from "react-native";

import { styles } from "./LoginStyles.js";

import bgPhotoImage from "../../img/bg_photo.jpg";
import LoginForm from "../../components/loginForm/LoginForm.jsx";

export default function Login() {
	const mainBtnText = "Увійти";
	const secondBtnText = "Немає акаунту? Зареєструватися";

	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
				{/* Обгортка для контролю за клавіатурою */}
				<KeyboardAvoidingView
					style={styles.container} // уникнення перекриття контенту клавіатурою

					// behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					{/* фонове зображення */}
					<Image
						source={bgPhotoImage} // посилання на фонове зображення
						style={styles.imgBg}
						resizeMode="cover"
					/>
					{/* Форма з інпутами */}
					<LoginForm
						mainBtnText={mainBtnText}
						secondBtnText={secondBtnText}
						// style={styles.loginFormContainer}
					/>
				</KeyboardAvoidingView>
				{/* </ScrollView> */}
			</TouchableWithoutFeedback>
		</>
	);
}

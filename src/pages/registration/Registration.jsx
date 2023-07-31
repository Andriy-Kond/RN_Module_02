import {
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	ScrollView,
	View,
} from "react-native";

import { styles } from "./RegistrationStyles.js";

import bgPhotoImage from "../../img/bg_photo.jpg";
import RegistrationForm from "../../components/registerForm/RegistrationForm.jsx";

export default function Registration() {
	const mainBtnText = "Зареєструватися";
	const secondBtnText = "Вже є акаунт? Увійти";

	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					{/* фонове зображення */}
					<Image
						source={bgPhotoImage} // посилання на фонове зображення
						style={styles.imgBg}
						resizeMode="cover"
					/>
					{/* Обгортка для контролю за клавіатурою */}
					<KeyboardAvoidingView
						// behavior={Platform.OS === "ios" ? "padding" : "height"}
						style={styles.container}>
						{/* Форма з інпутами */}
						<RegistrationForm
							mainBtnText={mainBtnText}
							secondBtnText={secondBtnText}
						/>
					</KeyboardAvoidingView>
				</ScrollView>
			</TouchableWithoutFeedback>
		</>
	);
}

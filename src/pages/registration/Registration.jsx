import {
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import { styles } from "./RegistrationStyles.js";

import bgPhotoImage from "../../img/bg_photo.jpg";
import RegistrationForm from "../../components/registrationForm/RegistrationForm.jsx";

export default function Registration() {
	const mainBtnText = "Зареєструватися";
	const secondBtnText = "Вже є акаунт? Увійти";

	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.registrationContainer}>
					{/* фонове зображення */}
					<Image
						source={bgPhotoImage} // посилання на фонове зображення
						style={styles.imgBg}
						resizeMode="cover"
					/>
					{/* Обгортка для контролю за клавіатурою */}
					<KeyboardAvoidingView // уникнення перекриття контенту клавіатурою
						// behavior={Platform.OS === "ios" && "padding"}
						behavior={Platform.OS === "ios" ? "padding" : null}
						style={styles.keyboardContainer}>
						{/* Форма з інпутами */}

						<RegistrationForm
							mainBtnText={mainBtnText}
							secondBtnText={secondBtnText}
						/>
					</KeyboardAvoidingView>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
}

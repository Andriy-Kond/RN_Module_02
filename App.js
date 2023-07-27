import { StatusBar } from "expo-status-bar";

import RobotoRegular400 from "./src/fonts/Roboto-Regular-400.ttf";
import RobotoMedium500 from "./src/fonts/Roboto-Medium-500.ttf";
import RobotoBold700 from "./src/fonts/Roboto-Bold-700.ttf";
import { useFonts } from "expo-font";

import LoginScreen from "./src/LoginScreen";
import RegistrationScreen from "./src/RegistrationScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		RobotoRegular400,
		RobotoMedium500,
		RobotoBold700,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<StatusBar />
			<LoginScreen></LoginScreen>
			<RegistrationScreen></RegistrationScreen>
		</>
	);
}

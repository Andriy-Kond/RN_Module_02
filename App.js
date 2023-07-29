import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

// fonts
import { useFonts } from "expo-font";
import RobotoRegular400 from "./src/fonts/Roboto-Regular-400.ttf";
import RobotoMedium500 from "./src/fonts/Roboto-Medium-500.ttf";
import RobotoBold700 from "./src/fonts/Roboto-Bold-700.ttf";

// Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import LoginScreen from "./src/pages/login/Login";
import RegistrationScreen from "./src/pages/registration/Registration";
import PostScreen from "./src/pages/post/Post";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

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
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar />

				<MainStack.Navigator
					initialRouteName="Login"
					// screenOptions={{ headerShown: false }} // відключає усі заголовки
				>
					<MainStack.Screen
						name="Registration"
						component={RegistrationScreen}
						options={({ title: "Registration screen" }, { headerShown: false })}
					/>
					<MainStack.Screen
						name="Login"
						component={LoginScreen}
						options={({ title: "Login screen" }, { headerShown: false })}
					/>
					<MainStack.Screen name="Post" component={PostScreen} />
				</MainStack.Navigator>
			</SafeAreaView>
		</NavigationContainer>
	);
}

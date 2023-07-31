import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";

// fonts
import { useFonts } from "expo-font";
import RobotoRegular400 from "./src/fonts/Roboto-Regular-400.ttf";
import RobotoMedium500 from "./src/fonts/Roboto-Medium-500.ttf";
import RobotoBold700 from "./src/fonts/Roboto-Bold-700.ttf";

// Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Comments from "./src/pages/comments/Comments";
import CreatePosts from "./src/pages/createPosts/CreatePosts";
import Home from "./src/pages/home/Home";
import Login from "./src/pages/login/Login";
import Map from "./src/pages/map/Map";
import Posts from "./src/pages/posts/Posts";
import Profile from "./src/pages/profile/Profile";
import Registration from "./src/pages/registration/Registration";
import { BtnGoBack } from "./src/components/btns/BtnGoBack";

import { styles } from "./AppStyles";

import { BtnLogout } from "./src/components/btns/BtnLogout";

// import { StateContext } from "./src/utils/inputsContext";

import { InputsContextContainer } from "./src/utils/inputsContextContainer";

// const inputsInitialState = {
// 	inputs: {
// 		loginInput: "",
// 		emailInput: "",
// 		passwordInput: "",
// 	},
// 	login: "",
// 	email: "",
// 	password: "",
// };

// Головний стек навігації
const MainStack = createStackNavigator();
const MainStackNavigator = () => {
	return (
		<MainStack.Navigator
			initialRouteName="Login"
			screenOptions={{ headerShown: false }} // налаштування для усіх екранів
		>
			<MainStack.Screen
				name="Login"
				component={Login}
				options={{ title: "Login screen" }} // налаштування для кожного екрану особисто
			/>
			<MainStack.Screen
				name="Registration"
				component={Registration}
				options={{ title: "Registration screen" }}
			/>
			<MainStack.Screen name="Home" component={BottomTabNavigator} />
			<MainStack.Screen name="Comments" component={Comments} />
		</MainStack.Navigator>
	);
};

// Екран Bottom Tab навігації
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerStyle: styles.headerStyle,
			}}>
			<Tab.Screen
				name="Posts"
				component={Posts}
				options={{
					title: "Публікації",
					headerTitleStyle: styles.headerTitle,
					headerTitleAlign: "center",
					headerRight: () => <BtnLogout buttonStyle={styles.container} />,
				}}
			/>
			<Tab.Screen
				name="CreatePosts"
				component={CreatePosts}
				options={{
					title: "Створити публікацію",
					headerTitleStyle: styles.headerTitle,
					headerTitleAlign: "center",
					headerLeft: () => <BtnGoBack />,
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					title: "Профіль",
					headerTitleAlign: "center",
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};

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
		// <StateContext.Provider value={inputsInitialState}>
		<InputsContextContainer>
			<NavigationContainer>
				<SafeAreaView style={{ flex: 1 }}>
					<StatusBar />
					<MainStackNavigator />
				</SafeAreaView>
			</NavigationContainer>
		</InputsContextContainer>
		// </StateContext.Provider>
	);
}

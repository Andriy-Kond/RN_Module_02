import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

import { styles } from "./HomeStyles";

export default function HomeStack() {
	return (
		<>
			<HomeStack.Navigator>
				<HomeStack.Screen name="Home" component={Home} />
				<HomeStack.Screen name="Posts" component={Post} />
			</HomeStack.Navigator>
		</>
	);
}

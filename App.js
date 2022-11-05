import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utitlity/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Map: "md-map",
	Settings: "md-settings",
};

const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
);

const Map = () => (
	<SafeArea>
		<Text>Map</Text>
	</SafeArea>
);

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];

	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
		// tabBarStyle: [
		// 	{
		// 		display: "flex"
		// 	},
		// 	null
		// ]
	};
};

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<RestaurantsContextProvider>
					<NavigationContainer>
						<Tab.Navigator screenOptions={createScreenOptions}>
							<Tab.Screen name="Restaurants" component={RestaurantsScreen} />
							<Tab.Screen name="Map" component={Map} />
							<Tab.Screen name="Settings" component={Settings} />
						</Tab.Navigator>
					</NavigationContainer>
				</RestaurantsContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}

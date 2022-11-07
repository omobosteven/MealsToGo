import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
	apiKey: "AIzaSyBj3_b0f9QJ5Ed1dv2j2_2BBG7Eu6HoVZg",
	authDomain: "mealstogo-5c857.firebaseapp.com",
	projectId: "mealstogo-5c857",
	storageBucket: "mealstogo-5c857.appspot.com",
	messagingSenderId: "779318789262",
	appId: "1:779318789262:web:6651eb5ed09f1a602b75df",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

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
				<AuthenticationContextProvider>
					<Navigation />
				</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}

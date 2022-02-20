import * as React from "react";

//Styling And Theme
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
////////////Fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
////////////////////////Navigation
import { Navigation } from "./src/infrastructure/navigation/index";
// Contexts

import { AuthenticationContextProvider } from "./src/services/authentication/authenication.context";

//FireBase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDncEBtZxfuNBPtBQ93a4WM9zWu91MBdK8",
  authDomain: "mealstogo-1746f.firebaseapp.com",
  projectId: "mealstogo-1746f",
  storageBucket: "mealstogo-1746f.appspot.com",
  messagingSenderId: "398806830597",
  appId: "1:398806830597:web:7d88fd2f42725cf8cbd66c",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  // const [obj,setObj]=useState(false);

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

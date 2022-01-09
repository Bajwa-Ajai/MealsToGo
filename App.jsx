import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Text } from "react-native";
import { Restaurant } from "./src/features/restaurants/screens/Restaurant.screen";
// console.log(StatusBar.currentHeight)
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/SafeArea";
import Ionicons  from "@expo/vector-icons/Ionicons";
import {restaurantRequest} from "./src/services/restaurant/restaurantsService";


const Tab = createBottomTabNavigator();

const Map = () => {
  return (
    <>
      <SafeArea
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Map</Text>
      </SafeArea>
    </>
  );
};

const Settings = () => {
  return (
    <>
      <SafeArea
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Setting</Text>
      </SafeArea>
    </>
  );
};

const customScreenOption=({ route }) =>{
  return({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Restaurants") {
        iconName = focused
          ? "restaurant"
          : "restaurant-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "settings" : "settings-outline";
      }else if(route.name==="Map"){
        iconName=focused?"map":"map-outline";
      }
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown:false,
    tabBarActiveTintColor:"tomato",
    tabBarInactiveTintColor:"grey"
  })
}

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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={customScreenOption}
          >
            <Tab.Screen name="Restaurants" component={Restaurant}/>
            <Tab.Screen name="Map" component={Map}/>
            <Tab.Screen name="Settings" component={Settings}/>
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

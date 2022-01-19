import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeArea } from "../../components/utility/SafeArea";
import { Text } from "react-native";
import { RestaurantsNavigator } from "./restaurants.navigator";

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

const customScreenOption = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Restaurants") {
        iconName = focused ? "restaurant" : "restaurant-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "settings" : "settings-outline";
      } else if (route.name === "Map") {
        iconName = focused ? "map" : "map-outline";
      }
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "grey",
  };
};

export const AppNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={customScreenOption}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

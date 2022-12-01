import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/maps/screens/map.screen";
import { RestaurantsContextProvider } from "../../services/restaurant/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingNavigator } from "./settings.navigation";

const Tab = createBottomTabNavigator();

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
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Tab.Navigator screenOptions={customScreenOption}>
              <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingNavigator} />
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  );
};

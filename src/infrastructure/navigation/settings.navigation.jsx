import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const SettingStack = createStackNavigator();

export const SettingNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsS"
        component={SettingsScreen}
      />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingStack.Navigator>
  );
};

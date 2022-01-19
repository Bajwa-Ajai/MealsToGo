import React from "react";
import {Text} from "react-native"; 
import {createStackNavigator,TransitionPresets} from "@react-navigation/stack";
import { Restaurant as RestaurantScreen } from "../../features/restaurants/screens/Restaurant.screen";

const RestaurantStack=createStackNavigator();

export const RestaurantsNavigator=()=>{
    return(
        <RestaurantStack.Navigator 
        screenOptions={{
            ...TransitionPresets.RevealFromBottomAndroid,
            headerShown:false}}>
            <RestaurantStack.Screen
                name="RestaurantScreen"
                component={RestaurantScreen}
            />
            <RestaurantStack.Screen
            name="RestaurantDetails"
            component={()=><Text>Restaurant Detail</Text>}
            />
        </RestaurantStack.Navigator>
    );
}
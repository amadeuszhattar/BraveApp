import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/Exercises";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import colours from "../config/colours";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Exercises"
      component={ListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{
        title: "Exercise Details",
        headerStyle: {
          backgroundColor: colours.primary,
        },
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;

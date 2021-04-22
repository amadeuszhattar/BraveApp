import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingScreen from "../screens/Exercises";
import LeaderBoard from "../screens/LeaderBoard";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import Workouts from "../screens/Workouts";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Workouts"
      component={Workouts}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Custom"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="arm-flex" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="LeaderBoard"
      component={LeaderBoard}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="trophy-variant"
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

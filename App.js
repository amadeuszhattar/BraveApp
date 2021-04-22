import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Platform, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./App/components/Screen";
import colours from "./App/config/colours";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import AuthNavigator from "./App/navigation/AuthNavigator";
import navigationTheme from "./App/navigation/navigationTheme";
import AppNavigator from "./App/navigation/AppNavigator";
import FeedNavigator from "./App/navigation/FeedNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

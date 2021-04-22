import React from "react";
import { SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native";
import colours from "../config/colours";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, styles.screen]}>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colours.background,
    flex: 1,
  },
});
export default Screen;

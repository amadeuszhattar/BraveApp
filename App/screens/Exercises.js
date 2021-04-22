import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  Platform,
  View,
} from "react-native";
import Exercises from "../components/Card";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import colours from "../config/colours";
import { useEffect } from "react";

const listings = [
  {
    id: 1,
    title: "Dead Lift",
    points: 100,
    image: require("../assets/DeadLift.jpg"),
  },
  {
    id: 2,
    title: "Bench Press",
    points: 90,
    image: require("../assets/BenchPress.jpg"),
  },
  {
    id: 3,
    title: "Squat",
    points: 110,
    image: require("../assets/Squat.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Exercises
            title={item.title}
            subTitle={item.points}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colours.background,
    padding: 15,
  },
});

export default ListingScreen;

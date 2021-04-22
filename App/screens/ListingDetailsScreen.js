import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import colours from "../config/colours";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <Screen>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.points}>{listing.points}</AppText>
        <View>
          <View style={styles.userContainser}></View>
          <Text style={styles.title}>How to do it</Text>
          <Text style={{ color: colours.secondary, marginTop: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            quis tortor quam. Etiam sollicitudin, ex luctus pretium ultrices,
            velit mi rhoncus enim, at molestie elit erat tincidunt quam.
          </Text>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colours.secondary,
  },
  points: {
    color: colours.elements,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainser: {
    marginVertical: 20,
  },
});
export default ListingDetailsScreen;

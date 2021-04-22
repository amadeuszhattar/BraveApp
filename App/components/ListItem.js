import React from "react";
import colours from "../config/colours";
import { View, StyleSheet, Image, Text } from "react-native";
import AppText from "./AppText/AppText";
import { Colors } from "react-native/Libraries/NewAppScreen";

function ListItem({ number, title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.number}>{number}</AppText>
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
      </View>
      <View style={styles.points}>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colours.primary,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colours.elements,
    fontWeight: "bold",
    fontSize: 22,
    position: "absolute",
    right: 20,
  },
  points: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  number: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    paddingRight: 20,
  },
});

export default ListItem;

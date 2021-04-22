import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colours from "../config/colours";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Exercises({ title, subTitle, image, onPress }) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image style={styles.image} source={image} />
      </TouchableWithoutFeedback>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <MaterialCommunityIcons
          style={styles.icon}
          name="plus"
          color={colours.elements}
          size={40}
        />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colours.primary,
    marginBottom: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  subTitle: {
    color: colours.elements,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});
export default Exercises;

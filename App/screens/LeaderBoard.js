import React, { useState } from "react";
import { FlatList, StyleSheet, View, Platform, StatusBar } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemViewProfile from "../components/ListItemViewProfile";
import Screen from "../components/Screen";
import colours from "../config/colours";
import ListItemDeleteAction from "../components/ItemListDeleteAction";

const initialStandings = [
  {
    id: 1,
    number: 1,
    title: "armadillo",
    subTitle: 100,
    image: require("../assets/profilePhoto.png"),
  },
  {
    id: 2,
    number: 2,
    title: "Roraxus",
    subTitle: 99,
    image: require("../assets/profilePhoto7.jpg"),
  },
  {
    id: 3,
    number: 3,
    title: "BibleThump",
    subTitle: 91,
    image: require("../assets/profilePhoto6.jpg"),
  },
  {
    id: 4,
    number: 4,
    title: "Citadels",
    subTitle: 79,
    image: require("../assets/profilePhoto3.jpg"),
  },
  {
    id: 5,
    number: 5,
    title: "sHepard007Normandia",
    subTitle: 75,
    image: require("../assets/profilePhoto4.png"),
  },
  {
    id: 6,
    number: 6,
    title: "Arthurxcombats",
    subTitle: 72,
    image: require("../assets/profilePhoto5.jpg"),
  },
  {
    id: 7,
    number: 7,
    title: "Bryan",
    subTitle: 65,
    image: require("../assets/profilePhoto3.jpg"),
  },
  {
    id: 8,
    number: 8,
    title: "BibleThump",
    subTitle: 62,
    image: require("../assets/profilePhoto6.jpg"),
  },
  {
    id: 9,
    number: 9,
    title: "Citadels",
    subTitle: 54,
    image: require("../assets/profilePhoto3.jpg"),
  },
];
function LeaderBoard(props) {
  const [standings, setStandings] = useState(initialStandings);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      style={styles.screen}
      data={standings}
      keyExtractor={(standing) => standing.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          number={item.number}
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => {}}
    />
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colours.background,
    flex: 1,
  },
});
export default LeaderBoard;

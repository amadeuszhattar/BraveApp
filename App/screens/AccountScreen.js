import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, Text, View } from "react-native";
import colours from "../config/colours";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import ProfileListItem from "../components/profileListItem";

const menuItems = [
  {
    title: "Weight",
    subTitle: "72",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colours.elements,
    },
  },
  {
    title: "Height",
    subTitle: "6'1",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colours.secondary,
    },
  },
  {
    title: "Dead Lift Record",
    subTitle: "60",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colours.secondary,
    },
  },
  {
    title: "Bench Press Record",
    subTitle: "80",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colours.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title="User" image={require("../assets/profileTest.jpg")} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ProfileListItem title={item.title} subTitle={item.subTitle} />
          )}
        />
      </View>
      <Text style={styles.heading}>Badges</Text>
      <View style={styles.badges}>
        <Icon name="weight-lifter" />
        <Icon name="dumbbell" />
        <Icon name="chess-king" />
      </View>
      <Text style={styles.heading}>Points</Text>
      <Text style={styles.points}>99</Text>
      <ListItem title="Log Out" />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 21,
    color: colours.secondary,
    fontWeight: "bold",
    alignSelf: "center",
  },
  badges: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  points: {
    padding: 20,
    fontSize: 24,
    color: colours.elements,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default AccountScreen;

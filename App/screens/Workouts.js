import React from "react";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colours from "../config/colours";

const listings = [
  {
    id: 1,
    image: require("../assets/DeadLift.jpg"),
  },
  {
    id: 2,
    image: require("../assets/BenchPress.jpg"),
  },
  {
    id: 3,
    image: require("../assets/Squat.jpg"),
  },
];

function Workouts({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity>
        <ImageBackground
          style={styles.image}
          source={require("../assets/AbsWorkout.jpg")}
        >
          <View style={styles.container}>
            <Text style={styles.title}>ABS</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground
          style={styles.image}
          source={require("../assets/BackWorkout.jpg")}
        >
          <View style={styles.container}>
            <Text style={styles.title}>BACK</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground
          style={styles.image}
          source={require("../assets/BicepsWorkout.jpg")}
        >
          <View style={styles.container}>
            <Text style={styles.title}>ARMS</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colours.background,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colours.secondary,
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Workouts;

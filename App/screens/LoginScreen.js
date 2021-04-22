import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppNavigator from "../navigation/AppNavigator";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).matches().label("Password"),
});

function LoginScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome.jpg")}
    >
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <AppFormField
              autoCapitalize="none"
              name="email"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
          </View>
        </TouchableWithoutFeedback>
        <SubmitButton title="Login" />
      </AppForm>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    margin: 20,
    opacity: 0.8,
  },
});
export default LoginScreen;

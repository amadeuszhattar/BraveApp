import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).matches().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).matches().label("Password"),
});

function RegisterScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome.jpg")}
    >
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.container}>
          <AppFormField
            autoCapitalize="none"
            name="name"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Name"
          />
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
        <SubmitButton title="Register" />
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
export default RegisterScreen;

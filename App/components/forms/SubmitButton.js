import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={styles.smallContainer}>
      <AppButton title={title} onPress={handleSubmit} />
    </View>
  );
}
const styles = StyleSheet.create({
  smallContainer: {
    margin: 15,
  },
});

export default SubmitButton;

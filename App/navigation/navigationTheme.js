import { DefaultTheme } from "@react-navigation/native";
import colours from "../config/colours";

export default {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    primary: colours.elements,
    background: colours.elements,
  },
};

import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

export const prepStyle = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#000",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //Android
  }
})
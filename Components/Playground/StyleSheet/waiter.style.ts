import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 90,
    backgroundColor: "#1a1a1a",
    position: "absolute",
    zIndex: 20,
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
})
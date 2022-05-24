import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#000",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    zIndex: 16,

  },
  results_wrapper: {
    width: Dimensions.get("window").width,
    borderColor: "red",
    // height: "100%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
  },
  user_card: {
    width: (Dimensions.get("window").width - 10) / 2,
    minHeight: 100,
    backgroundColor: "#1F1F1F",
    borderRadius: 15,
    paddingVertical: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 10
  },
  image_wrapper: {
    width: (Dimensions.get("window").width - 20) / 2.5,
    height: (Dimensions.get("window").width - 20) / 2.5,
    borderRadius: 150,
    overflow: "hidden"
  },
  button_wrapper: {
    width: "100%",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  start_btn: {
    width: 200,
    height: 50,
    backgroundColor: '#3FFF3F',
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
})
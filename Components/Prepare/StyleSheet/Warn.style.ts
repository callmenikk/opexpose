import { StyleSheet, Dimensions } from "react-native"

export const style = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 15,
    paddingHorizontal: 20,
    top: 0,
    left: 0
  },
  modal: {
    width: "100%",
    minHeight: 200,
    backgroundColor: "#121212",
    borderRadius: 10,
  },
  warnHeader: {
    width: "100%",
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  textarea:{
    width: "100%",
    minHeight: 70,
    display: "flex",
    alignItems: "center",
    marginTop: 15,
  },
  buttons: {
    width: "100%",
    display: "flex",
    paddingHorizontal: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 50
  },
  button: {
    width: 120,
    height: 40,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
})
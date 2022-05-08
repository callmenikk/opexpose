import { StyleSheet, Dimensions,Platform, StatusBar } from "react-native";

export const joinStyle = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //Android,
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 3
  },
  inputAlign: {
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 150
  },
  codeWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 30
  },
  InputStyle: {
    width: "100%",
    height: "100%",
    color: "#FFF",
    fontSize: 60,
    letterSpacing: (Dimensions.get("window").width - 10) / 11
  },
  backWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%"
  },
  backBtn: {
    width: 200,
    height: 60,
    backgroundColor: "#2e2e2e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100
  }
})
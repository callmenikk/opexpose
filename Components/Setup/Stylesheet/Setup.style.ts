import { StyleSheet, Dimensions } from "react-native";


export const setupStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#000",
    overflow: "hidden",
    padding: "0 20",
    margin: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  mainBg: {
    position: "absolute",
    width: `${(Dimensions.get('window').width)}px`,
    height: `${Dimensions.get("window").height}px`,
    top: "0",
    left: -20,
  },
  setupEmojis: {
    zIndex: 10,
    fontSize: 200,
    position: "absolute",
  },
  mainContent: { 
    width: "100%",
    minHeight: "200px",
    borderColor: "red",
    zIndex: 11,
    display: "flex",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    flexDirection: "column",
  },
  uploadCamera: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#000",
    borderColor: "#59EF57",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderWidth: 1
  },
  inputStyles: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 10,
    color: "#FFF",
    borderWidth: 2,
    borderColor: "#59EF57",
    transform: [{translateY: 50}],
    zIndex: 10
  },
  nextButton: {
    width: "100%",
    maxWidth: "240px",
    backgroundColor: "#59EF57",
    zIndex: 10,
    height: 50,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
})
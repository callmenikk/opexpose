import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#000",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    zIndex: 15,
    display: "flex",
    alignItems: "center",
  },
  question_container: {
    width: "100%",
    minHeight: 300,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  question: {
    width: "100%",
    minHeight: 200,
    backgroundColor: "#0F0F0F",
    borderRadius: 15
  },
  questionHeader: {
    width: "100%",
    height: 40,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  },
  question_section: {
    width: "100%",
    minHeight: 100,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  },
  targets_container: {
    width: "100%",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingTop: 40
  },
  choose_player: {
    width: 120,
    display: "flex",
    flexDirection: 'column',
    alignItems: "center"
  },
  timerWrapper: {
    width: "100%",
    height: 40,
    position: 'relative',
    borderRadius: 100,
    zIndex: 15,
    borderColor: "#282828",
    borderWidth: 3,
    backgroundColor: "#131313",
    overflow: "hidden"
  }
})
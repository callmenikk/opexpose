import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  results_wrapper: {
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
  },
  result_card: {
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
  playerinfo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  profile_picture: {
    width: (Dimensions.get("window").width - 20) / 4,
    height: (Dimensions.get("window").width - 20) / 4,
    borderRadius: 100,
    overflow: 'hidden',
  },
  votersGrid: {
    width: "100%",
    height: 130,
    marginTop: 10
  },
  voterLayout: {
    width: 50,
    height: 65,
    display: "flex",
    alignItems: "center",
    flexDirection: 'column'
  },
  circleFrame: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: 'hidden'
  }
})
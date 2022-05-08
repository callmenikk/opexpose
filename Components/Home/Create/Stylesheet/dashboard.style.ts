import { StyleSheet, Dimensions, Platform } from "react-native";


export const dashboardStyle = StyleSheet.create({
  dashboard: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 50,
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#121212",
  },
  dashboard_header: {
    width: "100%",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  gamemode: {
    width: "100%",
    backgroundColor: "#2B2B2B",
    height: 130,
    position:"relative",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 25
  },
  titleHeader: {
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    width: "100%",
    height: "100%",
    marginTop: 10
  }
})
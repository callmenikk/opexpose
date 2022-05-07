import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

export const prepStyle = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#000",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //Android,
    position: "relative"
  },
  codeWrapper: {
    width: "100%",
    height: 160,
  },
  leaveButton: {
    width: 100,
    height: 30,
    backgroundColor: "#fff",
    top: 0,
    left: 0,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  codeView: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  UsersList: {
    width: "100%",
    height: "70%",
    paddingHorizontal: 10,
    overflow: 'scroll'
  },
  users_container: {
    width: "100%",
    borderRadius: 10,
    height: "70%",
    backgroundColor: "#222222"
  },
  StartWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  StartBtn: {
    width: 200,
    height: 60,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  users_header: {
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  waiting_user: {
    width:110,
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: 10
  }
})
import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";


export const setupStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "#000",
    overflow: "hidden",
    margin: 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //Android
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  mainBg: {
    position: "absolute",
    width: Dimensions.get('window').width,
    height: Dimensions.get("window").height,
    top: 0,
    left: -20,
  },
  setupEmojis: {
    zIndex: 10,
    fontSize: 200,
    position: "absolute",
  },
  mainContent: { 
    width: "100%",
    height: 150,
    zIndex: 11,
    display: "flex",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    alignItems: "center"
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
    borderWidth: 1,
    
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
    backgroundColor: "#000",
    zIndex: 10
  },
  nextButton: {
    width: 200,
    backgroundColor: "#59EF57",
    zIndex: 10,
    height: 50,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photosModal: {
    width: Dimensions.get("window").width,
    height:(Dimensions.get("window").height - 220),
    backgroundColor: "#0E0E0E",
    zIndex: 12,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    width: Dimensions.get("window").width,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  scrollPhotos: {
    display: "flex",
    flexWrap: "wrap",
    borderColor: "red",
    flexDirection: "row",
    width: Dimensions.get("window").width,
    padding: 10
  },
  client_photo: {
    backgroundColor: "#222222",
    borderRadius: 10,
    alignSelf: "stretch",
    height: 200,
    width: 200,
    margin: 5,
  }
})
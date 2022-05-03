import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";

const loaderStyle = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
});

const Loader = () => {
  return (
    <View style={loaderStyle.container}>
      <ActivityIndicator size={"large"} color="#fff"/>
    </View>
  );
};

export default Loader;

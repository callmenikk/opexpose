import { View, Text, Image, StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { setupStyle } from "./Stylesheet/Setup.style";
import MainBackground from "../asset/MainBackground";
import CustomizeProfile from "./CustomizeProfile";

const Setup = () => {
  return (
    <View style={setupStyle.container}>
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <Text style={[
        setupStyle.setupEmojis,
        {
          transform: [{ translateX: -200 }, {rotate: "45deg"}, {translateY: -150}],
          top: 0,
          left: 0 
        }
      ]}>😈</Text>
      <Text style={[
        setupStyle.setupEmojis,
        {
          transform: [{ translateX: -60 }, {rotate: "45deg"}, {translateY: 50}],
          left: 0,
          bottom: 0,
        }
      ]}>🤨</Text>
      <Text style={[
        setupStyle.setupEmojis,
        {
          transform: [{ translateX: 50 }, {rotate: "-45deg"}, {translateY: 50}],
          right: 0,
          bottom: 0,
        }
      ]}>😂</Text>
      <View style={[
        setupStyle.mainContent,
        {
          transform: [{translateY: 50}],
        }
      ]}>
        <Image 
          source={require("./assets/opexpose_logo.png")}
          style={{
            zIndex: 10,
            width: 250,
            borderRadius: 60,
            height: 70
          }}
        />
      </View>
      <CustomizeProfile />
    </View>
  )
}

export default Setup 
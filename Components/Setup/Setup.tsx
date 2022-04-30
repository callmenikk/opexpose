import { View, Text, Image, Platform, StatusBar } from "react-native";
import { useState } from "react";
import { setupStyle } from "./Stylesheet/Setup.style";
import MainBackground from "../asset/MainBackground";
import Emojis from "./Emojis";
import CustomizeProfile from "./CustomizeProfile";
import Warn from "../Alert/Warn";

const Setup = () => {
  const [warn, setWarn] = useState<boolean>(true);
  const [warnText, setWarnText] = useState("")

  return (
    <View style={setupStyle.container}>
      {
        warn &&
        <Warn
        text={warnText}
        closeModal={() => setWarn(false)}
        customStyle={{
          top: 0,
          left: 0,
          transform: [
            {
              translateY:
                Platform.OS === "android" ? StatusBar.currentHeight : 0,
            },
            { translateX: 15 },
          ],
        }}
      />
      }
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <Emojis />
      <View
        style={[
          setupStyle.mainContent,
          {
            transform: [{ translateY: 50 }],
          },
        ]}
      >
        <Image
          source={require("./assets/opexpose_logo.png")}
          style={{
            zIndex: 10,
            width: 250,
            borderRadius: 60,
            height: 70,
          }}
        />
      </View>
      <CustomizeProfile triggerModal={(bool, text) => {
        setWarn(bool)
        setWarnText(text)
      }} />
    </View>
  );
};

export default Setup;

import { View, Image, Platform, StatusBar } from "react-native";
import {useNavigate} from "react-router-native"
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setupStyle } from "./Stylesheet/Setup.style";
import MainBackground from "../../utils/asset/MainBackground";
import Emojis from "./Emojis";
import CustomizeProfile from "./CustomizeProfile";
import Warn from "../../utils/Alert/Warn";

const Setup = () => {
  const [warn, setWarn] = useState<boolean>(false);
  const [warnText, setWarnText] = useState("")
  const navigate = useNavigate()

  const _getUserStore = async () => {
    try{
      const userStore = await AsyncStorage.getItem('@user_data')
      if(userStore != null){
        navigate("/home")
      }
    }catch(e){
      
    }
  }

  useEffect(() => {
  _getUserStore()
  }, [])

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

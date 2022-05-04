import { FC, useEffect } from "react";
import { View, Text } from "react-native";
import { AlertStyle } from "./Alert.style";

const Warn: FC<{ text: string; customStyle?: object, closeModal: () => void }> = ({
  text,
  customStyle,
  closeModal
}) => {
  useEffect(() => {setTimeout(closeModal, 2000)},[])

  return (

    <View style={[AlertStyle.warn, { ...customStyle }]}>
      <Text style={{ color: "#FFF" }}>⚠️{text}</Text>
    </View>
  );
};

{
  /* <Warn text={""} customStyle={{
      top: 0,
      left: 0,
      transform: [
        { translateY: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
        {translateX: 15}
      ]
}}/> */
}

export default Warn;

import { FC } from 'react'
import { AlertStyle } from './Alert.style'
import { View, Text } from 'react-native'

const Danger: FC<{text: string, customStyle?: object}> = ({text, customStyle}) => {
  return (
    <View style={[AlertStyle.danger, {...customStyle}]}>
      <Text style={{color:"#FFF"}}>⛔ {text}</Text>
    </View>
  )
}

{
  /* <Danger text={""} customStyle={{
      top: 0,
      left: 0,
      transform: [
        { translateY: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
        {translateX: 15}
      ]
}}/> */
}

export default Danger
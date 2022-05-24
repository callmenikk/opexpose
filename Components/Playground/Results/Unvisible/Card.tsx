import { FC } from 'react'
import { View, StyleProp, ViewStyle, Image, Text } from 'react-native'
import { style } from './StyleSheet/unvisible.style'

const Card:FC<{}> = ({}) => {
  return (
    <View style={[style.user_card]}>
      <View style={style.image_wrapper}>
        <Image 
          style={{
            width: "100%",
            height: "100%"
          }}
          source={{
          uri: "https://cdn.discordapp.com/avatars/484717395722895360/894ee3a27bc7ae7fb9316e84d792d45b.png?size=4096"
        }}/>
      </View>
      <Text style={{
        color: "#FFF",
        fontWeight: "bold",
        marginTop: 10
      }}>callmenikk</Text>
      <Text style={{
        color: "#FFF",
        fontWeight: "bold",
        marginTop: 2,
        fontSize: 42
      }}>64%</Text>
      <Text style={{
        color: "#858585",
        fontWeight: "bold",
        fontSize: 20
      }}>2 votes</Text>
    </View>
  )
}

export default Card
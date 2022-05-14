import React from 'react'
import { TouchableOpacity, View, Image, Text, Dimensions } from 'react-native'
import { style } from './StyleSheet/pg.style'

const { width } = Dimensions.get("window")

const ChooseTarget = () => {
  return (
    <TouchableOpacity style={style.choose_player}>
      <View style={{
        width: width / 3.5,
        height: width / 3.5,
        borderRadius: 100,
        overflow: "hidden"
      }}>
        <Image
          style={{
            width: "100%",
            height: "100%"
          }}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/916412212594225242/973716922514427985/unknown.png'
          }} />
      </View>
      <Text style={{
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 20
      }}>callmenikk</Text>
    </TouchableOpacity>
  )
}

export default ChooseTarget
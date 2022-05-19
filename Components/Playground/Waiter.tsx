import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { style } from './StyleSheet/waiter.style'

const emojis: string[] = ["😍", "🥰", "😘", "😷", "🤒", "🤕", "🤑", "😸", "👻", "💀", "☠️", "👽", "👾", "😹", "😻"]

const Waiter = () => {  
  const randomEmoji: number = Math.floor(Math.random() * emojis.length)
  const navigate = useNavigate()

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigate("/home")} style={{
        width: 200,
        height: 50,
        backgroundColor: "red"
      }}></TouchableOpacity>
      <Text style={{
        color: "#FFF",
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold"
      }}>Please wait until others are choosing</Text>
      <Text style={{
        fontSize: 172
      }}>{emojis[randomEmoji]}</Text>
    </View>
  )
}

export default Waiter
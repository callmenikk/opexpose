import React from 'react'
import { View, Dimensions } from 'react-native'

const CodeLines = () => {
  const countLines = Array(6).fill("")

  return (
    <View style={{
      width: Dimensions.get("window").width,
      height: 10,
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 5
    }}>
      {
        countLines.map((_, i) => {
          return (
            <View style={{
              width: 48,
              height: 3,
              backgroundColor: "#FFF",
              borderRadius: 100,
            }} key={i}/>
          )
        })
      }
    </View>
  )
}

export default CodeLines
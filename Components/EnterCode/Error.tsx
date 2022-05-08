import { FC } from 'react'
import { Text, View } from 'react-native'

const Error: FC<{ text: string }> = ({text}) => {
  return (
    <View style={[{
      width: "100%",
      minHeight: 70,
      position: "absolute",
      top: 0,
      left: 0,
      padding: 10,
      zIndex: 15,
    },
    {transform: [{translateY: 20}]}
    ]}>
      <View style={{
        width: "100%",
        minHeight: 70,
        backgroundColor: "#ff4040",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
      }}>
        <Text style={{
          color: "#FFF",
          fontWeight: "bold",
          fontSize: 18
        }}>{text}</Text>
      </View>
    </View>
  )
}

export default Error
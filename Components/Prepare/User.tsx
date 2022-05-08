import { FC } from 'react'
import { View, Image, Text } from 'react-native'
import { prepStyle } from "./StyleSheet/prep.style"

const User: FC<{ profile_src: string, username: string }> = ({ profile_src, username }) => {
  return (
    <View style={prepStyle.waiting_user}>
      <View style={{
        width: 80,
        height: 80,
        borderRadius: 100,
        overflow: "hidden",
      }}>
        <Image
          style={{
            width: "100%",
            height: "100%"
          }}
          source={{
            uri: `data:image/jpeg;base64,${profile_src}`
          }} />
      </View>
      <Text style={{
        color: "#FFF",
        fontWeight: 'bold',
      }}>{username}</Text>
    </View>
  )
}

export default User
import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { style } from '../Unvisible/StyleSheet/visible.style'


const DisplayVoter: FC<{ username: string, profile_src: string }> = ({ username, profile_src }) => {
  return (
    <View style={style.voterLayout}>
      <View style={style.circleFrame}>
        <Image 
        style={{
          width: "100%",
          height: "100%"
        }}
        source={{
          uri: `data:image/jpeg;base64,${profile_src}`
        }}/>
      </View>
      <Text style={{
        color: "#FFF",
        fontSize: 11,
        marginTop: 5
      }}>{username.length > 6 ? username.slice(0, 6)+"...": username}</Text>
    </View>
  )
}

export default DisplayVoter
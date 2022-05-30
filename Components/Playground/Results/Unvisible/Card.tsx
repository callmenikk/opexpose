import { FC } from 'react'
import { View, Image, Text } from 'react-native'
import { style } from './StyleSheet/unvisible.style'

interface CardProps {
  profile_src: string,
  username: string,
  vote_count: number,
  percentage: number
}

const Card:FC<CardProps> = ({profile_src, username, vote_count, percentage}) => {
  return (
    <View style={[style.user_card]}>
      <View style={style.image_wrapper}>
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
        fontWeight: "bold",
        marginTop: 10
      }}>{username}</Text>
      <Text style={{
        color: "#FFF",
        fontWeight: "bold",
        marginTop: 2,
        fontSize: 42
      }}>{percentage}%</Text>
      <Text style={{
        color: "#858585",
        fontWeight: "bold",
        fontSize: 20
      }}>{vote_count === 1 ? `${vote_count} voter`: `${vote_count} voters`}</Text>
    </View>
  )
}

export default Card
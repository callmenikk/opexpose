import {FC} from 'react'
import { Image, Text, View } from 'react-native'
import { style } from '../Unvisible/StyleSheet/visible.style'
import {ParticipantType} from "../../../../Reducers/Playground/results"
import Voters from './Voters'


interface CardProps {
  profile_src: string,
  totalVotes: number,
  voters: ParticipantType["whoVoted"][]
}

const Card: FC<CardProps> = ({profile_src, totalVotes, voters}) => {
  return (
    <View style={style.result_card}>
      <View style={style.playerinfo}>
        <View style={style.profile_picture}>
          <Image 
            style={{
              width: "100%",
              height: "100%"
            }}
            source={{
            uri: profile_src
          }}/>
        </View>
        <Text style={{
          color: "#FFF",
          marginTop: 10
        }}>{totalVotes} Voters</Text>
      </View>
      <Voters voters={voters}/>
    </View>
  )
}

export default Card
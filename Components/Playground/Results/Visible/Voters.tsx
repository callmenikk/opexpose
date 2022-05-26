import { FC } from 'react'
import { View } from 'react-native'
import { ParticipantType } from "../../../../Reducers/Playground/results"
import { style } from '../Unvisible/StyleSheet/visible.style'
import { FlatGrid } from 'react-native-super-grid'
import DisplayVoter from './DisplayVoter'


const Voters: FC<{ voters: ParticipantType["whoVoted"] }> = ({ voters }) => {
  return (
    <View style={style.votersGrid}>
      <FlatGrid
        data={voters!}
        itemDimension={40}
        spacing={20}
        renderItem={(prop) => {
          return <DisplayVoter username={prop.item.username} profile_src={prop.item.profile_src} key={prop.index} />
        }}
      />
    </View>
  )
}

export default Voters
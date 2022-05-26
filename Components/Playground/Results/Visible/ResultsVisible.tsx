import { View } from 'react-native'
import { style } from '../Unvisible/StyleSheet/visible.style'
import Card from './Card'

const ResultsVisible = () => {
  return (
    <View style={style.results_wrapper}>
      <Card profile_src={'https://cdn.discordapp.com/avatars/484717395722895360/00d88fa2df6316b4002f853b758bef96.png?size=4096'} totalVotes={1} voters={[]}/>
      <Card profile_src={'https://cdn.discordapp.com/avatars/484717395722895360/00d88fa2df6316b4002f853b758bef96.png?size=4096'} totalVotes={1} voters={[]}/>
    </View>
  )
}

export default ResultsVisible
import { View } from 'react-native'
import { style } from '../Unvisible/StyleSheet/visible.style'
import Card from './Card'
import { useSelector } from 'react-redux'
import { State as ResultsType } from '../../../../Reducers/Playground/results'


const ResultsVisible = () => {
  const results = useSelector(
    (state: { results: ResultsType }) => state.results
  );
  
  return (
    <View style={style.results_wrapper}>
      <Card 
        profile_src={results.first_participant.user.profile_src} 
        totalVotes={results.first_participant.total_vote} 
        voters={results.first_participant.whoVoted as any} />
      <Card 
        profile_src={results.second_participant.user.profile_src} 
        totalVotes={results.second_participant.total_vote} 
        voters={results.second_participant.whoVoted as any} />
    </View>
  )
}

export default ResultsVisible
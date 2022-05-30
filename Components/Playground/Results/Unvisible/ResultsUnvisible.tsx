import React from 'react'
import { View } from 'react-native'
import Card from './Card'
import { style } from './StyleSheet/unvisible.style'
import { State as ResultsType } from '../../../../Reducers/Playground/results'
import { useSelector } from 'react-redux'

const ResultsUnvisible = () => {
  const results = useSelector(
    (state: { results: ResultsType }) => state.results
  );

  return (
    <View style={style.results_wrapper}>
      <Card 
        profile_src={results.first_participant.user.profile_src} 
        username={results.first_participant.user.username} 
        vote_count={results.first_participant.total_vote} 
        percentage={results.first_participant.percentage} />
      <Card 
        profile_src={results.second_participant.user.profile_src}  
        username={results.second_participant.user.username} 
        vote_count={results.second_participant.total_vote} 
        percentage={results.second_participant.percentage} />
    </View>
  )
}

export default ResultsUnvisible
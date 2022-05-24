import React from 'react'
import { View } from 'react-native'
import Card from './Card'
import { style } from './StyleSheet/unvisible.style'

const Results = () => {
  return (
    <View style={style.results_wrapper}>
      <Card />
      <Card />
    </View>
  )
} 

export default Results
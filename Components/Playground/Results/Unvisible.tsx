import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from './Unvisible/StyleSheet/unvisible.style'
import MainBackground from '../../../utils/asset/MainBackground'
import { setupStyle } from '../../Setup/Stylesheet/Setup.style'
import Question from '../Question'
import { useSelector } from 'react-redux'
import { State } from '../../../Reducers/Playground/playground'
import ResultsUnvisible from './Unvisible/ResultsUnvisible'
import ResultsVisible from './Visible/ResultsVisible'

const Unvisible = () => {
  const playground = useSelector(
    (state: { playground: State }) => state.playground
  );

  return (
    <View style={style.container}>
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <Question question={playground.questions} questionNumber={playground.questionNumber} />
      {/* <ResultsUnvisible /> */}
      <ResultsVisible />
      <View style={style.button_wrapper}>
        <TouchableOpacity style={style.start_btn}>
          <Text style={{
            fontWeight: "bold",
            fontSize: 20
          }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Unvisible
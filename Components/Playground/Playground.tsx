import { View } from 'react-native'
import { style } from './StyleSheet/pg.style'
import { setupStyle } from '../Setup/Stylesheet/Setup.style'
import MainBackground from '../../utils/asset/MainBackground'
import Timer from './Timer'
import QuestionTargets from './QuestionTargets'
import Question from './Question'


const Playground = () => {
  return (
    <View style={style.container}>
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <Question question={"Who would die soon?"} questionNumber={1}/>
      <QuestionTargets />
      <Timer />
    </View>
  )
}

export default Playground
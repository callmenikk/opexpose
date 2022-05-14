import { View } from 'react-native'
import { style } from './StyleSheet/pg.style'
import ChooseTarget from './ChooseTarget'

const QuestionTargets = () => {
  return (
    <View style={style.targets_container}>
      <ChooseTarget />
      <ChooseTarget />
    </View>
  )
}

export default QuestionTargets
import { View } from 'react-native'
import MainBackground from '../../utils/asset/MainBackground'
import { setupStyle } from '../Setup/Stylesheet/Setup.style'
import { prepStyle } from './StyleSheet/prep.style'

const Prepare = () => {
  return (
    <View style={prepStyle.container}>
      <View style={setupStyle.mainBg}>
          <MainBackground />
        </View>
    </View>
  )
}

export default Prepare
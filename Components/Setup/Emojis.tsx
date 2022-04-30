import {Text} from 'react-native'
import { setupStyle } from './Stylesheet/Setup.style'

const Emojis = () => {
  return (
    <>
    <Text style={[
        setupStyle.setupEmojis,
        {
          transform: [{ translateX: -200 }, {rotate: "45deg"}, {translateY: -150}],
          top: 0,
          left: 0 
        }
      ]}>😈</Text>
      <Text style={[
        setupStyle.setupEmojis,
        {
          transform: [{ translateX: -60 }, {rotate: "45deg"}, {translateY: 50}],
          left: 0,
          bottom: 0,
        }
      ]}>🤨</Text>
      <Text style={[
        setupStyle.setupEmojis,
        {
          transform: [{ translateX: 50 }, {rotate: "-45deg"}, {translateY: 50}],
          right: 0,
          bottom: 0,
        }
      ]}>😂</Text>
    </>
  )
}

export default Emojis
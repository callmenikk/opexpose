import { TouchableOpacity, Text } from 'react-native'
import { prepStyle } from './StyleSheet/prep.style'
import { State } from '../../Reducers/Playground/RoomPrepare'
import { useSelector } from 'react-redux'

const StartButton = () => {
  const configs = useSelector((state: { RoomPrepare: State }) => state.RoomPrepare);

  return (
    <TouchableOpacity 
        disabled={configs.online_users.length >= 3 ? false : true}
        style={[
          prepStyle.StartBtn,
          {
            backgroundColor: configs.online_users.length >= 3 ? "#3FFF3F" : "#737373"
          }
        ]}>
          <Text style={{
            fontSize: 28,
            fontWeight: "bold"
          }}>Start</Text>
        </TouchableOpacity>
  )
}

export default StartButton
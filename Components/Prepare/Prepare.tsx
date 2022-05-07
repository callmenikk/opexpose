import { View } from 'react-native'
import MainBackground from '../../utils/asset/MainBackground'
import { setupStyle } from '../Setup/Stylesheet/Setup.style'
import { prepStyle } from './StyleSheet/prep.style'
import { State } from '../../Reducers/Playground/RoomPrepare'
import { useSelector, useDispatch } from 'react-redux'
import Code from "./Code"
import UsersContainer from './UsersContainer'

const Prepare = () => {
  const configs = useSelector((state: { RoomPrepare: State }) => state.RoomPrepare);

  return (
    <View style={prepStyle.container}>
      <View style={setupStyle.mainBg}>
          <MainBackground />
      </View>
      <Code code={configs.room_id}/>
      <UsersContainer />
    </View>
  )
}

export default Prepare
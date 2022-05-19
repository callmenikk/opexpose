import { TouchableOpacity, Text } from 'react-native'
import { prepStyle } from './StyleSheet/prep.style'
import { State } from '../../Reducers/Prepare/RoomPrepare'
import { useSelector } from 'react-redux'
import {io} from 'socket.io-client'
import host from "../../host.json"
import { State as UserState} from '../../Reducers/Setup/userData'
import { useNavigate, useParams } from 'react-router-native'



const StartButton = () => {
  const configs = useSelector((state: { RoomPrepare: State }) => state.RoomPrepare);
  const userData = useSelector(
    (state: { userData: UserState }) => state.userData
  );
  const navigate = useNavigate()
  const {id} = useParams()
  const socket = io(host.host)

  const startRoom = () => {
    if(configs.online_users.length < 3) return
    socket.emit("@start_party", id, userData.client_id)
    navigate("/playground/"+id)

  }

  return (
    <TouchableOpacity 
        disabled={configs.online_users.length >= 3 ? false : true}
        onPress={startRoom}
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
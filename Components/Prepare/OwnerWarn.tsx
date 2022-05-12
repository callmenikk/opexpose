import { View, Text, TouchableOpacity } from 'react-native'
import { State } from '../../Reducers/Playground/RoomPrepare'
import { useSelector } from 'react-redux'
import { style } from './StyleSheet/Warn.style'
import { State as UserState } from '../../Reducers/Setup/userData'
import { io } from 'socket.io-client'
import host from "../../host.json"
import { useNavigate } from 'react-router-native'
import {FC} from "react"

const OwnerWarn: FC<{closeWarn: () => void}> = ({closeWarn}) => {
  const configs = useSelector((state: { RoomPrepare: State }) => state.RoomPrepare);
  const socket = io(host.host)
  const userData = useSelector(
    (state: { userData: UserState }) => state.userData
  );
  const navigate = useNavigate()

  return (
    <View style={style.container}>
      <View style={style.modal}>
        <View style={style.warnHeader}>
          <Text style={{
            color: "#FFF",
            fontSize: 20,
          }}>Warning!</Text>
        </View>
        <View style={style.textarea}>
          <Text style={{
            color: "#FFF",
            textAlign: "center"
          }}>You are owner of room, if you will leave, room will be deleted</Text>
        </View>
        <View style={style.buttons}>
          <TouchableOpacity style={[style.button, {backgroundColor: "#000"}]} onPress={closeWarn}>
            <Text style={{
              color: "#FFF",  
            }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, {backgroundColor: "#ff3d3d"}]} onPress={() => {
            socket.emit("@leave_room", configs.room_id, userData.client_id)
            return navigate('/home')
          }}>
            <Text style={{
              color: "#FFF",
            }}>Leave</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OwnerWarn
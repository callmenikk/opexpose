import {FC, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { symbolPutter } from '../../utils/symbolPutter'
import { prepStyle } from './StyleSheet/prep.style'
import { useNavigate, useParams } from 'react-router-native'
import { State } from '../../Reducers/Setup/userData'
import { useSelector, useDispatch } from 'react-redux'
import { State as RoomState } from '../../Reducers/Playground/RoomPrepare'
import {io} from 'socket.io-client'
import host from "../../host.json"

const Code: FC<{code: string, openWarn: () => void}> = ({code, openWarn}) => {
  const socket = io(host.host)
  const [socketConnected, setSocketConnected] = useState<boolean>(false)
  const configs = useSelector((state: { RoomPrepare: RoomState }) => state.RoomPrepare);
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  const userData = useSelector( 
    (state: { userData: State }) => state.userData
  ); 

  useEffect(() => {
    socket.connect()
    socket.emit("@port_open")
    setSocketConnected(true)
  }, [socket])

  useEffect(() => {
    socket.emit("listen-room", id)

    socket.on("new_user", (user) => {
      dispatch({ type: "ADD_PLAYER", payload: { userToken: user.userToken, profile_src: user.profile_src, username: user.username } })
    })

    socket.on("@leftUser", (id) => {
      dispatch({ type: "REMOVE_PLAYER", payload: { userToken: id.toString() } })
    })

  }, [])


  useEffect(() => {
    if(socketConnected){
      socket.emit("join-room", id, {
        userToken: userData.client_id,
        profile_src: userData.avatar,
        username: userData.username
      })
    }    
  }, [socketConnected])

  const leaveRoom = () => { 
    if(configs.owner_id !== userData.client_id){
      socket.emit("@leave_room",configs.room_id, userData.client_id)
      return navigate('/home')
    }

    openWarn()
  }

  return (
    <View style={prepStyle.codeWrapper}>
      <TouchableOpacity 
        onPress={leaveRoom}
        style={[
        prepStyle.leaveButton,
        {
          transform: [{translateX: 20}, {translateY: 10}]
        }
      ]}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 16
        }}>Leave</Text>
      </TouchableOpacity>
      <View style={prepStyle.codeView}>
        <Text style={{
          color: "#FFF",
          fontSize: 72,
          fontWeight: "bold"
        }}>{symbolPutter(code, " ")}</Text>
      </View>
    </View>
  )
}

export default Code
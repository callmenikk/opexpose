import {FC, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { symbolPutter } from '../../utils/symbolPutter'
import { prepStyle } from './StyleSheet/prep.style'
import { useNavigate, useParams } from 'react-router-native'
import { State } from '../../Reducers/Setup/userData'
import { useSelector, useDispatch } from 'react-redux'
import { State as RoomState } from '../../Reducers/Prepare/RoomPrepare'
import { State as Playground} from '../../Reducers/Playground/playground'
import {io} from 'socket.io-client'
import host from "../../host.json"

const Code: FC<{code: string, openWarn: (text: string) => void}> = ({code, openWarn}) => {
  const socket = io(host.host, { transports: ['websocket'] })
  const [socketConnected, setSocketConnected] = useState<boolean>(false)
  const configs = useSelector((state: { RoomPrepare: RoomState }) => state.RoomPrepare);
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  // const playrgound = useSelector((state: { RoomPrepare: Playground }) => state.RoomPrepare);
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

    socket.off("new_user").on("new_user", (user) => {
      dispatch({ type: "ADD_PLAYER", payload: { userToken: user.userToken, profile_src: user.profile_src, username: user.username } })
    })

    socket.on("@room_deleted", (text) => {
      openWarn("Owner left room, and room deleted immediately")
    })

    socket.on("@leftUser", (id) => {
      dispatch({ type: "REMOVE_PLAYER", payload: { userToken: id.toString() } })
    })

    socket.on("@started", async (prepared) => {
      dispatch({type: "SET_QUESTION", payload: {
        questions: await prepared.questionText,
        targets: await prepared.targets,
        questionNumber: await prepared.question,
        owner_id:await prepared.owner_id
      }})
      navigate("/playground/"+id?.toString())
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

    openWarn("You are the owner of room, if you leave, room deletes, are you sure you want to make that?")
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
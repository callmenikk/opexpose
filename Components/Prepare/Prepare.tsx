import { View } from 'react-native'
import { setupStyle } from '../Setup/Stylesheet/Setup.style'
import { prepStyle } from './StyleSheet/prep.style'
import { useEffect, useState } from 'react'
import { State } from '../../Reducers/Playground/RoomPrepare'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-native'
import host from "../../host.json"
import { State as UserState } from '../../Reducers/Setup/userData'
import Code from "./Code"
import MainBackground from '../../utils/asset/MainBackground'
import UsersContainer from './UsersContainer'
import axios from 'axios'
import Loader from '../Home/Loader'
import OwnerWarn from './OwnerWarn'
import { io } from 'socket.io-client'

const Prepare = () => {
  const configs = useSelector((state: { RoomPrepare: State }) => state.RoomPrepare);
  const userData = useSelector(
    (state: { userData: UserState }) => state.userData
  );
  const socket = io(host.host)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  const [warn, setWarn] = useState({
    show: false,
    text: ""
  })
  const { id } = useParams()

  useEffect(() => {
    socket.on("@room_deleted", (text) => {
      setWarn({show: true, text: "Owner left room, and room deleted immediately"})
      console.log("text");
    })
  }, [])
  

  useEffect(() => {
    let monted = true

    axios.get(host.host + "/api/v1/room_id/" + id?.toString())
      .then((resp) => {
        if (monted) {
          dispatch({
            type: "LOAD_ROOM", payload: {
              room_id: resp.data.room_id,
              mode: resp.data.mode,
              visibility: resp.data.visibility,
              owner_id: resp.data.owner_id,
              online_users: resp.data.online_users,
            }
          })
          if(resp.data.owner_id !== userData.client_id){
            dispatch({ type: "ADD_PLAYER", payload: { userToken: userData.client_id, profile_src: userData.avatar, username: userData.username } })
          }
          setIsLoading(false)
        }  
      })
      .catch(error => {
        if (error.response.data.err === "Room Not Found ") {
        }
        console.log(error.response.data)
      })


    return () => {
      monted = false
    }
  }, [])

  return (
    <View style={prepStyle.container}>
      {
        isLoading && <Loader />
      }
      {
        warn.show && <OwnerWarn closeWarn={() => setWarn({...warn, show: false})} text={warn.text}/>
      }
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <Code code={configs.room_id} openWarn={(text) => setWarn({text: text, show: true})}/>
      <UsersContainer />
    </View>
  )
}

export default Prepare
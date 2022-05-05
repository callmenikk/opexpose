import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { FC } from "react"
import axios from 'axios'
import { State } from '../../../Reducers/Setup/Config'
import { State as UserState} from '../../../Reducers/Setup/userData'
import { useDispatch, useSelector } from 'react-redux'
import { State as RoomState} from '../../../Reducers/Playground/RoomPrepare'
import host from "../../../host.json"

const ButtonsStyle = StyleSheet.create({
  buttons_wrapper: {
    width: "100%",
    height: 100,
    display: "flex",
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 30
  },
  button: {
    width: 180,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#45FF45',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  go_back_button: {
    width: 180,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#000',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

const VisibiltyButtons: FC<{ goBack: () => void }> = ({ goBack }) => {
  const configs = useSelector((state: { configs: State }) => state.configs);
  const dispatch = useDispatch()
  const roomPrepare = useSelector( 
    (state: { RoomPrepare: RoomState }) => state.RoomPrepare
  ); 
  const userData = useSelector( 
    (state: { userData: UserState }) => state.userData
  ); 

  const createRoom = async () => {

    await axios.post(host.host+"/api/v1/createRoom", {
      userToken: userData.client_id,
      profile_src: userData.avatar,
      username: userData.username,
      mode: configs.mode,
      visibility: configs.visibility
    })
      .then(resp => {
        dispatch({type: "LOAD_ROOM", payload: {
          room_id: resp.data.room_id,
          mode: resp.data.mode,
          visibility: resp.data.visibility,
          owner_id: resp.data.owner_id,
          profile_src: resp.data.online_users[0].profile_src,
          userToken: resp.data.online_users[0].userToken,
          username: resp.data.online_users[0].username
        }})
      })
      .catch(err => {
        console.log(err.response.data.err)
      })
  }
  
  return (
    <View style={ButtonsStyle.buttons_wrapper}>
      <TouchableOpacity style={ButtonsStyle.go_back_button} onPress={goBack}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 22,
          color: "#FFF"
        }}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ButtonsStyle.button} onPress={createRoom}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 22
        }}>I'm Ready</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VisibiltyButtons
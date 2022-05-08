import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { FC } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-native'
import { State } from '../../../Reducers/Setup/Config'
import { State as UserState } from '../../../Reducers/Setup/userData'
import { useDispatch, useSelector } from 'react-redux'
import { State as RoomState } from '../../../Reducers/Playground/RoomPrepare'
import host from "../../../host.json"

const ButtonsStyle = StyleSheet.create({
  buttons_wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: "center",
    paddingBottom: 20
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
    marginBottom: 10,
    width: 180,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#000',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

const VisibiltyButtons: FC<{ goBack: () => void, setLoad: (bool: boolean) => void }> = ({ goBack, setLoad }) => {
  const configs = useSelector((state: { configs: State }) => state.configs);
  const dispatch = useDispatch()
  const roomPrepare = useSelector(
    (state: { RoomPrepare: RoomState }) => state.RoomPrepare
  );
  const navigate = useNavigate()
  const userData = useSelector(
    (state: { userData: UserState }) => state.userData
  );

  const createRoom = () => {
    let mounted = false
    setLoad(true)

    axios.post(host.host + "/api/v1/createRoom", {
      userToken: userData.client_id,
      profile_src: userData.avatar,
      username: userData.username,
      mode: configs.mode,
      visibility: configs.visibility
    })
      .then(resp => {
        if(!mounted){
          if(resp.data.success){
            navigate(`/prepare/${resp.data.room_id.toString()}`)
          }
        }
      })
      .catch(err => {
        console.log(err.response.data.err)
      })

      return () => {
        mounted = true
      }
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
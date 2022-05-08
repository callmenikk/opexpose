import React from 'react'
import { View, Text } from 'react-native'
import { prepStyle } from './StyleSheet/prep.style'
import { useSelector } from 'react-redux'
import { State } from '../../Reducers/Playground/RoomPrepare'
import UsersList from './UsersList'
import { State as UserState} from '../../Reducers/Setup/userData'
import StartButton from './StartButton'


const UsersContainer = () => {
  const configs = useSelector((state: { RoomPrepare: State }) => state.RoomPrepare);
  const userData = useSelector( 
    (state: { userData: UserState }) => state.userData
  ); 

  return (
    <View style={prepStyle.UsersList}>
      <UsersList />
      <View style={prepStyle.StartWrapper}>
        <View style={{
          height: 40,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Text style={{
            color: "#FFF",
            textAlign: "center"
          }}>
            {
              configs.online_users.length < 3 
              ? "Minimum 3 players must be in room" :
              configs.online_users.length >= 3 
              ? "You can start game" :
              configs.online_users.length === 8 ?
              "There's 8 player, room is full" : "" 
            }
          </Text>
        </View>
        { configs.owner_id === userData.client_id && <StartButton /> }
      </View>
    </View>
  )
}

export default UsersContainer
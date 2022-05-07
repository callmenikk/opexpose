import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { prepStyle } from './StyleSheet/prep.style'
import { useSelector } from 'react-redux'
import { State } from '../../Reducers/Playground/RoomPrepare'
import UsersList from './UsersList'

const UsersContainer = () => {
  const configs = useSelector((state: { RoomPrepare: State }) => state.RoomPrepare);

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
        <TouchableOpacity 
        disabled={configs.online_users.length >= 3 || true}
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
      </View>
    </View>
  )
}

export default UsersContainer
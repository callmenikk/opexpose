import {Text, View} from 'react-native'
import { prepStyle } from './StyleSheet/prep.style'
import { FlatGrid } from 'react-native-super-grid'
import { useSelector } from 'react-redux'
import { State } from '../../Reducers/Prepare/RoomPrepare'
import User from './User'

const UsersList = () => {
  const configs = useSelector((state: { RoomPrepare: State }) => state.RoomPrepare);

  return (
    <View style={prepStyle.users_container}>
      <View style={prepStyle.users_header}>
        <Text style={{
          color:"#FFF",
          fontSize: 20
        }}>Current users in room</Text>
      </View>
      <FlatGrid
        itemDimension={100}
        style={{
          width: "100%",
          height: "100%"
        }}
        data={configs.online_users}
        spacing={10}
        renderItem={(prop) => {
          return <User username={prop.item.username} profile_src={prop.item.profile_src} key={prop.index}/>
        }}
      ></FlatGrid>
    </View>
  )
}

export default UsersList
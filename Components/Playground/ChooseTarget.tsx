import { FC } from 'react'
import { TouchableOpacity, View, Image, Text, Dimensions } from 'react-native'
import { style } from './StyleSheet/pg.style'

const { width } = Dimensions.get("window")

export interface TargetProps {
  client_id: string,
  username: string,
  profile_src: string,
}

export interface ChooseTargetProps extends TargetProps {
  chooseTarget: (obj: TargetProps) => void
}

const ChooseTarget: FC<ChooseTargetProps> = ({client_id, username, profile_src, chooseTarget}) => {

  return (
    <TouchableOpacity style={style.choose_player} onPress={() => chooseTarget({client_id, username, profile_src})}>
      <View style={{
        width: width / 3.5,
        height: width / 3.5,
        borderRadius: 100,
        overflow: "hidden"
      }}>
        <Image
          style={{
            width: "100%",
            height: "100%"
          }}
          source={{
            uri: `data:image/jpeg;base64,${profile_src}`
          }} />
      </View>
      <Text style={{
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 20
      }}>{username}</Text>
    </TouchableOpacity>
  )
}

export default ChooseTarget
import {FC} from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import { dashboardStyle } from './Stylesheet/dashboard.style'

interface GameModeProps {
  title: "Funny" | "Sussy baka" | "DON'T CHOOSE THAT",
  description: string,
  emoji: string,
  chosen: boolean,
  chooseMode: () => void
}

const GameMode: FC<GameModeProps> = ({title, description, emoji, chosen, chooseMode}) => {
  return (
    <TouchableOpacity 
      onPress={chooseMode}
      style={[
      dashboardStyle.gamemode,
      {
        borderColor: "#45FF45",
        borderWidth: chosen ? 2 : 0
      }
    ]}>
      <Text style={[{
        position: "absolute",
        top: 0,
        left: 0,
        fontSize: 72
      },
      {
        transform: [{ translateY: -50 }, {rotate: "-20deg"}, {translateX: -20}],
      }
      ]}>{emoji}</Text>
      <View style={dashboardStyle.titleHeader}>
        <Text style={{
          color: "#FFF",
          fontWeight: "bold",
          fontSize: 22,
        }}>{title}</Text>
      </View>
      <View style={dashboardStyle.description}>
        <Text style={{
          color: "#FFF",
          fontWeight: "600",
          textAlign: "center",
          fontSize: 16
        }}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default GameMode
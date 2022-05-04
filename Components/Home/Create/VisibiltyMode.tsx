import { FC } from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { dashboardStyle } from './Stylesheet/dashboard.style'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

interface GameModeProps {
  title: string
  description: string,
  icon: IconDefinition,
  chosen?: boolean,
  chooseMode: () => void,
}

const VisibiltyMode: FC<GameModeProps> = ({ title, description, icon, chosen, chooseMode }) => {
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
      <View style={[{
        position: "absolute",
        top: 0,
        left: 0,
      },
      {
        transform: [{ translateY: -40 }, { translateX: 0 }],
      }
      ]}>
        <FontAwesomeIcon icon={icon} size={80} color="#FFF"/>
      </View>
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

export default VisibiltyMode
import {FC} from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { symbolPutter } from '../../utils/symbolPutter'
import { prepStyle } from './StyleSheet/prep.style'

const Code: FC<{code: string}> = ({code}) => {
  return (
    <View style={prepStyle.codeWrapper}>
      <TouchableOpacity style={[
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
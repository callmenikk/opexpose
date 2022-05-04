import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {FC} from "react"

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
  go_back_button:{
    width: 180,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#000',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

const VisibiltyButtons: FC<{goBack: () => void}> = ({goBack}) => {
  return (
    <View style={ButtonsStyle.buttons_wrapper}>
      <TouchableOpacity style={ButtonsStyle.go_back_button} onPress={goBack}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 22,
          color: "#FFF"
        }}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ButtonsStyle.button}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 22
        }}>I'm Ready</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VisibiltyButtons
import { useEffect, useState, FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { joinStyle } from './StyleSheet/join.style'
import { TextInput } from 'react-native'
import host from "../../host.json"
import CodeLines from './CodeLines'
import axios from 'axios'
import { useNavigate } from 'react-router-native'

interface CodeInputProps {
  setLoad: (bool: boolean) => void,
  setError: (bool: boolean, text: string) => void
}

const CodeInput: FC<CodeInputProps> = ({setLoad, setError}) => {
  const [code, setCode] = useState<string>("")
  const [lockRequest, setLockRequest]= useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(code.length === 6 && !lockRequest){

      setLoad(true)

      axios.get(host.host + "/api/v1/room_id/" + code)
      .then((resp) => {
        if(!resp.data.success) return

        navigate("/prepare/"+code)
      })
      .catch(error => {
        setLoad(false)
        if(error.response.data.err === 'Room Not Found'){
          setError(true, "Make sure inputed room code is correct")
        }
      })
    }else{
      setLockRequest(false)
    }
  }, [code])

  return (
    <View style={joinStyle.codeWrapper}>
      <View style={{
        width: "100%",
        height: 90,
      }}>
        <TextInput keyboardType="number-pad" 
        onChangeText={(e) => {
          setError(false, "")
          setCode(e.trim())
        }}
        value={code}
        style={joinStyle.InputStyle} maxLength={6} caretHidden={true}/>
        <CodeLines />
        <View style={joinStyle.backWrapper}>
        <TouchableOpacity style={joinStyle.backBtn}
        onPress={() => navigate("/home")}
        >
          <Text style={{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 19
          }}>Back</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CodeInput
import { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { State as UserState} from '../../Reducers/Setup/userData'
import { io } from 'socket.io-client'
import { useSelector } from 'react-redux'
import { State } from '../../Reducers/Playground/playground'
import { style } from './StyleSheet/pg.style'
import { useParams } from 'react-router-native'
import host from "../../host.json"

interface QuestionProps {
  question: string,
  questionNumber: number
}

const Question:FC<QuestionProps> = ({question, questionNumber}) => {
  const socket = io(host.host, {
    transports: ['websocket']
 })
  const userData = useSelector( 
    (state: { userData: UserState }) => state.userData
  ); 
  const [cancelRequest, setCancelRequest] = useState(false)
  const {id} = useParams()
  const playground = useSelector(
    (state: { playground: State }) => state.playground
  );

  useEffect(() => {
    socket.on("@resultCallback", (msg) => {
      console.log(msg);
      

      if(playground.owner_id !== userData.client_id) return
      if(cancelRequest) return

      socket.emit("@result", id)
      setCancelRequest(true)        
      
    })
  }, [])

  return (
    <View style={style.question_container}>
      <View style={style.question}>
        <View style={style.questionHeader}>
          <Text style={{
            color: "#FFF",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center"
          }}>Question {questionNumber}/20</Text>
        </View>
        <View style={style.question_section}>
          <Text style={{
            color: "#FFF",
            fontWeight: "bold",
            textAlign: "center",     
            fontSize: 29
          }}>{question}</Text>
        </View>
      </View>
      
    </View>
  )
}

export default Question
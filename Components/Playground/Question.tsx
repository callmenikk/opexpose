import { FC, useEffect, useState } from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { State as UserState } from '../../Reducers/Setup/userData'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../Reducers/Playground/playground'
import { style } from './StyleSheet/pg.style'
import { useParams } from 'react-router-native'
import host from "../../host.json"

// paddingTop: 60

interface QuestionProps {
  question: string,
  questionNumber: number,
  optionalStyle?: StyleProp<ViewStyle>
}

const Question: FC<QuestionProps> = ({ question, questionNumber, optionalStyle }) => {
  const socket = io(host.host, {
    transports: ['websocket']
  })
  const dispatch = useDispatch()

  useEffect(() => {

    socket.on("@set_next_question", async (next_question) => {
      dispatch({type: "CLEAR_RESULTS"})
      dispatch({
        type: "SET_QUESTION", payload: {
          questions: await next_question.questionText,
          targets: await next_question.targets,
          questionNumber: await next_question.question,
          owner_id: await next_question.owner_id
        }
      })
      dispatch({
        type: "SET_SHOW", payload: {
          show: false
        }
      })
    })

  }, [])

  return (
    <View style={[style.question_container, optionalStyle]}>
      <View style={style.question}>
        <View style={style.questionHeader}>
          <Text style={{
            color: "#FFF",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center"
          }} onPress={() => dispatch({ type: "CLEAR_RESULTS" })}>Question {questionNumber}/20</Text>
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
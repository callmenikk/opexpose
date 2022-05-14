import { FC } from 'react'
import { View, Text } from 'react-native'
import { style } from './StyleSheet/pg.style'

interface QuestionProps {
  question: string,
  questionNumber: number
}

const Question:FC<QuestionProps> = ({question, questionNumber}) => {
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
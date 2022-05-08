import React, { useState } from 'react'
import { Text, View } from 'react-native'
import MainBackground from '../../utils/asset/MainBackground'
import { joinStyle } from './StyleSheet/join.style'
import { setupStyle } from '../Setup/Stylesheet/Setup.style'
import Loader from '../Home/Loader'
import CodeInput from './CodeInput'
import Error from './Error'

type isErrorType = {
  error: boolean,
  text: string
}

const JoinCode = () => {
  const [isError, setIsError] = useState<isErrorType>({
    error: false,
    text: "Room Doesn't Exist"
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <View style={joinStyle.container}>
      {
        isError.error && <Error text={isError.text} />
      }
      {
        isLoading && <Loader />
      }
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <View style={joinStyle.inputAlign}>
        <Text style={{
          color: '#FFF',
          fontWeight: "bold",
          fontSize: 19
        }}>Input Room Code</Text>
        <CodeInput setError={(bool, text) => {
          setIsError({ error: bool, text })
        }}
          setLoad={(bool) => setIsLoading(bool)}
        />
      </View>
    </View>
  )
}

export default JoinCode
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { style } from './StyleSheet/pg.style'
import { State } from '../../Reducers/Playground/playground'
import { useSelector } from 'react-redux'

const Timer = () => {
  const [timerNumber, setTimerNumber] = useState<number>(100)
  const playground = useSelector(
    (state: { playground: State }) => state.playground
  );

  useEffect(() => {
    let mounted = true

    if(mounted){
      setTimerNumber(100)
    }

    return () => {
      mounted = false
    }
  }, [playground.questions])

  useEffect(() => {
    const timer = setInterval(() => {

      if(timerNumber <= 0) {
        setTimerNumber(0)
      }else{
        setTimerNumber(prev => prev - 10)
      }     

    }, 1000)

    return () => clearInterval(timer)
    
  }, [timerNumber])

  return (
    <View style={{
      position: "absolute",
      bottom: 0,
      width: "100%",
      paddingHorizontal: 20
    }}>
      <View style={[style.timerWrapper, {transform: [{translateY: -20}]}]}>
        <View style={{
          width: `${timerNumber}%`,
          backgroundColor: timerNumber > 40 ? "#6EBD6E" : "#ff4242",
          borderRadius: 100,
          height: "100%",
          top: 0,
          left: 0
        }}/>
      </View>
    </View>
  )
}

export default Timer
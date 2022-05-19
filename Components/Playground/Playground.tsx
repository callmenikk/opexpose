import { View } from 'react-native'
import { useState } from 'react'
import { style } from './StyleSheet/pg.style'
import { setupStyle } from '../Setup/Stylesheet/Setup.style'
import { useSelector } from 'react-redux'
import { State } from '../../Reducers/Playground/playground'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { useParams } from 'react-router-native'
import QuestionTargets from './QuestionTargets'
import MainBackground from '../../utils/asset/MainBackground'
import Timer from './Timer'
import Question from './Question'
import host from "../../host.json"
import { State as UserState} from '../../Reducers/Setup/userData'
import Loader from '../Home/Loader'
import Waiter from './Waiter'

const Playground = () => {
  const socket = io(host.host)
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const userData = useSelector( 
    (state: { userData: UserState }) => state.userData
  ); 
  const playground = useSelector(
    (state: { playground: State }) => state.playground
  );
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    socket.connect()
    socket.emit("@port_open")
    socket.emit('@listen', id)
    setIsLoading(false)
  }, [socket])

  return ( 
    <View style={style.container}>
      {
        isLoading && <Loader />
      }
      {
        isWaiting && <Waiter />
      }
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <Question question={playground.questions} questionNumber={playground.questionNumber}/>
      <QuestionTargets chooseTarget={(obj) => {
        socket.emit("@vote", {
          client_id: obj.client_id,
          profile_src: obj.profile_src,
          username: obj.username,
          voter: userData.client_id
        }, id)
        console.log({
          A: obj.client_id,
          B: obj.username,
          votedBy: userData.client_id
        })
        // setIsWaiting(true)
      }}/>
      <Timer />
    </View>
  )
}

export default Playground
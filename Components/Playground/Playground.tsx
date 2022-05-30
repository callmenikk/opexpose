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
import { State as ResultsType } from '../../Reducers/Playground/results'
import Question from './Question'
import host from "../../host.json"
import { State as UserState } from '../../Reducers/Setup/userData'
import Loader from '../Home/Loader'
import Waiter from './Waiter'
import Results from './Results/Unvisible'
import { ChooseTargetProps, TargetProps } from './ChooseTarget'


const Playground = () => {
  const socket = io(host.host, { transports: ['websocket'] })
  const results = useSelector((state: { results: ResultsType }) => state.results);
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const userData = useSelector((state: { userData: UserState }) => state.userData);
  const playground = useSelector((state: { playground: State }) => state.playground);
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    if(!isLoading) return
    
    socket.connect()

    socket.on('connect', () => {
      console.log('connected')
      setIsLoading(false)
    });

    socket.emit('@listen', id)

  }, [socket])

  const chooseTarget = (obj: TargetProps) => {
    socket.emit("@vote", {
      client_id: obj.client_id,
      profile_src: obj.profile_src,
      username: obj.username,
      voter: userData.client_id
    }, id)

    setIsWaiting(true)
  }

  return (
    <View style={style.container}>
      {results.show && <Results />}
      {isLoading && <Loader />}
      {isWaiting && <Waiter />}
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <Question question={playground.questions} questionNumber={playground.questionNumber} optionalStyle={{ paddingTop: 60 }} />
      <QuestionTargets
        closeWaiting={() => setIsWaiting(false)}
        chooseTarget={(obj) => chooseTarget(obj)} />
      <Timer />
    </View>
  )
}

export default Playground
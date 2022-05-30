import { View } from 'react-native'
import { style } from './StyleSheet/pg.style'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../Reducers/Playground/playground'
import { FC, useEffect, useState } from 'react'
import { ChooseTargetProps } from './ChooseTarget'
import ChooseTarget from './ChooseTarget'
import { io } from 'socket.io-client'
import host from "../../host.json"

interface QuestionProps {
  chooseTarget: ChooseTargetProps["chooseTarget"]
  closeWaiting: () => void
}

const QuestionTargets: FC<QuestionProps> = ({ chooseTarget, closeWaiting }) => {
  const socket = io(host.host, { transports: ['websocket'] })
  const dispatch = useDispatch()
  const playground = useSelector(
    (state: { playground: State }) => state.playground
  );

  useEffect(() => {

    socket.off("@result_done").on("@result_done", (results) => {
      console.log("request received");

      console.log(results.first_participant.whoVoted)

      dispatch({
        type: "SET_RESULTS", payload: {
          visibility: !results.visibility,
          first_participant: results.first_participant,
          second_participant: results.second_participant
        }
      })
      dispatch({ type: "SET_SHOW", payload: { show: true } })

      closeWaiting()
    })

    return () => { socket.off("@result_done") }


  }, [])


  return (
    <View style={style.targets_container}>
      <ChooseTarget
        chooseTarget={() => chooseTarget({
          client_id: playground.targets[0].userToken,
          profile_src: playground.targets[0].profile_src,
          username: playground.targets[0].username
        })}
        username={playground.targets[0].username}
        profile_src={playground.targets[0].profile_src}
        client_id={playground.targets[0].userToken}
      />
      <ChooseTarget
        chooseTarget={() => chooseTarget({
          client_id: playground.targets[1].userToken,
          profile_src: playground.targets[1].profile_src,
          username: playground.targets[1].username
        })}
        username={playground.targets[1].username}
        profile_src={playground.targets[1].profile_src}
        client_id={playground.targets[1].userToken}
      />
    </View>
  )
}

export default QuestionTargets
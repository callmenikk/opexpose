import { View } from 'react-native'
import { style } from './StyleSheet/pg.style'
import { useSelector } from 'react-redux'
import { State } from '../../Reducers/Playground/playground'
import { FC } from 'react'
import { ChooseTargetProps } from './ChooseTarget'
import ChooseTarget from './ChooseTarget'


const QuestionTargets: FC<{chooseTarget: ChooseTargetProps["chooseTarget"]}> = ({chooseTarget}) => {
  const playground = useSelector(
    (state: { playground: State }) => state.playground
  );

  console.log(playground);
  console.log(playground.targets[1].username);
  //asdasd
  

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
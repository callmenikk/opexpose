import { View } from 'react-native'
import { State } from '../../../Reducers/Setup/Config'
import { useDispatch, useSelector } from 'react-redux'
import VisibiltyMode from './VisibiltyMode'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import VisibiltyButtons from './VisibiltyButtons'
import { FC } from 'react'


const Visibilty: FC<{goBack: () => void}> = ({goBack}) => {
  const dispatch = useDispatch()
  const configs = useSelector((state: { configs: State }) => state.configs);

  return (
    <View style={{
      display: "flex",
      width: "100%",
      height: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 30,
      alignItems: "center"
    }}>
      <VisibiltyMode
        title={"Visible Voters"}
        description={"When Question timer ends, room user will be able to see who voted specific users"}
        icon={faEye}
        chooseMode={() => dispatch({ type: "VISIBILITY", payload: true })}
        chosen={configs.visibility}
      />
      <VisibiltyMode
        title={"Invisible Voters"}
        icon={faUserNinja}
        description={"When Question timer ends, room users won’t able to see who voted, only count and percentages will be shown"}
        chooseMode={() => dispatch({ type: "VISIBILITY", payload: false })}
        chosen={!configs.visibility}      
      />
      <VisibiltyButtons goBack={goBack}/>
    </View>
  )
}

export default Visibilty
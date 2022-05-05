import { ScrollView, View } from 'react-native'
import { State } from '../../../Reducers/Setup/Config'
import { useDispatch, useSelector } from 'react-redux'
import VisibiltyMode from './VisibiltyMode'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import VisibiltyButtons from './VisibiltyButtons'
import { FC } from 'react'


const Visibilty: FC<{goBack: () => void, setLoad: (bool: boolean) => void}> = ({goBack, setLoad}) => {
  const dispatch = useDispatch()
  const configs = useSelector((state: { configs: State }) => state.configs);

  return (
    <ScrollView contentContainerStyle={{
      display: "flex",
      width: "100%",
      paddingHorizontal: 20,
      paddingTop: 30,
      justifyContent: 'center',
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
      <VisibiltyButtons goBack={goBack} setLoad={setLoad}/>
    </ScrollView>
  )
}

export default Visibilty
import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { dashboardStyle } from './Stylesheet/dashboard.style'
import Category from './Category';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Visibilty from './Visibilty';
import { useDispatch } from 'react-redux';
import { FC } from 'react';

const Dashboard: FC<{closeCreate: () => void}> = ({closeCreate}) => {
  const [dashboard, setDashboard] = useState<"CATEGORY" | "VISIBILITY">("CATEGORY")
  const dispatch = useDispatch()


  return (
    <View style={dashboardStyle.dashboard}>
      <View style={dashboardStyle.dashboard_header}>
        <Text style={{
          color: "#FFF",
          fontWeight: "bold",
          fontSize: 25
        }}>Choose Game Mode</Text>
        <TouchableOpacity style={[{
          position: "absolute",
          right: 0,
          width: 50,
          height: 50,
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center'
        },
        { transform: [{ translateX: -20 }] },
        ]}
        onPress={() => {
          closeCreate()
          dispatch({type: "MODE", payload:""})
        }}
        >
          <FontAwesomeIcon icon={faXmark} color="#FFF" size={24} />
        </TouchableOpacity>
      </View>
      { dashboard === "CATEGORY" && <Category closeCreate={closeCreate} changeDashboard={() => setDashboard("VISIBILITY")}/> }
      { dashboard === "VISIBILITY" && <Visibilty goBack={() => setDashboard("CATEGORY")}/>}
    </View>
  )
}

export default Dashboard
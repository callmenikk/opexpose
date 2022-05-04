import { View, Text, TouchableOpacity } from 'react-native'
import { dashboardStyle } from './Stylesheet/dashboard.style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { State } from '../../../Reducers/Setup/Config';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import GameMode from './GameMode';
import { useState } from 'react';

const Dashboard = () => {
  const configs = useSelector((state: { configs: State }) => state.configs);
  const [chosen, setChosen] = useState<{ [key: string]: boolean }>({ "1": false, "2": false, "3": false })

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
          width: 20,
          height: 20
        },
        { transform: [{ translateX: -20 }] },
        ]}>
          <FontAwesomeIcon icon={faXmark} color="#FFF" size={24} />
        </TouchableOpacity>
      </View>
      <View style={{
        display: "flex",
        width: "100%",
        height: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        alignItems: "center"
      }}>
      
        <GameMode 
          title={"Funny"} 
          emoji={"😆"} 
          description={"It is best way to enjoy and introduce game, if you play with new people they will understand the game"} 
          chosen={chosen["1"]}
          chooseMode={() => setChosen({
            "1": true,
            "2": false,
            "3": false
          })} />
        <GameMode 
          title={"Sussy baka"} 
          emoji={"🤨"} 
          description={"Little bit sussy questions, which will make you to say bro wtf kind of question is that?"} 
          chosen={chosen["2"]}
          chooseMode={() => setChosen({
            "1": false,
            "2": true,
            "3": false
          })}
          />
        <GameMode 
          title={"DON'T CHOOSE THAT"} 
          emoji={"😳"} 
          description={"JUST DON'T CHOOSE THAT ONE PLEASE, IT WILL BREAK FRIENDSHIP BETWEEN U AND UR FRIENDS, JUST DONT PLS"} 
          chosen={chosen["3"]}
          chooseMode={() => setChosen({
            "1": false,
            "2": false,
            "3": true
          })}
          />
        <TouchableOpacity
          style={{
            width: 200,
            height: 70,
            borderRadius: 100,
            backgroundColor: "#45FF45",
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{
            color: '#000',
            fontWeight: "bold",
            fontSize: 28
          }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Dashboard
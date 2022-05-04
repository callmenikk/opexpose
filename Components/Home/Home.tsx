import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Create/Dashboard";
import { useNavigate } from "react-router-native";
import { State } from "../../Reducers/Setup/userData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setupStyle } from "../Setup/Stylesheet/Setup.style";
import MainBackground from "../../utils/asset/MainBackground";
import { homeStyle } from "./Stylesheet/home.style";
import io from 'socket.io-client'; 
import host from "../../host.json"
import Loader from "./Loader";  
 
const Home = () => {   
  const [openCreate, setOpenCreate] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()    
  const [isLoading, setIsLoading] = useState(true)
  const userData = useSelector( 
    (state: { userData: State }) => state.userData
  ); 
  
  const socket = io(host.host)
  
  //connects socket 
  useEffect(() => {
    socket.connect()

    socket.emit("@port_open")
    
    socket.on("@response", async (status) => {       
      if(await status){
        setIsLoading(false)
      }
    })
  }, [socket])

  
  const _getUserData = async () => {
    try{
      const userStore = await AsyncStorage.getItem('@user_data')
      
      if(userStore == null){
        return navigate("/")
      }

      const parseUser = JSON.parse(userStore) 

      dispatch({
        type: "FILL_DATA",
        payload: {
          username: parseUser.username,
          client_id: parseUser.client_id,
          avatar: parseUser.profileSrcBase64
        }
      })      

    }catch(e){
      
    }
  }

  useEffect(() => {
    _getUserData()
  }, [])


  return (
      <View style={homeStyle.homeContainer}>
        {
          isLoading &&
          <Loader />
        }
        <View style={setupStyle.mainBg}>
          <MainBackground />
        </View>
        <View style={homeStyle.user_data_wrapper}>
          <TouchableOpacity style={homeStyle.user_avatar}>
            <Image 
            style={{
              width: "100%",
              height: "100%"
            }}
            source={{
              uri: `data:image/jpeg;base64,${userData.avatar}`
            }}/>
          </TouchableOpacity>
          <Text
            style={{
              color: "#FFF",
              fontWeight: "900",
              marginTop: 10,
              fontSize: 22,
            }}
          >
            {userData.username}
          </Text>
          <View style={homeStyle.buttons_wrapper}>
            <TouchableOpacity style={homeStyle.party_buttons}>
              <Text
               style={{
                fontSize: 22,
                fontWeight: "900"
              }}>Create Party</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyle.party_buttons}>
              <Text style={{
                fontSize: 22,
                fontWeight: "900"
              }}>Join Game</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          !openCreate &&
          <Dashboard />
        }
      </View>
  );
};

export default Home;

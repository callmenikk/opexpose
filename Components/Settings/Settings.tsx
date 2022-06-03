import { View, TextInput, TouchableOpacity, Text, Platform } from 'react-native'
import { style } from './StyleSheet/settings.style'
import MainBackground from '../../utils/asset/MainBackground'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setupStyle } from '../Setup/Stylesheet/Setup.style'
import ProfileImage from './Image'
import ChoosePhotoModal from '../Setup/ChoosePhotoModal'
import { getAssetsAsync, usePermissions } from "expo-media-library";
import { isEqual } from '../../utils/isEqual'
import { style as ButtonStyle} from '../Prepare/StyleSheet/Warn.style'
import { useNavigate } from 'react-router-native'

const initial = {
  username: "",
  profile_src: ""
}

const Settings = () => {
  const [loadUser, setLoadUser] = useState(initial)
  const [newInputs, setNewInputs] = useState(initial)
  const [status, requestPermission] = usePermissions();
  const [changed, setChanged] = useState(false)
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clientPhotos, setClientPhotos] = useState<string[]>([]);

  const _loadUserData = async () => {
    const userStore = await AsyncStorage.getItem('@user_data')

    const parseUser = JSON.parse(userStore as any)

    setLoadUser({
      username: parseUser.username,
      profile_src: parseUser.profileSrcBase64
    })
    setNewInputs({
      username: parseUser.username,
      profile_src: parseUser.profileSrcBase64
    })
  }

  useEffect(() => {
    const isequal = isEqual<typeof newInputs>(loadUser, newInputs)
    setChanged(!isequal)
  }, [newInputs])

  const _saveNewData = async () => {
    const userStore = await AsyncStorage.getItem('@user_data')
    const parseUser = JSON.parse(userStore as any)
    
    setLoadUser({
      username: newInputs.username,
      profile_src: newInputs.profile_src
    })
    setChanged(false)

    await AsyncStorage.setItem('@user_data', JSON.stringify({
      ...parseUser,
      username: newInputs.username,
      profileSrcBase64: newInputs.profile_src,
    }))

  }
  

  const hasAndroidPermission = async () => {
    await requestPermission();

    return status?.granted;
  };

  const savePicture = async () => {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }

    setIsModalVisible(true);

    await getAssetsAsync({ first: 50, mediaType: "photo" }).then((photo) => {
      setClientPhotos(
        photo.assets.map((e) => {
          return e.uri;
        })
      );
    });
  };

  useEffect(() => {
    _loadUserData()  
  }, [])

  return (
    <View style={style.settings}>
      <TouchableOpacity style={[ButtonStyle.button, { backgroundColor: "#FFF", zIndex: 50, left: 0, position: "absolute"}, {
        transform: [{
          translateX: 20,
        }, {
          translateY: 50
        }]
      }]} onPress={() => navigate('/home')}>
        <Text style={{
          color: "#000",
        }}>Leave</Text>
      </TouchableOpacity>
      <View style={setupStyle.mainBg}>
        <MainBackground />
      </View>
      <ProfileImage profile_src={newInputs.profile_src} openModal={() => {
        savePicture()
      }} />
      <TextInput style={style.input} maxLength={15} value={newInputs.username} onChangeText={(e) => {
        setNewInputs((prev) => {
          return {
            ...prev,
            username: e
          }
        })
      }} />
      <View style={style.buttons_wrapper}>
        <TouchableOpacity style={[style.button, {
          backgroundColor: "#303030"
        }]} onPress={() => {
          setNewInputs(loadUser)
        }}>
          <Text style={{
            color: "#FFF",
            fontSize: 20,
            fontWeight: "bold"
          }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={!changed} onPress={_saveNewData} style={[style.button, {
          backgroundColor: changed ? "#3FFF3F" : "#323332"
        }]}>
          <Text style={{
            color: "#000",
            fontSize: 20,
            fontWeight: "bold"
          }}>Done</Text>
        </TouchableOpacity>
      </View>
      {
        isModalVisible &&
        <ChoosePhotoModal
          clientPhotos={clientPhotos}
          closeModal={() => setIsModalVisible(false)}
          insertPhoto={(base64) => {
            setNewInputs((prev) => {
              return {
                ...prev,
                profile_src: base64
              }
            })
          }} />
      }
    </View>
  )
}

export default Settings
import { Text, TouchableOpacity, TextInput, Image, Platform } from "react-native";
import { setupStyle } from "./Stylesheet/Setup.style";
import { useNavigate } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { useState, FC } from "react";
import { getAssetsAsync, usePermissions } from "expo-media-library";
import ChoosePhotoModal from "./ChoosePhotoModal";
import { tokenGenerator } from "../../utils/Token";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomizeProfile: FC<{triggerModal: (bool: boolean, text: string) => void}> = ({triggerModal}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [status, requestPermission] = usePermissions();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clientPhotos, setClientPhotos] = useState<string[]>([]);
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    username: "",
    profileSrcBase64: "",
    client_id: "",
  });
  

  const insertPhoto = (base64: string) => {
    setUserInfo((prev) => {
      return {
        ...prev,
        profileSrcBase64: base64,
      };
    });
  };

  const inputHandler = (e: any) => {
    setUserInfo({
      ...userInfo,
      username: e,
    });
  };

  const _handleStorageSave = async (value: typeof userInfo) => {
    
    try {
      if(!value.profileSrcBase64.trim() || !value.username.trim()){
        return triggerModal(true, "Upload Picture and input username")
      }

      const generateId = {
        ...value,
        client_id: tokenGenerator()
      }

      await AsyncStorage.setItem('@user_data', JSON.stringify(generateId))
      navigate("/home")

    } catch (e) {
      throw new Error(`${e}`)
    }
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

  return (
    <>
      <TouchableOpacity style={setupStyle.uploadCamera} onPress={savePicture}>
        {!userInfo.profileSrcBase64 ? (
          <>
            <FontAwesomeIcon icon={faCameraRetro} color="#59EF57" size={64} />
            <Text
              style={{
                color: "#FFF",
              }}
            >
              Choose Photo
            </Text>
          </>
        ) : (
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={{
              uri: `data:image/jpeg;base64,${userInfo.profileSrcBase64}`,
            }}
          />
        )}
      </TouchableOpacity>

      <TextInput
        placeholder="Username"
        style={[
          setupStyle.inputStyles,

          {
            transform: [{ translateY: 50 }],
            shadowOffset: { width: -2, height: 2 },

            shadowColor: focus ? "#59EF5779" : "#000",
          },
        ]}
        placeholderTextColor="#3b3b3b"
        value={userInfo.username}
        onChangeText={inputHandler}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
      />
      <TouchableOpacity
        onPress={() => _handleStorageSave(userInfo)}
        style={[setupStyle.nextButton, { transform: [{ translateY: 75 }] }]}
      >
        <Text
          style={{
            fontWeight: "900",
            fontSize: 18,
          }}
        >
          LET'S GOO
        </Text>
      </TouchableOpacity>
      {isModalVisible && (
        <ChoosePhotoModal
          clientPhotos={clientPhotos}
          closeModal={() => setIsModalVisible(false)}
          insertPhoto={insertPhoto}
        />
      )}
    </>
  );
};

export default CustomizeProfile;

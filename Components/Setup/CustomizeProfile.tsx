import { Text, TouchableOpacity, TextInput } from "react-native";
import { setupStyle } from "./Stylesheet/Setup.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Platform } from "react-native";
import { getAssetsAsync, usePermissions } from "expo-media-library";
import ChoosePhotoModal from "./ChoosePhotoModal";

const CustomizeProfile = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [status, requestPermission] = usePermissions();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clientPhotos, setClientPhotos] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState({
    username: "",
    profileSrcBase64: "",
    client_id: "",
  });

  const inputHandler = (e: any) => {
    setUserInfo({
      ...userInfo,
      username: e.target.value,
    });
  };

  const hasAndroidPermission = async () => {
    await requestPermission();

    return status?.granted;
    // const permission: Permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    // const hasPermission: boolean = await PermissionsAndroid.check(permission);
    // if (hasPermission) {
    // 	return true
    // }

    // const status = await PermissionsAndroid.request(permission);
    // return status === PermissionsAndroid.RESULTS.GRANTED;
  };

  const savePicture = async () => {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }

	setIsModalVisible(true)

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
        <FontAwesomeIcon icon={faCameraRetro} color="#59EF57" size={64} />
        <Text
          style={{
            color: "#FFF",
          }}
        >
          Choose Photo
        </Text>
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
        onChange={inputHandler}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
      />
      <TouchableOpacity
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
        <ChoosePhotoModal isModalVisible clientPhotos={clientPhotos} closeModal={() => setIsModalVisible(false)}/>
      )}
    </>
  );
};

export default CustomizeProfile;

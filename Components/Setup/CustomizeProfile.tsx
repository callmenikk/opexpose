import { Text, TouchableOpacity, TextInput } from 'react-native'
import { setupStyle } from './Stylesheet/Setup.style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useState, FormEvent } from 'react'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { PermissionsAndroid, Platform, Permission } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";


const CustomizeProfile = () => {
	const [focus, setFocus] = useState<boolean>(false)
	const [userInfo, setUserInfo] = useState({
		username: "",
		profileSrcBase64: "",
		client_id: ""
	})

	const inputHandler = (e: any) => {
		setUserInfo({
			...userInfo,
			username: e.target.value
		})
	}

	const hasAndroidPermission = async () => {
		const permission: Permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

		const hasPermission: boolean = await PermissionsAndroid.check(permission);
		if (hasPermission) {
			return true
		}

		const status = await PermissionsAndroid.request(permission);
		return status === 'granted';
	}

	const savePicture = async () => {
		if (Platform.OS === "android" && !(await hasAndroidPermission())) {
			return;
		}
		console.log("Access Granted")
		// CameraRoll.getPhotos({first: 50, assetType: 'Photos'})
		// .then(photos => {
		// 	console.log(photos.edges)
		// })
		// .catch(err => {
		// 	console.log(err)
		// })
	};

	return (
		<>
			<TouchableOpacity style={setupStyle.uploadCamera} onPress={savePicture}>
				<FontAwesomeIcon icon={faCameraRetro} color="#59EF57" size={64} />
				<Text style={{
					color: "#FFF"
				}}>Choose Photo</Text>
			</TouchableOpacity>
			<TextInput placeholder="Username" style={
				[
					setupStyle.inputStyles,

					{
						transform: [
							{ translateY: 50 },
						],
						shadowOffset: { width: -2, height: 2 },

						shadowColor: focus ? "#59EF5779" : "#000"
					},

				]
			}
			value={userInfo.username} 
			onChange={inputHandler}
			onFocus={() => {
				setFocus(true)
			}} onBlur={() => setFocus(false)} />
			<TouchableOpacity style={[setupStyle.nextButton,
			{ transform: [{ translateY: 75 }] }]}>
				<Text style={{
					fontWeight: "900",
					fontSize: 18
				}}>LET'S GOO</Text>
			</TouchableOpacity>
		</>
	)
}

export default CustomizeProfile
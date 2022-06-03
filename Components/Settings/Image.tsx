import { FC } from 'react'
import { Image, TouchableOpacity} from 'react-native'
import { style } from './StyleSheet/settings.style'

const ProfileImage: FC<{
  profile_src: string
  openModal: () => void
}> = ({profile_src, openModal}) => {
  return (
    <TouchableOpacity style={style.profile_wrapper} onPress={openModal}>
      <Image 
      style={{
        width: "100%",
        height: "100%"
      }}
      source={{
        uri: `data:image/jpeg;base64,${profile_src}`
      }}/>
    </TouchableOpacity>
  )
}

export default ProfileImage
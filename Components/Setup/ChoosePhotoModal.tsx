import { View, Text, Image, TouchableOpacity } from "react-native";
import { setupStyle } from "./Stylesheet/Setup.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlatGrid } from "react-native-super-grid";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface PhotoProps {
  clientPhotos: string[];
  isModalVisible: boolean;
  closeModal: () => void;
}

const ChoosePhotoModal: FC<PhotoProps> = ({ clientPhotos, closeModal }) => {
  return (
    <View style={setupStyle.photosModal}>
      <View style={setupStyle.modalHeader}>
        <Text
          style={{
            color: "#FFF",
            fontSize: 18,
          }}
        >
          Choose Photo
        </Text>
        <TouchableOpacity
          onPress={closeModal}
          style={[
            {
              position: "absolute",
              right: 0,
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: [{ translateX: -20 }],
            },
          ]}
        >
          <FontAwesomeIcon icon={faXmark} color={"#FFF"} />
        </TouchableOpacity>
      </View>
      <FlatGrid
        itemDimension={200}
        data={clientPhotos}
        renderItem={({item}) => {
          return (
						<View style={setupStyle.client_photo} key={""}>
            <Image
              source={{
                uri: item,
              }}
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: 10,
              }}
            />
          </View>
					) 
        }}
      ></FlatGrid>
    </View>
  );
};

export default ChoosePhotoModal;

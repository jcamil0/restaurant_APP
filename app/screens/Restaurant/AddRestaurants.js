import React, { useState } from "react";
import { View, StyleSheet, Alert, Dimensions, Image } from "react-native";
import { isEmpty, map, size, filter } from "lodash";
import { Avatar, Icon } from "react-native-elements";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "../../components/Buttons";
import Inputs from "../../components/Inputs";

const widthScreen = Dimensions.get("window").width;
export default function App() {
  const [data, setData] = useState({
    name: "",
    address: "",
    description: "",
  });
  const [Images, setImages] = useState([]);
  console.log(Images);
  const onSUbbmit = () => {
    if (
      isEmpty(data.name) ||
      isEmpty(data.address) ||
      isEmpty(data.description)
    ) {
      console.log("todos los datos son obligatorios");
    } else {
      console.log(data);
    }
  };

  const onChange = (e, type) => {
    setData({ ...data, [type]: e.target.value });
  };

  return (
    <View style={styles.container}>
      <ImageRestaurant Images={Images[0]} />
      <Inputs
        title="nombre del resaturante"
        onChange={(e) => onChange(e, "name")}
      />
      <Inputs title="direcion" onChange={(e) => onChange(e, "address")} />
      <Inputs
        title="descripcion"
        onChange={(e) => onChange(e, "description")}
      />
      <AddImages setImages={setImages} Images={Images} />

      <CustomButton title="crear restaurante" onPress={onSUbbmit} />
    </View>
  );
}
function ImageRestaurant(props) {
  const { Images } = props;
  return (
    <View style={styles.viewPhoto}>
      <Image
        source={
          Images
            ? { uri: Images }
            : require("../../../assets/image-not-found.png")
        }
        style={{ width: widthScreen, height: 200 }}
      />
    </View>
  );
}
function AddImages(props) {
  const { setImages, Images } = props;

  const imageSelect = async () => {
    console.log("select");
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    if (resultPermissions === "denied") {
      console.log("no hay permisos");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      /*   console.log(result); */
      if (result.cancelled) {
        console.log("no ha selacionado una imagen");
      } else {
        /* console.log("ok"); */
        /* console.log(result.uri); */
        setImages([...Images, result.uri]);
      }
    }
  };
  const removeImage = (image) => {
    Alert.alert(
      "eliminar imagenes",
      "estas seguro",
      [
        {
          text: "cancel",
          style: "cancel",
        },
        {
          text: "eliminar",
          onPress: () => {
            setImages(filter(Images, (imagesUrl) => imagesUrl !== image));
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.addImagesContainer}>
      {size(Images) < 4 && (
        <Icon
          type="material-community"
          name="camera"
          color="#7a7a7a"
          containerStyle={styles.containerIcon}
          onPress={imageSelect}
        />
      )}
      {map(Images, (imagesRestaurant, index) => (
        <Avatar
          key={index}
          style={styles.miniatureStyle}
          source={{ uri: imagesRestaurant }}
          onPress={() => removeImage(imagesRestaurant)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  input: {
    padding: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  addImagesContainer: {
    flexDirection: "row",
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    height: 70,
    width: 70,
    backgroundColor: "#e3e3e3",
  },
  miniatureStyle: {
    height: 70,
    width: 70,
    marginHorizontal: 4,
  },
  viewPhoto: {
    alignItems: "center",
    height: 200,
    marginBottom: 20,
  },
});

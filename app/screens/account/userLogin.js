import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem, Button, Icon } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { OpaqueColorValue } from "react-native";

export default function userLogin() {
  const [avatar, setAvatar] = useState(null);
  const options = [
    {
      option: "cambiar nombre y apellido",
      icon: "account-circle",
      iconType: "material-community",
    },
    { option: "cambiar email", icon: "at", iconType: "material-community" },
    {
      option: "cambiar constraseña",
      icon: "lock-reset",
      iconType: "material-community",
    },
  ];
  const changeAvatar = async () => {
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
        /* toast */
        console.log("no ha seleccioano niguna imagen");
      } else {
        uploadImages(result.uri)
          .then(() => {
            console.log("ok");
            updateAvatar();
          })
          .catch(() => {
            console.log("error");
          });
      }
    }
  };

  const uploadImages = async (uri) => {
    const response = await fetch(uri);
    /*     console.log(JSON.stringify(response)); */
    const blob = await response.blob();
    /* console.log(JSON.stringify(blob)); */
    const ref = firebase.default
      .storage()
      .ref()
      .child(`avatar/${"1VbQifn4g1Rfo2BAOKzkeKcjVow1"}`);
    /*  console.log(ref) */
    return ref.put(blob);
  };

  const updateAvatar = () => {
    firebase.default
      .storage()
      .ref(`avatar/${"1VbQifn4g1Rfo2BAOKzkeKcjVow1"}`)
      .getDownloadURL()
      .then(async (resposne) => {
        console.log(resposne);
        setAvatar(resposne);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Avatar
          rounded
          source={
            avatar
              ? { uri: avatar }
              : require("../../../assets/guestavatar.png")
          }
          size={75}
          onPress={changeAvatar}
        />
        <View style={styles.avataritem}>
          <Text style={styles.email}>jcamilo.llanos @hotmail.com</Text>
          <Text style={styles.user}>@ anonimus</Text>
        </View>
      </View>

      <View style={styles.options}>
        {options.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => console.log(l.option)}>
            <Icon name={l.icon} type={l.iconType} />
            <ListItem.Content>
              <ListItem.Title>{l.option}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="blue" size={24} />
          </ListItem>
        ))}
      </View>

      <Button
        title="sign out"
        onPress={() => firebase.default.auth().signOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvatar: {
    marginLeft: 16,
    flexDirection: "row",
  },
  avataritem: {
    justifyContent: "center",
    marginLeft: 10,
  },
  email: {
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.5,
    textAlign: "left",
    fontStyle: "normal",
  },
  user: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 21,
    color: "#9098B1",
  },
  options: {
    marginTop: 32,
    marginBottom: 32,
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem, Button, Icon } from "react-native-elements";
import * as firebase from "firebase";
export default function userLogin() {
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
  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Avatar
          rounded
          source={require("../../../assets/bg.jpg")}
          size={75}
          onPress={() => console.log("edit profile")}
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

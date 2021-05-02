import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function userGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scrollcontainer} centerContent={true}>
      <Image
        source={require("../../../assets/img/4.1 user-guest.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.itemcontainer}>
        <Text style={styles.title}>bienvenido al menu de invitados</Text>
        <Text style={styles.description}>
          aldklaksdlkaslkdlaskldkaslkdlksaldkalskas asldlaskdlaksldklaskdlkaslkd
        </Text>
        <Button
          title="ver tu perfil"
          containerStyle={styles.containerbutton}
          buttonStyle={styles.buttonStyle}
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollcontainer: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 40,
  },
  itemcontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#00a680",
  },
  containerbutton: {
    width: "70%",
  },
});

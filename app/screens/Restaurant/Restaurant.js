import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { firebaseapp } from "../../utils/firebase";
import firebase from "firebase/app";
export default function restaurant(props) {
  const [user, setuser] = useState(null);
  const { navigation } = props;
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      /*  console.log(userInfo); */
      setuser(userInfo);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Restaurant </Text>
      <Icon
        type="material-community"
        name="plus"
        color="#008a00"
        reverse
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("addrestaurant")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
  },
});

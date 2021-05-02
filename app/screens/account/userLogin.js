import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";
import * as firebase from "firebase";

export default function s() {
  return (
    <View>
      <Text>user login screen</Text>
      <Button
        title="log out"
        onPress={() => firebase.default.auth().signOut()}
      />
    </View>
  );
}

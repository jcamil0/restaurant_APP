import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Loginaaa</Text>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text>registro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

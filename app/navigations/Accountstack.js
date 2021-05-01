import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account/accounts";

const Stack = createStackNavigator();

export default function Accountstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          headerTitleStyle: { alignSelf: "center" },
          title: "account",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account/accounts";
import Login from "../screens/account/Login";
import Register from "../screens/account/Register";
const Stack = createStackNavigator();

export default function Accountstack() {
  return (
    <Stack.Navigator initialRouteName="account">
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          headerTitleStyle: { alignSelf: "center", fontWeight: "bold" },
          headerStyle: {
            backgroundColor: "transparent",
          },
          title: "account",
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerTitleStyle: { alignSelf: "center" },
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerTitleStyle: { alignSelf: "center" },
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack.Navigator>
  );
}

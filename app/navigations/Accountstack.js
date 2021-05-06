import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account/accounts";
import Login from "../screens/account/Login";
import Register from "../screens/account/Register";
const Stack = createStackNavigator();

export default function Accountstack() {
  return (
    <Stack.Navigator initialRouteName="register">
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          headerTitleStyle: { alignSelf: "center", fontWeight: "bold" },
          headerStyle: {
            position: "absolute",
            backgroundColor: "transparent",
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
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
            position: "absolute",
            backgroundColor: "transparent",
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerTitleStyle: { alignSelf: "center" } }}
      />
    </Stack.Navigator>
  );
}

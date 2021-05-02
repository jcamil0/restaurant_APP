import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account/accounts";
import Login from "../screens/account/Login";
import Register from "../screens/account/Register";
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
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerTitleStyle: { alignSelf: "center" },
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

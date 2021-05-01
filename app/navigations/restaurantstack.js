import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurant from "../screens/Restaurant";

const Stack = createStackNavigator();

export default function restaurantstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurant}
        options={{
          headerTitleStyle: { alignSelf: "center" },
          title: "restaurantes",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

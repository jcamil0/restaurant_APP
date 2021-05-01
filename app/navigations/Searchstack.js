import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/search";

const Stack = createStackNavigator();

export default function restaurantstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          headerTitleStyle: { alignSelf: "center" },
          title: "search",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

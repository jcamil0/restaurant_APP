import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/favorites";

const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{
          headerTitleStyle: { alignSelf: "center" },
          title: "favorites",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

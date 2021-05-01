import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestauns from "../screens/topRestaurants";

const Stack = createStackNavigator();

export default function restaurantstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="toprestaurant"
        component={TopRestauns}
        options={{
          headerTitleStyle: { alignSelf: "center" },
          title: "top",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

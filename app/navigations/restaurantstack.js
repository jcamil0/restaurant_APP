import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurant from "../screens/Restaurant/Restaurant";
import AddRestaurants from "../screens/Restaurant/AddRestaurants";
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

      <Stack.Screen
        name="addrestaurant"
        component={AddRestaurants}
        options={{
          headerTitleStyle: { alignSelf: "center" },
          title: "restaurantes",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

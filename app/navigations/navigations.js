import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurantstack from "./restaurantstack";
import Accountstack from "./Accountstack";
import SearchStack from "./Searchstack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantStack from "./TopRestaurantstack";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();

export default function navigations() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurant"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a690",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen name="restaurant" component={Restaurantstack} />
        <Tab.Screen name="toprestaurant" component={TopRestaurantStack} />
        <Tab.Screen name="search" component={SearchStack} />
        <Tab.Screen name="favorites" component={FavoritesStack} />
        <Tab.Screen name="account" component={Accountstack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "restaurant":
      iconName = "compass-outline";
      break;

    case "favorites":
      iconName = "heart-outline";
      break;

    case "toprestaurant":
      iconName = "star-outline";
      break;

    case "search":
      iconName = "magnify";
      break;

    case "account":
      iconName = "home-outline";
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}

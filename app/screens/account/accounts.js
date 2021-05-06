import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import UserGuest from "./userGuest";
import UserLogin from "./userLogin";
import { ActivityIndicator } from "react-native";
import Loadign from "../../components/Loadign";

export default function accounts() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.default.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
      /*       console.log(user) */
    });
  }, []);

  if (login === null) return <Loadign text="hola" isVisible={false} />;

  return login ? <UserLogin /> : <UserGuest />;
}

const styles = StyleSheet.create({});

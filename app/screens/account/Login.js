import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import * as firebase from "firebase";
import { isEmpty, size } from "lodash";
import { TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { validateEmail } from "../../utils/Validation";

export default function Login() {
  const navigation = useNavigation();
  const [password, setPassword] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    if (isEmpty(form.email) || isEmpty(form.password)) {
      console.log("todos los campos son oblgatorioa");
    } else if (!validateEmail(form.email)) {
      console.log("el email no es valido");
    } else {
      console.log("ok");
      firebase.default
        .auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(() => {
          navigation.navigate("account");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    /* console.log(form);
    console.log(validateEmail(form.email)); */
  };

  const onChange = (e, type) => {
    /* console.log(e.nativeEvent.text); */
    setForm({ ...form, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="usuario" onChange={(e) => onChange(e, "email")} />

      <TextInput
        placeholder="contraseña"
        secureTextEntry={password}
        onChange={(e) => onChange(e, "password")}
      />

      <TouchableOpacity
        onPress={() => {
          setPassword((prev) => !prev);
        }}
      >
        <Text>ver contraseña</Text>
      </TouchableOpacity>
      <Button title="enviar datos" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { isEmpty, size } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

import { validateEmail } from "../../utils/Validation";

export default function Register() {
  const navigation = useNavigation();

  const [password, setPassword] = useState(true);
  const [repeatPassword, setrepeatPassword] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = () => {
    if (
      isEmpty(form.email) ||
      isEmpty(form.password) ||
      isEmpty(form.repeatPassword)
    ) {
      console.log("todos los campos son oblgatorioa");
    } else if (!validateEmail(form.email)) {
      console.log("el email no es valido");
    } else if (form.password != form.repeatPassword) {
      console.log("las contraseñas deben de ser iguales");
    } else if (size(form.password) < 6) {
      console.log("la contraseña debe tener 6 caracteres");
    } else {
      console.log("ok");

      firebase.default
        .auth()
        .createUserWithEmailAndPassword(form.email, form.password)
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
      <Text style={styles.title}>login</Text>
      <TextInput placeholder="usuario" onChange={(e) => onChange(e, "email")} />

      <TextInput
        placeholder="contraseña"
        secureTextEntry={password}
        onChange={(e) => onChange(e, "password")}
      />
      <TextInput
        placeholder="repetir contrasela"
        onChange={(e) => onChange(e, "repeatPassword")}
        secureTextEntry={repeatPassword}
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

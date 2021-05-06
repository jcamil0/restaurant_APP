import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { isEmpty, size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { Input, Button, Icon, SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import { validateEmail } from "../../utils/Validation";
export default function Register() {
  const navigation = useNavigation();

  const [password, setPassword] = useState(false);
  const [repeatPassword, setrepeatPassword] = useState(false);
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
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to app</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.inputsContainer}>
        <Input
          placeholder="your email"
          onChange={(e) => onChange(e, "email")}
        />
        <Input
          placeholder="password"
          onChange={(e) => onChange(e, "password")}
          secureTextEntry={password ? false : true}
          rightIcon={
            <Icon
              name="eye-off"
              type="material-community"
              onPress={() => setPassword(!password)}
            />
          }
        />
        <Input
          placeholder="repeat password"
          onChange={(e) => onChange(e, "repeatPassword")}
          rightIcon={
            <Icon
              name="eye-off"
              type="material-community"
              onPress={() => setrepeatPassword(!repeatPassword)}
            />
          }
          secureTextEntry={repeatPassword ? false : true}
        />
      </View>

      <Button
        title="Register !!!"
        onPress={onSubmit}
        titleStyle={{
          fontSize: 18,
        }}
        buttonStyle={[
          styles.buttons,
          {
            backgroundColor: "green",
            alignSelf: "flex-end",
            width: "50%",
            height: 60,
          },
        ]}
      />
      <SocialIcon type="google" style={styles.buttons} />
      <SocialIcon type="facebook" style={styles.buttons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginLeft: 16,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 16,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 20,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  inputsContainer: {
    marginRight: 16,
    marginTop: 10,
  },
  buttons: {
    alignSelf: "flex-end",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    marginRight: 0,
    width: "20%",
  },
});
/* 4A85A2 */
/* 769ABE */

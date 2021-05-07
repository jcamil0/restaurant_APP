import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { isEmpty, size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import Toast from "../../components/Toast";
import * as firebase from "firebase";
import { validateEmail } from "../../utils/Validation";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

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
  };

  const onChange = (e, type) => {
    setForm({ ...form, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Let’s Get Started</Text>
        <Text style={styles.subtitle}>Create an new account</Text>
      </View>

      <View style={styles.inputsContainer}>
        <Input
          inputStyle={styles.campusInput}
          containerStyle={{ paddingHorizontal: 0 }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="your email"
          onChange={(e) => onChange(e, "email")}
          leftIcon={<Icon name="account" type="material-community" />}
        />

        <Input
          inputStyle={styles.campusInput}
          containerStyle={{ paddingHorizontal: 0 }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="password"
          onChange={(e) => onChange(e, "password")}
          secureTextEntry={password ? false : true}
          leftIcon={
            <Icon
              name={password ? "eye" : "eye-off"}
              type="material-community"
              onPress={() => setPassword(!password)}
            />
          }
        />
        <Input
          inputStyle={styles.campusInput}
          containerStyle={{ paddingHorizontal: 0 }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="repeat password"
          onChange={(e) => onChange(e, "repeatPassword")}
          secureTextEntry={repeatPassword ? false : true}
          leftIcon={
            <Icon
              name={repeatPassword ? "eye" : "eye-off"}
              type="material-community"
              onPress={() => setrepeatPassword(!repeatPassword)}
            />
          }
        />
      </View>

      <Button
        title="Register"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        onPress={onSubmit}
      />

      <TouchableOpacity
        style={styles.footerTextItem}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.footerText}>
          have a account?{" "}
          <Text style={{ color: "#40BFFF", fontWeight: "400" }}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginLeft: 16,
    marginRight: 16,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 84,
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

  campusInput: {
    fontSize: 20,
    paddingVertical: 0,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },

  buttonContainer: {
    marginBottom: 21,
  },
  buttonStyle: {
    padding: 16,
  },
  buttonTitle: {
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  footerTextItem: {
    alignItems: "center",
    marginTop: 24,
  },
  footerText: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 0.5,
    textAlign: "center",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Button } from "react-native-elements";
import * as firebase from "firebase";
import { isEmpty } from "lodash";
import { validateEmail } from "../../utils/Validation";
import CustomTextInput from "../../components/Inputs";

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
        <Text style={styles.title}>Welcome to APP</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>
      <View style={styles.inputsContainer}>
        <CustomTextInput
          title="your email"
          onChange={(e) => onChange(e, "email")}
          leftIcon={<Icon name="account" type="material-community" />}
        />

        <CustomTextInput
          title="password"
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
      </View>

      <Button
        title="Sign In"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        onPress={onSubmit}
      />
      <View style={styles.separatorItems}>
        <View style={styles.separator} />
        <View>
          <Text style={styles.separatorText}>OR</Text>
        </View>
        <View style={styles.separator} />
      </View>
      <Button
        title="Login with Google"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        onPress={onSubmit}
      />
      <Button
        title="Login with facebook"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainer}
        onPress={onSubmit}
      />
      <TouchableOpacity
        style={
          (styles.footerTextItem, { alignItems: "center", marginBottom: 5 })
        }
      >
        <Text style={{ color: "#40BFFF", fontWeight: "400" }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={(styles.footerTextItem, { alignItems: "center" })}
        onPress={() => navigation.navigate("register")}
      >
        <Text style={styles.footerText}>
          Don’t have a account?{" "}
          <Text style={{ color: "#40BFFF", fontWeight: "400" }}>Register</Text>
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
  },
  image: {
    width: 100,
    height: 100,
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
    marginBottom: 28,
  },
  buttonTitle: {
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  separatorItems: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#9098B1",
  },

  separatorText: {
    width: 50,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
    color: "#9098B1",
  },
});

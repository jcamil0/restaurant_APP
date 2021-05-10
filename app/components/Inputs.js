import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Input } from "react-native-elements";

export default function Inputs({
  title,
  errorText,
  icon,
  name,
  type,
  ...props
}) {
  return (
    <View style={styles.container}>
      <Input
        inputStyle={styles.input}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        placeholder={title}
        leftIcon={!icon && <Icon name={name} type={type} />}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  input: {
    fontSize: 14,
    backgroundColor: "#fff",
    color: "#424242",
  },
});

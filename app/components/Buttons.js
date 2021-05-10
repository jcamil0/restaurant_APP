import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
export default function Buttons({ title, ...props }) {
  return (
    <Button
      title={title}
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.buttonContainer}
      titleStyle={styles.buttonTitle}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 21,
    marginTop: 20,
  },
  buttonStyle: {
    padding: 16,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});

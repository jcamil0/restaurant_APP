import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
export default function Loadign(props) {
  const { isVisible, text } = props;
  return (
    <Overlay isVisible={isVisible} overlayStyle={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00a690" />
        {text && <Text styles={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#00a680",
    borderRadius: 10,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00a680",
    textTransform: "uppercase",
    marginStart: 10,
  },
});

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function CampoTexto({ labelText, campoObrigatorio, ...rest }) {
  return (
    <View>
      <Text style={styles.label}>{`${labelText} ${
        campoObrigatorio ? "*" : ""
      }`}</Text>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 6,
    marginTop: 12,
    color: "#444",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
});

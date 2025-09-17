import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputField({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
}) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});

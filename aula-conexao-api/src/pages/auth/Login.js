import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputField from "../../components/InputFields";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <InputField
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <InputField
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
      />

      <ButtonPrimary title="Entrar" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#f6f6f6",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
});

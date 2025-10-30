import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    setErrorMessage("");
    const response = await login(email, password);

    if (response.error) {
      setErrorMessage(response.message);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login com ${provider}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3176/3176107.png",
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          onPress={() => console.log("Esqueci a senha")}
          style={{ alignSelf: "flex-end", marginBottom: 15 }}
        >
          <Text style={styles.forgotText}>Esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text>{errorMessage}</Text>

        <Text style={styles.orText}>Ou continue com</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#DB4437" }]}
            onPress={() => handleSocialLogin("Google")}
          >
            <AntDesign name="google" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
            onPress={() => handleSocialLogin("Facebook")}
          >
            <FontAwesome name="facebook" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#000" }]}
            onPress={() => handleSocialLogin("Apple")}
          >
            <AntDesign name="apple" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{ marginTop: 20 }}
        >
          <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 100,
    marginBottom: 20,
  },
  card: {
    width: "100%",
    padding: 25,
    borderRadius: 25,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  inputGroup: { marginBottom: 15 },
  label: { fontWeight: "bold", color: "#555", marginBottom: 5, fontSize: 14 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff", // fundo branco para melhor contraste
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  forgotText: { color: "#4b7bec", fontWeight: "bold" },
  button: {
    backgroundColor: "#4b7bec",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  orText: {
    textAlign: "center",
    color: "#555",
    marginVertical: 15,
    fontSize: 14,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: { color: "#4b7bec", textAlign: "center", fontWeight: "bold" },
});

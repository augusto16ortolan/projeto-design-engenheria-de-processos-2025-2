import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
  Button,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";

import Login from "./Login";
import Registe from "./Registe";
import Exercicio from "./Exercicio";

export default function App() {
  return <Exercicio />;
}

function Teste() {
  const [contador, setContador] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function cadastrar() {}

  function multiplicar() {
    const resultado = contador * contador;
    Alert.alert("Erro ao fazer o login");
  }

  return (
    <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.textoColorido}>{contador}</Text>

      <Button
        title="Clique aqui para somar"
        onPress={() => setContador(contador + 1)}
      />
      <Button
        title="Clique aqui para diminuir"
        onPress={() => setContador(contador - 1)}
      />

      <Button title="Multiplicar" onPress={() => multiplicar()} />

      {showImage && (
        <Image
          height={200}
          width={200}
          source={{
            uri: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/05/gato-laranja-e1748043537291.jpg?w=1200&h=1200&crop=1",
          }}
        />
      )}

      <Button
        title={showImage ? "Esconder Imagem" : "Mostrar Imagem"}
        onPress={() => setShowImage(!showImage)}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 30,
    color: "orange",
  },
  textoColorido: {
    color: "blue",
    fontSize: 55,
  },
});

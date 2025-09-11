import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Exercicio() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calcularValores() {
    console.log(numero1);
    const soma = parseInt(numero1) + parseInt(numero2);
    setResultado(soma);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Soma de números</Text>
      <TextInput
        value={numero1}
        onChangeText={(value) => setNumero1(value)}
        keyboardType="numeric"
        style={styles.caixaTexto}
        placeholder="Informe o primeiro número"
      />
      <Text style={styles.texto}>+</Text>
      <TextInput
        onChangeText={(value) => setNumero2(value)}
        value={numero2}
        keyboardType="numeric"
        style={styles.caixaTexto}
        placeholder="Informe o segundo número"
      />
      <Text style={styles.texto}>=</Text>
      <Text style={styles.texto}>{resultado}</Text>
      <Button title="Calcular" onPress={() => calcularValores()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 10,
    paddingHorizontal: 30,
  },
  texto: {
    fontWeight: "bold",
    fontSize: 30,
  },
  caixaTexto: {
    width: "100%",
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    fontSize: 25,
    padding: 10,
  },
});

import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import CampoTexto from "../components/CampoTexto";

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [codigoBarras, setCodigoBarras] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [peso, setPeso] = useState("");
  const [dimensoes, setDimensoes] = useState("");
  const [localArmazenamento, setLocalArmazenamento] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [observacao, setObservacao] = useState("");

  const handleCadastro = () => {
    if (!nome || !preco || isNaN(Number(preco))) {
      Alert.alert("Erro", "Preencha os campos obrigatórios corretamente!");
      return;
    }

    Alert.alert(
      "Produto cadastrado!",
      `Nome: ${nome}
      Descrição: ${descricao}
      Preço: R$${preco}
      Quantidade: ${quantidade}
      Código de Barras: ${codigoBarras}
      Categoria: ${categoria}
      Fabricante: ${fabricante}
      Marca: ${marca}
      Modelo: ${modelo}
      Cor: ${cor}
      Peso: ${peso} kg
      Dimensões: ${dimensoes}
      Local de Armazenamento: ${localArmazenamento}
      Fornecedor: ${fornecedor}
      Observação: ${observacao}`
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Cadastro de Produto</Text>

        <CampoTexto
          labelText={"Nome"}
          campoObrigatorio={true}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
          autoCapitalize="words"
        />

        <CampoTexto
          labelText={"Descrição"}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Digite a descrição"
          autoCapitalize="sentences"
        />

        <CampoTexto
          labelText={"Preço (R$)"}
          campoObrigatorio={true}
          value={preco}
          onChangeText={(text) => setPreco(text.replace(/[^0-9.,]/g, ""))}
          placeholder="Ex: 19.99"
          keyboardType="decimal-pad"
        />

        <CampoTexto
          labelText={"Quantidade"}
          value={quantidade}
          onChangeText={(text) => setQuantidade(text.replace(/[^0-9]/g, ""))}
          placeholder="Somente números"
          keyboardType="numeric"
        />

        <CampoTexto
          labelText={"Código de Barras"}
          value={codigoBarras}
          onChangeText={(text) => setCodigoBarras(text.replace(/[^0-9]/g, ""))}
          placeholder="Somente números"
          keyboardType="numeric"
        />

        <CampoTexto
          labelText={"Categoria"}
          value={categoria}
          onChangeText={setCategoria}
          placeholder="Digite a categoria"
        />

        <CampoTexto
          labelText={"Fabricante"}
          value={fabricante}
          onChangeText={setFabricante}
          placeholder="Digite o fabricante"
          autoCapitalize="words"
        />

        <CampoTexto
          labelText={"Marca"}
          value={marca}
          onChangeText={setMarca}
          placeholder="Digite a marca"
          autoCapitalize="words"
        />

        <CampoTexto
          labelText={"Modelo"}
          value={modelo}
          onChangeText={setModelo}
          placeholder="Digite o modelo"
          autoCapitalize="characters"
        />

        <CampoTexto
          labelText={"Cor"}
          value={cor}
          onChangeText={setCor}
          placeholder="Digite a cor"
        />

        <CampoTexto
          labelText={"Peso (kg)"}
          value={peso}
          onChangeText={(text) => setPeso(text.replace(/[^0-9.,]/g, ""))}
          placeholder="Ex: 1.5"
          keyboardType="decimal-pad"
        />

        <CampoTexto
          labelText={"Dimensões"}
          value={dimensoes}
          onChangeText={setDimensoes}
          placeholder="Ex: 20x30x15 cm"
        />

        <CampoTexto
          labelText={"Local de Armazenamento"}
          value={localArmazenamento}
          onChangeText={setLocalArmazenamento}
          placeholder="Ex: Estoque A1"
        />

        <CampoTexto
          labelText={"Fornecedor"}
          value={fornecedor}
          onChangeText={setFornecedor}
          placeholder="Digite o fornecedor"
        />

        <CampoTexto
          labelText={"Observação"}
          value={observacao}
          onChangeText={setObservacao}
          placeholder="Digite observações adicionais"
          multiline={true}
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

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

        <Text style={styles.label}>Nome *</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
          autoCapitalize="words"
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Digite a descrição"
          autoCapitalize="sentences"
        />

        <Text style={styles.label}>Preço (R$) *</Text>
        <TextInput
          style={styles.input}
          value={preco}
          onChangeText={(text) => setPreco(text.replace(/[^0-9.,]/g, ""))}
          placeholder="Ex: 19.99"
          keyboardType="decimal-pad"
        />

        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          value={quantidade}
          onChangeText={(text) => setQuantidade(text.replace(/[^0-9]/g, ""))}
          placeholder="Somente números"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Código de Barras</Text>
        <TextInput
          style={styles.input}
          value={codigoBarras}
          onChangeText={(text) => setCodigoBarras(text.replace(/[^0-9]/g, ""))}
          placeholder="Somente números"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Categoria</Text>
        <TextInput
          style={styles.input}
          value={categoria}
          onChangeText={setCategoria}
          placeholder="Digite a categoria"
        />

        <Text style={styles.label}>Fabricante</Text>
        <TextInput
          style={styles.input}
          value={fabricante}
          onChangeText={setFabricante}
          placeholder="Digite o fabricante"
          autoCapitalize="words"
        />

        <Text style={styles.label}>Marca</Text>
        <TextInput
          style={styles.input}
          value={marca}
          onChangeText={setMarca}
          placeholder="Digite a marca"
          autoCapitalize="words"
        />

        <Text style={styles.label}>Modelo</Text>
        <TextInput
          style={styles.input}
          value={modelo}
          onChangeText={setModelo}
          placeholder="Digite o modelo"
          autoCapitalize="characters"
        />

        <Text style={styles.label}>Cor</Text>
        <TextInput
          style={styles.input}
          value={cor}
          onChangeText={setCor}
          placeholder="Digite a cor"
        />

        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={(text) => setPeso(text.replace(/[^0-9.,]/g, ""))}
          placeholder="Ex: 1.5"
          keyboardType="decimal-pad"
        />

        <Text style={styles.label}>Dimensões</Text>
        <TextInput
          style={styles.input}
          value={dimensoes}
          onChangeText={setDimensoes}
          placeholder="Ex: 20x30x15 cm"
        />

        <Text style={styles.label}>Local de Armazenamento</Text>
        <TextInput
          style={styles.input}
          value={localArmazenamento}
          onChangeText={setLocalArmazenamento}
          placeholder="Ex: Estoque A1"
        />

        <Text style={styles.label}>Fornecedor</Text>
        <TextInput
          style={styles.input}
          value={fornecedor}
          onChangeText={setFornecedor}
          placeholder="Digite o fornecedor"
        />

        <Text style={styles.label}>Observação</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={observacao}
          onChangeText={setObservacao}
          placeholder="Digite observações adicionais"
          multiline
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

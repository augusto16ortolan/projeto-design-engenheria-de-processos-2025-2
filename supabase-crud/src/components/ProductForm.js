import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ProductForm({
  initialValues = { description: "", value: "", quantity: "", image: "" },
  onSubmit,
}) {
  const [description, setDescription] = useState(initialValues.description);
  const [value, setValue] = useState(initialValues.value.toString());
  const [quantity, setQuantity] = useState(initialValues.quantity.toString());
  const [image, setImage] = useState(initialValues.image || "");

  return (
    <View style={styles.formContainer}>
      {/* Campo: Descrição */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a descrição"
          placeholderTextColor="#aaa"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {/* Campo: Valor */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          placeholderTextColor="#aaa"
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
        />
      </View>

      {/* Campo: Quantidade */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#aaa"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
        />
      </View>

      {/* Campo: URL da Imagem */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>URL da Imagem</Text>
        <TextInput
          style={styles.input}
          placeholder="https://exemplo.com/imagem.jpg"
          placeholderTextColor="#aaa"
          value={image}
          onChangeText={setImage}
          autoCapitalize="none"
        />
      </View>

      {/* Botão Salvar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          onSubmit({
            description,
            value: parseFloat(value),
            quantity: parseInt(quantity),
            image,
          })
        }
      >
        <Text style={styles.buttonText}>Salvar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: "#f5f7fa",
    borderRadius: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#4b7bec",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

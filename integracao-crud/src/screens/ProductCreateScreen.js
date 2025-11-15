import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { createProduct, updateProduct } from "../services/ProductService";
import { useAuth } from "../context/AuthContext";
import { uploadImage } from "../services/ImageService";

export default function ProductCreateScreen({ navigation, route }) {
  const existingProduct = route.params?.product ?? null;
  const { token } = useAuth();

  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [currency, setCurrency] = useState("R$");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (existingProduct) {
      setDescription(existingProduct.description || "");
      setBrand(existingProduct.brand || "");
      setModel(existingProduct.model || "");
      setCurrency(existingProduct.currency || "R$");
      setPrice(existingProduct.price?.toString() || "");
      setImage(
        existingProduct.imageUrl ? { uri: existingProduct.imageUrl } : null
      );
      navigation.setOptions({ title: "Editar Produto" });
    } else {
      navigation.setOptions({ title: "Cadastrar Produto" });
    }
  }, [existingProduct]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão negada",
        "É necessário permitir acesso à galeria para escolher uma imagem."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const handleSubmit = async () => {
    if (!description || !brand || !model || !price) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }

    let responseImage = {};

    responseImage = await uploadImage(image);

    const productData = {
      description,
      brand,
      model,
      currency,
      price: parseFloat(price),
      imageUrl: responseImage?.imageUrl,
    };

    if (existingProduct) {
      const response = await updateProduct(
        existingProduct.id,
        productData,
        token
      );

      if (response.error) {
        Alert.alert("Falha", response.error);
        return;
      }
    } else {
      const response = await createProduct(productData, token);

      if (response.error) {
        Alert.alert("Falha", response.error);
        return;
      }
    }

    if (existingProduct) {
      Alert.alert("Sucesso", "Produto atualizado com sucesso! ✅");
      console.log("Atualizando produto:", productData);
    } else {
      Alert.alert("Sucesso", "Produto cadastrado com sucesso! 🎉");
      console.log("Cadastrando novo produto:", productData);
    }

    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {existingProduct ? "Editar Produto" : "Cadastrar Produto"}
      </Text>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="image-outline" size={40} color="#9ca3af" />
            <Text style={styles.placeholderText}>Escolher imagem</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={brand}
        onChangeText={setBrand}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={model}
        onChangeText={setModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Moeda (ex: R$)"
        value={currency}
        onChangeText={setCurrency}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TouchableOpacity
        style={[
          styles.submitButton,
          { backgroundColor: existingProduct ? "#f59e0b" : "#16a34a" },
        ]}
        onPress={handleSubmit}
      >
        <Ionicons
          name={existingProduct ? "create-outline" : "save-outline"}
          size={20}
          color="#fff"
        />
        <Text style={styles.submitText}>
          {existingProduct ? "Salvar Alterações" : "Cadastrar Produto"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111827",
    textAlign: "center",
  },
  imagePicker: {
    alignSelf: "center",
    width: 160,
    height: 160,
    borderRadius: 12,
    backgroundColor: "#e5e7eb",
    overflow: "hidden",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#9ca3af",
    marginTop: 5,
    fontSize: 13,
  },
  imageButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  photoButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563eb",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  photoButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 10,
    gap: 8,
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

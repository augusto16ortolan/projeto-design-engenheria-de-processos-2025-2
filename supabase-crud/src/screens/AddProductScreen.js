import React from "react";
import { View } from "react-native";
import ProductForm from "../components/ProductForm";
import { criarProduto } from "../services/ProdutoService";
import { useAuth } from "../context/AuthContext";

export default function AddProductScreen({ navigation }) {
  const { user } = useAuth();
  const handleSubmit = async (product) => {
    const response = await criarProduto({
      nome: product.description,
      valor: product.value,
      qtd: product.quantity,
      image: product.image,
      userId: user.id,
    });
    navigation.goBack();
  };

  return (
    <View>
      <ProductForm onSubmit={handleSubmit} />
    </View>
  );
}

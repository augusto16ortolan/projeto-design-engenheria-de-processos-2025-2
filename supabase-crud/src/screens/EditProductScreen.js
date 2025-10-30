import React from "react";
import { View } from "react-native";
import ProductForm from "../components/ProductForm";
import { atualizarProduto } from "../services/ProdutoService";
import { useAuth } from "../context/AuthContext";

export default function EditProductScreen({ route, navigation }) {
  const { product } = route.params;
  const { user } = useAuth();

  const handleSubmit = async (updatedProduct) => {
    const response = await atualizarProduto(product.id, {
      nome: updatedProduct.description,
      valor: updatedProduct.value,
      qtd: updatedProduct.quantity,
      image: updatedProduct.image,
      userId: user.id,
    });
    navigation.goBack();
  };

  return (
    <View>
      <ProductForm initialValues={product} onSubmit={handleSubmit} />
    </View>
  );
}

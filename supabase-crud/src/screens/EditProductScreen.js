import React from "react";
import { View } from "react-native";
import ProductForm from "../components/ProductForm";

export default function EditProductScreen({ route, navigation }) {
  const { product } = route.params;

  const handleSubmit = (updatedProduct) => {
    console.log("Produto atualizado:", updatedProduct);
    navigation.goBack();
  };

  return (
    <View>
      <ProductForm initialValues={product} onSubmit={handleSubmit} />
    </View>
  );
}

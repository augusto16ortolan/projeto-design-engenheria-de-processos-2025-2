import React from "react";
import { View } from "react-native";
import ProductForm from "../components/ProductForm";

export default function AddProductScreen({ navigation }) {
  const handleSubmit = (product) => {
    console.log("Produto a adicionar:", product);
    navigation.goBack();
  };

  return (
    <View>
      <ProductForm onSubmit={handleSubmit} />
    </View>
  );
}

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProductCreateScreen from "../screens/ProductCreateScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Tela inicial" }}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Meu Carrinho" }}
      />
      <Stack.Screen name="ProductCreate" component={ProductCreateScreen} />
    </Stack.Navigator>
  );
}

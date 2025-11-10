import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import { CartProvider } from "./src/context/CartContext";
import AppNavigation from "./src/navigation/AppNavigation";

//admin@admin.dev teste
//augusto@teste.com 12345678

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}

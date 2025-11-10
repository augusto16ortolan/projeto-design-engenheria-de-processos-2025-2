import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const stored = await AsyncStorage.getItem("@SistemaEstoque_cart");
      if (stored) setCart(JSON.parse(stored));
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
    }
  };

  const saveCart = async (newCart) => {
    try {
      setCart(newCart);
      await AsyncStorage.setItem(
        "@SistemaEstoque_cart",
        JSON.stringify(newCart)
      );
    } catch (error) {
      console.error("Erro ao salvar carrinho:", error);
    }
  };

  const addToCart = async (product) => {
    const exists = cart.find((item) => item.id === product.id);
    let updated;
    if (exists) {
      updated = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updated = [...cart, { ...product, quantity: 1 }];
    }
    await saveCart(updated);
  };

  const decreaseQuantity = async (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    await saveCart(updated);
  };

  const removeFromCart = async (id) => {
    const updated = cart.filter((item) => item.id !== id);
    await saveCart(updated);
  };

  const clearCart = async () => {
    await saveCart([]);
  };

  const getTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  };

  const getQuantity = () => {
    return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getTotal,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

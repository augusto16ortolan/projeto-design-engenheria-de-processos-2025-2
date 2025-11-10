import React, { useLayoutEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function HomeScreen({ navigation }) {
  const { logout, user } = useAuth();
  const { cart, getQuantity } = useCart();

  // 🔹 15 produtos mockados
  const [products] = useState([
    {
      id: 1,
      description: "Notebook potente para trabalho e estudo",
      brand: "Dell",
      model: "Inspiron 15",
      price: 4200.5,
      currency: "R$",
      stock: 10,
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 2,
      description: "Smartphone rápido e com ótima câmera",
      brand: "Samsung",
      model: "Galaxy S24",
      price: 5999.9,
      currency: "R$",
      stock: 8,
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 3,
      description: "Fone Bluetooth com cancelamento de ruído",
      brand: "Sony",
      model: "WH-1000XM5",
      price: 1899.0,
      currency: "R$",
      stock: 15,
      imageUrl: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    },
    {
      id: 4,
      description: "Monitor 4K de 27 polegadas",
      brand: "LG",
      model: "UltraFine 4K",
      price: 2499.9,
      currency: "R$",
      stock: 5,
      imageUrl: "https://images.unsplash.com/photo-1587825140708-6c58a7f9360f",
    },
    {
      id: 5,
      description: "Mouse ergonômico sem fio",
      brand: "Logitech",
      model: "MX Master 3S",
      price: 549.9,
      currency: "R$",
      stock: 20,
      imageUrl: "https://images.unsplash.com/photo-1606813902914-0605f5d43d58",
    },
    {
      id: 6,
      description: "Teclado mecânico com iluminação RGB",
      brand: "Corsair",
      model: "K70 RGB",
      price: 799.9,
      currency: "R$",
      stock: 12,
      imageUrl: "https://images.unsplash.com/photo-1585076800561-5cc1e0828a98",
    },
    {
      id: 7,
      description: "Cadeira gamer ergonômica confortável",
      brand: "ThunderX3",
      model: "TGC12",
      price: 1499.0,
      currency: "R$",
      stock: 6,
      imageUrl: "https://images.unsplash.com/photo-1629429408209-1b3c48b47c00",
    },
    {
      id: 8,
      description: "Smartwatch elegante e resistente à água",
      brand: "Apple",
      model: "Watch Series 9",
      price: 4899.9,
      currency: "R$",
      stock: 9,
      imageUrl: "https://images.unsplash.com/photo-1603791452906-bb9aba2eeb58",
    },
    {
      id: 9,
      description: "Tablet ideal para estudos e trabalho",
      brand: "Apple",
      model: "iPad Air M2",
      price: 5299.9,
      currency: "R$",
      stock: 7,
      imageUrl: "https://images.unsplash.com/photo-1585792180666-1b74efb9359e",
    },
    {
      id: 10,
      description: "Caixa de som portátil com grave potente",
      brand: "JBL",
      model: "Charge 5",
      price: 999.9,
      currency: "R$",
      stock: 18,
      imageUrl: "https://images.unsplash.com/photo-1618366702739-6f3d478c3b3e",
    },
    {
      id: 11,
      description: "HD externo 2TB rápido e compacto",
      brand: "Seagate",
      model: "Expansion Portable",
      price: 699.9,
      currency: "R$",
      stock: 25,
      imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
    {
      id: 12,
      description: "Webcam Full HD com microfone integrado",
      brand: "Logitech",
      model: "C920",
      price: 499.9,
      currency: "R$",
      stock: 16,
      imageUrl: "https://images.unsplash.com/photo-1590608897129-79da98d159f4",
    },
    {
      id: 13,
      description: "Headset gamer com som 7.1",
      brand: "Razer",
      model: "Kraken V3",
      price: 899.9,
      currency: "R$",
      stock: 11,
      imageUrl: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    },
    {
      id: 14,
      description: "SSD NVMe ultrarrápido de 1TB",
      brand: "Kingston",
      model: "KC3000",
      price: 749.9,
      currency: "R$",
      stock: 30,
      imageUrl: "https://images.unsplash.com/photo-1587202372775-98927f1a8f8a",
    },
    {
      id: 15,
      description: "Câmera mirrorless compacta e poderosa",
      brand: "Canon",
      model: "EOS M50 Mark II",
      price: 4799.9,
      currency: "R$",
      stock: 4,
      imageUrl: "https://images.unsplash.com/photo-1508896694512-7a3a5d64a12a",
    },
  ]);

  useFocusEffect(useCallback(() => {}, []));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Início",
      headerLeft: () => (
        <TouchableOpacity onPress={logout} style={{ marginLeft: 15 }}>
          <Ionicons name="log-out-outline" size={26} color="#2563eb" />
        </TouchableOpacity>
      ),
      headerRight: () => {
        if (user?.type === "Admin") {
          // Botão para adicionar produto
          return (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("ProductCreate")}
            >
              <Ionicons name="add-circle-outline" size={28} color="#2563eb" />
            </TouchableOpacity>
          );
        } else {
          // Botão de carrinho para usuários comuns
          return (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("Cart")}
            >
              <View style={{ position: "relative" }}>
                <Ionicons name="cart-outline" size={28} color="#2563eb" />
                {getQuantity() > 0 && (
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>{getQuantity()}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        }
      },
    });
  }, [navigation, logout, getQuantity()]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image
        source={{
          uri: item.imageUrl || "https://via.placeholder.com/150",
        }}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.price}>
          {item.currency} {item.price.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Olá, {user?.name || "usuário"} 👋</Text>
      <Text style={styles.subtitle}>Confira os produtos disponíveis:</Text>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#6b7280",
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "48%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#e5e7eb",
  },
  cardContent: {
    padding: 10,
  },
  brand: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3b82f6",
  },
  model: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#16a34a",
    marginTop: 6,
  },
  cartBadge: {
    position: "absolute",
    right: -6,
    top: -4,
    backgroundColor: "#ef4444",
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
});

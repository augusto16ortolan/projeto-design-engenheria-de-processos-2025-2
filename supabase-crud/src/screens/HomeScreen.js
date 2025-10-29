import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { products as initialProducts } from "../data/products";
import { useAuth } from "../context/AuthContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState(initialProducts);
  const { logout } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
          <Ionicons name="log-out-outline" size={26} color="#eb3b5a" />
        </TouchableOpacity>
      ),
      headerTitle: "Meus Produtos",
    });
  }, [navigation, logout]);

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: item.image ? item.image : "https://placehold.co/90x90",
        }}
        style={styles.productImage}
      />

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.description}</Text>
        <Text style={styles.productDetails}>
          R$ {item.value} | Qtd: {item.quantity}
        </Text>
      </View>

      <View style={styles.iconRow}>
        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: "#fd9644" }]}
          onPress={() => navigation.navigate("EditProduct", { product: item })}
        >
          <MaterialIcons name="edit" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: "#fc5c65" }]}
          onPress={() => handleDelete(item.id)}
        >
          <Ionicons name="trash-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddProduct")}
      >
        <Ionicons name="add-circle-outline" size={22} color="#fff" />
        <Text style={styles.addButtonText}>Adicionar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f5fa", padding: 10 },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    alignItems: "center",
  },

  productImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: "#f0f0f0",
  },

  productInfo: {
    flex: 1,
    justifyContent: "center",
  },

  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  productDetails: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },

  iconRow: {
    flexDirection: "row",
    gap: 8, // espaço entre os ícones
  },

  iconButton: {
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20bf6b",
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 10,
    gap: 8,
  },

  addButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

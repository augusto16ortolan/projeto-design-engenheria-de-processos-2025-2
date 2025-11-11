import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const { user } = useAuth();
  const { addToCart } = useCart();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.model || "Detalhes do Produto",
    });
  }, [navigation, product]);

  const handleEdit = () => {
    navigation.navigate("ProductCreate", { product });
  };

  const handleDelete = () => {
    Alert.alert(
      "Excluir Produto",
      `Tem certeza que deseja excluir "${product.model}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            Alert.alert("Sucesso", `Produto "${product.model}" excluído!`);
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleAddToCart = () => {
    addToCart(product);
    Alert.alert("Carrinho", `${product.model} adicionado ao carrinho 🛒`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={{
          uri: product.imageUrl || "https://via.placeholder.com/300x200",
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.model}>{product.model}</Text>
        <Text style={styles.price}>
          {product.currency || "R$"} {Number(product.price).toFixed(2)}
        </Text>

        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.description}>
          {product.description || "Sem descrição disponível."}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Estoque:</Text>
          <Text style={styles.infoValue}>{product.stock ?? "N/D"}</Text>
        </View>

        <View style={styles.actions}>
          {user?.type === "Admin" ? (
            <>
              <TouchableOpacity
                style={[styles.button, styles.edit]}
                onPress={handleEdit}
                activeOpacity={0.8}
              >
                <Ionicons name="create-outline" size={20} color="#fff" />
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.delete]}
                onPress={handleDelete}
                activeOpacity={0.8}
              >
                <Ionicons name="trash-outline" size={20} color="#fff" />
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.cart]}
              onPress={handleAddToCart}
              activeOpacity={0.8}
            >
              <Ionicons name="cart-outline" size={20} color="#fff" />
              <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  image: { width: "100%", height: 260 },
  content: { padding: 20 },
  brand: { fontSize: 15, color: "#3b82f6", fontWeight: "600" },
  model: { fontSize: 26, fontWeight: "700", color: "#111827", marginTop: 4 },
  price: {
    fontSize: 24,
    color: "#16a34a",
    fontWeight: "700",
    marginVertical: 10,
  },
  label: { fontSize: 16, fontWeight: "600", color: "#374151" },
  description: {
    fontSize: 15,
    color: "#4b5563",
    lineHeight: 22,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 25,
  },
  infoLabel: { fontWeight: "600", color: "#334155" },
  infoValue: { color: "#111827", fontWeight: "500" },
  actions: { flexDirection: "row", justifyContent: "center", gap: 12 },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 8,
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  edit: { backgroundColor: "#3b82f6" },
  delete: { backgroundColor: "#ef4444" },
  cart: { backgroundColor: "#16a34a" },
});

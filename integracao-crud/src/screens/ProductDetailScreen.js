import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { getProductById, deleteProduct } from "../services/ProductService";

export default function ProductDetailScreen({ route, navigation }) {
  const { product: initialProduct } = route.params;
  const { user, token } = useAuth();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(initialProduct || null);
  const [loading, setLoading] = useState(!initialProduct);
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product?.model || "Detalhes do Produto",
    });
  }, [navigation, product]);

  useEffect(() => {
    if (!initialProduct?.id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { product: data, error } = await getProductById(
          initialProduct.id
        );

        console.log(product);

        if (error) {
          setError(error);
          Alert.alert("Erro", "Não foi possível carregar o produto.");
        } else {
          setProduct(data);
        }
      } catch (err) {
        console.error(err);
        Alert.alert("Erro", "Falha ao buscar os detalhes do produto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [initialProduct]);

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
          onPress: async () => {
            await deleteProduct(initialProduct.id, token);
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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={{ color: "#64748b", marginTop: 8 }}>
          Carregando produto...
        </Text>
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={40} color="#ef4444" />
        <Text style={styles.errorText}>Erro ao carregar produto.</Text>
      </View>
    );
  }

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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  errorText: {
    color: "#ef4444",
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
  },
});

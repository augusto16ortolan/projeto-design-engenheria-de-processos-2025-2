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
import { getProducts } from "../services/ProductService";

export default function HomeScreen({ navigation }) {
  const { logout, user } = useAuth();
  const { cart, getQuantity } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  async function fetchData() {
    setLoading(true);
    const response = await getProducts();

    if (response.error) {
      alert("Ocorreu um erro ao carregar os produtos");
      setLoading(false);
      return;
    }

    setProducts(response.products);
    setLoading(false);
  }

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
          return (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("ProductCreate")}
            >
              <Ionicons name="add-circle-outline" size={28} color="#2563eb" />
            </TouchableOpacity>
          );
        } else {
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
      <Text style={styles.welcome}>Olá, {user?.name || "usuário"}</Text>
      <Text style={styles.subtitle}>Confira os produtos disponíveis:</Text>

      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      )}
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

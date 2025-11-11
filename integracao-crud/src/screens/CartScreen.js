import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    getTotal,
    getQuantity,
  } = useCart();

  const handleCheckout = () => {
    Alert.alert("Compra Finalizada", "Obrigado pela sua compra! 🎉");
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: item.imageUrl || "https://via.placeholder.com/100" }}
        style={styles.image}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>
          {item.currency || "R$"} {item.price.toFixed(2)}
        </Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => decreaseQuantity(item.id)}
            style={[styles.qtyButton, { backgroundColor: "#e5e7eb" }]}
          >
            <Ionicons name="remove" size={16} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.quantity}>{item.quantity}</Text>

          <TouchableOpacity
            onPress={() => addToCart(item)}
            style={[styles.qtyButton, { backgroundColor: "#3b82f6" }]}
          >
            <Ionicons name="add" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotal}>
          {item.currency || "R$"} {(item.price * item.quantity).toFixed(2)}
        </Text>

        <TouchableOpacity
          onPress={() => removeFromCart(item.id)}
          style={styles.trashButton}
        >
          <Ionicons name="trash-outline" size={20} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>

      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="cart-outline" size={60} color="#9ca3af" />
          <Text style={styles.empty}>Seu carrinho está vazio</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>R$ {getTotal().toFixed(2)}</Text>
            </View>

            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Quantidade</Text>
              <Text style={styles.totalValue}>{getQuantity()}</Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
              activeOpacity={0.9}
            >
              <Ionicons name="card-outline" size={20} color="#fff" />
              <Text style={styles.checkoutText}>Finalizar Compra</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111827",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: { color: "#6b7280", fontSize: 16, marginTop: 10 },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#e5e7eb",
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  model: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },
  brand: {
    fontSize: 13,
    color: "#6b7280",
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: "#16a34a",
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  qtyButton: {
    padding: 6,
    borderRadius: 6,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    minWidth: 24,
    textAlign: "center",
  },
  subtotalContainer: {
    alignItems: "flex-end",
  },
  subtotal: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  trashButton: {
    marginTop: 6,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 4,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#16a34a",
  },
  checkoutButton: {
    backgroundColor: "#3b82f6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

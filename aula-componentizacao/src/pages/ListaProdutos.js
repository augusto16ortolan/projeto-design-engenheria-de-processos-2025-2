import React from "react";
import { Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CardProduto from "../components/CardProduto";

import { produtos } from "../data/produtos";

export default function ListaProdutos({ navigation }) {
  function navegarParaDetalhes(produto) {
    navigation.navigate("DetalheProduto", { produto: produto });
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardProduto
            detalhe={() => navegarParaDetalhes(item)}
            produto={item}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    paddingHorizontal: 20,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#222",
  },
});

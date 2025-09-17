import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetalheProduto({ route, navigation }) {
  const { produto } = route.params;

  const formatarPreco = (preco) => {
    return "R$ " + preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  };

  useLayoutEffect(() => {
    console.log(produto.name);
    navigation.setOptions({
      title: produto.name,
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Imagem do produto */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: produto.imagem }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Informações principais */}
        <View style={styles.infoContainer}>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.preco}>{formatarPreco(produto.preco)}</Text>

          <View style={styles.badge}>
            <Text style={styles.categoria}>{produto.categoria}</Text>
          </View>
        </View>

        {/* Descrição */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>
        </View>

        {/* Informações detalhadas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ID:</Text>
            <Text style={styles.infoValue}>{produto.id}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Quantidade em estoque:</Text>
            <Text style={[styles.infoValue, styles.quantidade]}>
              {produto.quantidade} unidades
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Categoria:</Text>
            <Text style={styles.infoValue}>{produto.categoria}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Preço unitário:</Text>
            <Text style={[styles.infoValue, styles.precoDestaque]}>
              {formatarPreco(produto.preco)}
            </Text>
          </View>
        </View>

        {/* Status do estoque */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Status do Estoque</Text>
          <View
            style={[
              styles.statusContainer,
              produto.quantidade > 10
                ? styles.estoqueAlto
                : produto.quantidade > 5
                ? styles.estoqueMedio
                : styles.estoqueBaixo,
            ]}
          >
            <Text style={styles.statusText}>
              {produto.quantidade > 10
                ? "✓ Estoque Alto"
                : produto.quantidade > 5
                ? "⚠ Estoque Médio"
                : "⚠ Estoque Baixo"}
            </Text>
          </View>
        </View>

        {/* Botão de ação */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Produto</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 250,
  },
  infoContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  preco: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 15,
  },
  badge: {
    backgroundColor: "#3498db",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  categoria: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
    paddingBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: "#34495e",
    lineHeight: 24,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  infoLabel: {
    fontSize: 16,
    color: "#7f8c8d",
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: "#2c3e50",
    fontWeight: "600",
    flex: 1,
    textAlign: "right",
  },
  quantidade: {
    color: "#8e44ad",
  },
  precoDestaque: {
    color: "#27ae60",
    fontSize: 18,
  },
  statusContainer: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  estoqueAlto: {
    backgroundColor: "#d5f4e6",
  },
  estoqueMedio: {
    backgroundColor: "#fef9e7",
  },
  estoqueBaixo: {
    backgroundColor: "#faeaea",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

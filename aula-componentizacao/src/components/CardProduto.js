import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

export default function CardProduto({ produto, detalhe }) {
  const formatarPreco = (preco) => {
    return "R$ " + preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  };

  const handleDetalhes = (produto) => detalhe(produto);

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: produto?.imagem,
        }}
        style={styles.imagem}
        resizeMode="contain"
      />
      <Text style={styles.nome}>{produto?.nome}</Text>
      <Text style={styles.info}>Preço: {formatarPreco(produto?.preco)}</Text>
      <Text style={styles.info}>Qtd: {produto?.quantidade}</Text>
      <Text style={styles.info}>Categoria: {produto?.categoria}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDetalhes(produto)}
      >
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    alignItems: "center",
  },
  imagem: {
    width: "100%",
    height: 150,
    marginBottom: 12,
    borderRadius: 10,
  },
  nome: { fontSize: 19, fontWeight: "bold", marginBottom: 6, color: "#111" },
  info: { fontSize: 15, color: "#555", marginBottom: 4 },
  button: {
    marginTop: 12,
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
});

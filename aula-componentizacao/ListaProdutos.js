import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListaProdutos() {
  const formatarPreco = (preco) => {
    return "R$ " + preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  };

  const handleDetalhes = (produto) => {
    Alert.alert(
      produto.nome,
      `Descrição: ${produto.descricao}\nPreço: ${formatarPreco(
        produto.preco
      )}\nQuantidade: ${produto.quantidade}\nCategoria: ${produto.categoria}`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lista de Produtos</Text>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://a-static.mlcdn.com.br/1500x1500/notebook-dell-inspiron-15-intel-core-i3-8gb-ram-ssd-256gb-windows-11-156-i15-i120k-a10p/magazineluiza/238005900/9b93a3a974d4b4786e4f628974c6050e.jpg",
            }}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.nome}>Notebook Dell</Text>
          <Text style={styles.info}>Preço: {formatarPreco(4500.99)}</Text>
          <Text style={styles.info}>Qtd: 10</Text>
          <Text style={styles.info}>Categoria: Eletrônicos</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handleDetalhes({
                nome: "Notebook Dell",
                descricao: "Notebook Dell Inspiron 15 polegadas",
                preco: 4500.99,
                quantidade: 10,
                categoria: "Eletrônicos",
              })
            }
          >
            <Text style={styles.buttonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://a-static.mlcdn.com.br/1500x1500/cadeira-gamer-otello-preto-e-vermelho/magazineluiza/237019000/b3fc5faf334ec8354d4177f54df4e87a.jpg",
            }}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.nome}>Cadeira Gamer</Text>
          <Text style={styles.info}>Preço: {formatarPreco(1200.5)}</Text>
          <Text style={styles.info}>Qtd: 5</Text>
          <Text style={styles.info}>Categoria: Móveis</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handleDetalhes({
                nome: "Cadeira Gamer",
                descricao: "Cadeira ergonômica preta e vermelha",
                preco: 1200.5,
                quantidade: 5,
                categoria: "Móveis",
              })
            }
          >
            <Text style={styles.buttonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s24-ultra-68-galaxy-ai-256gb-titanio-preto-5g-12gb-ram-cam-quadrupla-200mp-selfie-12mp-bateria-5000mah-dual-chip/magazineluiza/238093700/0033a48af0e3f87a570ddbd42e456214.jpg",
            }}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.nome}>Smartphone Samsung</Text>
          <Text style={styles.info}>Preço: {formatarPreco(3500)}</Text>
          <Text style={styles.info}>Qtd: 15</Text>
          <Text style={styles.info}>Categoria: Celulares</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handleDetalhes({
                nome: "Smartphone Samsung",
                descricao: "Samsung Galaxy S22 128GB",
                preco: 3500,
                quantidade: 15,
                categoria: "Celulares",
              })
            }
          >
            <Text style={styles.buttonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/2/4/24ms500-b.jpg",
            }}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.nome}>Monitor LG</Text>
          <Text style={styles.info}>Preço: {formatarPreco(899.99)}</Text>
          <Text style={styles.info}>Qtd: 20</Text>
          <Text style={styles.info}>Categoria: Eletrônicos</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handleDetalhes({
                nome: "Monitor LG",
                descricao: "Monitor 24 polegadas Full HD",
                preco: 899.99,
                quantidade: 20,
                categoria: "Eletrônicos",
              })
            }
          >
            <Text style={styles.buttonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://pollodistribuidora.com.br/wp-content/uploads/2022/06/1.jpg",
            }}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.nome}>Mesa Escritório</Text>
          <Text style={styles.info}>Preço: {formatarPreco(650)}</Text>
          <Text style={styles.info}>Qtd: 8</Text>
          <Text style={styles.info}>Categoria: Móveis</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handleDetalhes({
                nome: "Mesa Escritório",
                descricao: "Mesa de madeira 120x60",
                preco: 650,
                quantidade: 8,
                categoria: "Móveis",
              })
            }
          >
            <Text style={styles.buttonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f4f7",
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

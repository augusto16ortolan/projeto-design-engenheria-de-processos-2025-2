import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";

import { getPokemonBy } from "../../services/pokemonService";

export default function PokemonDetail({ route }) {
  const { url } = route.params.pokemon;
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("entrou");
    getPokemon();
  }, []);

  async function getPokemon() {
    setLoading(true);
    const response = await getPokemonBy(url);
    console.log(response);
    setPokemon(response);
    setLoading(false);
  }

  if (loading && !pokemon) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"red"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pokemon?.sprites?.front_default }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon?.name}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Tipos:</Text>
        <Text style={styles.value}>{pokemon?.types}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Altura:</Text>
        <Text style={styles.value}>{pokemon?.height}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Peso:</Text>
        <Text style={styles.value}>{pokemon?.weight}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginVertical: 15,
  },
  infoBox: {
    flexDirection: "row",
    marginVertical: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 5,
  },
  value: {
    fontSize: 18,
  },
});

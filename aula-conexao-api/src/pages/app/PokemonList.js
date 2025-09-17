import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { pokemonList } from "../../data/pokemon";
import PokemonCard from "../../components/PokemonCard";

export default function PokemonList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>

      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onPress={() =>
              navigation.navigate("PokemonDetail", { pokemon: item })
            }
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
});

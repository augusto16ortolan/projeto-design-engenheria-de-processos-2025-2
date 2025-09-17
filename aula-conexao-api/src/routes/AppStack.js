import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PokemonList from "../pages/app/PokemonList";
import PokemonDetail from "../pages/app/PokemonDetail";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{ title: "Pokédex" }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{ title: "Detalhes do Pokémon" }}
      />
    </Stack.Navigator>
  );
}

import React from "react";
import { Button, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import PokemonList from "../pages/app/PokemonList";
import PokemonDetail from "../pages/app/PokemonDetail";

const Stack = createNativeStackNavigator();

export default function AppStack({ onLogout }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          // headerShown: false, Esconder o header
          headerTitle: "Pokedéx",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => onLogout()}>
              <MaterialIcons name="logout" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <MaterialIcons name="info-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{ title: "Detalhes do Pokémon" }}
      />
    </Stack.Navigator>
  );
}

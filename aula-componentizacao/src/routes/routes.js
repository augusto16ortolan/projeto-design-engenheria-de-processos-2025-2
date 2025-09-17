import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaProdutos from "../pages/ListaProdutos";
import DetalheProduto from "../pages/DetalheProduto";

const StackApp = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="ListaProdutos">
        <StackApp.Screen
          name="ListaProdutos"
          component={ListaProdutos}
          options={{
            headerTitle: "Produtos",
          }}
        />
        <StackApp.Screen
          name="DetalheProduto"
          component={DetalheProduto}
          options={{
            headerTitle: "Detalhe",
          }}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

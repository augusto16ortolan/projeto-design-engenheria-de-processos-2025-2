import React, { useLayoutEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useAuth } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { logout, user } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
          <Ionicons name="log-out-outline" size={26} color="#eb3b5a" />
        </TouchableOpacity>
      ),
      headerTitle: "Tela inicial",
    });
  }, [navigation, logout]);

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{user.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f5fa",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

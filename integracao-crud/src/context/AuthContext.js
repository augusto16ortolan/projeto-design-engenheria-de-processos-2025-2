import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { login, register } from "../services/AuthService";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    carregarCredenciais();
  }, []);

  async function carregarCredenciais() {
    const response = await AsyncStorage.getItem("@SistemaEstoque_credenciais");
    const credenciais = await JSON.parse(response);
    await signIn(credenciais.email, credenciais.password);
  }

  const signIn = async (email, password) => {
    const response = await login(email, password);

    if (!response.error) {
      try {
        await AsyncStorage.setItem(
          "@SistemaEstoque_credenciais",
          JSON.stringify({ email, password })
        );
      } catch (error) {
        console.error(error);
      }
    }

    setUser(response.user);
    setToken(response.token);

    return response;
  };

  const signup = async ({ email, password, name }) => {
    const response = await register({ email, password, name });
    return response;
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem("@SistemaEstoque_credenciais");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logout, signup, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

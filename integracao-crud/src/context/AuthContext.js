import React, { createContext, useState, useContext } from "react";

import { login, register } from "../services/AuthService";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const response = await login(email, password);
    setUser(response.user);
    return response;
  };

  const signup = async (email, password) => {
    const response = await register(email, password);
    setUser(response.user);
    return response;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

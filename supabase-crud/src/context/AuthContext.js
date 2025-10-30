import React, { createContext, useState, useContext } from "react";

import { login as signIn, register } from "../services/AuthService";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await signIn(email, password);

    setUser(response.user);

    return response;
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async (email, password) => {
    const response = await register(email, password);

    setUser(response.user);

    return response;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

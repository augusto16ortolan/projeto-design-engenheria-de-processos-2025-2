import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("Login:", { email, password });
        setUser({ email });
    };

    const logout = () => {
        setUser(null);
    };

    const signup = (email, password) => {
        console.log("Signup:", { email, password });
        setUser({ email });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

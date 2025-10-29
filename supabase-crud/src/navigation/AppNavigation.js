import React from "react";
import { useAuth } from "../context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function AppNavigation() {
    const { user } = useAuth();

    return user ? <AppStack /> : <AuthStack />;
}

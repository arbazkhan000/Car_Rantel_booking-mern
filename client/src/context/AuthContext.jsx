import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// Create the Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_BASE_URL = import.meta.env.VITE_CLIENT_URL;


    // Load user from localStorage on mount
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        const savedToken = localStorage.getItem("token");
        if (savedUser && savedToken) {
            setUser(JSON.parse(savedUser));
            // Optional: Set default auth header
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${savedToken}`;
        }
        setLoading(false);
    }, []);
    // Register User
    const register = async (name, email, password) => {

        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/auth/create`,
                {
                    name,
                    email,
                    password,
                }
            );

            if (response.status !== 201) {
                throw new Error(
                    response.data?.message || "Registration failed"
                );
            }

            const { user, token } = response.data;

            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
        } catch (error) {
            console.error("Registration error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Login User
    const login = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/auth/login`,
                {
                    email,
                    password,
                }
            );

            if (response.status !== 200) {
                throw new Error(response.data?.message || "Login failed");
            }

            const { data, token } = response.data;

            setUser(data);
            // Save both user and token
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("token", token);
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Logout User
    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            await axios.post(`${API_BASE_URL}/api/auth/logout`);
            setUser(null);
            localStorage.removeItem("user");
        } catch (error) {
            console.error("Logout error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                error,
                loading,
                register,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

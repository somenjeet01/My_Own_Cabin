// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "@/appwrite/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Auto-login check on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          setIsLoggedIn(true);
        } else {
          setUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("AuthContext: Error fetching user:", error);
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Login method
  const login = async ({ email, password }) => {
    await authService.login({ email, password });
    const currentUser = await authService.getCurrentUser();
    setUser(currentUser);
    setIsLoggedIn(true);
  };

  // Logout method
  const logout = async () => {
    await authService.logout();
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use context
export const useAuth = () => useContext(AuthContext);

// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "@/appwrite/auth";
import { useToast } from "@/hooks/use-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast(); // Initialize toast

  // Auto-login check on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Try to get the current session first
        try {
          await authService.account.getSession("current");

          // If we can get a session, try to get the user
          const currentUser = await authService.getCurrentUser();
          if (currentUser) {
            setUser(currentUser);
            setIsLoggedIn(true);
            toast({
              title: "Welcome back!",
              description: `Hello, ${currentUser.name}`,
              duration: 3000,
            });
          } else {
            setUser(null);
            setIsLoggedIn(false);
          }
        } catch (sessionError) {
          // No active session
          console.log("No active session:", sessionError);
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
    try {
      await authService.login({ email, password });
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      setIsLoggedIn(true);
      toast({
        title: "Login successful",
        description: `Welcome back, ${currentUser.name}`,
        duration: 3000,
      });
      return currentUser;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  //Login with Google
  const loginWithGoogle = () => {
    try {
      // This will redirect to Google and then return to your callback URL
      authService.createGoogleOAuth();
      toast({
        title: "Redirecting to Google",
        description: "Please complete the login process.",
        duration: 3000,
      });
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  //Login with GitHub
  const loginWithGitHub = () => {
    try {
      // This will redirect to GitHub and then return to your callback URL
      authService.createGitHubOAuth();
      toast({
        title: "Redirecting to GitHub",
        description: "Please complete the login process.",
        duration: 3000,
      });
    } catch (error) {
      console.error("GitHub login error:", error);
      throw error;
    }
  };

  // Logout method
  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem("user");
      sessionStorage.clear();
      toast({
        title: "Logout successful",
        description: "You have been logged out.",
        duration: 3000,
      });
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const refreshUser = async () => {
    try {
      // First try to verify we have a session
      try {
        await authService.account.getSession("current");

        // If we get here, we have a valid session
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          setIsLoggedIn(true);
          return currentUser;
        }
        return null;
      } catch (sessionError) {
        console.log("No valid session during refresh:", sessionError);
        setUser(null);
        setIsLoggedIn(false);
        return null;
      }
    } catch (error) {
      console.error("Error refreshing user:", error);
      setUser(null);
      setIsLoggedIn(false);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logout,
        loading,
        loginWithGoogle,
        loginWithGitHub,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use context
export const useAuth = () => useContext(AuthContext);

// src/pages/OAuthCallback.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import authService from "../appwrite/auth"; // your Appwrite service
import { useToast } from "@/hooks/use-toast";
import { Drum } from "lucide-react";

const OAuthCallback = () => {
  const [status, setStatus] = useState("Processing authentication...");
  const navigate = useNavigate();
  const { refreshUser } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // The OAuth session is already created in Appwrite automatically
        // No need to manually exchange code as Appwrite handles this internally

        // Just refresh the user data to update the auth context
        const user = await refreshUser();

        if (user) {
          setTimeout(() => navigate("/"), 1000);
          toast({
            title: "Login successful",
            description: `Welcome back, ${user.name || "User"}!`,
            type: "success",
            duration: 2000,
          });
        } else {
          setTimeout(() => navigate("/login"), 2000);
          toast({
            title: "Login failed",
            description: "Unable to retrieve user data. Please try again.",
            type: "error",
            duration: 3000,
          });
        }
      } catch (error) {
        console.error("OAuth callback error:", error);
        setStatus("Authentication error. Please try again.");
        setTimeout(() => navigate("/login"), 2000);
      }
    };

    handleCallback();
  }, [navigate, refreshUser]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">{status}</h2>
        {/* Optional loading spinner */}
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    </div>
  );
};

export default OAuthCallback;

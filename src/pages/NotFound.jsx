import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-12 max-w-md">
          <img 
            src="https://images.unsplash.com/photo-1577809249860-20c61371c830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            alt="Cabin in the woods"
            className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-md"
          />
          <h1 className="text-4xl font-playfair font-semibold mb-4 text-cabin-800">Page Not Found</h1>
          <p className="text-cabin-600 mb-8">
            Looks like you've wandered off the trail! The cabin you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={() => navigate("/")}
              className="bg-cabin-600 hover:bg-cabin-700 text-white w-full flex items-center justify-center"
            >
              <Home size={18} className="mr-2" />
              Return to Homepage
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full border-cabin-300 text-cabin-700 hover:bg-cabin-50"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

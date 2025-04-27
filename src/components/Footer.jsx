import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <Home className="h-6 w-6 text-cabin-200" />
              <span className="ml-2 text-xl font-playfair font-medium">Comfy Cabin</span>
            </div>
            <p className="mt-4 text-wood-200 text-sm">
              Discover and book the most beautiful cabin getaways in nature. Escape the city and reconnect with the wilderness.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-wood-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-wood-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-wood-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <div
                  onClick={() => navigate("/")}
                  className="text-wood-300 hover:text-white transition-colors cursor-pointer text-sm flex items-center"
                >
                  <Home size={16} className="mr-2" /> Home
                </div>
              </li>
              <li>
                <div
                  onClick={() => navigate("/listings")}
                  className="text-wood-300 hover:text-white transition-colors cursor-pointer text-sm flex items-center"
                >
                  <MapPin size={16} className="mr-2" /> All Cabins
                </div>
              </li>
              <li>
                <div
                  onClick={() => navigate("/about")}
                  className="text-wood-300 hover:text-white transition-colors cursor-pointer text-sm flex items-center"
                >
                  About Us
                </div>
              </li>
              <li>
                <div
                  onClick={() => navigate("/contact")}
                  className="text-wood-300 hover:text-white transition-colors cursor-pointer text-sm flex items-center"
                >
                  Contact
                </div>
              </li>
              <li>
                <div
                  onClick={() => navigate("/privacy")}
                  className="text-wood-300 hover:text-white transition-colors cursor-pointer text-sm flex items-center"
                >
                  Privacy Policy
                </div>
              </li>
              <li>
                <div
                  onClick={() => navigate("/terms")}
                  className="text-wood-300 hover:text-white transition-colors cursor-pointer text-sm flex items-center"
                >
                  Terms & Conditions
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-wood-300 flex-shrink-0 mt-0.5" />
                <span className="text-wood-200 text-sm">
                  kolkata, West Bengal, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-wood-300" />
                <span className="text-wood-200 text-sm">+91 95465-23335</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-wood-300" />
                <span className="text-wood-200 text-sm">info@comfycabin.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-wood-800 mt-10 pt-6 text-center text-wood-400 text-sm">
          <p>&copy; {currentYear} Comfy Cabin Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { LogIn, Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
  
    try {
      await login(data);
      toast({
        title: "Login successful",
        description: `Welcome back!`,
        type: "success",
      });
      navigate("/listings");
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
      toast({
        title: "Login failed",
        description: err.message || "Invalid email or password",
        variant: "destructive",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar isLoggedIn={false} />

        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-playfair font-bold text-cabin-800">Welcome Back</h1>
              <p className="mt-2 text-sm text-cabin-600">
                Sign in to your account to access your bookings and saved cabins
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              {error && <p className="text-red-600 text-center mb-4">{error}</p>}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                              placeholder="you@example.com"
                              className="pl-10"
                              type="email"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                              type="password"
                              placeholder="••••••••"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-cabin-600 focus:ring-cabin-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-medium text-cabin-600 hover:text-cabin-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-cabin-600 hover:bg-cabin-700"
                  >
                    {isLoading ? (
                      <>
                        <Spinner size="sm" className="mr-2" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign in
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-cabin-600 hover:text-cabin-500 inline-flex items-center"
                  >
                    Sign up <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Login;

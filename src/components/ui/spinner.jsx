import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const Spinner = ({ className, size = "md", ...props }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };
  
  return (
    <div
      className={cn("flex items-center justify-center text-cabin-600", className)}
      {...props}
    >
      <Loader2 className={cn("animate-spin", sizeClasses[size])} />
    </div>
  );
};

export { Spinner };
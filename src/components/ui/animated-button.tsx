"use client";

import React from "react";
import { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";



export const AnimatedButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "relative overflow-hidden group inline-flex items-center justify-center transition-all duration-300 hover:scale-105 ease-linear",

        className
      )}
    >
      <span className="relative flex items-center justify-center transition-transform duration-300 ease-out transform group-hover:-translate-y-[150%]">
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out transform translate-y-full group-hover:translate-y-0">
        {children}
      </span>
    </button>
  );
};

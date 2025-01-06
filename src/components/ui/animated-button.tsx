"use client";

import React from "react";
import { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonProps {
  padding?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "relative overflow-hidden group inline-flex items-center justify-center transition-all duration-300",

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

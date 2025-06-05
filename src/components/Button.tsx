import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "call";
  size?: "xs" | "md" | "lg";
  children: ReactNode;
  icon?: LucideIcon; 
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  icon: Icon, 
  ...props
}) => {
  const variantClass = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    danger: "bg-red-500 hover:bg-red-700",
    call: "bg-green-500 hover:bg-green-700",
  };

  const sizeClass = {
    xs: "px-3 py-2 text-xs",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      {...props}
      className={clsx(
        "rounded text-white duration-300 transition inline-flex items-center gap-2", // 👈 فاصله بین آیکن و متن
        variantClass[variant],
        sizeClass[size],
        className,
      )}
    >
      {Icon && <Icon className="w-4 h-4" />} 
      {children}
    </button>
  );
};

export default Button;

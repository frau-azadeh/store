"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export default function Button({
  children,
  onClick,
  icon,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

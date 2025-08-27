"use client";

import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

export function BackButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const router = useRouter();
  return (
    <button
      className={`cursor-pointer font-semibold ${className}`}
      onClick={() => router.back()}
      {...props}
    >
      {"<-"} Back
    </button>
  );
}

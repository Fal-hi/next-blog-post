"use client";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ className = "", ...props }: BackButtonProps) {
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

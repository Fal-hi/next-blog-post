import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Tag({ children, className, onClick }: TagProps) {
  return (
    <section
      className={`border border-zinc-300 px-1 text-xs md:text-base ${className}`}
      onClick={onClick}
    >
      {children}
    </section>
  );
}

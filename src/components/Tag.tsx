import { TagProps } from "@/types/index";

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

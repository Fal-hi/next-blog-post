"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Blog" },
    { href: "/tags", label: "Tags" },
    { href: "/search", label: "Search" },
  ];

  return (
    <header className="sticky top-0 z-20 container mx-auto mb-4 flex items-center justify-between bg-white/30 px-4 py-4 shadow-xs backdrop-blur-md md:max-w-10/12 xl:max-w-2/4">
      <Link
        href="https://github.com/Fal-hi"
        target="_blank"
        className="cursor-pointer text-xl font-bold"
      >
        FAL.
      </Link>
      <nav>
        <ul className="flex items-center gap-x-4">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:underline ${isActive ? "underline" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

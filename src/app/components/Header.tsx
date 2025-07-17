import Link from "next/link";

export function Header() {
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
          <li>
            <Link href="/" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/tags" className="hover:underline">
              Tags
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:underline">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

"use client";

import { useQueryState } from "nuqs";

export function Search() {
  const [query, setQuery] = useQueryState("q", { defaultValue: "" });
  return (
    <input
      placeholder="Search something..."
      className="rounded border px-2 py-1"
      value={query}
      onChange={(e) => setQuery(e.target.value || null)}
    />
  );
}

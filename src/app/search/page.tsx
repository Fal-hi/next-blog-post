"use client";

import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { ListPost } from "@/components/ListPost";
import { Posts } from "@/types/index";
import { getPostBySearch } from "@/lib/posts";
import { SkeletonPostLoading } from "@/components/SkeletonLoading";

export default function SearchPost() {
  const [query, setQuery] = useQueryState("q", { defaultValue: "" });
  const [data, setData] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDataPosts = useCallback(async () => {
    if (!query) return;
    setIsLoading(true);
    try {
      const res = await getPostBySearch(query);
      setData(res);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") getDataPosts();
  };

  useEffect(() => {
    if (!query) return;
    const timeout = setTimeout(() => {
      getDataPosts();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <section>
      <section className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <h1 className="text-2xl font-bold">Search Post</h1>
        <input
          autoFocus
          placeholder="Search something..."
          className="w-1/3 rounded border py-2 pl-2 text-xs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </section>
      {!query ? null : isLoading ? (
        <SkeletonPostLoading length={5} />
      ) : data && data.length > 0 ? (
        <ListPost data={data} keyword={query} />
      ) : (
        <section className="grid min-h-screen items-center">
          <p className="text-center">
            No tags found for the keyword {`"${query}"`}
          </p>
        </section>
      )}
    </section>
  );
}

"use client";

import { useQueryState } from "nuqs";
import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import { ListPost } from "@/components/ListPost";
import { Posts } from "@/types/Posts";

export default function SearchPost() {
  const [query, setQuery] = useQueryState("q", { defaultValue: "" });
  const [data, setData] = useState<Posts[]>([]);

  const getDataPosts = useCallback(async () => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://dummyjson.com/posts/search?q=${query}`,
      );
      if (!response.ok) throw new Error("Failed to get post by search");
      const data = await response.json();
      setData(data.posts);
    } catch (error) {
      console.log(error);
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
    <>
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
      {data ? (
        <ListPost data={data} keyword={query} />
      ) : Array(data).length === 0 ? (
        <section className="grid h-[500px] items-center">
          <p className="text-center">Post not found</p>
        </section>
      ) : null}
    </>
  );
}

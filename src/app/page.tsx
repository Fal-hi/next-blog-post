import { getAllPosts } from "@/lib/posts";
import { ListPost } from "@/components/ListPost";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const allPosts = await getAllPosts();
  return (
    <>
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <Suspense fallback={<Loading />}>
        <ListPost data={allPosts} />
      </Suspense>
    </>
  );
}

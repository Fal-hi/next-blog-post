import { getAllPosts } from "@/lib/posts";
import { ListPost } from "@/components/ListPost";
import { Suspense } from "react";
import { SkeletonPostLoading } from "@/components/SkeletonLoading";

export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <article>
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <Suspense fallback={<SkeletonPostLoading length={5} />}>
        <ListPost data={allPosts} />
      </Suspense>
    </article>
  );
}

import { getAllPosts } from "@/api/route";
import { ListPost } from "./components/ListPost";

export default async function Home() {
  const allPosts = await getAllPosts();
  return (
    <>
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ListPost data={allPosts} />
    </>
  );
}

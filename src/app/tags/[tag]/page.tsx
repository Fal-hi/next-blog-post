import { getPostByTag } from "@/lib/posts";
import { BackButton } from "@/components/BackButton";
import { ListPost } from "@/components/ListPost";

export default async function PostsByTag({
  params,
}: {
  params: { tag: string };
}) {
  const { tag } = await params;
  const postsByTag = await getPostByTag(tag ?? "");
  return (
    <article>
      <h1 className="text-2xl font-bold">{tag}</h1>
      <ListPost data={postsByTag} />
      <footer>
        <BackButton className="mt-10" />
      </footer>
    </article>
  );
}

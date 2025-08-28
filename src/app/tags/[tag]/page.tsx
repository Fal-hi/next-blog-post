import { getPostByTag } from "@/lib/posts";
import { BackButton } from "@/components/BackButton";
import { ListPost } from "@/components/ListPost";

export default async function PostsByTag({ params }: TagParamProps) {
  const { tag } = await params;
  const postsByTag = await getPostByTag(tag ?? "");
  return (
    <>
      <h1 className="text-2xl font-bold">{tag}</h1>
      <ListPost data={postsByTag} />
      <BackButton className="mt-10" />
    </>
  );
}

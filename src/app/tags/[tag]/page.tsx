import { getPostByTag } from "@/api/route";
import { BackButton } from "@/components/BackButton";
import { ParamProps } from "@/types";
import { ListPost } from "@/components/ListPost";

export default async function PostsByTag({ params }: ParamProps) {
  const postsByTag = await getPostByTag(params.tag ?? "");
  return (
    <>
      <h1 className="text-2xl font-bold">{params.tag}</h1>
      <ListPost data={postsByTag} />
      <BackButton className="mt-10" />
    </>
  );
}

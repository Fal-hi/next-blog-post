import { getPostById, getPostByIdWithComments } from "@/lib/posts";
import { BackButton } from "@/components/BackButton";
import { Tag } from "@/components/Tag";
import { Comments } from "@/types/index";

export default async function PostDetail({ params }: ParamProps) {
  const post = await getPostById(params.id ?? "");
  const comments = await getPostByIdWithComments(params.id ?? "");
  return (
    <>
      <h1 className="mt-16 text-3xl font-semibold md:text-4xl">{post.title}</h1>
      <section className="mt-6 flex flex-wrap items-center justify-between">
        <section className="flex max-w-max gap-2">
          {post.tags.map((tag: string, index: number) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </section>
        <section className="flex gap-2 pt-1 text-xs font-medium md:text-sm">
          <p>{post.reactions.likes} Likes</p>
          <p>{post.reactions.dislikes} Dislikes</p>
          <p>{post.views} Views</p>
        </section>
      </section>
      <p className="mt-4 text-base">{post.body}</p>
      {comments && comments.length > 0 && (
        <section>
          <h3 className="mt-6 mb-4 text-lg font-bold">Comments</h3>
          <ul className="flex flex-col gap-y-4">
            {comments.map((comment: Comments) => (
              <li key={comment.id}>
                <h4>
                  {comment.user.fullName}{" "}
                  <span className="font-semibold">
                    ({comment.user.username})
                  </span>
                </h4>
                <p className="text-sm">{comment.body}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
      <BackButton className="mt-10" />
    </>
  );
}

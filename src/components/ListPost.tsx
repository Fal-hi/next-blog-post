import Link from "next/link";
import { Tag } from "@/components/Tag";
import { highlightText } from "src/utils/highlightText";
import { DataPosts, Posts } from "@/types/index";

export function ListPost({ data, keyword }: DataPosts) {
  return (
    <ul className="mt-4 flex flex-col gap-y-4">
      {data.map((post: Posts) => (
        <li
          key={post.id}
          className="min-h-[8rem] cursor-pointer border-b border-zinc-300 hover:bg-zinc-100"
        >
          <Link href={`/post/${post.id}`}>
            <section className="flex justify-between gap-x-10">
              <h2 className="mb-2 line-clamp-2 overflow-hidden text-lg font-semibold md:text-xl">
                {highlightText(post.title, keyword ?? "")}
              </h2>
              <section className="flex gap-2 pt-1 text-xs font-medium md:text-sm">
                <p>{post.reactions.likes} Likes</p>
                <p>{post.reactions.dislikes} Dislikes</p>
                <p>{post.views} Views</p>
              </section>
            </section>
            <section className="-mt-2 flex max-w-max gap-2 md:-mt-1">
              {post.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </section>
            <p
              className={`mt-2 text-xs md:text-base ${!keyword && "line-clamp-2"}`}
            >
              {highlightText(post.body, keyword ?? "")}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

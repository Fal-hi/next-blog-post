import { getTagList } from "@/api/route";
import Link from "next/link";

export default async function Tags() {
  const tagList = await getTagList();
  return (
    <section>
      <h1 className="mb-6 text-2xl font-bold">Tags</h1>
      <nav>
        <ul className="flex flex-wrap gap-3">
          {tagList.map((tag: string, index: number) => (
            <li key={index}>
              <Link
                href={`/tags/${tag}`}
                className="cursor-pointer border border-zinc-100 px-1 hover:bg-zinc-300"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export function SkeletonPostLoading({ length = 1 }: { length?: number }) {
  return (
    <ul className="mt-4 flex flex-col gap-y-4">
      {Array.from({ length }).map((_, index) => (
        <li
          key={index}
          className="min-h-[8rem] animate-pulse border-b border-zinc-300"
        >
          <section className="flex justify-between gap-x-10">
            <div className="mb-2 h-6 w-2/3 rounded bg-zinc-300"></div>
            <section className="flex gap-2 pt-1 text-xs font-medium md:text-sm">
              <div className="h-4 w-10 rounded bg-zinc-300"></div>
              <div className="h-4 w-12 rounded bg-zinc-300"></div>
              <div className="h-4 w-12 rounded bg-zinc-300"></div>
            </section>
          </section>
          <section className="-mt-2 flex max-w-max gap-2 md:-mt-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-5 w-12 rounded bg-zinc-300"></div>
            ))}
          </section>
          <p className="mt-2">
            <div className="mb-1 h-4 w-full rounded bg-zinc-300"></div>
            <div className="h-4 w-5/6 rounded bg-zinc-300"></div>
          </p>
        </li>
      ))}
    </ul>
  );
}

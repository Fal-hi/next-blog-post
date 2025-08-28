export {};

declare global {
  // 👉 untuk route sederhana [id]
  type IdParamProps = {
    params: {
      id: string;
    };
  };

  // 👉 untuk route [slug]
  type SlugParamProps = {
    params: {
      slug: string;
    };
  };

  // 👉 untuk route [tag]
  type TagParamProps = {
    params: {
      tag: string;
    };
  };

  // 👉 untuk route search, ex: /search/[q]
  type SearchParamProps = {
    params: {
      q: string;
    };
  };

  // 👉 generic param (bisa dipakai kalau butuh fleksibel)
  type DynamicParamProps<T extends string = string> = {
    params: {
      [key in T]: string;
    };
  };

  // 👉 catch-all route [...slug]
  type CatchAllParamProps = {
    params: {
      slug: string[];
    };
  };

  // 👉 optional catch-all route [[...slug]]
  type OptionalCatchAllParamProps = {
    params: {
      slug?: string[];
    };
  };
}

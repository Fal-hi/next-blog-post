export async function getAllPosts() {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) throw new Error("Failed to get posts");
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostBySearch(query: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/posts/search?q=${query}`,
    );
    if (!response.ok) throw new Error("Failed to get post by search");
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostById(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!response.ok) throw new Error("Failed to get post by id");
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPostByIdWithComments(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}/comments`);
    if (!response.ok) throw new Error("Failed to get post by id with comments");
    const data = await response.json();
    return data.comments;
  } catch (error) {
    console.log(error);
  }
}

export async function getTagList() {
  try {
    const response = await fetch(`https://dummyjson.com/posts/tag-list`);
    if (!response.ok) throw new Error("Failed to get posts by tag");
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPostByTag(tag: string) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/tag/${tag}`);
    if (!response.ok) throw new Error("Failed to get posts by tag");
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.log(error);
  }
}

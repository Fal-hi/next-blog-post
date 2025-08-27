import { ReactNode } from "react";

// post
export type DataPosts = {
  data: Posts[];
  keyword?: string;
};
export type Posts = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
};
export type Reactions = {
  likes: number;
  dislikes: number;
};

// tag
export type TagProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

// comment
export interface Comments {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: UserComments;
}
export interface UserComments {
  id: number;
  username: string;
  fullName: string;
}

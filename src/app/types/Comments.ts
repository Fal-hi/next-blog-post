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

import { Post } from "../../../shared/model/types/posts.types";

export type PostProps = Omit<Post, "id">;

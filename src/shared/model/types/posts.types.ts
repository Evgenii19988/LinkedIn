import { User } from "./users.types";

export type Post = {
  id: string | number;
  name: string;
  text: string;
  file?: string | null;
  autor: User
};

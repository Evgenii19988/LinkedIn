import { UseFormSetValue } from "react-hook-form";
import { Post } from "../../model/types/posts.types";
import { User } from "../../model/types/users.types";

export type UploadProps = {
  file: string | ArrayBuffer;
  setFile: UseFormSetValue<any>;
};

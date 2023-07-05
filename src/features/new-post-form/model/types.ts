import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Dispatch, SetStateAction } from "react";
import { Post } from "../../../shared/model/types/posts.types";
export type NewPostFormProps = {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

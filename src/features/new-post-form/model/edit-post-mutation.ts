import { useUpdatePostMutation } from "../../../shared/model/api/posts.api";

export const UpdatePostMutation = () => {
  const [updatePost, { isLoading, isSuccess, reset, data }] =
    useUpdatePostMutation();

  return {
    updatePost,
    isLoading,
    isSuccess,
    reset,
    data,
  };
};

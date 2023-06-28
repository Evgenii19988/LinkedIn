import { useAddPostMutation } from "../../../shared/model/api/posts.api";

export const AddPostMutation = () => {
  const [addPost, { isLoading, isSuccess, reset, data }] = useAddPostMutation();

  return {
    addPost,
    isLoading,
    isSuccess,
    reset,
    data,
  };
};

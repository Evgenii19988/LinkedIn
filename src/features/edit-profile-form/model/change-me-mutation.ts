import { useChangeMeMutation } from "../../../shared/model/api/auth.api";

export const ChangeMeMutation = () => {
  const [changeMe, { isLoading, isSuccess, reset }] = useChangeMeMutation();

  return {
    changeMe,
    isLoading,
    isSuccess,
    reset,
  };
};

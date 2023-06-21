import { useAuthMeQuery } from "../../../shared/model/api/auth.api";

const GetAuthMeQuery = () => {
  const { data, isFetching } = useAuthMeQuery(null);

  return {
    ...data,
    isFetching
  };
};

export default GetAuthMeQuery;

import { useGetPostsQuery } from "../../../../shared/model/api/posts.api";

const GetPostsQuery = () => {
  const { data, refetch } = useGetPostsQuery(null);

  return {
    refetch,
    data,
  };
};

export default GetPostsQuery;

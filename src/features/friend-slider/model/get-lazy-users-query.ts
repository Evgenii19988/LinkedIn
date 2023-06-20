import { useLazyGetUserQuery } from "../../../shared/model/api/users.api";

const GetLazyUsersQuery = () => {
  const [getUsers, data] = useLazyGetUserQuery();

  return {
    getUsers,
    ...data,
  };
};

export default GetLazyUsersQuery;

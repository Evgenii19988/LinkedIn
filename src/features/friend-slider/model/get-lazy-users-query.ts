import { useLazyGetUsersQuery } from "../../../shared/model/api/users.api";

const GetLazyUsersQuery = () => {
  const [getUsers, data] = useLazyGetUsersQuery();

  return {
    getUsers,
    ...data,
  };
};

export default GetLazyUsersQuery;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { User } from "../types/users.types";

export const userApi = createApi({
  reducerPath: "users-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (build) => ({
    getUsers: build.query<{ users: User[] }, null>({
      query: () => `/users`,
    }),
    updateUser: build.mutation<
      { users: User },
      { id: number | string; user: Partial<User> }
    >({
      query({ id, user }) {
        return {
          url: `/users/${id}`,
          method: "PATCH",
          body: user,
        };
      },
    }),
  }),
});

export const { useLazyGetUsersQuery, useUpdateUserMutation } = userApi;

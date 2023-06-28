import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import { userApi } from "./api/users.api";
import { authApi } from "./api/auth.api";
import { postsApi } from "./api/posts.api";

export const store = configureStore({
  reducer: {
    //-----SLICES-----//
    authSlice,
    //-----API-----//
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      authApi.middleware,
      postsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

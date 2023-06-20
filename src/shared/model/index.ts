import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import { userApi } from "./api/users.api";

export const store = configureStore({
  reducer: {
    authSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

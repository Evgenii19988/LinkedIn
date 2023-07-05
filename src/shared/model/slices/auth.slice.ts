import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    description: "",
    image: "",
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    setUserName: (state, { payload }) => {
      state.user.name = payload;
    },
    setUserDescription: (state, { payload }) => {
      state.user.description = payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

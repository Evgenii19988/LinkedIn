import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    description: "",
    image: "",
    id: ""
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    setUserFirstName: (state, { payload }) => {
      state.user.firstName = payload;
    },
    setUserLastName: (state, { payload }) => {
      state.user.lastName = payload;
    },
    setUserDescription: (state, { payload }) => {
      state.user.description = payload;
    },
    setUserImage: (state, { payload }) => {
      state.user.image = payload;
    },
    setUserId: (state, { payload }) => {
      state.user.id = payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

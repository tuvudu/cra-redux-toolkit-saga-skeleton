import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersPending: (state) => {
      state.loading = true;
    },
    fetchUsersFulfilled: (state, actions) => {
      state.data = actions?.payload || [];
      state.loading = false;
    },
    fetchUsersRejected: (state) => {
      state.data = [];
      state.loading = false;
    },
  },
});

export const { fetchUsersPending, fetchUsersFulfilled, fetchUsersRejected } =
  usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;

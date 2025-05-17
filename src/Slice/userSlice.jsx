import { createSlice } from "@reduxjs/toolkit";

// Assign the state of the slice
const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    deleteUsers: (state, action) => {
      const payload = action.payload;
      state.user = state.user.filter((user, index) => index !== payload);
    },
  },
});

// Creation of action in Redux
export const { setUsers, deleteUsers } = userSlice.actions;

export default userSlice.reducer; // Export all the reducer functions as a single reducer

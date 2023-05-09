import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      console.log(state);
      state.user = null;
    },
  },
});

export const { setRegister, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
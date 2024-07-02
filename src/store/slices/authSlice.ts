import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "",
    userEmail: "",
    userId: "",
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTcxNDM0NDUzNywiZXhwIjoxNzE0OTQ5MzM3fQ.GrB__l7kB5frxDq-JZ3f-ctbRSZWgs2515Fequ2ATcM",
    refreshToken: null,
    isAuthenticated: true,
  },
  reducers: {
    autoAuthenticate: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isAuthenticated = true;
    },
    loginUser: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isAuthenticated = true;
      state.userName = payload.userName;
      state.userEmail = payload.userEmail;
      state.userId = payload.userId;
    },
    logOut: (state) => {
      state.accessToken = "";
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.userName = "";
      state.userEmail = "";
      state.userId = "";
    },
  },
});

export const { loginUser, logOut } = authSlice.actions;

export const selectIsAuthenticated = (state: { auth: any }) =>
  state.auth.isAuthenticated;

export const selectAccessToken = (state: { auth: any }) =>
  state.auth.accessToken;
export const selectUserName = (state: { auth: any }) => state.auth.userName;
export const selectUserEmail = (state: { auth: any }) => state.auth.userEmail;
export const selectUserId = (state: { auth: any }) => state.auth.userId;

export default authSlice.reducer;

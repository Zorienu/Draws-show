import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import decode from "jwt-decode";

import * as API from "api";

const signin = createAsyncThunk("user/signin", async (arg, thunkAPI) => {
  const { data } = await API.signin(arg);
  return data.token;
});

const signup = createAsyncThunk("user/signup", async (arg, thunkAPI) => {
  const { data } = await API.signup(arg);
  return data.token;
});

const saveTokenAndProfile = (state, action) => {
  const token = action.payload;
  const decodedToken = decode(token);
  state.profile = decodedToken;
  localStorage.setItem("profile", JSON.stringify(decodedToken));
  localStorage.setItem("token", token);
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: JSON.parse(localStorage.getItem("profile")) || null,
  },
  reducers: {
    logout: (state, action) => {
      state.profile = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      saveTokenAndProfile(state, action);
    },
    [signup.fulfilled]: (state, action) => {
      saveTokenAndProfile(state, action);
    },
  },
});

export const { logout } = userSlice.actions;

export { signin, signup };

export default userSlice.reducer;

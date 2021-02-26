import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import decode from "jwt-decode";

import * as API from "api";

const signin = createAsyncThunk("user/signin", async (arg, thunkAPI) => {
  console.log(arg);
  const { data } = await API.signin(arg);
  return data.token;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: localStorage.getItem("profile") || null,
  },
  reducers: {},
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      const token = action.payload;
      const decodedToken = decode(token);
      state.profile = decodedToken;
      localStorage.setItem("profile", decodedToken);
      localStorage.setItem("token", token);
    },
  },
});

export { signin };

export default userSlice.reducer;

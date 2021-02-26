import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "api";

const signin = createAsyncThunk("user/signin", async (arg, thunkAPI) => {
  console.log(arg);
  const { data } = await API.signin(arg);
  return data.token;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {},
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      const token = action.payload;
      state.token = token;
      localStorage.setItem("token", token);
    },
  },
});

export { signin };

export default userSlice.reducer;

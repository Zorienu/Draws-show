import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "api";

const getPosts = createAsyncThunk("posts/getPosts", async (arg, thunkAPI) => {
  const { data } = await API.fetchPosts();
  return data;
});

const createComment = createAsyncThunk(
  "posts/createComment",
  async ({ id, comment }, thunkAPI) => {
    const { data } = await API.createComment(id, comment);
    return data;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [createComment.fulfilled]: (state, action) => {
      const postId = action.payload._id;
      state.value = [
        ...state.value.filter((post) => post._id !== postId),
        action.payload,
      ];
    },
  },
});

export { getPosts, createComment };

export default postsSlice.reducer;

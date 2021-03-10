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

const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId }, thunkAPI) => {
    console.log("eee");
    const { data } = await API.deleteComment(postId, commentId);
    return data;
  }
);

const likePost = createAsyncThunk("posts/likePost", async (postId, thunkAPI) => {
  const { data } = await API.likePost(postId);
  return data;
});

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
      const updatedPostId = action.payload._id;
      state.value = state.value.map((post) =>
        post._id === updatedPostId ? action.payload : post
      );
    },
    [likePost.fulfilled]: (state, action) => {
      const updatedPostId = action.payload._id;
      state.value = state.value.map((post) =>
        post._id === updatedPostId ? action.payload : post
      );
    },
    [deleteComment.fulfilled]: (state, action) => {
      const updatedPostId = action.payload._id;
      state.value = state.value.map((post) =>
        post._id === updatedPostId ? action.payload : post
      );
    },
  },
});

export { getPosts, createComment, deleteComment, likePost };

export default postsSlice.reducer;

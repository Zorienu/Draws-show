import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token;

  return config;
});

// posts
export const fetchPosts = () => API.get("/posts");
export const createComment = (id, comment) =>
  API.patch(`/posts/${id}/addComment`, { comment });

export const deleteComment = (postId, commentId) => {
  console.log(postId);
  console.log(commentId);
  return API.patch(`/posts/${postId}/deleteComment`, { commentId });
};

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// user
export const signin = (credentials) => API.post("/users/signin", credentials);
export const signup = (credentials) => API.post("/users/signup", credentials);

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
export const createComment = (id, newComment) =>
  API.patch(`/posts/${id}/addComment`, { newComment });

// user
export const signin = (credentials) => API.post("/users/signin", credentials);
export const signup = (credentials) => API.post("/users/signup", credentials);

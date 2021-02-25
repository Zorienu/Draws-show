import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

// posts
export const fetchPosts = () => API.get("/posts");
export const createComment = (id, newComment) =>
  API.patch(`/posts/${id}/addComment`, { newComment });

// user
export const login = (credentials) => API.post("/users/signin");

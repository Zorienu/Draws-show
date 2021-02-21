import axios from "axios";

export const getImages = () => axios.get("https://picsum.photos/v2/list?page=0&limit=10");

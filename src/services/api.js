import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export const getArticles = () => API.get("/articles");
export const getArticleById = (id) => API.get(`/articles/${id}`);
export const generateArticle = (id) => {
  return API.post(`/articles/generate/${id}`);
};

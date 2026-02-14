import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8888",
  baseURL: "http://localhost:8888",
});

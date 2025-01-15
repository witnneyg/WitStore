import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8888",
});

// import.meta.env.VITE_API_BASE_URL ||

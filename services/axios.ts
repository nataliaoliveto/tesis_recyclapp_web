import axios from "axios";

export const axiosCustom = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosCustom.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

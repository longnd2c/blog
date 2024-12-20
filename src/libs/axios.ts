import { API_URL } from "@/configs/api";
import axios from "axios";

const instance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  responseType: "json",
  timeout: 100000,
  maxContentLength: 100000000,
  maxBodyLength: 1000000000,
});

export { instance };

import axios from "axios";

//a palavra localhost não funciona no React Native, precisa ser IPV4:8080
const api = axios.create({
  baseURL: "http://192.168.1.178:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

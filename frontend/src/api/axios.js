import axios from "axios";

const api = axios.create({
  baseURL: "/api", // nada de localhost ni puertos
});

export default api;

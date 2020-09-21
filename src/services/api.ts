import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.1.239:3333",
  baseURL: "https://ecoleta-fantinatto.herokuapp.com/",
});

export default api;

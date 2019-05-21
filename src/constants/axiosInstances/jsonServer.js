import axios from "axios";

const jsonServer = axios.create({
  baseURL: "http://localhost:3100/"
});

export default jsonServer;

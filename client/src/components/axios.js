import axios from "axios";

const instance = axios.create({
  baseURL: "https://jealous-tinder-backend.herokuapp.com",
});

export default instance;

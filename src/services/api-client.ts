import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "37c8399e925949258de3a46546e4a55b",
  },
});

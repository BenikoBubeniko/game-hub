import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ded211a9d23c4e49a6ca964c431b50c1"
  }
})
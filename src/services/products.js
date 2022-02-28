import axios from "axios";
const baseURL = "http://localhost:5000/api/";
const getAll = () => {
  return axios.get(baseURL + "products").then((response) => response.data);
};

export default { getAll };

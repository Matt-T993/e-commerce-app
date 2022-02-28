import axios from "axios";
const baseURL = "http://localhost:5000/api/auth/";

const login = ({ email, password }) => {
  console.log("POST", baseURL + "login");
  return axios
    .post(baseURL + "login", { email, password })
    .then((response) => response.data);
};

const register = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  console.log("POST", baseURL + "register");
  return axios
    .post(baseURL + "register", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    })
    .then((response) => response.data);
};
const loginService = {
  login,
  register,
};
export default loginService;

import loginService from "../services/login";
import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

//Login action
export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("/api/auth/login", { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// export const login = (email, password) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST, payload: { email, password } });

//   try {
//     const { data } = await loginService.login({ email, password });
//     dispatch({ type: LOGIN_SUCCESS, payload: data });
//     console.log(JSON.stringify(data));
//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// Logout action
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  // localStorage.removeItem('cartItems')
  await axios.delete("/api/login");
  dispatch({ type: LOGOUT });
};

//regsiter actions
export const register =
  (firstName, lastName, email, password, confirmPassword) =>
  async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST, payload: { email, password } });

    try {
      const { data } = await loginService.register({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      dispatch({ type: LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const getUsers = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://salty-dawn-54578.herokuapp.com/users/list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        payload
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_USERS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const deleteUser = (payload) => {
  return async (dispatch) => {
    return axios
      .patch(
        `https://salty-dawn-54578.herokuapp.com/users/${payload._id}/status`,
        {
          _id: payload._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "DELETE_USER",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

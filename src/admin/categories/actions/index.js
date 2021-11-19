import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const getList = (payload) => {
  return async (dispatch) => {
    return axios
      .get("https://salty-dawn-54578.herokuapp.com/category", payload)
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_LIST",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const postList = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://salty-dawn-54578.herokuapp.com/category", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_LIST",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateList = (payload) => {
  return async (dispatch) => {
    return axios
      .put(
        `https://salty-dawn-54578.herokuapp.com/category/${payload._id}`,
        {
          name: payload.name,
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
          type: "UPDATE_LIST",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

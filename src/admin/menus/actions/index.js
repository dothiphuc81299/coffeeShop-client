import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const getDrink = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://salty-dawn-54578.herokuapp.com/drink",
        { params: { keyword: "" } },
        payload
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_DRINKS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const postDrink = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://salty-dawn-54578.herokuapp.com/drink", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_DRINK",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateDrink = (payload) => {
  return async (dispatch) => {
    return axios
      .put(
        `https://salty-dawn-54578.herokuapp.com/drink/${payload._id}`,
        {
          name: payload.name,
          price: payload.price,
          image: payload.image,
          category: payload.category,
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
          type: "UPDATE_DRINK",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const deleteDrink = (payload) => {
  return async (dispatch) => {
    return axios
      .patch(
        `https://salty-dawn-54578.herokuapp.com/drink/${payload._id}/status`,
        {
          _id: payload._id
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
          type: "DELETE_DRINK",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

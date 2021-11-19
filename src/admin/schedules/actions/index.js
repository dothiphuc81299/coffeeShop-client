import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const postShift = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://salty-dawn-54578.herokuapp.com/shift", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_SHIFT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getShift = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://salty-dawn-54578.herokuapp.com/shift",
        {
          params: {
            staff: "60710a93e3d1a8fe20caea97",
            startAt: "2005-01-01T15:00:00.000Z",
            endAt: "2007-02-01T15:00:00.000Z",
          },
        },
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
          type: "GET_SHIFT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

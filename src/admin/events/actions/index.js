import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const getEvents = (payload) => {
  return async (dispatch) => {
    return axios
      .get("https://salty-dawn-54578.herokuapp.com/event", payload)
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_EVENTS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const postEvent = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://salty-dawn-54578.herokuapp.com/event", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_EVENT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateEvent = (payload) => {
  return async (dispatch) => {
    return axios
      .put(
        `https://salty-dawn-54578.herokuapp.com/event/${payload._id}`,
        {
          name: payload.name,
          desc: payload.desc,
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
          type: "UPDATE_EVENT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const deleteEvent = (payload) => {
  return async (dispatch) => {
    return axios
      .patch(
        `https://salty-dawn-54578.herokuapp.com/event/${payload._id}/status`,
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
          type: "DELETE_EVENT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

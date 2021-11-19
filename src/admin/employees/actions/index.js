import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const getListStaff = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://salty-dawn-54578.herokuapp.com/staff",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        payload
      )
      .then((response) => {
        const data = response.data.data.staffs;
        dispatch({
          type: "GET_LIST_STAFF",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const postStaff = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://salty-dawn-54578.herokuapp.com/staff", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.staff;
        dispatch({
          type: "POST_STAFF",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateStaff = (payload) => {
  return async (dispatch) => {
    return axios
      .put(
        `https://salty-dawn-54578.herokuapp.com/staff/${payload._id}`,
        {
          username: payload.username,
          password: payload.password,
          phone: payload.phone,
          address: payload.address,
          role: payload.role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.staff;
        dispatch({
          type: "UPDATE_STAFF",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const deleteStaff = (payload) => {
  return async (dispatch) => {
    return axios
      .patch(
        `https://salty-dawn-54578.herokuapp.com/staff/${payload._id}/status`,
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
        const data = response.data.data.staff;
        dispatch({
          type: "DELETE_STAFF",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

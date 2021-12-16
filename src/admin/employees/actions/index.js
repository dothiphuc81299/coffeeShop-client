import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

// const token = TokenUtils.TOKEN_ADMIN;

export const getListStaff = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/staff",
  
        
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
      .post("https://mighty-castle-60848.herokuapp.com/staff",
      {
        username: payload.username,
        password: payload.password,
        phone: payload.phone,
        address: payload.address,
        role: payload.role,
      },
        {
        headers: {
          Authorization: `Bearer ${payload.token}`,
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
        `https://mighty-castle-60848.herokuapp.com/staff/${payload._id}`,
        {
          // username: payload.username,
          // password: payload.password,
          // phone: payload.phone,
          // address: payload.address,
          role: payload.role,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
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
      .delete(
        `https://mighty-castle-60848.herokuapp.com/staff/${payload._id}`,
       
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
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

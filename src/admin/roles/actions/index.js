import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

// const token = TokenUtils.TOKEN_ADMIN;

export const getRoles = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/staffRole",
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
        payload
      )
      .then((response) => {
        const data = response.data.data.staffRoles;
        dispatch({
          type: "GET_ROLES",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const postRole = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://mighty-castle-60848.herokuapp.com/staffRole", payload, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.role;
        dispatch({
          type: "POST_ROLE",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getPermissions = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/staffRole/permissions",
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
        payload
      )
      .then((response) => {
        const data = response.data.data.permissions;
        dispatch({
          type: "GET_PERMISSIONS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateRole = (payload) => {
  return async (dispatch) => {
    return axios
      .put(
        `https://mighty-castle-60848.herokuapp.com/staffRole/${payload._id}`,
        {
          name: payload.name,
          permissions: payload.permissions,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.role;
        dispatch({
          type: "UPDATE_ROLE",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

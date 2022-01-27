import axios from "axios";
import { toast } from "react-toastify";


export const getRoles = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/staffRole",
        {
          headers: {
            'Authorization': `Bearer ${payload}`
          }
        })
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
      .post("https://mighty-castle-60848.herokuapp.com/staffRole",  
        {
          name: payload.name,
          permissions: payload.permissions,
        },
        {
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
        toast.error("Ban khong co quyen de thuc hien hanh dong nay.")
        throw error;
      });
  };
};

export const getPermissions = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/staffRole/permissions",
        // {
        //   headers: {
        //     Authorization: `Bearer ${payload.token}`,
        //   },
        // },
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
        toast.error("Ban khong co quyen de thuc hien hanh dong nay.")
        throw error;
      });
  };
};



export const deleteRole = (payload) => {
  return async (dispatch) => {
    return axios
      .delete(
        `https://mighty-castle-60848.herokuapp.com/staffRole/${payload._id}`,
        
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.role;
        dispatch({
          type: "DELETE_ROLE",
          payload: data,
        });
      })
      .catch((error) => {
        toast.error("Ban khong co quyen de thuc hien hanh dong nay.")
        throw error;
      });
  };
};
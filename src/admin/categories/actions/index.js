import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

// const token = TokenUtils.TOKEN_ADMIN;

export const getList = (params) => {
  return async (dispatch) => {
    return axios
      .get("https://mighty-castle-60848.herokuapp.com/category", {params})
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
      .post("https://mighty-castle-60848.herokuapp.com/category",  {
       name :payload.name,
  },{
    headers: {
      Authorization: `Bearer ${payload.token}`,
    }
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
        `https://mighty-castle-60848.herokuapp.com/category/${payload._id}`,
        {
          name: payload.name,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
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


export const deleteCategory = (payload) => {
  return async (dispatch) => {
    return axios
      .delete(
        `https://mighty-castle-60848.herokuapp.com/category/${payload._id}`,
       
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "DELETE_CATEGORY",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

// const token = TokenUtils.TOKEN_ADMIN;

export const getDrink = (params) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/drink",{params})
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
      .post("https://mighty-castle-60848.herokuapp.com/drink",  
        {
          name: payload.name,
          price: payload.price,
          // category:payload.category,
          image:payload.image,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
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
        `https://mighty-castle-60848.herokuapp.com/drink/${payload._id}`,
        {
          name: payload.name,
          price: payload.price,
          image: payload.image,
          // category: payload.category,
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
      .delete(
        `https://mighty-castle-60848.herokuapp.com/drink/${payload._id}`,
     
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
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

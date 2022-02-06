import axios from "axios";
import { toast } from "react-toastify";
export const getOrders = (params) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/orders",{params}, 
      )
      .then((response) => {
        const data = response.data.data.order;
        dispatch({
          type: "GET_ORDERS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};


export const getDetailOrders = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        `https://mighty-castle-60848.herokuapp.com/orders/${payload._id}`,         
      )
      .then((response) => {
        const data = response.data.data.order;
        dispatch({
          type: "GET_DETAIL_ORDERS",
          payload: data,
        });
        console.log("data",data)
      })
      .catch((error) => {
        throw error;
      });
  };
};


export const updateOrder = (payload) => {
  return async(dispatch) => {
    return axios 
    .put(
      `https://mighty-castle-60848.herokuapp.com/orders/${payload._id}/status`,
      {
        status :payload.status,
      },
      {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    )
    .then((response) => {
      const data = response.data.data.status;
      dispatch({
        type: "UPDATE_ORDER",
        payload: data,
      });
    })
    .catch((error) => {
      toast.error("An Error Occurred .Please Try Again Later")
      throw error;
    });
};
};
import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

// const token = TokenUtils.TOKEN_ADMIN;

export const getOrders = (params) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/orders",{params}, 
        //   headers: {
        //     Authorization: `Bearer ${payload.token}`,
        //   },
        // },
        // {
        //   params:
        //   {
        //     page:payload.page,
        //     limit:payload.limit
        //   },      
        // }
        // {
        //   params: {
        //     page : payload.page,
        //   }
        // }
        
        // { params: { status: "pending"|| "success" }},
       
       
        
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

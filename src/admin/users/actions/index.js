import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";



export const getUsers = (payload,params) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/users/list", 
        // { 

        
        // },
        // {params}

        {
          headers: {
               Authorization: `Bearer ${payload}`,
         },
        },
         {
              params
           },
      
       
       
        // payload
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_USERS",
          payload: data,
        });
        console.log("data",data)
      })
      
      .catch((error) => {
      
        throw error;
      });
  };
};

export const deleteUser = (payload) => {
  return async (dispatch) => {
    return axios
      .patch(
        `https://mighty-castle-60848.herokuapp.com/users/${payload._id}/status`,
        {
          _id: payload._id,
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
          type: "DELETE_USER",
          payload: data,
        });
       
      })
      .catch((error) => {
        throw error;
      });
  };
};

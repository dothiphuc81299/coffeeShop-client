import axios from 'axios';
import { toast } from "react-toastify";

export const addToCart = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: "ADD_ITEM",
      payload: payload
    })
  };
};

export const changeQuantityItem = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_QUANTITY",
      payload: payload
    })
  }
}

// export const addPointToOrder = (payload) => {
//   return async (dispatch) => {
//     dispatch ({
//       type :""
//     }
//     )
//   }
// }

export const postNewOrder = (payload) => {

  return async (dispatch) => {
    return axios.post('https://mighty-castle-60848.herokuapp.com/orders', {
      drink: payload.drink,
       is_point: payload.is_point,
       point: payload.point
    }, {
      headers: {
        'Authorization': `Bearer ${payload.token}`
      }
    })
      .then(response => {
        toast.success("Mua hàng thành công!")
        dispatch({
          type: "RESET_CART",
          payload: payload
        })
      })
      .catch(error => {
        toast.error("An Error Occurred .Please Try Again Later")
        throw(error)
      });
  };
}
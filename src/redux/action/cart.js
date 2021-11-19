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

export const postNewOrder = (payload) => {

  return async (dispatch) => {
    return axios.post('https://salty-dawn-54578.herokuapp.com/orders', {
      drink: payload.drink
    }, {
      headers: {
        'Authorization': `Bearer ${payload.token}`
      }
    })
      .then(response => {
        toast.success("Mua hàng thành công!")
        dispatch({
          type: "RESET_CART"
        })
      })
      .catch(error => {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại!")
      });
  };
}
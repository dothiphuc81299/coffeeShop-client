import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

export const getOrders = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://salty-dawn-54578.herokuapp.com/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        { params: { status: "delivery" } },
        payload
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

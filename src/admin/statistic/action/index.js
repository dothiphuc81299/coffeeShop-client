import axios from "axios";
import { toast } from "react-toastify";

export const getStatistic = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/orders/statistic",
        {
            params:{
                startAt: payload.startAt,
                endAt :payload.endAt,
            },
            headers: {
                Authorization: `Bearer ${payload.token}`,
            }
        }
      )
      .then((response) => {
        const data = response.data.data.result;
        dispatch({
          type: "GET_STATISTIC",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
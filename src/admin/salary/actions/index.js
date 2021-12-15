import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

// const token = TokenUtils.TOKEN_ADMIN;

export const getSalary = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/salary",
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
        payload
      )
      .then((response) => {
        const data = response.data.data.Salary;
        dispatch({
          type: "GET_SALARY",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

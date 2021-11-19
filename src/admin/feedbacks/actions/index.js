import axios from "axios";

export const getFeedbacks = (payload) => {
  return async (dispatch) => {
    return axios
      .get("https://salty-dawn-54578.herokuapp.com/feedback", payload)
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_FEEDBACKS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

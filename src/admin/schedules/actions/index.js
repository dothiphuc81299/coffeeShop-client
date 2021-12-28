import axios from "axios";

export const postShift = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://mighty-castle-60848.herokuapp.com/shift", payload, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_SHIFT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getShift = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://mighty-castle-60848.herokuapp.com/shift",
        {
          params: {
            staff: "60710a93e3d1a8fe20caea97",
            startAt: "2005-01-01T15:00:00.000Z",
            endAt: "2007-02-01T15:00:00.000Z",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
        payload
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_SHIFT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

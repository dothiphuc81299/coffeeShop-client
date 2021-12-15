import axios from 'axios';

export const getEvent = () => {
  return async (dispatch) => {
    return axios.get('https://mighty-castle-60848.herokuapp.com/event')
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "SET_EVENT",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};
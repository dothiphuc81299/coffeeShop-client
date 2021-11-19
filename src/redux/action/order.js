import axios from 'axios';

export const getListOrder = (payload) => {
  return async (dispatch) => {
    return axios.get('https://salty-dawn-54578.herokuapp.com/orders/me', {
      headers: {
        'Authorization': `Bearer ${payload}`
      }
    })
      .then(response => {
        const data = response.data.data.order;
        dispatch({
          type: "SET_ORDER",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};
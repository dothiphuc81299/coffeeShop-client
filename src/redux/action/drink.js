import axios from 'axios';

export const getListDrink = (params) => {
  return async (dispatch) => {
    return axios.get('https://mighty-castle-60848.herokuapp.com/drink', { params })
      .then(response => {
        const data = response.data.data;
        dispatch({
          type: "SET_DRINK",
          payload: data
        })
      })
      .catch(error => {
        throw (error);  
      });
  };
};
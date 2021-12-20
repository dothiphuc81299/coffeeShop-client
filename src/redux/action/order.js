import axios from 'axios';

export const getListOrder = (payload,params) => {
  return async (dispatch) => {
    return axios.get('https://mighty-castle-60848.herokuapp.com/orders/me',
    {
      headers: {
           Authorization: `Bearer ${payload}`,
         },
      params:{
          status:params
       },
  }
   
    )
      .then(response => {
        const data = response.data.data.order;
       
        // console.log("payload",payload);
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
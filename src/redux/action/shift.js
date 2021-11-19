import axios from 'axios';

export const getShift = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        `https://salty-dawn-54578.herokuapp.com/shift?staff=60710a93e3d1a8fe20caea97&startAt=${payload.startAt}&endAt=${payload.endAt}`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: 'SET_CURRENT_WEEK_SHIFT',
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createShift = (payload) => {
  return async (dispatch) => {
    return axios
      .post(`https://salty-dawn-54578.herokuapp.com/shift`, payload, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((response) => {
        // const data = response.data.data.data;
        // console.log('data,', data);
        // dispatch({
        //   type: 'SET_CURRENT_WEEK_SHIFT',
        //   payload: data,
        // });
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getNextShift = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        `https://salty-dawn-54578.herokuapp.com/shift?staff=60710a93e3d1a8fe20caea97&startAt=${payload.startAt}&endAt=${payload.endAt}`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: 'SET_NEXT_WEEK_SHIFT',
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const deleteShift = (payload) => {
  return async (dispatch) => {
    return axios
      .delete(
        `https://salty-dawn-54578.herokuapp.com/shift/${payload.id}`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        // dispatch({
        //   type: 'SET_NEXT_WEEK_SHIFT',
        //   payload: data,
        // });
      })
      .catch((error) => {
        throw error;
      });
  };
};


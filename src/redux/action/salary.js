import axios from 'axios';

export const getSalary = (payload) => {
  return async (dispatch) => {
    return axios
      .get('https://salty-dawn-54578.herokuapp.com/salary/me', {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.Salary;
        dispatch({
          type: "SET_SALARY",
          payload: data
        })
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getSalaryByMonth = (payload) => {
  return async (dispatch) => {
    return axios
      .get(`https://salty-dawn-54578.herokuapp.com/salary/me?month=thang_${payload.month}`, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.Salary;
        dispatch({
          type: "SET_SALARY",
          payload: data
        })
      })
      .catch((error) => {
        throw error;
      });
  };
};

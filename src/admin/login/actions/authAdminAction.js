import axios from 'axios';
import { toast } from "react-toastify";
import { getInforByToken } from '../../../redux/action/inforStaff';

export const sendPostLogin = (payload) => {
  return async (dispatch) => {
    return axios.post('https://mighty-castle-60848.herokuapp.com/staff/log-in', payload)
      .then(response => {
        const data = response.data.data.data;
      //  const isRoot = payload.username === "admin" ? true : false;

        dispatch({
          type: "SET_ADMIN_LOGIN",
          payload: data,
          // payload: {
          //   ...data,
          //  // isRoot: isRoot
          // }
        });
        // dispatch(getInforByToken(data.token))
        toast.success("Login Success.Welcome back.")
      })
      .catch(error => {
        toast.error("Username or password is not correct.")
      });
  };
};


export const logoutStaff = () => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_ADMIN_AUTH",
    })
    dispatch({
      type: "DELETE_STAFF_INFOR",
    })
  }
};
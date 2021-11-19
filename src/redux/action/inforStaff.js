import axios from 'axios';
import { toast } from "react-toastify";

export const getInforByToken = (payload) => {
  return async (dispatch) => {
    return axios.get('https://salty-dawn-54578.herokuapp.com/staff/me', {
      headers: {
        'Authorization': `Bearer ${payload}`
      }
    })
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "SET_ADMIN_INFOR",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const sendPostUpdateInforStaff = (payload) => {
  return async (dispatch) => {
    return axios.put('https://salty-dawn-54578.herokuapp.com/staff/update',{
      username: payload.username,
      address: payload.address,
      phone: payload.phone
    }, {
      headers: {
        'Authorization': `Bearer ${payload.token}`
      }
    })
      .then(response => {
        toast.success(response.data.message)
      })
      .catch(error => {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại!")
      });
  }
}

export const sendPostUpdatePasswordStaff = (payload) => {
  return async (dispatch) => {
    return axios.put('https://salty-dawn-54578.herokuapp.com/staff/me/password',{
      password: payload.password,
      newPassword: payload.newPassword,
      newPasswordAgain: payload.newPasswordAgain,
    }, {
      headers: {
        'Authorization': `Bearer ${payload.token}`
      }
    })
      .then(response => {
        toast.success("Đổi mật khẩu thành công!")
      })
      .catch(error => {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại!")
      });
  }
}

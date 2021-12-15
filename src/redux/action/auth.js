import axios from 'axios';
import { toast } from "react-toastify";

export const sendPostLogin = (payload) => {
  return async (dispatch) => {
    return axios.post('https://mighty-castle-60848.herokuapp.com/users/log-in', payload)
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "SET_LOGIN",
          payload: data
        })
        toast.success("Login success.")
      })
      .catch(error => {
        toast.error("Username or password is not correct.")
        throw (error);
      });
  };
};

export const getInforByToken = (payload) => {
  return async (dispatch) => {
    return axios.get('https://mighty-castle-60848.herokuapp.com/users/me', {
      headers: {
        'Authorization': `Bearer ${payload}`
      }
    })
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "SET_INFOR",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_AUTH",
    })
  }
};

export const sendPostSignup = (payload) => {
  console.log(payload)
  return async (dispatch) => {
    dispatch({
      type: "RESET_STATUS"
    })
    return axios.post('https://mighty-castle-60848.herokuapp.com/users/sign-up', payload)
      .then(response => {
        dispatch({
          type: "SET_STATUS",
          payload: {
            number: response.status,
            message: response.data.message,
          }
        })
      })
      .catch(error => {
        toast.error("Username or phone already exists.")
        throw (error);
      });
  }
}

export const sendPostUpdateInfor = (payload) => {
  return async (dispatch) => {
    return axios.put('https://mighty-castle-60848.herokuapp.com/users/me/update', {
      username: payload.username,
      address: payload.address,
      phone: payload.phone,
      //  currentPoint: payload.currentPoint,
    }, {
      headers: {
        'Authorization': `Bearer ${payload.token}`
      }
    })
      .then(response => {
        dispatch({
          type: "SET_INFOR",
          payload,
        })
        toast.success(response.data.message)
      })
      .catch(error => {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại!")
      });
  }
}

export const sendPostUpdatePassword = (payload) => {
  return async (dispatch) => {
    return axios.put('https://mighty-castle-60848.herokuapp.com/users/me/password',{
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
        dispatch({
          type: "SET_INFOR",
          payload: {
            password: payload.newPassword,
          }
        })
        dispatch({
          type: "CHANGED_PASSWORD"
        })
      })
      .catch(error => {
        toast.error("Đã xảy ra lỗi. Vui lòng thử lại!")
      });
  }
}
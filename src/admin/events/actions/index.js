import axios from "axios";
import { toast } from "react-toastify";
import { TokenUtils } from "../../../utils/token.utils";

// const token = TokenUtils.TOKEN_ADMIN;

export const getEvents = (payload) => {
  return async (dispatch) => {
    return axios
      .get("https://mighty-castle-60848.herokuapp.com/event", payload)
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_EVENTS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const postEvent = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://mighty-castle-60848.herokuapp.com/event",
        {
          name: payload.name,
          desc: payload.desc,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_EVENT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateEvent = (payload) => {
  return async (dispatch) => {
    return axios
      .put(
        `https://mighty-castle-60848.herokuapp.com/event/${payload._id}`,
        {
          name: payload.name,
          desc: payload.desc,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "UPDATE_EVENT",
          payload: data,
        });
      })
      .catch((error) => {
        toast.error("An Error Occurred .Please Try Again Later")
        throw error;
      });
  };
};

export const deleteEvent = (payload) => {
  return async (dispatch) => {
    return axios
      .delete(
        `https://mighty-castle-60848.herokuapp.com/event/${payload._id}`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "DELETE_EVENT",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
     
  };
};


export const changeStatusEvent = (payload) => {
  return async (dispatch) => {
    return axios
      .patch(
        `https://mighty-castle-60848.herokuapp.com/event/${payload._id}/status`,
        {
          _id: payload._id,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "CHANGE_EVENT",
          payload: data,
        });
        toast.success(" Success")
      })
      .catch((error) => {
        toast.error("An Error Occurred .Please Try Again Later")
        throw error;
      });
     
  };
};

export const sendEmailEvent = (payload) => {
  return async (dispatch) => {
    return axios
      .put(
        `https://mighty-castle-60848.herokuapp.com/event/${payload._id}/send-email`,
        {
          _id: payload._id,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "SEND_EVENT",
          payload: data,
        });
        toast.success(" success.")
       
      })
      .catch((error) => {
        toast.error("An Error Occurred .Please Try Again Later")
        throw error;
      });
     
  };
};
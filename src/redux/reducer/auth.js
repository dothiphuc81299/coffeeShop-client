const initialState = {
  token: localStorage.getItem("token") || null,
  status: null,
  infor: null,
  isDoneChangePasword: false,
  email:'',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN": {
      const { _id, token, username, phone, address, avatar, password, currentPoint,email } = action.payload;
      localStorage.setItem("token", token);

      return {
        ...state,
        token: token,
        infor: {
          userId: _id,
          username, phone, address, avatar, password, currentPoint,email
        }
      }
    }
    case "SET_INFOR": {
      const { username, phone, address, avatar, password, _id, currentPoint,email } = action.payload;

      return {
        ...state,
        infor: {
          userId: _id || (state.infor && state.infor.userId),
          username: username || (state.infor && state.infor.username), 
          phone: phone || (state.infor && state.infor.phone), 
          address: address || (state.infor && state.infor.address), 
          avatar: avatar || (state.infor && state.infor.avatar), 
          password: password || (state.infor && state.infor.password),
          currentPoint: currentPoint,
          email:email || (state.infor && state.infor.email)
        }
      }
    }
    case "DELETE_AUTH": {
      localStorage.removeItem("token")
      return {
        token: null,
        infor: null,
      }
    }

    case "SET_STATUS": {
      const { username, phone, address,  password,email } = action.payload;
     
      return {
        ...state,
        status: action.payload,
        email:action.payload,
       
       
      }
    }
    case "RESET_STATUS": {
      
      return {
        ...state,
        status: null,  
      }
    }
    case "CHANGED_PASSWORD": {
      return {
        ...state,
        isDoneChangePasword: true,
      }
    }


    case "VERIFY_EMAIL":{
      const { email,code } = action.payload;
      return {
        ...state,
        status: action.payload,
      }
    }

    default: {
      return state;
    }
  }
}

export default authReducer;
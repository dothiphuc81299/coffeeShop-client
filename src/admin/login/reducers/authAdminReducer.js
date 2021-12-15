const initialState = {
  token: localStorage.getItem("token") || null,
  infor: null,
  // isRoot: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADMIN_LOGIN": {
     // const { token, isRoot } = action.payload;
      const {_id,token,username,phone,address,password} =action.payload
      localStorage.setItem("token", token);
      return {
        ...state,
       token: token,
        infor:{
          staffId: _id,
          username,password,phone,address
        } 
      }
    }
//     case "SET_INFOR": {
//       const { username, phone, address, avatar, password, _id } = action.payload;

//       return {
//         ...state,
//         infor: {
//           userId: _id,
//           username, phone, address, avatar, password
//         }
//       }
//     }
    case "DELETE_ADMIN_AUTH": {
      localStorage.removeItem("token")
      return {
        token: null,
        isRoot: null,
      }
    }
//     case "SET_STATUS": {
//       return {
//         ...state,
//         status: action.payload,
//       }
//     }
//     case "RESET_STATUS": {
//       return {
//         ...state,
//         status: null,
//       }
//     }
    default: {
      return state;
    }
  }
}

export default authReducer;
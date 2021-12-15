const initialState = {
  infor: null,
};

const inforStaffReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADMIN_INFOR": {
      const { _id, username, phone, address, avatar, permissions,token } = action.payload;
      // localStorage.setItem("token", token);
      return {
        ...state,
        // token: token,
        infor: {
          userId: _id || (state.infor && state.infor.userId),
          username: username || (state.infor && state.infor.username), 
          phone: phone || (state.infor && state.infor.phone), 
          address: address || (state.infor && state.infor.address), 
          avatar: avatar || (state.infor && state.infor.avatar), 
          permissions: permissions || (state.infor && state.infor.permissions)
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
    case "DELETE_STAFF_INFOR": {
      localStorage.removeItem("token")
      return {
        token: null,
        infor: null,
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

export default inforStaffReducer;
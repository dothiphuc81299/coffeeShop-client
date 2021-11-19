const initialState = {
  users: [],
};

const userAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "DELETE_USER": {
      let userData = [...state.users];
      return {
        ...state,
        users: userData,
      };
    }
    default: {
      return state;
    }
  }
};

export default userAdminReducer;

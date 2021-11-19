const initialState = {
  salary: [],
};

const salaryAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SALARY": {
      return {
        ...state,
        salary: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default salaryAdminReducer;

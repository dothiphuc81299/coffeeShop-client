const initialState = {
  currentSalary:{}
};

const salaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SALARY": {
      const salary = action.payload;
      return {
        ...state,
        currentSalary: salary
      }
    }
    default: {
      return state;
    }
  }
}

export default salaryReducer;
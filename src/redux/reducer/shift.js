const initialState = {
  currentWeekData: [],
  nextWeekData: [],
};

const shiftReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_WEEK_SHIFT": {
      return {
        ...state,
        currentWeekData: action.payload
      }
    }
    case "SET_NEXT_WEEK_SHIFT": {
      return {
        ...state,
        nextWeekData: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default shiftReducer;
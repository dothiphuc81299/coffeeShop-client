const initialState = {
  shifts: [],
};

const shiftAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_SHIFT": {
      const shiftData = [...state.shifts];
      shiftData.push(action.payload);
      return {
        ...state,
        shifts: shiftData,
      };
    }

    default: {
      return state;
    }
  }
};

export default shiftAdminReducer;

const initialState = {
  listDrink: [],
  totalDrink: 0,
};

const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DRINK": {
      const payload = action.payload;
      return {
        ...state,
        listDrink: payload.data,
        totalDrink: payload.total,
      }
    }
    default: {
      return state;
    }
  }
}

export default drinkReducer;
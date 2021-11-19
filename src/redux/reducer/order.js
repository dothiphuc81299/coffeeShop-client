const initialState = {
  listOrder: []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER": {
      const listData = action.payload;
      return {
        ...state,
        listOrder: listData
      }
    }
    default: {
      return state;
    }
  }
}

export default orderReducer;
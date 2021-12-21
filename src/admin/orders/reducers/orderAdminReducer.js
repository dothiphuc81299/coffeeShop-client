const initialState = {
  orders: [],
  detailOrder: null,
};

const orderAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDERS": {
      return {
        ...state,
        orders: action.payload,
      };
    }
    case "GET_DETAIL_ORDERS": {
      return {
        ...state,
        detailOrder:action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default orderAdminReducer;

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

    case "UPDATE_ORDER":{
        let listData = [...state.orders];
        const listIsList = listData.find(
          (item) => item._id === action.payload._id
        );
        
        listData.splice(listData.indexOf(listIsList), 1, { ...action.payload });
        return {
          ...state,
          list: listData,
        };
      }
    
    default: {
      return state;
    }
  }
};

export default orderAdminReducer;

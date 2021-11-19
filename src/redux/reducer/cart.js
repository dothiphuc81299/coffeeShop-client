const initialState = {
  listInCart: JSON.parse(sessionStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let listInCart = [...state.listInCart];
      const drinkIsExist = listInCart.find((item) => item._id === action.payload._id);
      if (drinkIsExist) {
        listInCart.splice(listInCart.indexOf(drinkIsExist), 1, {...action.payload, quantity: drinkIsExist.quantity + 1 });
      } else {
        listInCart.push({...action.payload, quantity: 1 });
      }
      return {
        ...state,
        listInCart,
      }
    }
    case "SET_QUANTITY": {
      let listInCart = [...state.listInCart];
      const drinkIsExist = listInCart.find((item) => item._id === action.payload._id);
      if (drinkIsExist) {
        if (action.payload.quantity > 0) {
          listInCart.splice(listInCart.indexOf(drinkIsExist), 1, {...drinkIsExist, quantity: Number(action.payload.quantity)});
        } else {
          listInCart.splice(listInCart.indexOf(drinkIsExist), 1);
        }
      }
      return {
        ...state,
        listInCart,
      }
    }
    case "RESET_CART": {
      return {
        ...state,
        listInCart: []
      }
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;
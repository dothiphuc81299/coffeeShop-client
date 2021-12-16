const initialState = {
  list: [],
};

const listAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST": {
      return {
        ...state,
        list: action.payload,
      };
    }
    case "POST_LIST": {
      let listData = [...state.list];
      listData.push(action.payload);
      return {
        ...state,
        list: listData,
      };
    }
    case "UPDATE_LIST": {
      let listData = [...state.list];
      const listIsList = listData.find(
        (item) => item._id === action.payload._id
      );
      
      listData.splice(listData.indexOf(listIsList), 1, { ...action.payload });
      return {
        ...state,
        list: listData,
      };
    }
    
    case "DELETE_CATEGORY": 
      return {
        list:[
          ...state.list.filter(list => list !== action.payload)
        ]
      };
    default:
        return state;
    }
};

export default listAdminReducer;

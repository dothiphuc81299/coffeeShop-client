const initialState = {
  listStaff: [],
};

const staffAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_STAFF": {
      return {
        ...state,
        listStaff: action.payload,
      };
    }
    case "POST_STAFF": {
      const staffData = [...state.listStaff];
      staffData.push(action.payload);
      return {
        ...state,
        listStaff: staffData,
      };
    }
    case "UPDATE_STAFF": {
      let staffData = [...state.listStaff];
      // const staffIsList = staffData.find(
      //   (item) => item._id === action.payload._id
      // );
      
      // staffData.splice(staffData.indexOf(staffIsList), 1, {
      //   ...action.payload,
      // });
      return {
        ...state,
        listStaff: staffData,
      };
    }
    case "DELETE_STAFF": {
      let staffData = [...state.listStaff];
      return {
        ...state,
        listStaff: staffData,
      };
    }
    default: {
      return state;
    }
  }
};

export default staffAdminReducer;

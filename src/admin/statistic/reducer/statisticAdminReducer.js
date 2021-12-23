const initialState = {
    result :null,
    statistic :[],
    totalQuanity:0,
    totalSale:0,
}


const statisticAdminReducer = (state = initialState,action) => {
    switch (action.type) {
        case "GET_STATISTIC": {
          return {
            ...state,
            result: action.payload,
          };
        }
        default: {
            return state;
          }
        }
};

export default statisticAdminReducer;
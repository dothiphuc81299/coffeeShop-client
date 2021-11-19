const initialState = {
  feedbacks: [],
};

const feedbackAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FEEDBACKS": {
      return {
        ...state,
        feedbacks: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default feedbackAdminReducer;

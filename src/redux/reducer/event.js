const initialState = {
  eventList: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EVENT": {
      return {
        ...state,
        eventList: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default eventReducer;
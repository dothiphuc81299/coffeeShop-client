const initialState = {
  events: [],
};

const eventAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EVENTS": {
      return {
        ...state,
        events: action.payload,
      };
    }
    case "POST_EVENT": {
      const eventData = [...state.events];
      eventData.push(action.payload);
      return {
        ...state,
        events: eventData,
      };
    }
    case "UPDATE_EVENT": {
      let eventData = [...state.events];
      const eventIsList = eventData.find(
        (item) => item._id === action.payload._id
      );
      eventData.splice(eventData.indexOf(eventIsList), 1, {
        ...action.payload,
      });
      return {
        ...state,
        events: eventData,
      };
    }
    case "DELETE_EVENT": {
      let eventData = [...state.events];
      return {
        ...state,
        events: eventData,
      };
    }
    default: {
      return state;
    }
  }
};

export default eventAdminReducer;

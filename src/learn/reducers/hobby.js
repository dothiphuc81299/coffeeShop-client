const initialState = {
    list :[],
    activeId:null,
}

// chuyen doi tu 1 state cu sang 1 state moi phu thuoc vao action
const   hobbyReducer = (state =initialState,action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payload);

            return {
                ...state,
                list:newList,
            };
        }

        case 'SET_ACTIVE_HOBBY': {
            const newActiveId =action.payload.id;
            return {
                ...state,
                activeId:newActiveId,
            };
        }

        default:
            return state;
    }
}


export default hobbyReducer;
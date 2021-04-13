import { LOAD_ITEMS } from './action.js';

const initialState = { content: null };
function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS: return { ...state, content: action.items };
        default: return state;
    }

}

export default itemsReducer;
import { LOAD_RULES } from "./action.js";

const initialState = { content: null };

function rulesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_RULES: return { ...state, content: action.rules };
        default: return state;
    }
}

export default rulesReducer;
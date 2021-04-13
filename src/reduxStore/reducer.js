import { combineReducers } from "redux";
import rulesReducer from '../Pages/Rules/State/reducer.js';
import itemsReducer from '../Pages/Game/State/reducer.js';
const allReducer = combineReducers({
    rules: rulesReducer,
    items: itemsReducer
});

export default allReducer;

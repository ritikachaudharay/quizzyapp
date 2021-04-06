import { combineReducers } from "redux";
import rulesReducer from '../Pages/Rules/State/reducer.js';
const allReducer = combineReducers({
    rules: rulesReducer
});

export default allReducer;

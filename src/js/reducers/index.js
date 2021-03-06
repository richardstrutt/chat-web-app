import { combineReducers } from "redux";

import user from "./userReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
    user,
    routing: routerReducer,
});
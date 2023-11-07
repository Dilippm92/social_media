import {combineReducers} from "redux";

import authREducer from "./authREducer";
import postReducer from "./postReducer";
export const reducers = combineReducers({authREducer,postReducer})
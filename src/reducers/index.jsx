import { combineReducers } from "redux";
import { ghReducer } from "./ghReducer.jsx";

export const rootReducer = combineReducers(
    {
        //All reducers must be added here
        ghReducer
    });
import { combineReducers } from "redux";
import { reducer } from "./actions";
export const rootReducer=combineReducers({
    employees:reducer
})
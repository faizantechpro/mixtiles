import guestInfo from "./guestInfo";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    guestInfoReducer: guestInfo,
    loggedReducer: loggedReducer
})

export default allReducers;

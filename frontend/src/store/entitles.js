import { combineReducers } from "redux"
import pinsReducer from "./pins"
import UsersReducer from "./user";
import boardsReducer from "./boards";

const entitlesReducer=combineReducers({
    pins:pinsReducer,
    users:UsersReducer,
    boards:boardsReducer

})

export default entitlesReducer;
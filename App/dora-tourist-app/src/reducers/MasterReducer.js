/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */
import {combineReducers} from "redux";
import authReducer from "./AuthReducer";
import userReducer from "./UserReducer";
import tourReducer from "./TourReducer";

const masterReducer = combineReducers({
    authReducer, userReducer, tourReducer
});

export default masterReducer;

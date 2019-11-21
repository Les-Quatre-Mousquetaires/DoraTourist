/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */
import {combineReducers} from "redux";
import userReducer from "./UserReducer";
import tourReducer from "./TourReducer";

const masterReducer = combineReducers({
    userReducer, tourReducer
});

export default masterReducer;

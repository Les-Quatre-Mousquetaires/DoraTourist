/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */
import {combineReducers} from "redux";
import authReducer from "./AuthReducer";

const masterReducer = combineReducers({
    authReducer: authReducer
});

export default masterReducer;

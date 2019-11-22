/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */
import {combineReducers} from "redux";
import authReducer from "./AuthReducer";
import userReducer from "./UserReducer";
import tourReducer from "./TourReducer";
import {bookingReducer} from "./BookingReducer";

// const masterReducer = combineReducers({
//     authReducer, userReducer, tourReducer, bookingReducer
// =======
import bookReducer from "./BookReducer";
import commentReducer from "./CommentReducer";

const masterReducer = combineReducers({
    authReducer, userReducer, tourReducer, bookReducer, commentReducer,bookingReducer
});

export default masterReducer;

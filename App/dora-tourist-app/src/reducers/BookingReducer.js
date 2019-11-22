import {GET_ALL_BOOKING} from "../utils/Types";

const bookingInitState = {

};
let bookingReducer = (state = bookingInitState,action) =>{
    switch (action.type) {
        case GET_ALL_BOOKING:
            return action.payload.data;
        default:
            return state;

    }
};

export {bookingReducer};

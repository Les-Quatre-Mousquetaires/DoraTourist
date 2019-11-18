/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */

import {LOGIN_USER} from "../utils/Types";

let userInitState = {
    _id: '',
    name: '',
    token: '',
    email: '',
    role: '',
    tours: [],
    comments: []
}

let userReducer = (state = userInitState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            let user = action.payload.data;
            return user;
        default:
            return state;
    }
}

export default userReducer;

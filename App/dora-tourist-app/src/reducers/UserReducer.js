/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */

import {LOGIN_USER, LOGOUT_USER} from "../utils/Types";

let userLogged = JSON.parse(localStorage.getItem('user'));
let userInitState = userLogged ? {isLogged: true, user: userLogged} : {
    isLogged: false,
    user: {
        _id: '',
        name: '',
        token: '',
        email: '',
        role: '',
        tours: [],
        comments: []
    }
};

let userReducer = (state = userInitState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            let user = action.payload.data;
            return user;
        case LOGOUT_USER:
            return state;
        default:
            return state;
    }
}

export default userReducer;

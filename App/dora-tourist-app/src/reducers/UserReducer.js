/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */


import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "../utils/Types";

let userLogged = JSON.parse(localStorage.getItem('user'));
let userNull = {

    _id: '',
    name: '',
    token: '',
    email: '',
    role: '',
    tours: [],
    comments: []
}

let userInitState = userLogged ? {isLogged: true, user: userLogged} : {
    isLogged: false,
    user: userNull
};

let userReducer = (state = userInitState, action) => {
    switch (action.type) {
        case LOGIN_USER:
           let user1  = action.payload.data;
            return user1;
        case LOGOUT_USER:
            let user2 = userNull;
            console.log(user2);
            return user2;
        case REGISTER_USER:
            let user3 = action.payload.data;
            return user3;
        default:
            return state;
    }
}

export default userReducer;

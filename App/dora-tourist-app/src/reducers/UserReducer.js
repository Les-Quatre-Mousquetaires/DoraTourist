/*
 * Created by @tranphuquy19 on 20/11/2019
 * Email: tranphuquy19@gmail.com
 */
import {GET_BOOKS_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, UPDATE_USER, VIEW_USER} from "../utils/Types";

let userLogged = JSON.parse(localStorage.getItem('user'));
let userNull = {
    _id: '',
    name: '',
    token: '',
    email: '',
    role: '',
    tours: [],
    comments: []
};

let userInitState = userLogged ? userLogged : {
    user: userNull
};

let userReducer = (state = userInitState, action) => {
    switch (action.type) {
        case VIEW_USER:
            let user = action.payload.data;
            return {...user};
        case UPDATE_USER:
            let user2 = action.payload.data;
            return {...user2};
        default:
            return state;
    }
};

export default userReducer;

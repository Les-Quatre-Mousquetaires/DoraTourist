/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */

import {LOGIN_USER, LOGOUT_USER, REGISTER_USER, VIEW_USER} from "../utils/Types";
import APICaller from "../utils/APICaller";

const login = (user) => {
    return async dispatch => {
        APICaller('auth/login/', 'POST', user)
            .then(response => {
                dispatch({type: LOGIN_USER, payload: response});
            }).catch(err => window.alert('Sai MK'));
    }
};
const logout = () => {
    return async dispatch => {
        let removeUser = {
            comments: [],
            email: "",
            name: "",
            location: "",
            role: "",
            token: "",
            tours: [],
            _id: ""
        }
        localStorage.setItem('user', JSON.stringify(removeUser));
        dispatch({type: LOGOUT_USER});
    }
};

const register = (user) => {
    return async dispatch => {
        const response = await APICaller('api/users/', 'POST', user);
        dispatch({type: REGISTER_USER, payload: response});
    }
};

export {login, logout, register}

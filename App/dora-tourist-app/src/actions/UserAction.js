/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */

import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "../utils/Types";
import APICaller from "../utils/APICaller";

const login = (user) => {
    return async dispatch => {
        const response = await APICaller('auth/login/', 'POST', user);
        dispatch({type: LOGIN_USER, payload: response});
    }
}
const logout = () => {
    return async dispatch => {
        localStorage.removeItem('user');
        dispatch({type: LOGOUT_USER});
    }
}

const register = (user) => {
    return async dispatch => {
        const response = await APICaller('api/users/', 'POST', user);
        console.log(response);
        dispatch({type: REGISTER_USER, payload: response});
    }
}
export {login, logout, register}

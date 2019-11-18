/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */

import {LOGIN_USER} from "../utils/Types";
import APICaller from "../utils/APICaller";

const login = (user) => {
    return async (dispatch) => {
        const response = await APICaller('auth/login/', 'POST', user);
        dispatch({type: LOGIN_USER, payload: response});
    }
}

export {login}

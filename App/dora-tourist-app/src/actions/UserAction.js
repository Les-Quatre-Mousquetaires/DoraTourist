/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */

import {LOGIN_USER} from "../utils/Types";
import APICaller from "../utils/APICaller";

const logina = (user) => {
    // let userPayload = await APICaller('auth/login/', 'POST', action.user);
    // return {
    //     type: LOGIN_USER,
    //     user: userPayload
    // }

};
const login = (user) => async dispatch => {
    const response = await APICaller('auth/login/', 'POST', user);
    dispatch({type: LOGIN_USER, payload: response});
};

export {login}

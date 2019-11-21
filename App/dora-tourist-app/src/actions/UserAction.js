/*
 * Created by @tranphuquy19 on 20/11/2019
 * Email: tranphuquy19@gmail.com
 */
import APICaller from "../utils/APICaller";
import {UPDATE_USER, VIEW_USER} from "../utils/Types";

const view = (userID) => {
    let url = 'api/users/' + userID;
    return async dispatch => {
        const response = await APICaller(url, 'GET', "Hello");
        console.log(response);
        dispatch({type: VIEW_USER, payload: response});
    }
};
const update = (user) => {
    let {_id, name, password, location, phoneNumber} = user.user;
    let url = 'api/users/' + _id;
    return async dispatch => {
        const response = await APICaller(url, 'PATCH', {name, password, location, phoneNumber});
        dispatch({type: UPDATE_USER, payload: response});
    }
};

export {view, update}

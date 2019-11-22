/*
 * Created by @tranphuquy19 on 22/11/2019
 * Email: tranphuquy19@gmail.com
 */
import APICaller from "../utils/APICaller";
import {GET_COMMENTS} from "../utils/Types";

const getComments = (tourId) => {
    return async dispatch => {
        const response = await APICaller('api/comments', 'GET', {tourId});
        console.log(response);
        dispatch({type: GET_COMMENTS, payload: response});
    }
}

export {
    getComments
}

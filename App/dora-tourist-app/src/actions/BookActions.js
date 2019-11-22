/*
 * Created by @tranphuquy19 on 22/11/2019
 * Email: tranphuquy19@gmail.com
 */
import APICaller from "../utils/APICaller";
import {GET_BOOKS_USER} from "../utils/Types";

const getBooks = () => {
    return async dispatch => {
        const response = await APICaller('api/booking', 'GET');
        dispatch({type: GET_BOOKS_USER, payload: response});
    }
}
export {getBooks}

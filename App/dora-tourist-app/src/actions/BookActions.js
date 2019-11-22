/*
 * Created by @tranphuquy19 on 22/11/2019
 * Email: tranphuquy19@gmail.com
 */
import APICaller from "../utils/APICaller";
import {CREATE_BOOK, GET_BOOKS_USER} from "../utils/Types";

const getBooks = () => {
    return async dispatch => {
        const response = await APICaller('api/booking', 'GET');
        dispatch({type: GET_BOOKS_USER, payload: response});
    }
}

const createBook = (book)=> {
    return async dispatch => {
        const response = await APICaller('api/booking', 'POST', book);
        dispatch({type: CREATE_BOOK, payload: response});
    }
}
export {getBooks, createBook}

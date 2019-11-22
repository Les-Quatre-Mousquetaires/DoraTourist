/*
 * Created by @tranphuquy19 on 22/11/2019
 * Email: tranphuquy19@gmail.com
 */
import {GET_BOOKS_USER} from "../utils/Types";

let bookInit = {
    _id: '',
    tour: {
        _id: '',
        name: '',
        location: '',
        description: '',
        price: 0,
        creator: ''
    },
    creator: {
        _id: '',
        role: '',
        name: '',
        email: ''
    }
};
let booksInit = [bookInit];

let bookReducer = (state = booksInit, action) => {
    switch (action.type) {
        case GET_BOOKS_USER:
            let books = action.payload.data;
            return books;
        default:
            return state;
    }
}
export default bookReducer;

/*
 * Created by @tranphuquy19 on 22/11/2019
 * Email: tranphuquy19@gmail.com
 */
import {GET_BOOKS_USER, GET_COMMENTS} from "../utils/Types";

let commentInit = {
    _id: '',
    createdAt: '',
    creator: {
        _id: '',
        name: ''
    },
    content: ''
}

let commentsInit = [commentInit];

let commentReducer = (state = commentsInit, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            let comments = action.payload.data;
            return comments;
        default:
            return state;
    }
}
export default commentReducer;

/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */

import {LOGIN_USER} from "../utils/Types";

const login = (user) => {
    return {
        type: LOGIN_USER,
        user
    }
}

export {login}

/*
 * Created by @tranphuquy19 on 12/11/2019
 * Email: tranphuquy19@gmail.com
 */

import axios from "axios";
import config from "./config";

let callApi = (endpoint, method = 'GET', body) => {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    });
};

export default callApi;

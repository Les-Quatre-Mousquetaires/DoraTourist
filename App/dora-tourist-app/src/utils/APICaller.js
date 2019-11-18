/*
 * Created by @tranphuquy19 on 12/11/2019
 * Email: tranphuquy19@gmail.com
 */

import axios from "axios";
import config from "./configs";

let APICaller = (endpoint, method = 'GET', body) => {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    });
};

export default APICaller;

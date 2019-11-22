/*
 * Created by @tranphuquy19 on 12/11/2019
 * Email: tranphuquy19@gmail.com
 */

import axios from "axios";
import config from "./configs";
import headerHeper from "./HeaderHelper";

let APICaller = (endpoint, method = 'GET', body) => {
    //onsole.log(headerHeper());
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body,
        headers: headerHeper()
    });
};

export default APICaller;

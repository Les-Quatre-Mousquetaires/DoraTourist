/*
 * Created by @tranphuquy19 on 20/11/2019
 * Email: tranphuquy19@gmail.com
 */
let token = JSON.parse(localStorage.getItem('user')).token;
const headerHeper = {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
};

export default headerHeper;

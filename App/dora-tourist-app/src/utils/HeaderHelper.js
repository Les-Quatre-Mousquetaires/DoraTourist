/*
 * Created by @tranphuquy19 on 20/11/2019
 * Email: tranphuquy19@gmail.com
 */
function getToken() {
    let token = JSON.parse(localStorage.getItem('user')) ? 'Bearer ' + JSON.parse(localStorage.getItem('user')).token : undefined;
    return token;
}

function headerHeper() {
    return {
        'Authorization': getToken(),
        'Content-Type': 'application/json'
    }
};

export default headerHeper;

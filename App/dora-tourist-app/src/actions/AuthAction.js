/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */

import {LOGIN_USER, LOGOUT_USER, REGISTER_USER, VIEW_USER} from "../utils/Types";
import APICaller from "../utils/APICaller";

const login = (user) => {
    return async dispatch => {
        try {
        const response = await APICaller('auth/login/', 'POST', user);
        dispatch({type: LOGIN_USER, payload: response});
        } catch (error) {
            if(error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
               
                console.log(error.response.headers);    
                switch (error.response.status) {
                    case 400:
                        window.alert("Please type in username and password");
                        break;
                    case 401:
                        window.alert("Wrong username or password");
                        break;
                    default:
                        window.alert("Error, please try again");
                        break;
                }            

            }
            if(error.request) {
                console.log(error.request);
            } else {
                console.log('ERROR', error.message);
            }

        }

    }
};
const logout = () => {
    return async dispatch => {
        let removeUser = {
            comments: [],
            email: "",
            name: "",
            role: "",
            token: "",
            tours: [],
            _id: ""
        }
        localStorage.setItem('user', JSON.stringify(removeUser));
        dispatch({type: LOGOUT_USER});
    }
};

const register = (user) => {
    return async dispatch => {
        try {
        const response = await APICaller('api/users/', 'POST', user);
        dispatch({type: REGISTER_USER, payload: response});
        }
        catch (error) {
            console.log(error.response.data);
            console.log(error.response.status);
           
            console.log(error.response.headers);    
            switch (error.response.status) {
                case 400:
                    window.alert("Please type in username and password");
                    break;
                case 401:
                    window.alert("Wrong username or password");
                    break;
                case 500:
                    window.alert(error.response.data.mess);
                    break;
                default:
                    window.alert("Error, please try again");
                    break;
            }    
        }
    }
};
const  view = ()=>{
    let url = 'api/users/'+JSON.parse(localStorage.getItem('user'))._id;
    console.log(url);
    return async dispatch =>{
        const  response = await  APICaller(url, 'GET',"Hello");
        dispatch({type: VIEW_USER,payload: response});
    }
};
export {login, logout, register, view}

/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import LoginComponent from "./LoginComponent";
import {login} from "../../actions/AuthAction";

class LoginContainer extends Component {
    render() {
        return (
            <div>
                <LoginComponent/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginUser : (user) => {
            dispatch(login(user));
        }
    }
}

export default LoginContainer;

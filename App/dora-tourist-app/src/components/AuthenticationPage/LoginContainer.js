/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import LoginComponent from "./LoginComponent";
import {login} from "../../actions/UserAction";
import {connect} from "react-redux";

class LoginContainer extends Component {
    render() {
        return (
            <div>
                <LoginComponent user={this.props.user} dispatch={this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginUser: (user) => {
            dispatch(login(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

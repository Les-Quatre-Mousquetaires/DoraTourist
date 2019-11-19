/*
 * Created by @tranphuquy19 on 18/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import LoginComponent from "./LoginComponent";
import {login} from "../../actions/UserAction";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let redirect;

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        redirect = null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LOGIN', nextProps);
        if(nextProps.user.token !== ''){
            redirect = <Redirect to="/"/>;
        }
        return true;
    }

    render() {
        return (
            <div>
                <LoginComponent user={this.props.user} dispatch={this.props}/>
                {redirect}
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

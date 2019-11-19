/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';
import {register} from "../../actions/UserAction";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let redirect;

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        redirect = null;
    }

    onChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let {name, email, password} = this.state;
        let user = {
            name, email, password
        }
        let {registerUser} = this.props;
        registerUser(user);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.user._id){
            redirect = <Redirect to="/login"/>;
        }
        return true;
    }

    render() {
        return (
            <div>
                {redirect}
                <div className="row mt-5">

                    <div className="col-4">
                    </div>
                    <div className="col-4 ">
                        <section id="wrapper">
                            <div className="login-register"
                                 style={{backgroundImage: `url(${"/assets/images/background/login-register.jpg"})`}}>
                                <div className="login-box card">
                                    <div className="card-body">
                                        <form onSubmit={this.onSubmit} className="form-horizontal form-material" id="loginform">
                                            <h3 className="text-center m-b-20">Sign Up</h3>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="text" name="name" onChange={this.onChange}  required=""
                                                           placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" name="email" onChange={this.onChange} type="text" required=""
                                                           placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="form-group ">
                                                <div className="col-xs-12">
                                                    <input className="form-control" onChange={this.onChange} name="password" type="password" required=""
                                                           placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-xs-12">
                                                    <input className="form-control" type="password" required=""
                                                           placeholder="Confirm Password"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="customCheck1"/>
                                                        <label className="custom-control-label" htmlFor="customCheck1">I
                                                            agree to all <a href="#">Terms</a></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-center p-b-20">
                                                <div className="col-xs-12">
                                                    <button
                                                        className="btn btn-info btn btn-block btn-rounded text-uppercase waves-effect waves-light"
                                                        type="submit">Sign Up
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <div className="col-sm-12 text-center">
                                                    Already have an account? <a href="pages-login.html"
                                                                                className="text-info m-l-5"><b>Sign
                                                    In</b></a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-4">
                    </div>

                </div>
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
        registerUser: (user) => {
            dispatch(register(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

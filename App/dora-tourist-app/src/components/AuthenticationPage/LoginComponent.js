/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';

class LoginComponent extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col-4">
                </div>
                <div className="col-4 ">
                    <section id="wrapper">
                        <div className="login-register"
                             style={{backgroundImage:`url(${"../assets/images/background/login-register.jpg"})`}}>
                            <div className="login-box card">
                                <div className="card-body">
                                    <form className="form-horizontal form-material" id="loginform" action="index.html">
                                        <h3 className="text-center m-b-20">Sign In</h3>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <input className="form-control" type="text" required="" placeholder="Username"/>
                                            </div>
                                        </div>

                                        <div className="form-group ">
                                            <div className="col-xs-12">
                                                <input className="form-control" type="password" required=""
                                                       placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck1"/>
                                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me
                                                        </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group text-center p-b-20">
                                            <div className="col-xs-12">
                                                <button
                                                    className="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light"
                                                    type="submit">Sign In
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-group m-b-0">
                                            <div className="col-sm-12 text-center">
                                                Don't have an account? <a href="#"
                                                                            className="text-info m-l-5"><b>Sign Up</b></a>
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
        );
    }
}

export default LoginComponent;

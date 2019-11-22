import React, {Component} from 'react';
import TourListDashboard from "../Dashboard/TourListDashboard";
import DashboardBookingOverview from "../Dashboard/DashboardBookingOverview";
import DashboardModalTour from "../Dashboard/DashboardModalTour";

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">All Properties</h5>
                                <div className="d-flex align-items-center no-block m-t-20 m-b-10">
                                    <h1><i className="ti-home text-info"/></h1>
                                    <div className="ml-auto">
                                        <h1 className="text-muted">480</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">Properties for Sale</h5>
                                <div className="d-flex align-items-center no-block m-t-20 m-b-10">
                                    <h1><i className="icon-tag text-purple"/></h1>
                                    <div className="ml-auto">
                                        <h1 className="text-muted">169</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">Properties for Rent</h5>
                                <div className="d-flex align-items-center no-block m-t-20 m-b-10">
                                    <h1><i className="icon-basket text-danger"/></h1>
                                    <div className="ml-auto">
                                        <h1 className="text-muted">311</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">Total Ernings</h5>
                                <div className="d-flex align-items-center no-block m-t-20 m-b-10">
                                    <h1><i className="ti-wallet text-success"/></h1>
                                    <div className="ml-auto">
                                        <h1 className="text-muted">$8170</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DashboardBookingOverview/>

                <div className="row">
                    <TourListDashboard/>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card bg-light">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <a href="#"><img alt="img"
                                                             className="thumb-lg img-circle"
                                                             src="../assets/images/users/agent.jpg"/></a>
                                            <h4 className="card-title m-t-10">Steve Jobs</h4>
                                            <h6 className="text-muted">Agent of Apple</h6>
                                            <div className="p-20">
                                                <i className="fa fa-phone text-danger p-r-10"
                                                   aria-hidden="true"/> 800-1800-24657
                                                <br/> <i
                                                className="fa fa-envelope-o text-danger p-r-10 m-t-10"
                                                aria-hidden="true"/> billgate@amazon.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body bg-white">
                                        <h5 className="card-title">REQUEST INQUIRY</h5>
                                        <form className="m-t-30">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Phone"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control"
                                                       placeholder="E-Mail"/>
                                            </div>
                                            <div className="form-group">
                                                            <textarea className="form-control" rows="3"
                                                                      placeholder="Message"/>
                                            </div>
                                            <div className="form-group text-right">
                                                <button type="submit"
                                                        className="btn btn-primary btn-rounded">Submit
                                                    Request
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <div className="card-body">
                            <button type="button" className="btn mb-2 btn-rounded btn-block btn-outline-info"
                                    data-toggle="modal"
                                    data-target="#responsive-modal">Add Tour
                            </button>
                            <DashboardModalTour/>
                        </div>
                    </div>
                </div>
                <div className="right-sidebar">
                    <div className="slimscrollright">
                        <div className="rpanel-title"> Service Panel <span><i
                            className="ti-close right-side-toggle"/></span></div>
                        <div className="r-panel-body">
                            <ul id="themecolors" className="m-t-20">
                                <li><b>With Light sidebar</b></li>
                                <li><a href="#" data-skin="skin-default"
                                       className="default-theme">1</a></li>
                                <li><a href="#" data-skin="skin-green"
                                       className="green-theme">2</a></li>
                                <li><a href="#" data-skin="skin-red"
                                       className="red-theme">3</a></li>
                                <li><a href="#" data-skin="skin-blue"
                                       className="blue-theme working">4</a></li>
                                <li><a href="#" data-skin="skin-purple"
                                       className="purple-theme">5</a></li>
                                <li><a href="#" data-skin="skin-megna"
                                       className="megna-theme">6</a></li>
                                <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                                <li><a href="#" data-skin="skin-default-dark"
                                       className="default-dark-theme ">7</a></li>
                                <li><a href="#" data-skin="skin-green-dark"
                                       className="green-dark-theme">8</a></li>
                                <li><a href="#" data-skin="skin-red-dark"
                                       className="red-dark-theme">9</a></li>
                                <li><a href="#" data-skin="skin-blue-dark"
                                       className="blue-dark-theme">10</a></li>
                                <li><a href="#" data-skin="skin-purple-dark"
                                       className="purple-dark-theme">11</a></li>
                                <li><a href="#" data-skin="skin-megna-dark"
                                       className="megna-dark-theme ">12</a></li>
                            </ul>
                            <ul className="m-t-20 chatonline">
                                <li><b>Chat option</b></li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/1.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Varun Dhavan <small
                                            className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/2.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/3.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Ritesh Deshmukh <small
                                            className="text-danger">Busy</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/4.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Arijit Sinh <small
                                            className="text-muted">Offline</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/5.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Govinda Star <small
                                            className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/6.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>John Abraham<small
                                            className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/7.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Hritik Roshan<small
                                            className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/8.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default (DashBoard);

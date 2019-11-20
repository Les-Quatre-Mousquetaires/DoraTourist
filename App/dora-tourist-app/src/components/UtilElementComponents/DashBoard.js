import React, {Component} from 'react';

class DashBoard extends Component {
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
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex m-b-40 align-items-center">
                                    <h5 className="card-title">PROPERTIES STATS</h5>
                                    <div className="ml-auto">
                                        <ul className="list-inline font-12">
                                            <li><i className="fa fa-circle text-cyan"/> For Sale</li>
                                            <li><i className="fa fa-circle text-primary"/> For Rent</li>
                                            <li><i className="fa fa-circle text-purple"/> All</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="morris-bar-chart" style={{height:"352px"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card m-b-15">
                                    <div className="card-body">
                                        <h5 className="card-title">PROPERTY SALES INCOME</h5>
                                        <div className="row">
                                            <div className="col-6 m-t-30">
                                                <h1 className="text-info">$64057</h1>
                                                <p className="text-muted">APRIL 2017</p> <b>(150 Sales)</b>
                                            </div>
                                            <div className="col-6">
                                                <div id="sparkline2dash" className="text-right"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card bg-purple m-b-15">
                                    <div className="card-body">
                                        <h5 className="text-white card-title">PROPERTY ON RENT INCOME</h5>
                                        <div className="row">
                                            <div className="col-6 m-t-30">
                                                <h1 className="text-white">$30447</h1>
                                                <p className="text-white">APRIL 2017</p> <b
                                                className="text-white">(110 Sales)</b></div>
                                            <div className="col-md-6 col-sm-6 col-6">
                                                <div id="sales1" className="text-right"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">PROPERTY OVERVIEW</h5>
                                <div className="table-responsive">
                                    <table className="table product-overview">
                                        <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Order ID</th>
                                            <th>Photo</th>
                                            <th>Property</th>
                                            <th>Type</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Steave Jobs</td>
                                            <td>#85457898</td>
                                            <td><img src="../assets/images/property/prop1.jpeg" alt="iMac"
                                                     width="80"/></td>
                                            <td>Swanim villa</td>
                                            <td>Sold</td>
                                            <td>10-7-2017</td>
                                            <td><span
                                                className="label label-success font-weight-100">Paid</span>
                                            </td>
                                            <td><a href="#" className="text-dark p-r-10"
                                                   data-toggle="tooltip" title="Edit"><i
                                                className="ti-marker-alt"/></a> <a
                                                href="#" className="text-dark"
                                                title="Delete" data-toggle="tooltip"><i
                                                className="ti-trash"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Varun Dhavan</td>
                                            <td>#95457898</td>
                                            <td><img src="../assets/images/property/prop2.jpeg" alt="iPhone"
                                                     width="80"/></td>
                                            <td>River view home</td>
                                            <td>On Rent</td>
                                            <td>09-7-2017</td>
                                            <td><span
                                                className="label label-warning font-weight-100">Pending</span>
                                            </td>
                                            <td><a href="#" className="text-dark p-r-10"
                                                   data-toggle="tooltip" title="Edit"><i
                                                className="ti-marker-alt"/></a> <a
                                                href="#" className="text-dark"
                                                title="Delete" data-toggle="tooltip"><i
                                                className="ti-trash"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Ritesh Desh</td>
                                            <td>#68457898</td>
                                            <td><img src="../assets/images/property/prop3.jpeg"
                                                     alt="apple_watch" width="80"/></td>
                                            <td>Gray Chair</td>
                                            <td>12</td>
                                            <td>08-7-2017</td>
                                            <td><span
                                                className="label label-success font-weight-100">Paid</span>
                                            </td>
                                            <td><a href="#" className="text-dark p-r-10"
                                                   data-toggle="tooltip" title="Edit"><i
                                                className="ti-marker-alt"/></a> <a
                                                href="#" className="text-dark"
                                                title="Delete" data-toggle="tooltip"><i
                                                className="ti-trash"/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Hrithik</td>
                                            <td>#45457898</td>
                                            <td><img src="../assets/images/property/prop3.jpeg"
                                                     alt="mac_mouse" width="80"/></td>
                                            <td>Pure Wooden chair</td>
                                            <td>18</td>
                                            <td>02-7-2017</td>
                                            <td><span
                                                className="label label-danger font-weight-100">Failed</span>
                                            </td>
                                            <td><a href="#" className="text-dark p-r-10"
                                                   data-toggle="tooltip" title="Edit"><i
                                                className="ti-marker-alt"/></a> <a
                                                href="#" className="text-dark"
                                                title="Delete" data-toggle="tooltip"><i
                                                className="ti-trash"/></a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card bg-light">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <a href="#"><img alt="img"
                                                             className="thumb-lg img-circle"
                                                             src="../assets/images/users/agent.jpg"/></a>
                                            <h4 className="card-title m-t-10">Jon Doe</h4>
                                            <h6 className="text-muted">Agent of Property</h6>
                                            <div className="p-20">
                                                <i className="fa fa-phone text-danger p-r-10"
                                                   aria-hidden="true"/> 800-1800-24657
                                                <br/> <i
                                                className="fa fa-envelope-o text-danger p-r-10 m-t-10"
                                                aria-hidden="true"/> jon@realestate.com
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
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">RECENT PROPERTIES</h5>
                                <div className="d-flex no-block m-b-20 m-t-30">
                                    <div className="p-r-15">
                                        <a href="#"><img
                                            src="../assets/images/property/prop1.jpeg" alt="property"
                                            width="100"/></a>
                                    </div>
                                    <div>
                                        <h5 className="card-title m-b-5"><a href="#"
                                                                            className="link">4 BHK Avenue
                                            Street, Mountain View</a></h5>
                                        <span className="text-muted">Oct 07, 2015 | Jon Doe</span>
                                    </div>
                                </div>
                                <div className="d-flex no-block m-b-20">
                                    <div className="p-r-15">
                                        <a href="#"><img
                                            src="../assets/images/property/prop2.jpeg" alt="property"
                                            width="100"/></a>
                                    </div>
                                    <div>
                                        <h5 className="card-title m-b-5"><a href="#"
                                                                            className="link">2 BHK Masto
                                            Street, Mountain View</a></h5>
                                        <span className="text-muted">Oct 07, 2015 | Jon Doe</span>
                                    </div>
                                </div>
                                <div className="d-flex no-block m-b-20">
                                    <div className="p-r-15">
                                        <a href="#"><img
                                            src="../assets/images/property/prop3.jpeg" alt="property"
                                            width="100"/></a>
                                    </div>
                                    <div>
                                        <h5 className="card-title m-b-5"><a href="#"
                                                                            className="link">5 BHK Kalash
                                            Street, Mountain View</a></h5>
                                        <span className="text-muted">Oct 07, 2015 | Jon Doe</span>
                                    </div>
                                </div>
                                <div className="d-flex no-block m-b-20">
                                    <div className="p-r-15">
                                        <a href="#"><img
                                            src="../assets/images/property/prop4.jpeg" alt="property"
                                            width="100"/></a>
                                    </div>
                                    <div>
                                        <h5 className="card-title m-b-5"><a href="#"
                                                                            className="link">1 BHK Amidhar
                                            Street, Mountain View</a></h5>
                                        <span className="text-muted">Oct 07, 2015 | Jon Doe</span>
                                    </div>
                                </div>
                            </div>
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

export default DashBoard;

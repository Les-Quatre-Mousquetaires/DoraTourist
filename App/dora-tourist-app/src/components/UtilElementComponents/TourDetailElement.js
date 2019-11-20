import React, {Component} from 'react';

class TourDetailElement extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <div id="carouselExampleIndicators2" className="carousel slide"
                                     data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators2" data-slide-to="0"
                                            className="active"/>
                                        <li data-target="#carouselExampleIndicators2" data-slide-to="1"/>
                                        <li data-target="#carouselExampleIndicators2" data-slide-to="2"/>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="img-responsive"
                                                 src="../assets/images/property/prop6.jpg" alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-responsive"
                                                 src="../assets/images/property/prop7.jpg" alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="img-responsive"
                                                 src="../assets/images/property/prop8.jpg" alt="Third slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#"
                                       role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#"
                                       role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="p-t-20 p-b-20">
                                    <h4 className="card-title">Florida 5, Pinecrest, FL</h4>
                                    <h5 className="m-b-0"><span className="text-muted"><i
                                        className="fa fa-map-marker text-danger m-r-10" aria-hidden="true"/>New York City / Brooklyn</span>
                                    </h5>
                                </div>
                                <hr className="m-0"/>
                                <p className="text-dark p-t-20 pro-desc"> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices
                                    accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla
                                    augue. Rorem psum dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum tincidunt est vitae ultrices accumsan.
                                    <br/>
                                    <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare
                                    lacus adipiscing, posuere.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Amenities</h5>
                                        <hr className="m-0 p-10"/>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">Private Space</h6>
                                        </div>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">WiFi</h6>
                                        </div>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">Basketball Court</h6>
                                        </div>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">Fireplace</h6>
                                        </div>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">Doorman</h6>
                                        </div>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">Swimming Pool</h6>
                                        </div>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">Gym</h6>
                                        </div>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">Parking</h6>
                                        </div>
                                        <div className="d-flex fa fa-check-circle text-success p-b-10">
                                            <h6 className="m-l-10 text-dark">Laundry</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Room Dimensions</h5>
                                        <div className="table-responsive p-t-10 border-top">
                                            <table className="table no-border">
                                                <tbody className="text-dark">
                                                <tr>
                                                    <td>Dining Room</td>
                                                    <td>8x8</td>
                                                </tr>
                                                <tr>
                                                    <td>Kitchen</td>
                                                    <td>10x12</td>
                                                </tr>
                                                <tr>
                                                    <td>Living Room</td>
                                                    <td>12x15</td>
                                                </tr>
                                                <tr>
                                                    <td>Master Bedroom</td>
                                                    <td>12x10.2</td>
                                                </tr>
                                                <tr>
                                                    <td>Bedroom 2</td>
                                                    <td>11x9</td>
                                                </tr>
                                                <tr>
                                                    <td>Other Room 1</td>
                                                    <td>8x8</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="card p-l-0 p-r-0 p-b-10">
                                    <div className="card-body">
                                        <h5 className="card-title fw-500 p-l-20">Location</h5>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117506.98606137399!2d72.5797426!3d23.020345749999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1476988114677"
                                            width="100%" height="244" frameBorder="0" style={{border:0}}
                                            allowFullScreen/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Essential Information</h5>
                                <div className="table-responsive">
                                    <table className="table no-border">
                                        <tbody className="text-dark">
                                        <tr>
                                            <td>MLS</td>
                                            <td>V254680</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>&#36; 220,000</td>
                                        </tr>
                                        <tr>
                                            <td>Bedrooms</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>Bathrooms</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>Full Baths</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>Half Baths</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>Square Footage</td>
                                            <td>2,123</td>
                                        </tr>
                                        <tr>
                                            <td>Lot SQFT</td>
                                            <td>256</td>
                                        </tr>
                                        <tr>
                                            <td>Year Built</td>
                                            <td>2012</td>
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td>Single Family</td>
                                        </tr>
                                        <tr>
                                            <td>Style</td>
                                            <td>Bi-Level</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>Active</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body bg-light">
                                <div className="text-center">
                                    <a href="#"><img alt="img" className="thumb-lg img-circle"
                                                     src="../assets/images/users/agent.jpg"/></a>
                                    <h4>Jon Doe</h4>
                                    <h6>Agent of Property</h6></div>
                            </div>
                            <div className="card-body border-top">
                                <div className="text-center"><i className="fa fa-phone text-danger p-r-10"
                                                                aria-hidden="true"/> 800-1800-24657
                                    <br/> <i className="fa fa-envelope-o text-danger p-r-10 m-t-10"
                                             aria-hidden="true"/> jon@realestate.com</div>
                            </div>
                            <div className="card-body border-top">
                                <div className="pd-agent-inq">
                                    <h5 className="card-title">Request Inquiry</h5>
                                    <form className="form-horizontal form-agent-inq">
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <input type="email" className="form-control"
                                                       placeholder="E-Mail"/></div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                        <textarea className="form-control" rows="3"
                                                                  placeholder="Message"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <button type="submit"
                                                        className="btn btn-primary btn-rounded pull-right">Submit
                                                    Request
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Community Information</h5>
                                <div className="table-responsive p-t-10">
                                    <table className="table">
                                        <tbody className="text-dark">
                                        <tr>
                                            <td>Address</td>
                                            <td>Florida 5,
                                                <br/> Pinecrest, FL</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>&#36; 220,000</td>
                                        </tr>
                                        <tr>
                                            <td>Subdivision</td>
                                            <td>Matindale</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>New York</td>
                                        </tr>
                                        <tr>
                                            <td>Full Bath</td>
                                            <td>AV</td>
                                        </tr>
                                        <tr>
                                            <td>Half Baths</td>
                                            <td>NAV</td>
                                        </tr>
                                        </tbody>
                                    </table>
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
                                        <span>Varun Dhavan <small className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/2.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Genelia Deshmukh <small
                                            className="text-warning">Away</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/3.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
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
                                        <span>Govinda Star <small className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/6.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>John Abraham<small className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/7.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Hritik Roshan<small className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/8.jpg"
                                                     alt="user-img" className="img-circle"/>
                                        <span>Pwandeep rajan <small
                                            className="text-success">online</small></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourDetailElement;
import React, {Component} from "react";

export class NavBarModal extends Component {
    render() {
        return <li className="nav-item dropdown mega-dropdown"><a
            className="nav-link dropdown-toggle waves-effect waves-dark" href=""
            data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"><i
            className="ti-layout-width-default"></i></a>
            <div className="dropdown-menu animated bounceInDown">
                <ul className="mega-dropdown-menu row">
                    <li className="col-lg-3 col-xlg-2 m-b-30">
                        <h4 className="m-b-20">CAROUSEL</h4>
                        <div id="carouselExampleControls" className="carousel slide"
                             data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <div className="container"><img
                                        className="d-block img-fluid"
                                        src="/assets/images/big/img1.jpg"
                                        alt="First slide"/></div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container"><img
                                        className="d-block img-fluid"
                                        src="/assets/images/big/img2.jpg"
                                        alt="Second slide"/></div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container"><img
                                        className="d-block img-fluid"
                                        src="/assets/images/big/img3.jpg"
                                        alt="Third slide"/></div>
                                </div>
                            </div>
                            <a className="carousel-control-prev"
                               href="#carouselExampleControls" role="button"
                               data-slide="prev"> <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"></span> <span
                                className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next"
                               href="#carouselExampleControls" role="button"
                               data-slide="next"> <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"></span> <span
                                className="sr-only">Next</span>
                            </a>
                        </div>
                    </li>
                    <li className="col-lg-3 m-b-30">
                        <h4 className="m-b-20">ACCORDION</h4>
                        <div className="accordion" id="accordionExample">
                            <div className="card m-b-0">
                                <div className="card-header bg-white p-0" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne">
                                            Collapsible Group Item #1
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse show"
                                     aria-labelledby="headingOne"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod
                                        high.
                                    </div>
                                </div>
                            </div>
                            <div className="card m-b-0">
                                <div className="card-header bg-white p-0" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            Collapsible Group Item #2
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse"
                                     aria-labelledby="headingTwo"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod
                                        high.
                                    </div>
                                </div>
                            </div>
                            <div className="card m-b-0">
                                <div className="card-header bg-white p-0" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree">
                                            Collapsible Group Item #3
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse"
                                     aria-labelledby="headingThree"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod
                                        high.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-lg-3  m-b-30">
                        <h4 className="m-b-20">CONTACT US</h4>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control"
                                       id="exampleInputname1"
                                       placeholder="Enter Name"/></div>
                            <div className="form-group">
                                <input type="email" className="form-control"
                                       placeholder="Enter email"/></div>
                            <div className="form-group">
                                            <textarea className="form-control" id="exampleTextarea" rows="3"
                                                      placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </form>
                    </li>
                    <li className="col-lg-3 col-xlg-4 m-b-30">
                        <h4 className="m-b-20">List style</h4>
                        <ul className="list-style-none">
                            <li><a href="#"><i
                                className="fa fa-check text-success"></i> You
                                can give link</a></li>
                            <li><a href="#"><i
                                className="fa fa-check text-success"></i> Give
                                link</a></li>
                            <li><a href="#"><i
                                className="fa fa-check text-success"></i>
                                Another Give link</a></li>
                            <li><a href="#"><i
                                className="fa fa-check text-success"></i> Forth
                                link</a></li>
                            <li><a href="#"><i
                                className="fa fa-check text-success"></i>
                                Another fifth link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>;
    }
}

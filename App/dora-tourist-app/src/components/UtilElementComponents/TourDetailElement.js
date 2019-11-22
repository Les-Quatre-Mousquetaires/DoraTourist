import React, {Component} from 'react';
import {GetTour} from '../../actions/TourAction';
import {connect} from 'react-redux';
import CommentRow from "./CommentRow";
import {getComments} from "../../actions/CommentAction";
import {Link} from "react-router-dom";

class TourDetailElement extends Component {
    constructor(props) {
        super(props);
        let {loadTour, getComments} = this.props;
        loadTour(this.props.match.params.id);
        getComments(this.props.match.params.id);
    }

    render() {
        let renderCommentRow = this.props.comments.map((comment, index) => {
            return <CommentRow key={index} comment={comment}/>;
        });
        let linkTo = `/booking/${this.props.match.params.id}`;
        let onLogged = <a href={linkTo}
                          className="ml-5 btn waves-effect waves-light btn-rounded btn-primary">Book Now</a>;
        let normal = <Link to="/login" className="ml-5 btn waves-effect waves-light btn-rounded btn-primary">Đăng nhập
            để Book ngay!</Link>
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
                                    <h4 className="card-title">{this.props.tour[0].name}</h4>
                                    <h5 className="m-b-0"><span className="text-muted"><i
                                        className="fa fa-map-marker text-danger m-r-10"
                                        aria-hidden="true"/>{this.props.tour[0].location}


                                        {this.props.user._id ? onLogged : normal}
                                    </span>
                                    </h5>

                                </div>
                                <hr className="m-0"/>
                                <p className="text-dark p-t-20 pro-desc"> {this.props.tour[0].description}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5>Điểm thu hút</h5>
                                        {this.props.tour[0].advantages.map((a, i) =>
                                            <div key={i} className="d-flex fa fa-check-circle text-success p-b-10">
                                                <h6 className="m-l-10 text-dark">{a}</h6>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Tour</h5>
                                        <div className="table-responsive p-t-10 border-top">
                                            <table className="table no-border">
                                                <tbody className="text-dark">
                                                <tr>
                                                    <td>Số ngày</td>
                                                    <td>{this.props.tour[0].info.days}</td>
                                                </tr>
                                                <tr>
                                                    <td>Số lượng thành viên tối đa</td>
                                                    <td>{this.props.tour[0].info.maxPerson}</td>
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
                                        <h5 className="card-title fw-500 p-l-20">Vị trí</h5>
                                        <iframe style={{border: 0}}
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0094194787!2d108.1829608!3d16.065395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184b2ccdf84d%3A0x1f9195b3482dc06e!2zNjUgSMOgbSBOZ2hpLCBUaOG6oWMgR2nDoW4sIFEuIFRoYW5oIEtow6osIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1537175288942"
                                                width="100%" height="244" frameBorder="0"
                                                allowFullScreen="allowfullscreen">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Thông tin thêm</h5>
                                <div className="table-responsive">
                                    <table className="table no-border">
                                        <tbody className="text-dark">
                                        <tr>
                                            <td>Giá</td>
                                            <td>&#36; {this.props.tour[0].price}</td>
                                        </tr>
                                        <tr>
                                            <td>Giường</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>Dành cho</td>
                                            <td>Gia đình nhỏ</td>
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
                                    <h4>{this.props.tour[0].creator.name}</h4>
                                    <p><b>Hướng dẫn viên</b></p>
                                </div>
                            </div>
                            <div className="card-body border-top">
                                <div className="text-center"><i className="fa fa-phone text-danger p-r-10"
                                                                aria-hidden="true"/> {this.props.tour[0].creator.phoneNumber}
                                    <br/> <i className="fa fa-envelope-o text-danger p-r-10 m-t-10"
                                             aria-hidden="true"/> {this.props.tour[0].creator.email}</div>
                            </div>
                        </div>
                        <div className="card">


                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Các bình luận</h4>
                                </div>
                                <div className="comment-widgets m-b-20 overflow-auto"
                                     style={{minHeight: '10rem', maxHeight: '35rem'}}>
                                    {renderCommentRow}
                                </div>
                                <div className="card-body border-top">
                                    <div className="row">
                                        <div className="col-8">
                                            <textarea placeholder="Để lại comment nào..."
                                                      className="form-control border-0"></textarea>
                                        </div>
                                        <div className="col-4 text-right">
                                            <button type="button" className="btn btn-info btn-circle btn-lg">
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
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

const MapStateToProps = (state) => {
    return {
        user: state.authReducer,
        tour: state.tourReducer,
        comments: state.commentReducer
    }
}

const MapDispatchToProps = (dispatch, props) => {
    return {
        loadTour: (id) => {
            dispatch(GetTour(id));
        },
        getComments: (id) => {
            dispatch(getComments(id));
        }
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(TourDetailElement);

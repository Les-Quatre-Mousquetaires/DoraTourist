import React, {Component} from "react";
import {connect} from "react-redux";

class ProfileFormLeft extends Component {

    render() {
        let {user} = this.props;
        return <div className="col-lg-4 col-xlg-3 col-md-5">
            <div className="card">
                <div className="card-body">
                    <center className="m-t-30"><img src="../assets/images/users/5.jpg" className="img-circle"
                                                    width="150"/>
                        <h4 className="card-title m-t-10">{user.name}</h4>
                        <h6 className="card-subtitle">{user.role}</h6>
                        <div className="row text-center justify-content-md-center">
                            <div className="col-4"><a href="#" className="link"><i
                                className="icon-people"/> <font className="font-medium">254</font></a></div>
                            <div className="col-4"><a href="#" className="link"><i
                                className="icon-picture"/> <font className="font-medium">54</font></a></div>
                        </div>
                    </center>
                </div>
                <div>
                    <hr/>
                </div>
                <div className="card-body"><small className="text-muted">Địa chỉ Email </small>
                    <h6>{user.email}</h6> <small className="text-muted p-t-30 db">SĐT</small>
                    <h6>{user.phoneNumber}</h6> <small className="text-muted p-t-30 db">Quốc Tịch</small>
                    <h6>{user.location}</h6>
                    <small className="text-muted p-t-30 db">Trang Cá nhân</small>
                    <br/>
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-facebook-f"/>
                    </button>
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-twitter"/>
                    </button>
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-youtube"/>
                    </button>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};
export default connect(mapStateToProps, null)(ProfileFormLeft);

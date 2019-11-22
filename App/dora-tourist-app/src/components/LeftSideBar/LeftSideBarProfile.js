import React, {Component} from "react";
import {logout} from "../../actions/AuthAction";
import {connect} from "react-redux";

class LeftSideBarProfile extends Component {

    onClick = () => {
        let {logoutUser} = this.props;
        logoutUser();
    };

    render() {
        return(
        <li className="user-pro"><a className="has-arrow waves-effect waves-dark"
                                           href="#"
                                           aria-expanded="false"><img
            src="/assets/images/users/1.jpg" alt="user-img"
            className="img-circle"/><span className="hide-menu">{this.props.user.name}</span></a>
            <ul aria-expanded="false" className="collapse">
                <li><a href="#"><i className="ti-user"></i> Trang cá nhân</a>
                </li>
                <li><a href="#"><i className="ti-wallet"></i> Ví của tôi</a></li>
                <li><a href="#"><i className="ti-settings"></i>Cài đặt</a></li>
                <li><a style={{cursor: 'pointer'}} onClick={this.onClick}><i className="fa fa-power-off"></i> Logout</a>
                </li>
            </ul>
        </li>
    )
    }

}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        logoutUser: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBarProfile);

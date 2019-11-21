import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from "../../actions/AuthAction";
import {connect} from "react-redux";

class NavBarProfile extends Component {

    onClick = () => {
        let {logoutUser} = this.props;
        logoutUser();

    };

    render() {
        let link = '/profile/' + this.props.user._id;

        let onLogged = <div className="dropdown-menu dropdown-menu-right animated flipInY">
            <Link to={link} className="dropdown-item">
                <i className="ti-user"/> My Profile
            </Link>
            <a href="#" className="dropdown-item">
                <i className="ti-wallet"/> My Balance
            </a>
            <a href="#" className="dropdown-item">
                <i className="ti-email"/> Inbox
            </a>
            <div className="dropdown-divider"/>
            <a href="#" className="dropdown-item">
                <i className="ti-settings"/> Account Setting
            </a>
            <div className="dropdown-divider"/>
            <Link to="/" style={{cursor: 'pointer'}} className="dropdown-item" onClick={this.onClick}>
                <i className="fa fa-power-off"/> Logout
            </Link>
        </div>;

        let normal = <div className="dropdown-menu dropdown-menu-right animated flipInY">
            <Link to="/login" className="dropdown-item"><i
    className="fas fa-sign-in-alt"/> Login</Link>
            <div className="dropdown-divider"/>
            <Link to="/register" className="dropdown-item"><i
    className="fa fas fa-user-plus"/> Register</Link>
        </div>;

        return <li className="nav-item dropdown u-pro">
            <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
               href=""
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                src="/assets/images/users/1.jpg" alt="user" className=""/> <span
                className="hidden-md-down">Mark &nbsp;<i
    className="fa fa-angle-down"/></span> </a>
            {this.props.user._id ? onLogged : normal}
        </li>;
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logoutUser: () => {
            dispatch(logout());
        }
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.authReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarProfile);

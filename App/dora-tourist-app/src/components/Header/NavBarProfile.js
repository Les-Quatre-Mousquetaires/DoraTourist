import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from "../../actions/AuthAction";
import {connect} from "react-redux";

class NavBarProfile extends Component {

    onClick = () => {
        let {logoutUser} = this.props;
        logoutUser();
    }

    render() {
        let link = 'profile/' + this.props.user._id;
        let onLogged = <div className="dropdown-menu dropdown-menu-right animated flipInY">
            <Link to={link} className="dropdown-item">
                <i className="ti-user"></i> My Profile
            </Link>
            <a href="#" className="dropdown-item">
                <i className="ti-wallet"></i> My Balance
            </a>
            <a href="#" className="dropdown-item">
                <i className="ti-email"></i> Inbox
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
                <i className="ti-settings"></i> Account Setting
            </a>
            <div className="dropdown-divider"></div>
            <a style={{cursor: 'pointer'}} className="dropdown-item" onClick={this.onClick}>
                <i className="fa fa-power-off"></i> Logout
            </a>
        </div>;

        let normal = <div className="dropdown-menu dropdown-menu-right animated flipInY">
            <Link to="/login" className="dropdown-item"><i
                className="fas fa-sign-in-alt"></i> Login</Link>
            <div className="dropdown-divider"></div>
            <Link to="/register" className="dropdown-item"><i
                className="fa fas fa-user-plus"></i> Register</Link>
        </div>;

        return <li className="nav-item dropdown u-pro">
            <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
               href=""
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                src="/assets/images/users/1.jpg" alt="user" className=""/> <span
                className="hidden-md-down">Mark &nbsp;<i
                className="fa fa-angle-down"></i></span> </a>
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
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarProfile);

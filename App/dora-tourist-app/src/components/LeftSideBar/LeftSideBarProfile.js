import React, {Component} from "react";
import {logout} from "../../actions/UserAction";
import {connect} from "react-redux";

class LeftSideBarProfile extends Component {

    onClick = () => {
        let {logoutUser} = this.props;
        logoutUser();
    }

    render() {
        return <li className="user-pro"><a className="has-arrow waves-effect waves-dark"
                                           href="#"
                                           aria-expanded="false"><img
            src="/assets/images/users/1.jpg" alt="user-img"
            className="img-circle"/><span className="hide-menu">Mark Jeckson</span></a>
            <ul aria-expanded="false" className="collapse">
                <li><a href="#"><i className="ti-user"></i> My Profile</a>
                </li>
                <li><a href="#"><i className="ti-wallet"></i> My
                    Balance</a></li>
                <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                <li><a href="#"><i className="ti-settings"></i> Account
                    Setting</a></li>
                <li><a onClick={this.onClick}><i className="fa fa-power-off"></i> Logout</a>
                </li>
            </ul>
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

export default connect(null, mapDispatchToProps)(LeftSideBarProfile);

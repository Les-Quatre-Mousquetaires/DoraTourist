import React, {Component} from "react";

export class NavBarProfile extends Component {
    render() {
        return <li className="nav-item dropdown u-pro">
            <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
               href=""
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                src="../assets/images/users/1.jpg" alt="user" className=""/> <span
                className="hidden-md-down">Mark &nbsp;<i
                className="fa fa-angle-down"></i></span> </a>
            <div className="dropdown-menu dropdown-menu-right animated flipInY">
                <a href="#" className="dropdown-item"><i
                    className="ti-user"></i> My Profile</a>
                <a href="#" className="dropdown-item"><i
                    className="ti-wallet"></i> My Balance</a>
                <a href="#" className="dropdown-item"><i
                    className="ti-email"></i> Inbox</a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item"><i
                    className="ti-settings"></i> Account
                    Setting</a>
                <div className="dropdown-divider"></div>
                <a href="pages-login.html" className="dropdown-item"><i
                    className="fa fa-power-off"></i> Logout</a>
            </div>
        </li>;
    }
}

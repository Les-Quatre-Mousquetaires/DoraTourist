import React, {Component} from "react";
import {Link} from "react-router-dom";

export class NavBarIcon extends Component {
    render() {
        return <div className="navbar-header">
            <Link className="navbar-brand" to="/">
                <b>
                    <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo"/>
                    <img src="../assets/images/logo-light-icon.png" alt="homepage"
                         className="light-logo"/>
                </b>
                <span className="hidden-xs"><span
                    className="font-bold">elite</span>realestate</span>
            </Link>
        </div>;
    }
}

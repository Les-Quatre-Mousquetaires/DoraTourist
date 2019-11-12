import React, {Component} from "react";

export class NavBarIcon extends Component {
    render() {
        return <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
                <b>
                    <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo"/>
                    <img src="../assets/images/logo-light-icon.png" alt="homepage"
                         className="light-logo"/>
                </b>
                <span className="hidden-xs"><span
                    className="font-bold">elite</span>realestate</span>
            </a>
        </div>;
    }
}

import React, {Component} from "react";
import {NavBarIcon} from "./NavBarIcon";
import {NavBarFromSearch} from "./NavBarFormSearch";
import {NavBarNotification} from "./NavBarNotification";
import {NavBarModal} from "./NavBarModal";
import NavBarProfile from "./NavBarProfile";
import {NavBarSettings} from "./NavBarSettings";
import {NavBarMessage} from "./NavBarMessage";

export class Header extends Component {
    render() {
        return (
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <NavBarIcon/>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a
                                className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                                href="#"><i className="ti-menu"></i></a></li>
                            <li className="nav-item"><a
                                className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
                                href="#"><i className="icon-menu"></i></a></li>
                            <li className="nav-item">
                                <NavBarFromSearch/>
                            </li>
                        </ul>
                        <ul className="navbar-nav my-lg-0">
                            <NavBarNotification/>
                            <NavBarMessage/>
                            <NavBarModal/>
                            <NavBarProfile/>
                            <NavBarSettings/>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }onClick = () => {
        console.log(123);
        let {logoutUser} = this.props;
        logoutUser();
    }
}

import React, {Component} from "react";
import LeftSideBarProfile from "./LeftSideBarProfile";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class LeftSideBar extends Component {

    render() {
        //console.log("LEFT BAR: ",this.props);
        let userTab = <LeftSideBarProfile/>;
        let app = <li><a className="has-arrow waves-effect waves-dark" href="#"
                         aria-expanded="false"><i className="ti-layout-grid2"/><span
            className="hide-menu">Apps</span></a>
            <ul aria-expanded="false" className="collapse">
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Chat app</a></li>
            </ul>
        </li>;
        let admin = <li className="nav-small-cap">--- ADMIN TOOLS</li>;
        let adminTools = <li><Link to='/dashboard' className="waves-effect waves-dark"><i
            className="icon-speedometer"/><span
            className="hide-menu">Dashboard</span></Link>
        </li>;

        return (<aside className="left-sidebar">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {this.props.user._id ? userTab:""}
                        {this.props.user.role==="admin" ? admin:""}
                        {this.props.user.role==="admin" ? adminTools:""}
                        {app}
                    </ul>
                </nav>
            </div>
        </aside>);
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer
    };
};
export  default connect(mapStateToProps)(LeftSideBar);

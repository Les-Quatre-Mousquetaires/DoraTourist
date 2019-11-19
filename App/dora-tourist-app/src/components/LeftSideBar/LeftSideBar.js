import React, {Component} from "react";
import LeftSideBarProfile from "./LeftSideBarProfile";

export class LeftSideBar extends Component {
    render() {
        return <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <LeftSideBarProfile/>

                        <li className="nav-small-cap">--- ADMIN TOOLS</li>
                        <li><a className="waves-effect waves-dark" href="index.html"><i
                            className="icon-speedometer"></i><span
                            className="hide-menu">Dashboard</span></a>
                        </li>
                        <li><a className="has-arrow waves-effect waves-dark" href="#"
                               aria-expanded="false"><i
                            className="ti-layout-grid2"></i><span className="hide-menu">Apps</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="app-calendar.html">Calendar</a></li>
                                <li><a href="app-chat.html">Chat app</a></li>
                            </ul>
                        </li>

                        <li className="nav-small-cap">--- PROFESSIONAL</li>
                        <li><a className="waves-effect waves-dark" href="realestate-property-list.html"><i
                            className="ti-home"></i><span className="hide-menu">Property List</span></a>
                        </li>
                        <li><a className="waves-effect waves-dark" href="realestate-property-3-column.html"><i
                            className="ti-menu-alt"></i><span className="hide-menu">Property 3 Column</span></a>
                        </li>
                        <li><a className="waves-effect waves-dark" href="realestate-property-4-column.html"><i
                            className="ti-layout"></i><span
                            className="hide-menu">Property 4 Column</span></a>
                        </li>
                        <li><a className="waves-effect waves-dark" href="realestate-property-detail.html"><i
                            className="ti-check-box"></i><span className="hide-menu">Property Detail</span></a>
                        </li>
                        <li><a className="waves-effect waves-dark" href="realestate-add-property.html"><i
                            className="ti-support"></i><span className="hide-menu">Add Property</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>;
    }
}

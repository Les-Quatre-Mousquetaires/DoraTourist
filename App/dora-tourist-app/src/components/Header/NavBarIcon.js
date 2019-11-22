import React, {Component} from "react";
import {Link} from "react-router-dom";

export class NavBarIcon extends Component {
    render() {
        return <div className="navbar-header">
            <Link className="navbar-brand" to="/">
                <b>
                    <img src="/assets/images/logo-icon.png" alt="homepage" className="dark-logo"/>
                    <img src="/assets/images/logo-light-icon.png" style={{ width:'40px',height:'40px'}} alt="homepage"
                         className="light-log mb-3"/>
                </b>
                <span className="hidden-xs "><span
                    className="font-bold pl-2" style={{fontSize:'1.4rem'}}>Dora</span><span className="">tourist</span></span>
            </Link>            
        </div>;
    }
}

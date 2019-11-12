import React, {Component} from "react";

export class NavBarFromSearch extends Component {
    render() {
        return <form className="app-search d-none d-md-block d-lg-block">
            <input type="text" className="form-control" placeholder="Search & enter"/>
        </form>;
    }
}

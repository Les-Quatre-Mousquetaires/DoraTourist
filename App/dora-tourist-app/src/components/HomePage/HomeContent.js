import React, {Component} from "react";
import {HotelElement} from "../UtilElementComponents/HotelElement";

export class HomeContent extends Component {
    componentDidMount() {
        document.title = "Home - Doratourist";
    }

    render() {
        return <div className="row">
            <HotelElement/>
            <HotelElement/>
            <HotelElement/>
            <HotelElement/>
            <HotelElement/>
        </div>;
    }
}

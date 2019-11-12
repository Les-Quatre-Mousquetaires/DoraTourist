import React, {Component} from "react";

export class Preloader extends Component {
    render() {
        return <div className="preloader">
            <div className="loader">
                <div className="loader__figure"></div>
                <p className="loader__label">DoraTourist</p>
            </div>
        </div>;
    }
}

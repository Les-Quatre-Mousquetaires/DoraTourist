import React, {Component} from "react";

export class DashboardTourElement extends Component {
    render() {
        let imgURL = ".."+this.props.image;
        let name = this.props.name;
        let day = this.props.day;
        let price = this.props.price;
        return <div className="d-flex no-block m-b-20 m-t-30">
            <div className="p-r-15">
                <a href="#"><img
                    src={imgURL} alt="property"
                    width="100"/></a>
            </div>
            <div>
                <h5 className="card-title m-b-5"><a href="#"
                                                    className="link">{name}</a></h5>
                <span className="text-muted">{day} | {price}$</span>
            </div>
        </div>;
    }
}

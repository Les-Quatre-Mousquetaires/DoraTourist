import React, {Component} from "react";
import {Link} from "react-router-dom";

export class TourElement extends Component {
    
    constructor(props) {
        super(props);
        let t = this.props.data;

        this.state = {
            id: t._id,
            name: t.name,
            image: t.image,
            description: t.description,
            comments: t.comments,
            creator: t.creator,
            price: t.price
        }      

    }

    render() {
        let link = `tours/` + this.state.id;
        return (<div className="col-lg-3 col-md-6">
            <div className="card">
                <img className="card-img-top" src={this.state.image}
                     alt="Card image cap"/>
                <div className="card-img-overlay">
                    <span className="badge badge-danger badge-pill">For Rent</span>
                </div>
                <div className="card-body bg-light">
                    <h4 className="card-title">{this.state.name}</h4>
                    <h4 className="text-primary">&#36; {this.state.price}</h4>
                </div>
                <div className="card-body border-top">
                    <div className="d-flex no-block align-items-center">
                        <span><img src="/assets/images/property/pro-bath.png"/></span>
                        <span className="p-10 text-muted">Bathrooms</span>
                        <span
                            className="ml-auto badge badge-pill badge-secondary pull-right">2</span>
                    </div>
                    <div className="d-flex no-block align-items-center">
                        <span><img src="/assets/images/property/pro-bed.png"/></span>
                        <span className="p-10 text-muted">Beds</span>
                        <span
                            className="ml-auto badge badge-pill badge-secondary pull-right">2</span>
                    </div>
                    <div className="d-flex no-block align-items-center">
                        <span><img src="/assets/images/property/pro-garage.png"/></span>
                        <span className="p-10 text-muted">Garages</span>
                        <span
                            className="ml-auto badge badge-pill badge-secondary pull-right">1</span>
                    </div>
                    <hr/>
                   
                    <Link className="btn btn-sm mb-1 waves-effect waves-light btn-rounded btn-outline-info" to={link}>Detail</Link>
                    
                </div>
            </div>
        </div>);
    }
}


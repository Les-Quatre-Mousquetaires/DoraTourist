import React, {Component} from "react";

export class HotelElement extends Component {
    render() {
        return <div className="col-lg-3 col-md-6">
            <div className="card">
                <img className="card-img-top" src="../assets/images/property/prop1.jpeg"
                     alt="Card image cap"/>
                <div className="card-img-overlay">
                    <span className="badge badge-danger badge-pill">For Rent</span>
                </div>
                <div className="card-body bg-light">
                    <h4 className="card-title">Florida 5, Pinecrest, FL</h4>
                    <h4 className="text-primary">&#36; 220,000</h4>
                </div>
                <div className="card-body border-top">
                    <div className="d-flex no-block align-items-center">
                        <span><img src="../assets/images/property/pro-bath.png"/></span>
                        <span className="p-10 text-muted">Bathrooms</span>
                        <span
                            className="ml-auto badge badge-pill badge-secondary pull-right">2</span>
                    </div>
                    <div className="d-flex no-block align-items-center">
                        <span><img src="../assets/images/property/pro-bed.png"/></span>
                        <span className="p-10 text-muted">Beds</span>
                        <span
                            className="ml-auto badge badge-pill badge-secondary pull-right">2</span>
                    </div>
                    <div className="d-flex no-block align-items-center">
                        <span><img src="../assets/images/property/pro-garage.png"/></span>
                        <span className="p-10 text-muted">Garages</span>
                        <span
                            className="ml-auto badge badge-pill badge-secondary pull-right">1</span>
                    </div>
                </div>
            </div>
        </div>;
    }
}

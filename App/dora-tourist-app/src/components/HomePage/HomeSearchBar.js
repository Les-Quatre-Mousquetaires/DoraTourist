import React, {Component} from "react";

export class HomeSearchBar extends Component {
    render() {
        return <div className="row mt-3">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Search</h5>
                        <form role="form" className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group has-info">
                                    <select defaultValue="" className="form-control custom-select">
                                        <option value="" disabled>Status</option>
                                        <option value="1">Rent</option>
                                        <option value="2">Sale</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group has-info">
                                    <select defaultValue="" className="form-control custom-select">
                                        <option value="" disabled>Country</option>
                                        <option value="1">India</option>
                                        <option value="2">Germany</option>
                                        <option value="3">Spain</option>
                                        <option value="4">Russia</option>
                                        <option value="5">United States</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-2">
                                <div className="form-group has-info">
                                    <select defaultValue="" className="form-control custom-select">
                                        <option value="" disabled>City</option>
                                        <option value="1">Moscow</option>
                                        <option value="2">Barcelona</option>
                                        <option value="3">Mumbai</option>
                                        <option value="4">Houston</option>
                                        <option value="5">Sokovia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group has-info">
                                    <select defaultValue="" className="form-control custom-select">
                                        <option value="" disabled>Tour Type</option>
                                        <option value="1">Single</option>
                                        <option value="2">With Family</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-1">
                                <button type="submit"
                                        className="btn btn-dark btn-block form-control"><i
                                    className="fa fa-search text-white"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}

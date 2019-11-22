import React, {Component} from "react";
import {connect} from "react-redux";
import {GetTours, NewTour} from "../../actions/TourAction";

let idUser = JSON.parse(localStorage.getItem('user'))._id;

class DashboardModalTour extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            image: "",
            location: "India",
            description: "",
            advantages: "",
            price: 0,
            creator: idUser.toString(),
            days: 0,
            maxPerson: 0

        }
    }

    onChange(e) {
        let {id, value} = e.target;
        this.setState({
            [id]: value
        });
    }

    onSubmit(e) {
        let img = this.state.image.split('\\');
        let adv = this.state.advantages.split(/\n/);
        let tour = {
            name: this.state.name,
            image: "/assets/images/huan/" + img[2],
            location: this.state.location,
            description: this.state.description,
            advantages: adv,
            creator: this.state.creator,
            price: this.state.price,
            info: {
                days: this.state.days,
                maxPerson: this.state.maxPerson
            }
        };
        console.log(tour);
        console.log(tour.name);
        let {newTour} = this.props;
        newTour(tour);
    }

    render() {
        return <div id="responsive-modal" className="modal fade" tabIndex="-1" role="dialog"
                    aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add new tourist</h4>
                        <button type="button" className="close" data-dismiss="modal"
                                aria-hidden="true">×
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name"
                                       className="control-label">Name:</label>
                                <input type="text" onChange={this.onChange.bind(this)} className="form-control"
                                       id="name"/>
                            </div>
                            <div className="form-group">
                                <h5>Image</h5>
                                <input type="file" onChange={this.onChange.bind(this)} className="form-control"
                                       id="image"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price"
                                       className="control-label">Price:</label>
                                <input type="number" onChange={this.onChange.bind(this)} className="form-control"
                                       id="price"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description"
                                       className="control-label">Description:</label>
                                <textarea className="form-control" onChange={this.onChange.bind(this)}
                                          id="description"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="advantages"
                                       className="control-label">Advantages:</label>
                                <textarea className="form-control" id="advantages"
                                          onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="days"
                                               className="control-label">Day:</label>
                                        <input type="number" className="form-control" id="days"
                                               onChange={this.onChange.bind(this)}/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="maxPerson"
                                               className="control-label">Max Person:</label>
                                        <input type="number" className="form-control"
                                               id="maxPerson" onChange={this.onChange.bind(this)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h5>Location</h5>
                                <select id="location" className="form-control custom-select"
                                        onChange={this.onChange.bind(this)}>
                                    <option value="" disabled>Country</option>
                                    <option value="India">India</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Russia">Russia</option>
                                    <option value="United States">United States</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                </select>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default waves-effect"
                                data-dismiss="modal">Close
                        </button>
                        <button type="button"
                                className="btn btn-danger waves-effect waves-light"
                                onClick={this.onSubmit.bind(this)}>Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        tours: state.tourReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        newTour: (tour) => {
            dispatch(
                NewTour(tour)
            );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardModalTour);

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {createBook} from "../../actions/BookActions";
import {connect} from "react-redux";

class BookingPage extends Component {
    constructor(props) {
        super(props);
        let u = this.props.user;
        console.log(this.props);
        let user = {
            name: u.name,
            email: u.email,
            address: u.address ? u.address : '',
            phoneNumber: u.phoneNumber,
            tourId: this.props.match.params.id,
            checkinDate: '23/11/2019'
        }
        this.state = {
            ...user
        }
    }

    onChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    onClick = () => {
        let {createBook} = this.props;
        let book = {
            tour: this.state.tourId,
            checkinDate: this.state.checkinDate
        }
        createBook(book);
    }

    render() {
        return (
            <div>
                <section id="wrapper" className="step-register">
                    <div className="register-box">
                        <div className="">
                            <h3>Booking Form</h3>
                            <form id="msform">
                                <ul id="eliteregister">
                                    <li className="active">Account Setup</li>
                                    <li>Confirm Booking</li>
                                    <li>Success</li>
                                </ul>
                                <fieldset>
                                    <h2 className="fs-title">Confirm Info</h2>
                                    <h3 className="fs-subtitle">This is step 1</h3>
                                    <input value={this.state.email} onChange={this.onChange} className="form-control-sm"
                                           type="text" name="email" placeholder="Email"/>
                                    <input value={this.state.name} onChange={this.onChange} className="form-control-sm"
                                           type="name" name="name" placeholder="Name"/>
                                    <input value={this.state.address} onChange={this.onChange}
                                           className="form-control-sm" type="text" name="address"
                                           placeholder="Adresss"/>
                                    <input value={this.state.phoneNumber} onChange={this.onChange}
                                           className="form-control-sm" type="text" name="phoneNumber"
                                           placeholder="Phone Number"/>
                                    <input type="button" name="next" className="next action-button" value="Next"/>
                                </fieldset>
                                <fieldset>
                                    <h2 className="fs-title">Confirm Tour</h2>
                                    <h3 className="fs-subtitle">Tour name: ahihi</h3>
                                    <input value={this.state.tourId} className="form-control-sm" type="text" name="tourId" placeholder="Tour ID"
                                           disabled={true}/>
                                    <label className="form-control-sm" htmlFor="datePicker">Date Check-in</label>
                                    <input value={this.state.checkinDate} onChange={this.onChange} id="datePicker"
                                           name="checkinDate" type="date" className="form-control-sm"
                                           placeholder="dd/mm/yyyy"/>
                                    <input type="button" name="previous" className="previous action-button"
                                           value="Previous"/>
                                    <input onClick={this.onClick} type="button" name="next"
                                           className="next action-button bg-primary"
                                           value="Book Now"/>
                                </fieldset>
                                <fieldset>
                                    <h2 className="fs-title">Your Booking is Success</h2>
                                    <h3 className="fs-subtitle">Thank you!</h3>
                                    <div className="d-flex justify-content-center">
                                        <Link to="/" className="action-button bg-danger">Go Home</Link>
                                    </div>
                                </fieldset>
                            </form>
                            <div className="clear"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        createBook: (book) => {
            dispatch(createBook(book));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);

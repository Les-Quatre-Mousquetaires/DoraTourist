import React, {Component} from "react";
import {connect} from "react-redux";
import {getAllBooking} from "../../actions/BookingAction";
import {DashBoardBookingElement} from "./DashBoardBookingElement";
import  './DashBoardBookingElement.css';
class DashboardBookingOverview extends Component {

    componentDidMount() {
        let {loadAddBooking} = this.props;
        loadAddBooking();
    }

    render() {
        let getItem = this.props.bookings;
        let listBookings;
        if(getItem.length!==undefined){
            console.log(getItem);
            listBookings = getItem.map((item,index)=>{
                return(
                    <DashBoardBookingElement key={index} id={item._id} user={item.creator} tour={item.tour}/>
                )
            });
        }
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body card-body-booking">
                            <h5 className="card-title">BOOKING OVERVIEW</h5>
                            <div className="table-responsive">
                                <table className="table product-overview">
                                    <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Order ID</th>
                                        <th>Photo</th>
                                        <th>Tour Name</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {listBookings}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookings: state.bookingReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadAddBooking: () => {
            dispatch(getAllBooking());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBookingOverview);

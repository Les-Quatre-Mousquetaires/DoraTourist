import React, {Component} from "react";
import {DashboardTourElement} from "./DashboardTourElement";
import './TourListDashboard.css';
import {connect} from "react-redux";
import {GetTours} from "../../actions/TourAction";
import {HomeContent} from "../HomePage/HomeContent";

class TourListDashboard extends Component {
    componentDidMount() {
        let {loadTours} = this.props;
        loadTours();
    }
    render() {
        let listTour = this.props.tours.map((item, index) => {
            return (
                <DashboardTourElement name={item.name} image={item.image} price={item.price} id={item._id}
                                      day={item.updatedAt} key={index} />
            )
        });
        return (
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 scrollbar ">
                <div className="card">
                    <div className="card-body card-body-tour">
                        <h5 className="card-title">ALL TOUR</h5>
                        {listTour}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tours: state.tourReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadTours: () => {
            dispatch(GetTours());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TourListDashboard);

import React, {Component} from "react";
import tourReducer from "../../reducers/TourReducer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SetFilterParams } from '../../actions/TourAction'; 

class HomeSearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            item:"",
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        let {TourFilter} = this.props;
        TourFilter(this.state.item);
    }

    onChange = (e) => {
        this.setState({
            item:e.target.value
        })
    }

    handleResetPage = () => {
        window.location.reload();
    }

    render() {
        
        return <div className="row mt-3">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Search</h5>
                        <form role="form" className="row" onSubmit={this.onSubmit}>
                            <div className="col-sm-6 col-md-3">
                                
                                <div className="form-group has-info">
                                    <select className="form-control custom-select">
                                        <option value="" disabled >Loại Tour</option>
                                        <option value="1">Giá rẻ (100$ -> 400$)</option>
                                        <option value="2">Trung Bình (401$ -> 800$)</option>
                                        <option value="3">Cao cấp (>800$)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group has-info">
                                    <select className="form-control custom-select" onChange={this.onChange}>
                                        <option value="" disabled>Quốc gia</option>
                                        <option value="Viet Nam" >Vietnam</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Korea">Korea</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Singapore">Singapore</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group has-info">
                                    <select className="form-control custom-select">
                                        <option value="" disabled>Property Type</option>
                                        <option value="1">Apartment</option>
                                        <option value="2">Villa/Mansion</option>
                                        <option value="3">Cottage</option>
                                        <option value="4">Flat</option>
                                        <option value="5">House</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-1">
                                <button type="submit"
                                        className="btn btn-dark btn-block form-control"><i
                                    className="fa fa-search text-white"></i></button>
                            </div>
                            <div className="col-sm-6 col-md-1">
                                <button type="submit" onClick={this.handleResetPage}
                                        className="btn btn-dark btn-block form-control"><i
                                    className="fa fa-spinner text-white"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {searchValue: state.tourReducer.searchValue};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        TourFilter: (searchValue) => {
            dispatch(SetFilterParams(searchValue));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearchBar);
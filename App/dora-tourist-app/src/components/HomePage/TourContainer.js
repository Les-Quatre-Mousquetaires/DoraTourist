import React, { Component } from 'react'
import { HomeContent } from './HomeContent';
import { connect } from 'react-redux';
import { GetTours } from '../../actions/TourAction'; 

class TourContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HomeContent tours={ this.props.tours } dispatch={this.props} />
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(TourContainer);

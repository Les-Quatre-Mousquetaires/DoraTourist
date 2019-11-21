import React, {Component} from 'react';
import ProfileFormLeft from "../Proflie/ProflieFormLeft";
import ProfileTagRight from "../Proflie/ProflieTagRight";
import {ServicePanel} from "./ServicePanel";
import {connect} from "react-redux";
import {view} from "../../actions/UserAction";
import {} from 'react-router-dom'
class Profile extends Component {

    constructor(props) {
        super(props);
        let url = window.location.pathname;
        //console.log("URL: ",url);
        let id = url.split('/');
        //console.log("ID: ",id[2]);
        let {viewUser} = this.props;
        viewUser(id[2]);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <ProfileFormLeft/>
                    <ProfileTagRight/>
                </div>
                <ServicePanel/>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        viewUser: (id) => {
            dispatch(view(id));
        }
    }
};

export default connect(mapStateToProps ,mapDispatchToProps) (Profile);

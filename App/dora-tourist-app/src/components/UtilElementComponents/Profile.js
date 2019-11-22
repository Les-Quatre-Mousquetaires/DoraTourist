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


export default Profile;

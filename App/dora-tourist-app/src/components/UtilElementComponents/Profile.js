import React, {Component} from 'react';
import {ProfileFormLeft} from "../Proflie/ProflieFormLeft";
import {ProfileTagRight} from "../Proflie/ProflieTagRight";
import {ServicePanel} from "./ServicePanel";

class Profile extends Component {
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

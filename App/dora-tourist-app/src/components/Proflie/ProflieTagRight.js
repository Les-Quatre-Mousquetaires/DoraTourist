import React, {Component} from "react";
import {connect} from "react-redux";
import TabProfileUpdate from "./TabProfileUpdate";
import TagProfileTour from "./TagProfileTour";

class ProfileTagRight extends Component {
    render() {
        let {user} = this.props;
        return <div className="col-lg-8 col-xlg-9 col-md-7">
            <div className="card">

                <ul className="nav nav-tabs profile-tab" role="tablist">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#home"
                                                role="tab">Transactions</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#profile"
                                                role="tab">Profile</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#settings"
                                                role="tab">Settings</a></li>
                </ul>
                <div className="tab-content">
                    <TagProfileTour/>
                    <div className="tab-pane" id="profile" role="tabpanel">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3 col-xs-6 b-r"><strong>Full Name</strong>
                                    <br/>
                                    <p className="text-muted">{user.name}</p>
                                </div>
                                <div className="col-md-3 col-xs-6 b-r"><strong>Mobile</strong>
                                    <br/>
                                    <p className="text-muted">{user.phoneNumber}</p>
                                </div>
                                <div className="col-md-3 col-xs-6 b-r"><strong>Email</strong>
                                    <br/>
                                    <p className="text-muted">{user.email}</p>
                                </div>
                                <div className="col-md-3 col-xs-6"><strong>Location</strong>
                                    <br/>
                                    <p className="text-muted">{user.location}</p>
                                </div>
                            </div>
                            <hr/>
                            <p className="m-t-30">Tự giới thiệu bla bla</p>
                        </div>
                    </div>
                    <TabProfileUpdate/>
                </div>
            </div>
        </div>;
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};
export default connect(mapStateToProps, null) (ProfileTagRight);

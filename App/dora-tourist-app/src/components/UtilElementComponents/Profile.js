import React, {Component} from 'react';
import {ProfileFormLeft} from "../Proflie/ProflieFormLeft";
import {ProfileTagRight} from "../Proflie/ProflieTagRight";
import {ServicePanel} from "./ServicePanel";
import {register, view} from "../../actions/AuthAction";
import {connect} from "react-redux";

class Profile extends Component {

    componentDidMount() {
        let{viewUser}=this.props;
        let user = viewUser();
        console.log('user Provoder ',user);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="row">
                    <ProfileFormLeft user={this.props.user}/>
                    <ProfileTagRight user={this.props.user}/>
                </div>
                <ServicePanel/>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.authReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        viewUser: () => {
            dispatch(view());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Profile);

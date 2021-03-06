import React, {Component} from "react";
import {connect} from "react-redux";
import {update, view} from "../../actions/UserAction"

class TabProfileUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: "",
            email: "",
            password: "",
            phoneNumber: 0,
            location: ""
        };
        let {viewUser} = this.props;
        let id = window.location.pathname.split('/')[2];
        viewUser(id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            ...nextProps.user
        });
    }

    onChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };


    onSubmit = () => {
        let user = this.state;
        user = {
            ...user,
            _id: this.props._id
        };
        if (!user.name || !user.phoneNumber || !user.password) {
            window.alert("Vui lòng nhập đủ");
        } else {
            let {updateUser} = this.props;
            let userEdit = this.state;
            updateUser({
                user: userEdit
            });
        }
    }

    render() {
        let user = this.state;
        return <div className="tab-pane" id="settings" role="tabpanel">
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="example-email" className="col-md-12">Email</label>
                    <div className="col-md-12">
                        <input type="email" value={user.email}
                               className="form-control form-control-line"
                               name="email" id="example-email" onChange={this.onChange}
                               disabled={true}/>
                    </div>
                </div>
                <div className="form-horizontal form-material">
                    <div className="form-group">
                        <label className="col-md-12">Tên đầy đủ</label>
                        <div className="col-md-12">
                            <input type="text" value={user.name}
                                   name="name" className="form-control form-control-line"
                                   onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-12">Mật khẩu</label>
                        <div className="col-md-12">
                            <input type="password" name="password" placeholder="Your password" value={user.password}
                                   className="form-control form-control-line" onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-12">Số điện thoại</label>
                        <div className="col-md-12">
                            <input type="text" placeholder="Your Phone Number" value={user.phoneNumber}
                                   name="phoneNumber" className="form-control form-control-line"
                                   onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-12">Chọn Quốc tịch</label>
                        <div className="col-sm-12">
                            <select className="form-control form-control-line" name="location"
                                    value={user.location}
                                    onChange={this.onChange}>
                                <option value={"London"}>London</option>
                                <option value={"India"}>India</option>
                                <option value={"Usa"}>Usa</option>
                                <option value={"Canada"}>Canada</option>
                                <option value={"Thailand"}>Thailand</option>
                                <option value={"Hong Kong"}>Hong Kong</option>
                                <option value={"Viet Nam"}>Viet Nam</option>
                                <option value={"Japan"}>Japan</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <button className="btn btn-success" onClick={this.onSubmit}>Cập nhật
                            </button>
                        </div>
                    </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => {
            dispatch(update(user));
        },
        viewUser: (userId) => {
            dispatch(view(userId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TabProfileUpdate);

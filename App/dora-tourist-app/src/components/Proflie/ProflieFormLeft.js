import React, {Component} from "react";

export class ProfileFormLeft extends Component {

    render() {
        //console.log(this.props);
        let  name = this.props.user.name;
        let role = this.props.user.role;
        let email = this.props.user.email;
        let phonenumber = this.props.user.phoneNumber;
        let address = this.props.user.location;
        return <div className="col-lg-4 col-xlg-3 col-md-5">
            <div className="card">
                <div className="card-body">
                    <center className="m-t-30"><img src="../assets/images/users/5.jpg" className="img-circle"
                                                    width="150"/>
                        <h4 className="card-title m-t-10">{name}</h4>
                        <h6 className="card-subtitle">{role}</h6>
                        <div className="row text-center justify-content-md-center">
                            <div className="col-4"><a href="#" className="link"><i
                                className="icon-people"/> <font className="font-medium">254</font></a></div>
                            <div className="col-4"><a href="#" className="link"><i
                                className="icon-picture"/> <font className="font-medium">54</font></a></div>
                        </div>
                    </center>
                </div>
                <div>
                    <hr/>
                </div>
                <div className="card-body"><small className="text-muted">Email address </small>
                    <h6>{email}</h6> <small className="text-muted p-t-30 db">Phone</small>
                    <h6>{phonenumber}</h6> <small className="text-muted p-t-30 db">Address</small>
                    <h6>{address}</h6>
                    <div className="map-box">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                            width="100%" height="150" frameBorder="0" style={{border: 0}}
                            allowFullScreen/>
                    </div>
                    <small className="text-muted p-t-30 db">Social Profile</small>
                    <br/>
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-facebook-f"/>
                    </button>
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-twitter"/>
                    </button>
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-youtube"/>
                    </button>
                </div>
            </div>
        </div>;
    }
}

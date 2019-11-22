import React, {Component} from "react";
import {Link} from "react-router-dom";


export class DashboardTourElement extends Component {

    constructor(props){
        super(props);
        this.state ={
            id:""
        }
    }
    componentDidMount() {
        this.setState({
            id:this.props.id
        })
    }

    render() {
        let imgURL = ".." + this.props.image;
        let name = this.props.name;
        let day = this.props.day;
        let price = this.props.price;
        let link = "/tours/"+this.state.id;
        return (
            <div className="d-flex no-block m-b-20 m-t-30" >
                <div className="p-r-15">
                    <Link to={link}><img
                        src={imgURL} alt="property"
                        width="100"/></Link>
                </div>
                <div>
                    <h5 className="card-title m-b-5"><a
                        className="link">{name}</a></h5>
                    <span className="text-muted">{day} | {price}$</span>
                </div>
            </div>
        );
    }
}



import React, {Component} from "react";
import {TourElement} from "../UtilElementComponents/TourElement";
import {connect} from 'react-redux';



export class HomeContent extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        document.title = "Home - Doratourist";
        let {loadTours} = this.props.dispatch;
        loadTours();  
    }
    
    render() {
        let tours = this.props.tours.map(t => 
            <TourElement data={t} key ={t._id}/>);
        return(
            <div className="row">
                {tours}
            </div>
        )
    }
}

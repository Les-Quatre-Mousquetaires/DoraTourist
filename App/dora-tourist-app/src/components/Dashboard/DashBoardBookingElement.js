import React, {Component} from "react";

export class DashBoardBookingElement extends Component {
    render() {
        let userName = this.props.user.name;
        let orderID = this.props.id;
        let imgURL = ".."+this.props.tour.image;
        let day = new Date(this.props.tour.updatedAt).toDateString();
        let tourName = this.props.tour.name;
        return <tr>
            <td>{userName}</td>
            <td>{orderID}</td>
            <td><img src={imgURL} alt="iMac"
                     width="80"/></td>
            <td>{tourName}</td>
            <td>{day}</td>
            <td><span
                className="label label-success font-weight-100">Paid</span>
            </td>
            <td><a href="#" className="text-dark p-r-10"
                   data-toggle="tooltip" title="Edit"><i
                className="ti-marker-alt"/></a> <a
                href="#" className="text-dark"
                title="Delete" data-toggle="tooltip"><i
                className="ti-trash"/></a></td>
        </tr>;
    }
}

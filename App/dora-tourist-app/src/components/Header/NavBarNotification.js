import React, {Component} from "react";

export class NavBarNotification extends Component {
    render() {
        return <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle waves-effect waves-dark" href=""
               data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"> <i className="ti-email"></i>
                <div className="notify"><span className="heartbit"></span> <span
                    className="point"></span></div>
            </a>
            <div
                className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                <ul>
                    <li>
                        <div className="drop-title">Thông báo</div>
                    </li>
                    <li>
                        <div className="message-center">
                            <a href="#">
                                <div className="btn btn-danger btn-circle"><i
                                    className="fa fa-link"></i></div>
                                <div className="mail-contnet">
                                    <h5>Thông báo no.1</h5> <span
                                    className="mail-desc">Cảm ơn đã chú ý thông báo này</span>
                                    <span
                                        className="time">9:30 AM</span></div>
                            </a>
                            <a href="#">
                                <div className="btn btn-success btn-circle"><i
                                    className="ti-calendar"></i></div>
                                <div className="mail-contnet">
                                    <h5>Thông báo no.2</h5> <span
                                    className="mail-desc">Cảm ơn đã chú ý thông báo này</span>
                                    <span className="time">9:10 AM</span></div>
                            </a>
                            <a href="#">
                                <div className="btn btn-info btn-circle"><i
                                    className="ti-settings"></i></div>
                                <div className="mail-contnet">
                                    <h5>Thông báo no.3</h5> <span className="mail-desc">Cảm ơn đã chú ý thông báo này</span>
                                    <span className="time">9:08 AM</span></div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a className="nav-link text-center link" href="#;">
                            <strong>Đánh dấu đã đọc</strong> <i className="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </li>;
    }
}

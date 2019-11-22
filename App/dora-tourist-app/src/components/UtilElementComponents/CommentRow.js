import React, {Component} from "react";
import {connect} from "react-redux";
import {getComments} from "../../actions/CommentAction";

class CommentRow extends Component {
    render() {
        let {comment} = this.props;
        console.log(this.props);
        return <div className="d-flex flex-row comment-row">
            <div className="p-2">
                <span className="round">
                    <img src="/assets/images/users/1.jpg" alt="user" width="50"/>
                </span>
            </div>
            <div className="comment-text w-100">
                <h5>{comment.creator.name}</h5>
                <div className="comment-footer">
                    <span className="date">{comment.createdAt}</span>
                    <span className="action-icons">
                        <a href="#">
                            <i className="mdi mdi-pencil-circle"></i>
                        </a>
                        <a href="#">
                            <i className="mdi mdi-checkbox-marked-circle"></i>
                        </a>
                        <a href="#">
                            <i className="mdi mdi-heart"></i>
                        </a>
                    </span>
                </div>
                <p className="m-b-5 m-t-10">{comment.content}</p>
            </div>
        </div>;
    }
}

export default CommentRow;

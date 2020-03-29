import React from "react";

const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span>Today at {props.time}</span>
                </div>
                <div className="text">{props.post}</div>
            </div>
        </div>
    )
}

export default CommentDetail;
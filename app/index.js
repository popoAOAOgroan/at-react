import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <div key={comment.id}>
                    <h1>{comment.author}</h1>
                    <p>{comment.text}</p>
                </div>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var HeaderComponent = React.createClass({
    render: function() {
        return (
            <div className="header">
                我是uu
            </div>
        );
    }
});
var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <HeaderComponent />
            {/*<CommentList data={this.props.data} />*/}
            </div>
        );
    }
});

ReactDOM.render(
    <Comment data={data} />,
    document.getElementById('content')
);
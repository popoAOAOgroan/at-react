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
    componentDidMount: function() {
        console.log('did mount~');
        let _url = 'http://localhost:20000/commoninfo/encryptor';
        fetch(_url).then(function(response) {
            console.log('response',response);
            return response.json();
        }).then(function(response) {
            console.log('data',response);
        }).catch(function(e) {
            console.log("Oops, error");
        });
    },
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
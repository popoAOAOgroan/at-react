import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOne from './componentOne.js';
import ComponentTwo from './componentTwo.js';

var HeaderComponent = React.createClass({
    handleClick: function(){
        // console.log('child call me?');
        this.props.changeFn();
    },
    render: function() {
        return (
            <div className="header">
                <div className="left-btn"></div>
                <div className="title">{this.props.router.name}</div>
                <div className="right-btn" onClick={this.handleClick}>+</div>
            </div>
        );
    }
});

var Comment = React.createClass({
    // getInitialState: function(){
    //     return {router: 'layer.home'};
    // },
    getInitialState: function(){
        return {
            router: 'layer.home',
            name: '我的资产',
            go: '0'
        };
    },
    changeRouter: function(){
        console.log('parent call me?')
        this.setState({
            router: 'layer.home',
            name: '添加资产',
            go: '1'
        });
    },
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
        var twoPage = this.state.go;
        return twoPage==1?(
            <div className="comment">
                <HeaderComponent changeFn={this.changeRouter} router={this.state}/>
                <ComponentTwo />
            </div>
        ):(
            <div className="comment">
                <HeaderComponent changeFn={this.changeRouter} router={this.state}/>
                <ComponentOne />
            </div>
        );
    }
});

ReactDOM.render(
    <Comment/>,
    document.getElementById('content')
);
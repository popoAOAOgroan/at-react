import React from 'react';

var HeaderComponent = React.createClass({
    goRouterClick: function(){
        this.props.routerGo('add');
    },
    goBack: function(){
        this.props.routerGo('home');
    },
    render: function() {
        return (
            <div className="header">
                <div className="left-btn"><button className=""  onClick={this.goBack}>Back</button></div>
                <div className="title">{this.props.router.name}</div>
                <div className="right-btn"><button className=""  onClick={this.goRouterClick}>+</button></div>
            </div>
        );
    }
});

module.exports = HeaderComponent;
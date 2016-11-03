import React from 'react';

var HeaderComponent = React.createClass({
    // getInitialState: function() {
    //     return {
    //         showLeftBtn: false,
    //         showTitle: true,
    //         showRightBtn: true
    //     };
    // },
    
    goRouterClick: function(){
        this.props.routerGo('add');
    },
    goBack: function(){
        this.props.routerGo('home');
    },
    render: function() {
        return (
            <div className="header">
                <div className="left-btn">
                    { this.props.router.showLeftBtn ? 
                        <button className=""  onClick={this.goBack}>Back</button> : null }

                </div>
                <div className="title">{ this.props.router.name ? this.props.router.name: null }</div>
                <div className="right-btn">

                    { this.props.router.showRightBtn ? 
                        <button className=""  onClick={this.goRouterClick}>+</button> : null }
                        </div>
            </div>
        );
    }
});

module.exports = HeaderComponent;
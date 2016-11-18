//scss
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

//component
import RouterConfig from './config/routerConfig.js';
import HeaderComponent from './m_header/HeaderComponent.js';

var Comment = React.createClass({
    getInitialState: function(){
        return {
            routerInfo: RouterConfig('home')
        };
    },
    changeRouter: function(_router){
        this.setState({
            routerInfo: RouterConfig(_router)
        });
    },
    render: function() {
        let ContentComponent = this.state.routerInfo.componentName;
        return (<div className="comment">
                    <HeaderComponent routerGo={this.changeRouter} router={this.state.routerInfo}/>
                    <ContentComponent />
                </div>);
    }
});

ReactDOM.render(
    <Comment/>,
    document.getElementById('content')
);
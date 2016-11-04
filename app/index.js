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
    componentDidMount: function() {
        let _url = 'http://localhost:20000/commoninfo/encryptor';
        fetch(_url).then(function(response) {
            // console.log('response',response);
            return response.json();
        }).then(function(response) {
            // console.log('data',response);
        }).catch(function(e) {
            // console.log("Oops, error");
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
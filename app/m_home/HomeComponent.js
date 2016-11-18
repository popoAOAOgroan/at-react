import React from 'react';
//component
import TotalComponent from './TotalComponent.js';
import ScrollComponent from './CellComponent.js';

class HomeLayer extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			mockData: {
				results :[
					{
						name: '固定资产',
						list: [
							{
								aName: '小财迷',
								aTotal: 16023100,
								aYesterdayCash: '+34.78',
								aTotalRate: '+1.67%'
							}
						]
					}
				]
			}
		};
	};
    componentDidMount() {
        let _url = 'http://localhost:3000/api/assets/all';
        fetch(_url).then((response)=>{
        	return response.json();
        }).then((response)=>{
            console.log('data',response);
            this.setState({
            	mockData: response.data
            });
        }).catch((e) =>{
            console.log("Oops, error",e);
        });
    }

	render() {
		return (
			<div className="home-layer">
				<TotalComponent />
				<ScrollComponent data={this.state.mockData}/>
			</div>
		);
	}
};

module.exports = HomeLayer;
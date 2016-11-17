import React from 'react';
//component
import TotalComponent from './TotalComponent.js';
import ScrollComponent from './CellComponent.js';

const mockData = {
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
			},
			{
				name: '浮动收益类',
				list: [
					{
						aName: '千山药剂',
						aTotal: 1265681,
						aYesterdayCash: '-154.78',
						aTotalRate: '+12.67%'
					}
				]
			},
			{
				name: '其他资产',
				list: [
					{
						aName: 'SurfacePro 4',
						aTotal: 868800,
						passDay: 9,
						aYesterdayCash: '-0.00%'
					}
				]
			}
		]
	};
class HomeLayer extends React.Component{

	render() {
		return (
			<div className="home-layer">
				<TotalComponent />
				<ScrollComponent data={mockData}/>
			</div>
		);
	}
};

module.exports = HomeLayer;
import React from 'react';
import AssetsOneLayer from './childComponent/AssetsOneLayer';
import AssetsTwoLayer from './childComponent/AssetsTwoLayer';
import AssetsThiLayer from './childComponent/AssetsThirdLayer';

class TabComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
            selectIndex: 0,
            tabGroup: [
            	{name:'固定收益类'},
            	{name:'浮动收益类'},
            	{name:'其他资产'}
            ]
        };
        // this.tabClick = this.tabClick.bind(this);
	}
	tabClick(_index){
	    this.setState({selectIndex : _index});
		this.props.updateContent(_index);
	}
	render() {
		return (
			<div className="tab-box">
				{ 
					this.state.tabGroup.map(
						(tabGroup, i)=> {
		          			return <button key={i} className= {this.state.selectIndex === i? 'active btn':'btn'} name={ tabGroup.name } onClick={ ()=>this.tabClick(i) }> { tabGroup.name }</button> 
		          		} 
		          	)
		      	}
			</div>
		);
	}
};

const tabGroup = new Array(AssetsOneLayer,AssetsTwoLayer,AssetsThiLayer);

class ChildLayer extends React.Component{
    constructor(props){
		super(props)
		this.state = {
            contentLayerIndex: 0
        };
	}
	updateContent(_index){
		this.setState({
			contentLayerIndex: _index
		});
	}
	render() {
		let ContentComponent = tabGroup[this.state.contentLayerIndex];
		return (
			<div className="add-layer">
				<TabComponent updateContent={(_index)=>this.updateContent(_index)}/>
				<ContentComponent />
			</div>
		);
	}
};

module.exports = ChildLayer;
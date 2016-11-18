import React from 'react';

class CellLayer extends React.Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	data: this.props.data
		// };
	}
	render() {

		if (this.props.data != null) {
			return (
				<div className="scroll">
				{
					this.props.data.results.map((data, i) => {
						return(
							<div className="cell" key={i}>
								<h4>{data.name}</h4>
								{
									data.list.map((cell, i)=>{
										return(<div className="info-group" key={i}>
											<p>
												<span>{cell.aName}</span>
												<span className="right">{cell.aTotal}</span>
											</p>
											<p>
												<span>昨日收益 <span className="high-light">{cell.aYesterdayCash}</span></span>
												<span className="right high-light">{cell.aTotalRate}</span>
											</p>
										</div>)
									})
								}
							</div>)
					})
				}
				</div>
			);
		}else{
			return (
				<div className="tips">Loading</div>
			)
		}
	}
};

module.exports = CellLayer;
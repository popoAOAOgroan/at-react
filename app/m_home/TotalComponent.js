import React from 'react';

var TotalLayer = React.createClass({
	render: function() {
		return (
			<div className="total-layer">
				<h4>总资产</h4>
				<p>212,132.02</p>
				<div className="view-list">
					<img />
					<ul>
						<li>固定收益类 70.0%</li>
						<li>浮动收益类 20.0%</li>
						<li>其他资产 10.0%</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = TotalLayer;
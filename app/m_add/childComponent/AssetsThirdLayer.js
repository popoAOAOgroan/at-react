import React from 'react';

var AssetsThirdLayer = React.createClass({
	render: function() {
		return (
			<div className="assets-two">
				<p><input type="text" placeholder="资产名称" /></p>
				<p><input type="text" placeholder="入手价格" /></p>
				<p><input type="text" placeholder="入手时间" /></p>
				<p><button className="btn">确认添加</button></p>
			</div>
		);
	}
});

module.exports = AssetsThirdLayer;
import React from 'react';

var AssetsTwoLayer = React.createClass({
	render: function() {
		return (
			<div className="assets-thi">
				<p><input type="text" placeholder="资产名称" /></p>
				<p><input type="text" placeholder="当前市值" /></p>
				<p><button className="btn">确认添加</button></p>
			</div>
		);
	}
});

module.exports = AssetsTwoLayer;
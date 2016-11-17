import React from 'react';

var AssetsOneLayer = React.createClass({
	render: function() {
		return (
			<div className="assets-one">
				<p><input type="text" placeholder="资产名称" /></p>
				<p><input type="text" placeholder="年化收益率" />
					<span>%</span>
				</p>
				<p>
					<input type="radio" name="type" id="a-type"/>
					<label htmlFor="a-type">活期</label>
					<input type="radio" name="type" id="b-type"/>
					<label htmlFor="b-type">定期</label>
				</p>
				<p><input type="text" placeholder="当前市值" /></p>
				<p><button className="btn">确认添加</button></p>
			</div>
		);
	}
});

module.exports = AssetsOneLayer;
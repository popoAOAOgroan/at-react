import React from 'react';

var CellLayer = React.createClass({
	render: function() {
		return (
			<div>
				<p>
					<span>小财迷</span>
					<span>160,234.00</span>
				</p>
				<p>
					<span>昨日收益 +34.78</span>
					<span>+1.62%</span>
				</p>
			</div>
		);
	}
});

module.exports = CellLayer;
import React from 'react';
//component
import TotalComponent from './TotalComponent.js';
import CellComponent from './CellComponent.js';

var HomeLayer = React.createClass({
	render: function() {
		return (
			<div className="home-layer">
				<TotalComponent />
				<div className="scroll">
					<CellComponent />
				</div>
			</div>
		);
	}
});

module.exports = HomeLayer;
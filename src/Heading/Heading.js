import React, { Component } from 'react';

class Heading extends Component {
	render() {
		return (
			<div className="Heading">
				{this.props.children}
			</div>
		);
	}
}

export default Heading;

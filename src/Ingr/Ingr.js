import React, { Component } from 'react';

class Ingr extends Component {
	render() {
		return (
			<li className="Ingr">
				{this.props.children}
			</li>
		);
	}
}

export default Ingr;

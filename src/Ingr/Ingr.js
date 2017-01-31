import React, { Component } from 'react';
import './Ingr.css';

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

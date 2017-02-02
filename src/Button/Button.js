import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	render() {
		return (
			<button className="Button" onClick={this.props.clickEvent}>
				{this.props.children}
			</button>
		);
	}
}

export default Button;

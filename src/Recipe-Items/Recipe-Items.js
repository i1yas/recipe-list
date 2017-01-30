import React, { Component } from 'react';

class RecipeItems extends Component {
	render() {
		return (
			<div className="Recipe-Items">
				{this.props.children}
			</div>
		);
	}
}

export default RecipeItems;

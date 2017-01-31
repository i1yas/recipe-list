import React, { Component } from 'react';
import IngrList from '../Ingr-List/Ingr-List.js';

class Recipe extends Component {
	render() {
		return (
			<div className="Recipe">
				<div className="Recipe__name">{this.props.data.name}</div>
				<IngrList data={this.props.data.ingrList} />
			</div>
		);
	}
}

export default Recipe;

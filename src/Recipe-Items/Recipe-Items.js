import React, { Component } from 'react';
import Recipe from '../Recipe/Recipe.js';
import './Recipe-Items.css'

class RecipeItems extends Component {
	constructor(props) {
		super(props);
		this.state = {recipeList: this.props.initialState};
	}
	render() {
		return (
			<div className="Recipe-Items">
				{this.state.recipeList.map(recipe => {
					return <Recipe key={recipe.id} data={recipe} />
				})}
			</div>
		);
	}
}

export default RecipeItems;

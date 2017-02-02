import React, { Component } from 'react';
import Recipe from '../Recipe/Recipe.js';
import './Recipe-Items.css'

class RecipeItems extends Component {
	render() {
		const data = this.props.recipeList;
		return (
			<div className="Recipe-Items">
				{data.map(recipe => {
					return <Recipe key={recipe.id} data={recipe} deleteItem={this.props.deleteItem}/>
				})}
			</div>
		);
	}
}

export default RecipeItems;

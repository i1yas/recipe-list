import React, { Component } from 'react';
import RecipeItems from '../Recipe-Items/Recipe-Items.js';
import Button from '../Button/Button.js';
import './Box.css'


class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {recipeList: props.data};
	}
	addRecipe() {
		const newRecipe = {
			name: "Новый рецепт",
			id: this.state.recipeList.length,
			isOpen: false,
			ingrList: [
				{
					id: 0,
					value: "Новый ингредиент"
				}
			]
		}
		const newList = [...this.state.recipeList, newRecipe];
		this.setState({
			recipeList: newList
		});
	}
	render() {
		return (
			<div className="Box">
				<RecipeItems recipeList={this.state.recipeList}/>
				<Button clickEvent={this.addRecipe.bind(this)}>
					Добавить рецепт
				</Button>
			</div>
		);
	}
}

export default Box;

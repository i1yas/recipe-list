import React, { Component } from 'react';
import RecipeItems from '../Recipe-Items/Recipe-Items.js';
import Button from '../Button/Button.js';
import './Box.css'


class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {recipeList: props.data};
	}
	updateStorage(state) {
		localStorage.setItem('recipeList', JSON.stringify(state.recipeList));
	}
	deleteRecipe(inputRecipe) {
		const filteredList = this.state.recipeList.filter(recipe => {
			return recipe.id !== inputRecipe.id;
		});
		this.setState({
			recipeList: filteredList
		}, () => {
			if(filteredList.length === 0) {
				this.addRecipe();
			}
			this.updateStorage(this.state);
		});
	}
	addRecipe() {
		const newRecipe = {
			name: "Новый рецепт",
			id: (this.state.recipeList.length + 1),
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
		}, () => {
			this.updateStorage(this.state);
		});
	}
	render() {
		return (
			<div className="Box">
				<RecipeItems
				recipeList={this.state.recipeList}
				deleteItem={this.deleteRecipe.bind(this)}
				/>
				<Button clickEvent={this.addRecipe.bind(this)}>
					Добавить рецепт
				</Button>
			</div>
		);
	}
}

export default Box;

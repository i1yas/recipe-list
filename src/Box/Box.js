import React, { Component } from 'react';
import RecipeItems from '../Recipe-Items/Recipe-Items.js';
import Button from '../Button/Button.js';

class Box extends Component {
	render() {
		return (
			<div className="Box">
				<RecipeItems />
				<Button> Добавить </Button>
			</div>
		);
	}
}

export default Box;

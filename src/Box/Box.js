import React, { Component } from 'react';
import RecipeItems from '../Recipe-Items/Recipe-Items.js';
import Button from '../Button/Button.js';

import initialState from '../initialState.json';

class Box extends Component {
	render() {
		return (
			<div className="Box">
				<RecipeItems initialState={initialState}/>
				<Button> Добавить </Button>
			</div>
		);
	}
}

export default Box;

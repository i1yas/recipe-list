import React, { Component } from 'react';
import './App.css';
import Heading from './Heading/Heading.js';
import Box from './Box/Box.js'

import initialState from './initialState.json';

if(localStorage.getItem('recipeList') === null) {
	localStorage.setItem('recipeList', JSON.stringify(initialState))
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			recipeList: JSON.parse(localStorage.getItem('recipeList'))
		};
	}
	updateStorage(state) {
		localStorage.setItem('recipeList', JSON.stringify(state.recipeList));
	}
	render() {
		return (
			<div className="App">
				<Heading> Рецепты </Heading>
				<Box
				data={this.state.recipeList}
				/>
			</div>
		);
	}
}

export default App;

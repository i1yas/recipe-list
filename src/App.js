import React, { Component } from 'react';
import './App.css';
import Heading from './Heading/Heading.js';
import Box from './Box/Box.js'

import initialState from './initialState.json';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Heading> Рецепты </Heading>
				<Box data={initialState}/>
			</div>
		);
	}
}

export default App;

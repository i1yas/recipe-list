import React, { Component } from 'react';
import './App.css';
import Heading from './Heading/Heading.js';
import Box from './Box/Box.js'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Heading> Рецепты </Heading>
				<Box />
			</div>
		);
	}
}

export default App;

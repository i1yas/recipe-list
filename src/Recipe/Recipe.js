import React, { Component } from 'react';
import IngrList from '../Ingr-List/Ingr-List.js';
import './Recipe.css';

class Recipe extends Component {
	constructor(props){
		super(props);
		this.state = this.props.data
	}
	toggleList() {
		const isOpen = !this.state.isOpen
		this.setState({
			...this.state,
			isOpen
		});
	}
	render() {
		return (
			<div className="Recipe">
				<button className="Recipe__name" onClick={this.toggleList.bind(this)}>{this.props.data.name}</button>
				{this.state.isOpen &&
					<IngrList data={this.props.data.ingrList} />
				}
			</div>
		);
	}
}

export default Recipe;

import React, { Component } from 'react';
import IngrList from '../Ingr-List/Ingr-List.js';
import './Recipe.css';

class Recipe extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: props.data.name,
			isOpen: props.data.isOpen
		};
	}
	toggleList() {
		this.setState({
			...this.state,
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div className="Recipe">
				<button className="Recipe__name" onClick={this.toggleList.bind(this)}>{this.state.name}</button>
				{this.state.isOpen &&
					<IngrList data={this.props.data.ingrList} />
				}
			</div>
		);
	}
}

export default Recipe;

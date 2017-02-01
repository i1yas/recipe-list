import React, { Component } from 'react';
import IngrList from '../Ingr-List/Ingr-List.js';
import './Recipe.css';

class Recipe extends Component {
	constructor(props){
		super(props);
		this.state = {
			...props.data
		};
	}
	toggleList() {
		this.setState({
			...this.state,
			isOpen: !this.state.isOpen
		});
	}
	updateList(newValue) {
		const filteredList = this.state.ingrList.filter(item => {
			return item.id !== newValue.id
		});
		filteredList.push(newValue)
		const newList = filteredList.sort((a, b) => {
			return a.id - b.id;
		});
		this.setState({
			...this.state,
			ingrList: newList
		});
	}
	render() {
		return (
			<div className="Recipe">
				<button className="Recipe__name" onClick={this.toggleList.bind(this)}>{this.state.name}</button>
				{this.state.isOpen &&
					<IngrList data={this.state.ingrList} updateList={this.updateList.bind(this)}/>
				}
			</div>
		);
	}
}

export default Recipe;

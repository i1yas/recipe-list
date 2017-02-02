import React, { Component } from 'react';
import IngrList from '../Ingr-List/Ingr-List.js';
import Button from '../Button/Button';
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
	deleteItem(deleteItem) {
		const filteredList = this.state.ingrList.filter(item => {
			return item.id !== deleteItem.id;
		});
		this.setState({
			...this.state,
			ingrList: filteredList
		});
	}
	addIngr() {
		const newIngr = {
			id: this.state.ingrList.length,
			value: 'новый ингредиент'
		}
		const newList = [...this.state.ingrList, newIngr];
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
					<div className="Recipe__toggle-box">
						<IngrList data={this.state.ingrList}
						updateList={this.updateList.bind(this)}
						deleteItem={this.deleteItem.bind(this)}
						/>
						<Button
						clickEvent={this.addIngr.bind(this)}
						>
							Добавить ингредиент
						</Button>
					</div>
				}
			</div>
		);
	}
}

export default Recipe;

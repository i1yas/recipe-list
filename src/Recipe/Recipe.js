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
	updateStorage(state) {
		const storage = JSON.parse(localStorage.getItem('recipeList'));
		// let index;
		// for(let i = 0; i < storage.length; i++) {
		// 	if(storage[i].id === this.state.id) {
		// 		index = i;
		// 	}
		// }
		const newStorage = storage.map(item => {
			if(item.id === this.state.id) {
				return this.state;
			}
			return item;
		});
		// storage[index] = this.state;
		localStorage.setItem('recipeList', JSON.stringify(newStorage));
	}
	componentDidUpdate() {
		if(this.state.isRenamed) {
			this.refs.area.focus();
		}
	}
	toggleList() {
		this.setState({
			...this.state,
			isOpen: !this.state.isOpen
		});
	}
	updateName(event) {
		this.setState({
			...this.state,
			name: event.target.value
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
		}, () => {
			this.updateStorage(this.state)
		});
	}
	deleteItem(inputItem) {
		const filteredList = this.state.ingrList.filter(item => {
			return item.id !== inputItem.id;
		});
		this.setState({
			...this.state,
			ingrList: filteredList
		}, () => {
			if(filteredList.length === 0) {
				this.addIngr()
			}
			this.updateStorage(this.state);
		});
	}
	finishRename() {
		this.setState({
			...this.state,
			isRenamed: false
		}, () => {
			this.updateStorage(this.state)
		});
	};
	renameHandler() {
		this.setState({
			...this.state,
			isRenamed: true
		});
	}
	blurHandler() {
		if(this.state.name === '') {
			this.setState({
				...this.state,
				name: "Название рецепта"
			}, this.finishRename);
		} else {
			this.finishRename();
		}
	}
	enterHandler(event) {
		if(event.key === 'Enter') {
			this.finishRename();
		}
	}
	deleteHandler() {
		this.props.deleteItem(this.state);
	}
	addIngr() {
		const ingrList = this.state.ingrList;
		const lastID = ingrList[ingrList.length - 1];
		const newIngr = {
			id: (lastID + 1),
			value: 'новый ингредиент'
		}
		const newList = [...this.state.ingrList, newIngr];
		this.setState({
			...this.state,
			ingrList: newList
		}, () => {
			this.updateStorage(this.state)
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
						{this.state.isRenamed &&
							<input type="text"
							className="Recipe__input-rename"
							ref="area"
							value={this.state.name}
							onChange={this.updateName.bind(this)}
							onKeyPress={this.enterHandler.bind(this)}
							onBlur={this.blurHandler.bind(this)}
							/>
						}
						<div className="Recipe__buttons">
							<div className="Recipe__add">
								<Button
								clickEvent={this.addIngr.bind(this)}
								>
									Добавить ингредиент
								</Button>
							</div>
							<div className="Recipe__rename">
								<Button
								clickEvent={this.renameHandler.bind(this)}
								>
									Переименовать
								</Button>
							</div>
							<div className="Recipe__delete">
								<Button
								clickEvent={this.deleteHandler.bind(this)}
								>
									Удалить
								</Button>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default Recipe;

import React, { Component } from 'react';
import './Ingr.css';

class Ingr extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			value: props.value
		}
	}
	componentDidMount() {
		window.document.addEventListener('click', this.handleDocumentClick.bind(this), false);
	}
	componentWillUnmount() {
		window.document.removeEventListener('click', this.handleDocumentClick.bind(this), false);
	}
	handleDocumentClick(event) {
		const area = this.refs.area
		if(area && !area.contains(event.target)) {
			this.setState({
				...this.state,
				isEditable: false
			});
		}
	}
	updateItem(event) {
		this.setState({
			...this.state,
			value: event.target.value
		});
		this.props.updateList(this.state)
	}
	deleteItem() {
		this.props.deleteItem(this.state);
	}
	offEditMode(event) {
		if(event.key === 'Enter') {
			this.refs.area.blur();
		}
	}
	render() {
		return (
			<li className='Ingr'>
				<div className='Ingr__input-container'>
					<input type='text'
					value={this.state.value}
					className='Ingr__input'
					ref='area'
					onChange={this.updateItem.bind(this)}
					onBlur={this.updateItem.bind(this)}
					onKeyPress={this.offEditMode.bind(this)}
					/>
				</div>
				<button className='Ingr__delete'
					onClick={this.deleteItem.bind(this)}
					>
					x
				</button>
			</li>
		);
	}
}

export default Ingr;
